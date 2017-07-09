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
  },
  [types.SENDAUDIO] (state, obj) {
    state.audio = obj
  },
  [types.ADDMUSIC] (state, obj) {
    state.location = obj
    // state.playState = true
    // state.musicList.push(obj)
    // state.musicPlace = state.musicList.length - 1
    // state.audio.src = 'http://ws.stream.qqmusic.qq.com/' + state.musicList[state.musicPlace].id + '.m4a?fromtag=46'
    // state.location = 'http://ws.stream.qqmusic.qq.com/' + obj.id + '.m4a?fromtag=46'
  },
  [types.PLAY] (state) {
    if (state.playState) {
      state.playState = false
    } else {
      state.playState = true
    }
  }
}
