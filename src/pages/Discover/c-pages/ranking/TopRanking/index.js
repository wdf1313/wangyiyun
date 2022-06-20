import React, { memo } from 'react'
import HYthemeheaderremmend from '@/components/theme-header-remmend'
import {getSizeImage,formatMinuteSecond} from '@/utils/format-utils'
import {RankingListWrapper} from './style'
import { shallowEqual, useSelector } from 'react-redux'
const  index = memo(() => {
  const {playlist} =useSelector(state=>({
    playlist:state.getIn(["ranking","playlist"])
  }),shallowEqual)
  
  const tracks=playlist.tracks||[] 
  
  return (
    <RankingListWrapper>
   <HYthemeheaderremmend title='歌曲列表'/>
   <div className='playlist'>
     <ul className='header'> 
      <li className='ranking'></li>
      <li className='title'>标题</li>
      <li className='duration'>时长</li>
      <li className='singer'>歌手</li>
     </ul>
     <ul className='list'>
       {
      tracks.map((item,index)=>{
        return (
          <li key={item.id}>
             <div className="rank-num">
                        <span className="num">{index + 1}</span>
                        <span className="new sprite_icon2"></span>
                        <div className="song-name">
                        {
                          index < 3 ?
                            (<img src={getSizeImage(item.al.picUrl, 50)} alt="" />) : null
                        }
                        <span className="play sprite_table"></span>
                        <span className="name">{item.name}</span>
                     
                      </div>
                      <span className='active'>{formatMinuteSecond(item.dt)}
            <span className='hover'>
            <button className='sprite_02 add'></button>
                      <button className='sprite_icon2 update'></button>
                      <button className='sprite_02 download'></button>
            </span>
                      </span>
                    <span className='singer'>{item.ar[0].name}</span>
              </div>
          </li>
        )
      })
       }
     </ul>
   </div>
    </RankingListWrapper>
  )
})
export default index