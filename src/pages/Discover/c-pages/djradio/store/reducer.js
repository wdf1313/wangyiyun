import { Map } from "immutable"
import * as actionTypes from '../store/contants'
const defaultState=Map({
djRadios:[],
HotCategories:[]
});
function reducer(state=defaultState,action){
    switch(action.type){
        case actionTypes.CHANGE_DJ_RADIOS:
            return state.set('djRadios',action.djRadios)
        case actionTypes.CHANGE_HOT_CATEGORIES:
            return state.set('HotCategories',action.HotCategories)
     default:
            return state
    }
}
export default reducer