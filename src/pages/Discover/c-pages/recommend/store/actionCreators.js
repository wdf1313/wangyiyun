import { getTopBanners,getHotRecommends,getNewAlbums,getTopList,getArtist } from '@/services/recomment';
import * as actionTypes from './contants';
const changeTopBannerAction=(res)=>({
  type:actionTypes.CHANGE_TOP_BANNERS,
  topBanners:res.banners
})
const changeHotRecommendAction=(res)=>({
 type:actionTypes.CHANGE_HOT_RECOMMENDS,
 recommends:res.result
})
const changeNewAlbumsAction=(res)=>({
  type:actionTypes.CHANGE_NEW_ALBUMS,
  Albums:res.albums
})
const changeUpRankingAction=(res)=>({
  type:actionTypes.CHANGE_UP_RANKING,
  upRankings:res.playlist
})
const changeNewRankingAtion=(res)=>({
  type:actionTypes.CHANGE_NEW_RANKING,
  newRankings:res.playlist
})
const changeOriginRankingAtion=(res)=>({
  type:actionTypes.CHANGE_ORIGIN_LISTS,
  originRankings:res.playlist
})
const changeArtistAction=(res)=>({
  type:actionTypes.CHANGE_ART_LIST,
  artists:res.artists
})
export const getTopBannersAction=()=>{
     return dispatch=>{
      getTopBanners().then(res=>{
       dispatch(changeTopBannerAction(res)) 
       })
     }
 }
export const getHotRecommmendAction=(limit)=>{
  return dispatch=>{
  getHotRecommends(limit).then(res=>{
    dispatch(changeHotRecommendAction(res))
  })
  }
}
export const getNewAlbumAction=()=>{
  return dispatch=>{
    getNewAlbums().then(res=>{
      dispatch(changeNewAlbumsAction(res))
    })
  }
}
export const getToplistAction=(idx)=>{
  return dispatch=>{
    getTopList(idx).then(res=>{
    switch(idx){
      case 0:
        dispatch(changeUpRankingAction(res));
       
        break;
      case 1:
        dispatch(changeNewRankingAtion(res))
        break;
      case 2:
        dispatch(changeOriginRankingAtion(res))
        default:
    }
    })
  }
}
export const getArtListAction=(limit,cat)=>{
  return dispatch=>{
  getArtist(limit,cat).then(res=>{
 dispatch(changeArtistAction(res))
  })
  }
}

 