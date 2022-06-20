import React, { memo ,useEffect} from 'react'
import {shallowEqual, useDispatch,useSelector} from 'react-redux'
import  HYThemeHeaderRCM from '@/components/theme-header-remmend'
import TopRanking from '@/components/top-ranking'
import {getToplistAction} from '../../store/actionCreators'
import {RankWrapper} from './style'
const index = memo(() => {
 const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getToplistAction(0))
    dispatch(getToplistAction(1))
    dispatch(getToplistAction(2))
  },[dispatch])
  const {newrankings,uprankings,originrankings}=useSelector(state=>({
    newrankings:state.getIn(["recommend","newRanking"]),
    uprankings:state.getIn(["recommend","upRanking"]),
    originrankings:state.getIn(["recommend","originRanking"])
  }),shallowEqual)

  return (
    <RankWrapper>
        <HYThemeHeaderRCM title="榜单"/>
        <div  className='top'>
          <TopRanking info={newrankings}/>
          <TopRanking info={uprankings}/>
          <TopRanking info={originrankings}/>
        </div>
    </RankWrapper>
  )
})
export default index