import * as actionTypes from './contants'
import {getSongCategory,getSongCategoryList} from '@/services/songs'
import {handleSongsCategory} from '@/utils/handle-data'
import { PER_PAGE_NUMBER } from './contants';
const changeSongCategory=(data)=>({
    type:actionTypes.CHANGE_CATEGORY,
    category:data
})
export const changeCurrentCategory=(name)=>({
    type:actionTypes.CHANGE_CURRENT_CATEGORY,
    categoryData:name
})

const changeSongListAction = (res) => ({
    type: actionTypes.CHANGE_CATEGORY_SONGS,
    categorySongs: res
  })
export const getSongCategoryAction=()=>{
  return  dispatch=>{
        getSongCategory().then(res=>{
        
            const categoryData=handleSongsCategory(res)
            
      dispatch(changeSongCategory(categoryData))
        })
    }
}
export const getSongList=(page)=>{
    return (dispatch,geState)=>{
        const name =geState().getIn(['songs','currentcategory'])
 
        getSongCategoryList(name,page*PER_PAGE_NUMBER).then(res=>{
       
            dispatch(changeSongListAction(res))
        })
    }
}