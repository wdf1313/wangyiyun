import React, { memo } from 'react'
import {PanelWrapper} from './style'
import  PlayHeader from './c-cpns/play-header'
import PlayList from './c-cpns/play-list'
import Playpanel from './c-cpns/lyric-panel'
const index = memo((props) => {
const {picUrl}=props
  return (
    <PanelWrapper>
   <PlayHeader/>     
 <div className='main'>
     <img src={picUrl} alt='' className='image'/ >
         <PlayList/>
         <Playpanel/>
 </div>
    </PanelWrapper>
  )
})

export default index