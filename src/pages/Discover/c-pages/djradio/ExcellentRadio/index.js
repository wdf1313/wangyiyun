import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import {getSizeImage} from '@/utils/format-utils.js'
import {ExcellentRadioWrapper} from './style'
const index = memo(() => {
  const {djRadios} =useSelector(state=>({
   djRadios:state.getIn(['radio','djRadios'])
  }),shallowEqual)
  console.log(djRadios);
  return (
    <ExcellentRadioWrapper>
   <div className='title'>
        <span>电台排行榜</span>
       </div>
       <ul className='list'>
         {
           djRadios.slice(0,5).map((item,index)=>{
             return <li key={item.id}>
               <a href='/#'><img src={getSizeImage(item.intervenePicUrl,150)} alt=''/></a>
               <h3>{item.name}</h3>
               <p>{item.rcmdtext}</p>
             </li>
           })
         }
       </ul>
    </ExcellentRadioWrapper>
  )
})

export default index