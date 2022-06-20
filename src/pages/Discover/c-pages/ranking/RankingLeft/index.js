import classNames from 'classnames'
import React, { memo,useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeCurrentIndex, getPlayList} from '../store/actionCreators'
import { getSizeImage } from '@/utils/format-utils.js'
import { TopRankingWrapper } from './style'
import {getListcomments} from '@/services/ranking'
const index = memo(() => {
    const { currentIndex, toplist } = useSelector(state => ({
        currentIndex: state.getIn(["ranking", "currentIndex"]),
        toplist: state.getIn(["ranking", "toplist"])
    }), shallowEqual)
    const dispatch = useDispatch()
    useEffect(() => {
        const id = (toplist[currentIndex] && toplist[currentIndex].id);
        if (!id) return;
        getListcomments(id).then(res=>{
            console.log(res);
        })
        dispatch(getPlayList(id))
    }, [toplist, dispatch, currentIndex])
    const setPlaylist = (index) => {
        dispatch(getPlayList(toplist[index].id))
        dispatch(changeCurrentIndex(index))
    }
    return (
        <TopRankingWrapper>
            {
                toplist.map((item, index) => {
                    let header;
                    if (index === 0 || index === 4) {
                        header = <div className='header'>{index === 0 ? "云音乐特色榜" : "全球媒体榜"}</div>
                    }
                    return (
                        <div key={item.id} onClick={e => setPlaylist(index)}>{header}
                            <div className={classNames("item", { "active": index === currentIndex })}>
                                <img src={getSizeImage(item.coverImgUrl)} alt='' />
                                <div className="info">
                                    <div className="name">{item.name}</div>
                                    <div className="update">{item.updateFrequency}</div>
                                </div>
                            </div>

                        </div>
                    )
                })
            }
        </TopRankingWrapper>
    )
})

export default index