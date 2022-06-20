import request from './request'
export function getCateList(){
    return request({
      url:'/dj/catelist'
    })
  }
export function getRecommendRadio(type){
  return request({
    url:'/dj/recommend/type',
    params:{
      type
    }
  })
}
export function getHotCategories(cateId,limit=30,offset=0,){
  return request({
    url:'/dj/radio/hot',
    params:{
      cateId,
      limit,
      offset,
    }
  })
}