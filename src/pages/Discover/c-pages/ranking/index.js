import React, { memo, useEffect } from 'react'
import HYRankingHeader from './RankingHeader'
import HYRankingLeft from './RankingLeft'
import HYRankingRight from './TopRanking'
import {RankingLeft,RankingRight,RankingWrapper} from './style'
import { useDispatch } from 'react-redux'
import { getTopListAction } from './store/actionCreators'
const index = memo(() => {
  const dispatch=useDispatch()
  useEffect(()=>{
dispatch(getTopListAction())
  },[])
  return (
    <RankingWrapper>
      <RankingLeft>
        <HYRankingLeft/>
      </RankingLeft>
      <RankingRight>
        <HYRankingHeader/>
        <HYRankingRight/>
      </RankingRight>
    </RankingWrapper>
  )
})
export default index
