import {getTopList,getRanking} from '@/services/ranking'
import * as actionTypes from '../store/contants'
const  changeTopListAction=(res)=>({
     type:actionTypes.CHANGE_TOP_LIST,
   toplist:res.list
 })
const changePlayListAction=(res)=>({
    type:actionTypes.CHANGE_PlAY_LIST,
    playlist:res.playlist
})
 export const changeCurrentIndex=(index)=>({
     type:actionTypes.CHANGE_CURRENT_INDEX,
     index
 })
export const getTopListAction=()=>{
    return dispatch=>{
     getTopList().then(res=>{
         dispatch(changeTopListAction(res))
     })
    }
}
export const getPlayList=(id)=>{
    return dispatch=>{
    getRanking(id).then(res=>{
        dispatch(changePlayListAction(res))
       
    })
    }
}

