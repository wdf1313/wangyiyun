import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import {formatMonthDay} from '@/utils/format-utils.js'
import SongOperationBar from '@/components/song-operation-bar'
import {RankingHeaderWrapper} from './style'
const index = memo(() => {
  const {playlist}=useSelector(state=>({
    playlist:state.getIn(["ranking","playlist"])
  }))
  
  return (
    <RankingHeaderWrapper>
      <div className='image'>
         <img src={playlist.coverImgUrl} alt=''/>
         <span className='image_cover'>封面</span>
      </div>
      <div className='info'>
       <div className='title'>{playlist.name}</div>
       <div className='time'>
        <i className='clock sprite_icon2'></i>
        <div> 最近更新:{formatMonthDay(playlist.updateTime)}</div>
        <div className="update-f">({"每日更新:TODO"})</div>
      </div>
      <SongOperationBar favorTitle={`(${playlist.subscribedCount})`}
                            shareTitle={`(${playlist.shareCount})`}
                            downloadTitle=""
                            commentTitle={`(${playlist.commentCount})`}/>
      </div> 
    </RankingHeaderWrapper>
  )
})

export default index