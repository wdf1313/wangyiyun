import React, { memo } from 'react'
import { HotRadio  } from './style'
import {hotRadios} from '@/common/local-data'
const index = memo(() => {
  return (
    <HotRadio>
       <h3>
            <span className='left'>热门主播</span>
        </h3>
        <div className='radio-list'>
          {
            hotRadios.map((item,index)=>{
              return (
                <div className='item' key={item.picUrl}>
                  <a href='/abc' className='image'>
                    <img src={item.picUrl} alt=''/>
                  </a>
                  <div className='info'>
                    <div className='name'>
                      {item.name}
                    </div>
                    <div className='position text-nowrap'>{item.position}</div>
                  </div>
                </div>
              )
            })
          }
        </div>
    </HotRadio>
  )
})

export default index