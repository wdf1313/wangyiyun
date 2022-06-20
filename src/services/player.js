import request from './request'
export function getSongDetail(ids){
    return request({
        url:'/song/detail',
        params:{
            ids
        }
    })
}
export function getLyric(id){
    return request({
        url:'/lyric',
        params:{
            id
        }
    })
}
export function getSimSong(id){
    return request({
      url:"/simi/song",
      params:{
        id
      }
    })
  }
  export function getSimiPlaylist(id) {
    return request({
      url: "/simi/playlist",
      params: {
        id
      }
    })
  }
  export function getHotComment(id, type = 0) {
    return request({
      url: '/comment/hot',
      params: {
        id,
        type,
      },
    })
  }

