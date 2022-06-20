import React, { memo, useState,useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import HYSongOperationBar from '@/components/song-operation-bar'
import {getSizeImage} from '@/utils/format-utils.js'
import {getSimiSongAction} from '../../store/actionCreators'
import {InfoWrapper,InfoLeft,InfoRight} from './style'
const index = memo(() => {
  const [isSpread,setIsSpread]=useState(false)
    const {lyrics,currentSong} =useSelector(state=>({
    lyrics:state.getIn(['player','lyrics']),
    currentSong:state.getIn(['player','currentSong'])    
    }),shallowEqual)
    const totalLyricCount = isSpread? lyrics.length:13;
 
  return (
    <InfoWrapper>
        <InfoLeft>
     <div className='image'>
       <img src={getSizeImage(currentSong.al.picUrl,130)} alt=''/>
       <span className="cover image_cover"></span>
     </div>
     <div className="link">
          <i className="sprite_icon2"></i>
          <a href="#/">生成外联播放器</a>
        </div>
        </InfoLeft>
        <InfoRight isSpread={isSpread}>
        <div className="header">
          <i className="sprite_icon2"></i>
          <h3 className="title">{currentSong.name}</h3>
        </div>
        <div className="singer">
          <span className="label">歌手：</span>
          <a href="/#" className="name">{currentSong.ar[0].name}</a>
        </div>
        <div className="album">
          <span className="label">所属专辑：</span>
          <a href="/#" className="name">{currentSong.al.name}</a>
        </div>

        <HYSongOperationBar favorTitle="收藏"
                            shareTitle="分享"
                            downloadTitle="下载"
                            commentTitle="(167366)"/>
        <div className='lyric'>
        <div className="lyric-info">
            {
              lyrics.slice(0, totalLyricCount).map((item, index) => {
                return <p key={item.time} className="text">{item.content}</p>
              })
            }
          </div>
          <button className="lyric-control"
                  onClick={e => setIsSpread(!isSpread)}>
            {isSpread ? "收起": "展开"}
            <i className="sprite_icon2"></i>
          </button>
        </div>
        </InfoRight>
    </InfoWrapper>
  )
})

export default index