import * as types from './types'
export default {
  // showPlay ({commit}) {
  //   commit(types.SHOWPLAY)
  // },
  showPlay: ({commit}) => {
    commit(types.SHOWPLAY)
  },
  hidePlay ({commit}) {
    commit(types.HIDEPLAY)
  },
  sendAudio ({commit}, obj) {
    commit(types.SENDAUDIO, obj)
  },
  addMusic ({commit}, obj) {
    commit(types.ADDMUSIC, obj)
  },
  play ({commit, state}) {
    if (state.musicList.length !== 0) {
      if (state.playState) {
        state.audio.pause()
        commit(types.PAUSE)
      } else {
        state.audio.play()
        commit(types.PLAY)
      }
    }
  },
  pause: ({commit}) => {
    commit(types.PAUSE)
  },
  prevSong: ({commit}) => {
    commit(types.PREVSONG)
  },
  nextSong: ({commit}) => {
    commit(types.NEXTSONG)
  },
  showMusicList: ({commit}) => {
    commit(types.SHOWMUSICLIST)
  },
  close: ({commit}) => {
    commit(types.CLOSE)
  },
  getDuration: ({commit}) => {
    commit(types.GETDURATION)
  },
  getCurrentTime: ({commit}) => {
    commit(types.GETCURRENTTIME)
  }

}
