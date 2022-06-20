import request from './request';
export function getTopList(){
    return request({
        url: "/toplist"
      })
}
export function getRanking(id){
    return request({
        url: "/playlist/detail",
    params: {
      id
    }
    })
}
export function getListcomments(id){
  return request({
    url:"comment/playlist",
    params:{
      id
    }
  })
}
