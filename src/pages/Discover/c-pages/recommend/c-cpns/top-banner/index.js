import React, {useCallback, useEffect,useRef, useState } from 'react';
import {shallowEqual,useDispatch,useSelector} from 'react-redux'
import { getTopBannersAction } from '../../store/actionCreators';
import { Carousel } from 'antd';
import {BannerControl,BannerWrapper,BannerLeft,BannerRight} from './style'
 export default function Recommend(){
  // const {getBanners,topBanners}=props
  // console.log(topBanners);
  // const recommend=useSelector(state=>({
  // topBanners:state.recommends.topBanners
  // }))
  const [index,useindex]=useState(0)
  const {topBanners} =useSelector(state=>({
    topBanners:state.getIn(["recommend","topBanners"])
  }),shallowEqual)

  const dispatch=useDispatch();
  const bannerRef=useRef()
  useEffect(()=>{
  // getBanners()
dispatch(getTopBannersAction())
 
  },[dispatch])
  const bannerChange=useCallback((from,to)=>{
    useindex(to)
},[])
const bgImage=topBanners[index]&&(topBanners[index].imageUrl+"?imageView&blur=40x20")
  return (
<BannerWrapper bgImage={bgImage}>
    <div className='banner' >
        <BannerLeft>
        <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}> 
        {
            topBanners.map((item)=>{
                return (<div className='banner-item' key={item.targetId}>
                    <img  src={item.imageUrl} alt={item.typeTitle} className='image'/>
                </div>)
            })
        }
  </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
            <button className='btn left' onClick={e=>bannerRef.current.prev()}></button>
            <button className='btn right' onClick={e=>bannerRef.current.next()}></button>
        </BannerControl>
    </div>
</BannerWrapper>
)
}
// const mapStateToprops=state=>({
//   topBanners:state.recommend.topBanners
// }) 
// const mapDispatchProps=(dispatch)=>({
//   getBanners:()=>{
//     dispatch(getTopBannersAction())
//   }
// })
// export default connect(mapStateToprops,mapDispatchProps)(memo(Recommend))