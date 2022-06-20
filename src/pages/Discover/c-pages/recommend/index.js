import React, { memo } from 'react'
import Topbanner from './c-cpns/top-banner/index'
import  HotRecommendfrom from './c-cpns/hot-recommend/index'
import NewAblum from './c-cpns/new-album/index'
import RecommendRanking from './c-cpns/recommend-ranking/index'
import UserLogin from './c-cpns/user-login'
import HotRadio from './c-cpns/hot-radio'
import SettleSinger from './c-cpns/settle-singer'
import {RecommendWrapper,Content,RecommendLeft,RecommendRight} from './style'
const index = memo(() => {
  return (
    <RecommendWrapper>
      <Topbanner/>
      <Content>
        <RecommendLeft>
           <HotRecommendfrom/>
            <NewAblum/>
            <RecommendRanking/>
        </RecommendLeft>
        <RecommendRight>
        <UserLogin/>
          <SettleSinger/>
          <HotRadio/>
        
          </RecommendRight>   
      </Content>
    </RecommendWrapper>
  )
})

export default index