import React, { memo } from 'react'
import {ThemeCoverWrapper} from './style'
import {getCount,getSizeImage} from '@/utils/format-utils'
const index = memo((props) => {
    const {info}=props
  return (
    <ThemeCoverWrapper >
        <div className='cover-top'>
        <img src={getSizeImage(info.picUrl,140)} alt=''/>
            <div className='cover sprite_covor'>
                <div className='info sprite_covor'>
                    
                        <i className='sprite_icon erji'></i>
                        {getCount(info.playCount)}
                    
                    <i className='sprite_icon play'></i>
                </div>
            </div>
        </div>
        <div className='cover-bottom text-nowrap'>
            {info.name}
        </div>
        <div className='cover-source'>
        by {info.copywriter}
        </div>
    </ThemeCoverWrapper>
  )
})

export default index