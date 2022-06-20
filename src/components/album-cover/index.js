import {AlbumWrapper} from './style'
import React, { memo } from 'react'
import {getSizeImage} from '@/utils/format-utils'
const index = memo((props) => {
    const {info,width,size,bgp}=props
  return (
   <AlbumWrapper width={width} size={size} bgp={bgp}>
       <div className='album-image'>
           <img src={getSizeImage(info.picUrl,size)} alt=''/>
           <a href='/todo' className='cover sprite_covor'>{info.name}</a>
       </div>
       <div className='album-info'>
           <div className='name'>{info.name}</div>
           <div className='artist'>{info.artist.name}</div>
       </div>
   </AlbumWrapper>
)
})
export default index