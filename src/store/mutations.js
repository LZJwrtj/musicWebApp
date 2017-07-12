import * as types from './types'
export default {
  [types.SHOWPLAY] (state) {
    state.isShowHeader = false
    state.isShowNav = false
    state.isShowRouter = false
    state.isShowPlay = true
    state.isShowPlayBar = false
  },
  [types.HIDEPLAY] (state) {
    state.isShowHeader = true
    state.isShowNav = true
    state.isShowRouter = true
    state.isShowPlay = false
    state.isShowPlayBar = true
    state.isMusicList = false
  },
  [types.SENDAUDIO] (state, obj) {
    state.audio = obj
  },
  [types.ADDMUSIC] (state, obj) {
    state.playState = true
    state.musicList.push(obj)
    state.musicPlace = state.musicList.length - 1
    state.location = 'http://ws.stream.qqmusic.qq.com/' + state.musicList[state.musicPlace].id + '.m4a?fromtag=46'
    // state.location = 'http://ws.stream.qqmusic.qq.com/' + obj.id + '.m4a?fromtag=46'
  },
  [types.PLAY] (state) {
    state.playState = true
  },
  [types.PAUSE] (state) {
    state.playState = false
  },
  [types.PREVSONG] (state) {
    if (state.musicPlace === 0) {
      state.musicPlace = state.musicList.length - 1
    } else {
      state.musicPlace--
    }
    state.playState = true
    state.location = 'http://ws.stream.qqmusic.qq.com/' + state.musicList[state.musicPlace].id + '.m4a?fromtag=46'
  },
  [types.NEXTSONG] (state) {
    if (state.musicPlace === state.musicList.length - 1) {
      state.musicPlace = 0
    } else {
      state.musicPlace ++
    }
    state.playState = true
    state.location = 'http://ws.stream.qqmusic.qq.com/' + state.musicList[state.musicPlace].id + '.m4a?fromtag=46'
  },
  [types.SHOWMUSICLIST] (state) {
    state.isMusicList = true
  },
  [types.CLOSE] (state) {
    state.isMusicList = false
  },
  [types.GETCURRENTTIME] (state) {
    state.currentTime = state.audio.currentTime
  },
  [types.GETDURATION] (state) {
    state.duration = state.audio.duration
  }
}
