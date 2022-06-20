import React, { memo, useEffect,useState,createElement } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getHotCommentAction} from '../../store/actionCreators'
import {SongCommentWrapper,SoNeWrapper} from './style'
import HYthemeHeader from '@/components/theme-header-remmend';
import HYthemeComment from '@/components/theme-comment';
import HYthemeHeaderPlayer from '@/components/theme-header-player'
import { Comment, Tooltip, Avatar } from 'antd';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
const index = memo(() => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };
  const {currentSong,hotcomment} =useSelector((state)=>({
    currentSong:state.getIn(["player","currentSong"]),
    hotcomment:state.getIn(['player',"hotcomment"])
  }))
  const dispatch=useDispatch()
  useEffect(()=>{
   dispatch(getHotCommentAction(currentSong.id))

  })
  function formatDate(time = +new Date()) {
    var date = new Date(time + 8 * 3600 * 1000) // 增加8小时
    return date.toJSON().substr(0, 19).replace('T', ' ')
  }
  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
      {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
      {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">回复</span>,
  ];
  return (
    <SongCommentWrapper>
<div className='header'>
<HYthemeHeader title='评论'/>
  <HYthemeComment/>
</div>
<div className='hotcomment'>
<HYthemeHeaderPlayer title='精彩评论'/>
{
<SoNeWrapper>{
hotcomment.map((item,index)=>{
  return  <Comment
  actions={actions}
  key={item.commentId}
  author={item.user.nickname}
  avatar={<Avatar src={item.user.avatarUrl} alt="Han Solo" />}
  content={<p>{item.content}</p>}
  datetime={
    <Tooltip title={formatDate(item.time)} >
       {formatDate(item.time).slice(
                      0,
                      formatDate(item.time).indexOf(' ')
      )}
    </Tooltip>

  }
/>
})
}
</SoNeWrapper>
}
</div>
    </SongCommentWrapper>
  )
})
export default index