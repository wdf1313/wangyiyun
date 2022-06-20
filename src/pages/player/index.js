import React, { memo } from 'react'
import {PlayerLeft,PlayerWrapper,PlayerRight} from './style'
import HYplayerInfo from './c-pages/player-Info'
import HYplaysongs from './c-pages/player-songs'
import HYplayrelevant from './c-pages/player-relevant'
import HYplayercomment from './c-pages/player-comment'
const index = memo(() => {
  return (
    <PlayerWrapper>
     <div className='content wrap-v2'>
     <PlayerLeft>
      <HYplayerInfo/>
      <HYplayercomment/>
      </PlayerLeft>
      <PlayerRight>
        <HYplaysongs/>
        <HYplayrelevant/>
      </PlayerRight>
     </div>
    </PlayerWrapper>
  )
})

export default index