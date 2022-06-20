import * as actionTypes from './contants';
import { Map } from 'immutable';
const defaultState=Map({  
    topBanners:[],
    hotrecommends:[],
    newAblum:[],
    newRanking:{},
    originRanking:{},
    upRanking:{},
    artists:[]
})  
function reducer(state =defaultState,action){
    switch(action.type){
        case actionTypes.CHANGE_TOP_BANNERS:
            return state.set('topBanners',action.topBanners)
        case actionTypes.CHANGE_HOT_RECOMMENDS:
            return state.set("hotrecommends",action.recommends)
        // case actionTypes.CHANGE_NEW_ALBUMS:
        //     return state.get("newAlbum",action.Albums)
        case actionTypes.CHANGE_NEW_ALBUMS:
            return state.set("newAblum",action.Albums)
        case actionTypes.CHANGE_NEW_RANKING:
            return state.set("newRanking",action.newRankings)
        case actionTypes.CHANGE_ORIGIN_LISTS:
            return state.set("originRanking",action.originRankings)
        case actionTypes.CHANGE_UP_RANKING:
            return state.set("upRanking",action.upRankings)
        case actionTypes.CHANGE_ART_LIST:
            return state.set("artists",action.artists)      
            default:
        return state;
    }
}
export default reducer;