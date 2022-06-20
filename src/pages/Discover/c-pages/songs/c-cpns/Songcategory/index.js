import React, { memo } from 'react'
import {changeCurrentCategory,getSongList} from '../../store/actionCreators'
import {CategoryWrapper} from './style'
import {useSelector,shallowEqual, useDispatch} from 'react-redux'
const index = memo(() => {
    // redux
    const { category } = useSelector(state => ({
      category: state.getIn(["songs", "category"])
    }), shallowEqual);
    const dispatch=useDispatch()
    const selectCate=(name)=>{
      
dispatch(changeCurrentCategory(name))
dispatch(getSongList(0));
    }
  return (
    <CategoryWrapper>
      <div className='arrow sprite_icon'></div>
      <div className="all">
        <span className="link">全部风格</span>
      </div>
      <div className='category'>
        {
            category.map((item, index) => {
              return (
                <dl key={item.name} className={"item" + index}>
                  <dt>
                    <i className="icon sprite_icon2"></i>
                    <span>{item.name}</span>
                  </dt>
                  <dd>
                    {
                      item.subs.map(sItem => {
                        return (
                          <div className="item" key={sItem.name}>
                            <span className="link" onClick={e=>selectCate(sItem.name)}>{sItem.name}</span>
                            <span className="divider">|</span>
                          </div>
                        )
                      })
                    }
                  </dd>
                </dl>
              )
            })
        }
      </div>
    </CategoryWrapper>
  )
})

export default index