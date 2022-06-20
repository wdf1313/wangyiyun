import * as actionTypes from './contants'
import { getSongDetail, getLyric,getSimSong,getSimiPlaylist,getHotComment } from '@/services/player'
import { parseLyric } from '@/utils/parse-utils'
const changeCurrentSongAction = (currentSong) => ({
    type: actionTypes.CHANGE_CURRENT_SONGS,
    currentSong
})
const changeCurrentIndex = (index) => ({
    type: actionTypes.CHANGE_SONG_INDEX,
    index
})
const changeplayList = (playList) => ({
    type: actionTypes.CHANGE_PLAY_LIST,
    playList
})
const changeSimiSongAction=(songs)=>({
    type:actionTypes.CHANGE_SIMI_SONG,
    songs
})
const changeSimiPlaylistAction=(simiPlaylist)=>({
  type:actionTypes.CHANGE_SIMI_PLAYLIST,
  simiPlaylist
})
export const changeLyricsAction = (lyric) => ({
    type: actionTypes.CHANGE_LYRIC,
    lyric
})

export const changesequence = (sequence) => {
    if (sequence === 3) sequence = 0
    return {
        type: actionTypes.CHANGE_SQUENCE,
        sequence
    }
}
export const changeHotCommentAction=(hotcomments)=>({
    type:actionTypes.CHANGE_HOT_COMMENT,
hotcomments
})
//切换歌曲
export const changeMusic = (tag) => {
    return (dispatch, getState) => {
        let currentSongIndex = getState().getIn(["player", "songIndex"])
        const sequence = getState().getIn(["player", "sequence"])
        const playlist = getState().getIn(["player", "playList"])
        //判断播放列表的类型
        switch (sequence) {
            //随机播放
            case 1:
                currentSongIndex = Math.floor(Math.random() * playlist.length);
                break;
            default:
                currentSongIndex = currentSongIndex + tag;
                if (currentSongIndex === playlist.length) currentSongIndex = 0;
                if (currentSongIndex === -1) currentSongIndex = playlist.length - 1;
        }
        const song = playlist[currentSongIndex]
        dispatch(changeCurrentIndex(currentSongIndex))
        dispatch(changeCurrentSongAction(song))
        //请求歌词
        getLyric(song.id).then(res => {
            const newLyric = res.lrc.lyric
            let lyricArr = parseLyric(newLyric)
            dispatch(changeLyricsAction(lyricArr))
        });
    }
}
export const getSongDetailAction = (ids) => {
    return (dispatch, getState) => {
        const playlist = getState().getIn(["player", "playList"])
        //找到并返回当前索引
        const index = playlist.findIndex(item => {
            return item.id === ids
        })
        if (index !== -1) {
            const currentSong = playlist[index]
            //为了方便切换歌曲。(播放下一首上一首)，将index dispatch出去
            dispatch(changeCurrentIndex(index))
            //将当前要播放的歌曲分发出去
            dispatch(changeCurrentSongAction(currentSong))
        } else {
            //如果播放列表中并没有此歌曲
            //判断添加歌曲是否在播放列表中
            getSongDetail(ids).then(res => {
                const song = res.songs && res.songs[0]
                if (!song) return
                const newplaylist = [...playlist]
                newplaylist.push(song)
                dispatch(changeplayList(newplaylist))
                //为了方便切换歌曲。(播放下一首上一首)，将index dispatch出去
                dispatch(changeCurrentIndex(newplaylist.length - 1))
                //将当前要播放的歌曲分发出去
                dispatch(changeCurrentSongAction(song))
            })
            //请求歌词
            getLyric(ids).then(res => {
                const newLyric = res.lrc.lyric
                let lyricArr = parseLyric(newLyric)
                dispatch(changeLyricsAction(lyricArr))
            });
        }
    }
}
export const changeCurrentLyricIndexAction = (index) => ({
    type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
    index
  })
export const getSimiSongAction=(id)=>{
    return dispatch=>{ 
        getSimSong(id).then(res=>{
            console.log(res.songs);
            
            dispatch(changeSimiSongAction(res.songs))
        })
    }
}
export const getSimiPlaylistAction=()=>{
   return (dispatch,getState)=>{
    const id = getState().getIn(["player", "currentSong"]).id;
    if (!id) return;
    getSimiPlaylist(id).then(res => {
        console.log(res);
      dispatch(changeSimiPlaylistAction(res.playlists));
    })
   }
  }
  export const getHotCommentAction = (id) => {
    return (dispatch) => {
      getHotComment(id).then((res) => {
        const hotComments = res && res.hotComments
        dispatch(changeHotCommentAction(hotComments))
      })
    }
  }