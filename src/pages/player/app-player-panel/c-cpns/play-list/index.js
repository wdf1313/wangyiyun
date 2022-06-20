import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames';
import {PlayListWrapper} from './style'
import {formatMinuteSecond} from '@/utils/format-utils'
const index = memo(() => {
  const {playList,currentIndex} =useSelector(state=>({
    playList:state.getIn(["player","playList"]),
    currentIndex:state.getIn(["player","currentIndex"])
  }),shallowEqual)
  console.log(playList);
  console.log(currentIndex);
  return (
    <PlayListWrapper>
      {
        playList.map((item,index)=>{
          return (
            <div key={item.id}
            className={classNames('play-item',{"active":currentIndex===index})}>
         <div className="left">{item.name}</div>
         <div className="right">
           <span className="singer">{item.ar[0].name}</span>
           <span className="duration">{formatMinuteSecond(item.dt)}</span>
           <span className="sprite_playlist link"></span>
         </div>
       </div> 
          )
        })
      }
    </PlayListWrapper>
  )
})
export default index