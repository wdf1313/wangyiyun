import React, { memo } from 'react'
import {ThemeWrapper} from './style'
const index = memo(() => {
  return (
    <ThemeWrapper>
        <div className='image'>
        <img src='https://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50' alt=''/>
        </div>
        <div className='addcomment'>
            <div className='comment'>
                <textarea placeholder='评论'></textarea>
            </div>
           <div className='design'>
           <span className='icon1 sprite_icon2'></span>
           <span className='icon2 sprite_icon2'></span>  
            <a href='/#' className='button'>评论</a>
           </div> 
        </div>
    </ThemeWrapper>
  )
})
export default index