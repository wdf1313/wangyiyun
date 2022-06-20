import request from './request'
export function getTopBanners(){
    return request({
        url:'/banner'
    })
}
export function getHotRecommends(limit){
 return request({
     url:"/personalized",
     params:{
         limit
     }
 })
}
export function getNewAlbums(){
    return request({
        url:"/top/album?limit=10"
    })
}
export function getTopList(idx){
   return request({
       url:"/top/list",
       params:{
           idx
       }
   })
}
export function getArtist(limit,cat){
    return request({
        url:"/artist/list",
        params:{
            limit,
            cat
        }
    })
}