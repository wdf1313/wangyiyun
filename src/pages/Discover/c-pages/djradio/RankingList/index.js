import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import {RankingListWrapper} from './style'
const index = memo(() => {
  const  {HotCategories}=useSelector(state=>({
  HotCategories:state.getIn(['radio','HotCategories'])
    }
  ))
  console.log(HotCategories);
  return (
    <RankingListWrapper>
     <div title='title'>
       <h3><span>
         电台排行榜
         </span></h3>
       </div>
      
    </RankingListWrapper>
  )
})
export default index