import React, { memo, useEffect } from 'react'
import {SongsWrapper} from './style'
import SongsHeader from './c-cpns/SongsHeader'
import SongsList from './c-cpns/SongsList'
import { useDispatch } from 'react-redux'
import{getSongCategoryAction} from './store/actionCreators'
const index = memo(() => {
  const dispatch =useDispatch()
  useEffect(()=>{
    dispatch(getSongCategoryAction())
    
    
  },[dispatch])

  return (
    <SongsWrapper className='wrap-v2'>
      <SongsHeader/>
      <SongsList/>
    </SongsWrapper>
  )
})
export default index