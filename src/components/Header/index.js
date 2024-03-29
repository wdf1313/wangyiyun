import React from 'react'
import { NavLink } from 'react-router-dom'
import {headerLinks} from '../../common/local-data'
import {HeaderWrapper,
HeaderLeft,
HeaderRight} from './style.js'
import {Input,Button} from 'antd'
import {SearchOutlined} from '@ant-design/icons'
export default function App() {
  const showSelectItem=(item,index)=>{
    if(index<3){
  return (
    <NavLink to={item.link} exact>{item.title} 
    <i className='sprite_01 icon'></i>
    </NavLink>
  )
    }else{
      return <a href={item.link}>{item.title}</a>
    }
  }
  return (
    <HeaderWrapper>
       <div className='content wrap-v1'>
         <HeaderLeft>
          <a href='#/' className='logo sprite_01'></a>
          <div className='select-list'>
            {
              headerLinks.map((item,index)=>{
               return (
                <div key={item.title} className='select-item'>
                {showSelectItem(item,index)}
              </div>
               )
              })
              
            }
          </div>
         </HeaderLeft>
         <HeaderRight>
         <Input className='search' placeholder="音乐" prefix={<SearchOutlined/>} />
         <div className='center'>创作者中心</div>
         <Button className='login'>登录</Button>
         </HeaderRight>
       </div>
       <div className='divider'></div>
    </HeaderWrapper>
  )
}
