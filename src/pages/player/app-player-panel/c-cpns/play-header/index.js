import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import {HeaderLeft,HeaderWrapper,HeaerRight} from './style'
const index = memo(() => {
  const {playList,currentSong}=useSelector(state=>({
      playList:state.getIn(["player","playList"]),
      currentSong:state.getIn(["player","currentSong"])
  }),shallowEqual)
    return (
    <HeaderWrapper>
        <HeaderLeft>
           <h3>播放列表({playList.length})</h3> 
           <div className='operator'>
               <button>
                   <i className='playlist_sprite icon favor'></i>
               收藏全部
               </button>
               <button>
                   <i className='playlist_sprite icon remove'></i>
                 清除
               </button>
           </div>
        </HeaderLeft>
        <HeaerRight>{currentSong.name}</HeaerRight>
    </HeaderWrapper>
  )
})

export default index