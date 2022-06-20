import React, { memo, useEffect, useState } from 'react'
import Songcategory from '../Songcategory/index'
import {} from '../../store/actionCreators'
import {HeaderWrapper,HeaderLeft,HeaderRight} from './style'
import { useSelector,shallowEqual} from 'react-redux'

const index = memo(() => {
    const [detail,setdetail] =useState(false)
    const { currentCategory } = useSelector(state => ({
      currentCategory: state.getIn(["songs", "currentcategory"])
    }), shallowEqual);

  return (
    <HeaderWrapper>
        <HeaderLeft>
            <span className='title'>{currentCategory}</span>
        <button className='select' onClick={e=>setdetail(!detail)}>
            <span>选择分类</span>
            <i className="sprite_icon2"></i>
        </button>
        {detail ? <Songcategory/> : null}
        </HeaderLeft>
        <HeaderRight>
        <button className="hot">热门</button>
        </HeaderRight>
    </HeaderWrapper>
  )
})
export default index