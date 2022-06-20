
import {DiscoverWrapper,TopMenu} from './style'
import {dicoverMenu} from '../../common/local-data'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { memo } from 'react'

const index = memo((props) => {
  const {route}=props 
  return (
   <DiscoverWrapper>
   <div className='menu'>
   <TopMenu className='menulist'>
     {
     dicoverMenu.map((item,index)=>{
       return(
         <div key={index}>
          <NavLink to={item.link}>{item.title}</NavLink>
         </div>
       )
     })
     }
   </TopMenu>
   </div>
  {renderRoutes(route.routes) }
</DiscoverWrapper>
  )
})

export default index
