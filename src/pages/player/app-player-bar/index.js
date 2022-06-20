import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {changesequence,changeMusic, changeCurrentLyricIndexAction} from '../store/actionCreators'
import { getSizeImage, formatDate, getPlaysong } from '@/utils/format-utils.js'
import { Slider,message } from 'antd'
import  AppPlayerPanel from '../app-player-panel/index'
import { PlaybarWrapper, Control, PlayInfo, Operator } from './style'
const index = memo(() => {
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setprogress] = useState(0)
  const [ischangeing, setischangeing] = useState(false)
  const [isplaying, setisplaying] = useState(false)
  const [isChangePanel,setChangePanel]=useState(false)
  const { currentSong,sequence,lyrics,currentIndex } = useSelector(state => ({
    currentSong: state.getIn(['player', "currentSong"]),
    sequence:state.getIn(['player',"sequence"]),
    lyrics:state.getIn(["player","lyrics"]),
    currentIndex:state.getIn(['player','currentIndex'])
  }), shallowEqual)
 const dispatch =useDispatch()
  //当歌曲发生改变时获取url
  useEffect(() => {
    audioref.current.src = getPlaysong(currentSong.id);
    audioref.current.play().then(res=>{setisplaying(true)}).catch(err=>{
      setisplaying(false)
    });
  }, [currentSong])
  const audioref = useRef()
  const picUrl = (currentSong.al && currentSong.al.picUrl) || ''
  const name = (currentSong.ar && currentSong.ar[0].name) || ''
  const duration = currentSong.dt || 0
  const Duration = formatDate(duration, "mm:ss")
  const Time = formatDate(currentTime, "mm:ss")

  const playmusic = useCallback(() => {
    setisplaying(!isplaying);
    isplaying ? audioref.current.pause() : audioref.current.play().catch(err => {
      setisplaying(false);
    });
  }, [isplaying])
  //进度条的变化
  const changeTime = (e) => {
    const currentTime=e.target.currentTime
    setCurrentTime(currentTime*1000)
    if (!ischangeing) {
      //进度条变化
    //时间变化
      setprogress(currentTime*1000 / duration * 100)
    }


let lrcLength = lyrics.length;
let i = 0;
for (; i < lrcLength; i++) {
  const lrcTime = lyrics[i].time;
  if (currentTime * 1000 < lrcTime) {
    break
  }
}
//如果上一次的歌词数组和这一次相同，就不会给redux分发歌词对象
if(currentIndex!==i-1){
  dispatch(changeCurrentLyricIndexAction(i-1))
console.log(currentIndex);
console.log(lyrics[i-1]);
const content=lyrics[i-1] && lyrics[i-1].content
message.open({
 content: content,
  key:"lyric",
  duration:0,
  className:'lyric-message'
})
}
  }
  const change = useCallback((value) => {
    //停止正常播放
    const currentTime = value / 100 * duration / 1000
    audioref.current.currentTime = currentTime
    setCurrentTime(currentTime * 1000)
    setischangeing(false)
    if (!isplaying) {
      playmusic()
    }
  }, [isplaying, duration, playmusic])
  const changevalue = useCallback((value) => {
    //正常播放
    setischangeing(true)
    setprogress(value)
  }, [])
  const changeIndex=(tag)=>{
  dispatch(changeMusic(tag))
  }
  const handleMusic=()=>{
    if(sequence===2){
      //单曲循环
      audioref.current.currentTime=0;
      audioref.current.play()
    }else{
      dispatch(changeMusic(1))
    }
  }
  return (
    <PlaybarWrapper className='sprite_player'>
      <div className='content wrap-v2'>
        <Control isplaying={isplaying}>
          <button className='sprite_player btn prev'onClick={e=>changeIndex(-1)}></button>
          <button className='sprite_player btn play' onClick={playmusic}></button>
          <button className='sprite_player btn next' onClick={e=>changeIndex(1)}></button>
        </Control>
        <PlayInfo>
          <div className='image'>
            <NavLink to="/discover/player">
              <img src={getSizeImage(picUrl, 35)} alt='' />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">{name}</span>
            </div>
            <div className='progress'>
              <Slider defaultValue={30} value={progress}
                onChange={changevalue}
                onAfterChange={change}
              />
              <div className='time'>
                <span className="now-time">{Time}</span>
                <span className="divider">/</span>
                <span className="total-time">{Duration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className='left'>
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className='right  sprite_player'>
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop" onClick={e=>dispatch(changesequence(sequence+1))}></button>
            <button className="sprite_player btn playlist" onClick={e=>setChangePanel(!isChangePanel)}></button>
          </div>
        </Operator>
      </div>
      {isChangePanel&& <AppPlayerPanel picUrl={picUrl}/>}
      <audio ref={audioref} onTimeUpdate={changeTime} onEnded={handleMusic} />
    </PlaybarWrapper>
  )
})
export default index