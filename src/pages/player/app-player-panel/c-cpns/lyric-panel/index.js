import classNames from 'classnames'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import {PannelWrapper} from './style'
const index = memo(() => {
  const {lyrics,currentIndex}=useSelector(state=>({
    lyrics:state.getIn(["player","lyrics"]),
    currentIndex:state.getIn(['player',"currentIndex"])
  }))
  console.log(lyrics,currentIndex);
  return (
    <PannelWrapper>
      <div className='lrc-content'>
        {
          lyrics.map((item,index)=>{
            return (
              <div  key={item.time} className={classNames("lrc-item", { "active": index === currentIndex })}>
                {item.content}
              </div>
            )
          })
        }
      </div>
    </PannelWrapper>
  )
})
export default index