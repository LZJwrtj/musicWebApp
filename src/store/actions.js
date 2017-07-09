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
  addmusic ({commit}, obj) {
    commit(types.ADDMUSIC, obj)
  },
  play ({commit}) {
    commit(types.PLAY)
  }
}
