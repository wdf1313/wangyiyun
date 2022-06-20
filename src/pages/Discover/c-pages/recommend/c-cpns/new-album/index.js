import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch,useSelector } from 'react-redux'
import {Carousel} from 'antd'
import { AlbumWrapper} from './style'
import  HYThemeHeaderRCM from '@/components/theme-header-remmend'
import {getNewAlbumAction} from '../../store/actionCreators'
import HYTAlbumCover from '@/components/album-cover'
const index = memo(() => {
  const {newAlbums}=useSelector(state=>({
    newAlbums:state.getIn(["recommend","newAblum"])
  }),shallowEqual)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getNewAlbumAction())
  },[dispatch])
  const content=useRef()
  return (
    <AlbumWrapper>
        <HYThemeHeaderRCM title="新歌上映"/>
  <div className='content'>
     <button className='arrow arrow-left sprite_02' onClick={e=>content.current.prev()}></button>
     <div className='album'>
     <Carousel autoplay={false}  dots={false} ref={content}>
      {
         [0,1].map(item=>{
          return (
            <div key={item} className="page">
              {
                newAlbums.slice(item*5,(item+1)*5).map(iten=>{
                  return(
                    <div key={iten.id}>
                      <HYTAlbumCover info={iten} size={100} width={118}
                      bgp="-570px"/>
                    </div>
                  )
                })
              }
            </div>
          )
        })
      }
  </Carousel>
     </div>
     <button className='arrow arrow-right sprite_02' onClick={e=>content.current.next()}></button>
  </div>
    </AlbumWrapper>
  )
})

export default index