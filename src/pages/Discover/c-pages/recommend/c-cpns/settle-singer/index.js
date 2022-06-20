import React, { memo,useEffect } from 'react'
import{shallowEqual, useDispatch,useSelector} from 'react-redux'
import {getArtListAction} from '../../store/actionCreators'
import {SettleSingerWrapper} from './style'
const index = memo(() => {
    const dispatch=useDispatch()
const {artists} =useSelector(state=>({
    artists:state.getIn(["recommend","artists"])

}),shallowEqual) 
console.log(artists);
    useEffect(()=>{
     dispatch(getArtListAction(5,5001))
 },[dispatch])
  return (
    <SettleSingerWrapper>
        <h3>
            <span className='left'>入驻歌手</span>
            <a href='/todo' className='more'>查看全部</a>
        </h3>
       <div className='singer-list'>
           {
               artists.map((item,index)=>{
                   return (
                       <a href='/singer' key={item.id}className='item'>
                            <img src={item.img1v1Url} alt=''/>
                            <div className='item'>
                           <div className='info'>
                               <div className='title'>{item.alias.join('')||item.name}</div>
                               <div className='name'>{item.name}</div>
                           </div>
                           </div>
                       </a>
                      
                   )
               })
           }
       </div>
       <div className="apply-for">
        <a href="/abc">申请成为网易音乐人</a>
      </div>
    </SettleSingerWrapper>
  )
})
export default index