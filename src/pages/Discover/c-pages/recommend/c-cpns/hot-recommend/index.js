import React, { memo,useEffect } from 'react'
import {shallowEqual, useDispatch,useSelector} from 'react-redux'
import  HYThemeHeaderRCM from '@/components/theme-header-remmend'
import { getHotRecommmendAction } from '../../store/actionCreators'
import {HotRecommendWrapper} from './style'

import SongsCover from '@/components/songs-cover'
const index = memo(() => {
  const {hotRecommends} =useSelector(state=>({
    hotRecommends:state.getIn(["recommend","hotrecommends"])
  }),shallowEqual)
  
  const dispatch =useDispatch()
  useEffect(()=>{
  dispatch(getHotRecommmendAction(8))
  },[dispatch])
  return (
    <HotRecommendWrapper>
   <HYThemeHeaderRCM title="热门推荐" keywords={["华语","流行","民谣","摇滚","电子"]}/>
    <div className='recommend-list'>
      {
        hotRecommends.map((item)=>{
          return <div key={item.id}>
            <SongsCover info={item}/>
          </div>
        })
      }
    </div>
    </HotRecommendWrapper>
  )
})

export default index