import * as actionTypes from '../store/contants'
import {getRecommendRadio,getHotCategories} from '@/services/radio'
export const  changeCateListAction=()=>{
    
}
const changedjRadiosAction=(djRadios)=>({
    type:actionTypes.CHANGE_DJ_RADIOS,
    djRadios:djRadios
})
const changeHotCategoriesAction=(HotCategories)=>({
    type:actionTypes.CHANGE_HOT_CATEGORIES,
    HotCategories:HotCategories
})
export const getdjRadiosAction=(id)=>{
    return dispatch=>{
        getRecommendRadio(id).then(res=>{ 
            dispatch(changedjRadiosAction(res.djRadios))
          })
        
    }
}
export const getHotCategoriesAction=(cateId)=>{
    return dispatch=>{
        getHotCategories(cateId).then(res=>{
            dispatch(changeHotCategoriesAction(res.djRadios))
        })
    }
}


