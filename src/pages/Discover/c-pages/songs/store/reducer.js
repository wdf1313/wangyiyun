import { Map } from "immutable"
import * as actionTypes from './contants'
const defaultState=Map({
  currentcategory:'全部',
  category:[],
  categorySongs:{}
});
function reducer(state=defaultState,action){
    switch(action.type){
        case actionTypes.CHANGE_CURRENT_CATEGORY:
            return state.set('currentcategory',action.categoryData)    
        case actionTypes.CHANGE_CATEGORY:
            return state.set('category',action.category)
        case actionTypes.CHANGE_CATEGORY_SONGS:
            return state.set('categorySongs',action.categorySongs)
        default:
            return state
    }
}
export default reducer