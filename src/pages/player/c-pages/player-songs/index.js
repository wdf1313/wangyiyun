import React, { memo, useEffect } from 'react'
import HYthemeheaderplayer from '@/components/theme-header-player'
import {PlayerSongsWrapper} from './style'
import {getSimiSongAction} from '../../store/actionCreators'
import {getSizeImage} from '@/utils/format-utils.js'
import { useDispatch, useSelector } from 'react-redux'
const index = memo(() => {
const {simiSong,currentSong} =useSelector(state=>({
  simiSong:state.getIn(["player","simiSong"]),
  currentSong:state.getIn(['player','currentSong']) 
}))
const dispatch = useDispatch();

useEffect(() => {
  dispatch(getSimiSongAction(currentSong.id));
},[dispatch])
    return (
    <PlayerSongsWrapper>
      <HYthemeheaderplayer title='相似歌曲'/>
      <div className='songs'>
        {
          simiSong.map((item,index)=>{
        return (
        <div className='song-item' key={item.id}>
          
          <div className="info text-nowrap">
                  <a href="#/" className="name">{item.name}</a>
                  <div className="auchor">
                    
                    <a href="#/" className="nickname">{item.artists[0].name}</a>
                  </div>
            <button className='play sprite_icon2'></button>
             <button className='add sprite_icon2'></button>
                </div>

        </div>
        )
          })
        }
      </div>
    </PlayerSongsWrapper>
  )
})

export default index