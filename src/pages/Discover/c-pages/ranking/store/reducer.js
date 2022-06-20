import { Map } from "immutable"
import * as actionTypes from '../store/contants'
const defaultState=Map({
 toplist:[],
 currentIndex:0,
 playlist:{},
 get:{}
});
function reducer(state=defaultState,action){
    switch(action.type){
        case actionTypes.CHANGE_TOP_LIST:
            return state.set("toplist",action.toplist)
        case actionTypes.CHANGE_CURRENT_INDEX:
             return state.set('currentIndex',action.index)    
        case actionTypes.CHANGE_PlAY_LIST:
             return state.set('playlist',action.playlist)
        case actionTypes.GET:
            return state.set('get',action.get)
             default:
            return state
    }
}
export default reducer