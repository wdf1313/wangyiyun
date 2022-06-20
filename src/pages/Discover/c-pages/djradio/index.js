import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import {getCateList} from '@/services/radio'
import { useDispatch } from 'react-redux';
import { Carousel ,} from 'antd';
import {getdjRadiosAction,getHotCategoriesAction} from './store/actionCreators'
import {RadioCateList,RadioWrapper} from './style'
import RankingList from './RankingList/index'
import ExcellentRadio from './ExcellentRadio/index'
const index = memo(() => {
  const [categories,setcategories]=useState([])
  const dispatch=useDispatch()
  useEffect(()=>{
    getCateList().then(res=>{
     setcategories(res.categories)

    }
 
    )},[setcategories])

  console.log(categories);
  const content=useRef() ;
  const changedjRadioId=useCallback((id)=>{
    console.log(id);
    dispatch(getdjRadiosAction(id))
    dispatch(getHotCategoriesAction(id))
  },[dispatch])
  return (
    <RadioWrapper>
      <RadioCateList>
      <button className='arrow arrow-left radio-button' onClick={e=>content.current.prev()}></button>
      <Carousel className='carousel' autoplay={false}  dots={false} ref={content}>
      <ul className='list one'>{
     categories.slice(0,16).map((item,index)=>{
       return (
         <li key={item.id} >
           <a href='/#'><img src={item.pic56x56Url} alt='' onClick={e=>changedjRadioId(item.id)}/></a>
           <em>{item.name}</em>
           </li>
       )
     })
      }</ul>
      <ul className='list two'>{
       categories.slice(16,2).map((item,index)=>{
        return (
          <li key={item.id} >
            <a href='/#'><img src={item.pic56x56Url} alt=''/></a>
            <em>{item.name}</em>
            </li>
        )
      })
      }</ul>
  </Carousel>
  <button className='arrow arrow-right radio-button' onClick={e=>content.current.next()}></button>
      </RadioCateList>
      <ExcellentRadio className='Excell'/>
  
  
    </RadioWrapper>
  )
})
export default index
