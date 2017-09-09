import * as types from './mutations-types'

const mutations = {
  [types.SET_RECOMMEND] (state, recommend) {
    state.recommend = recommend
  },
  [types.SET_SINGER] (state, singer) {
    state.singer = singer
  },
  [types.SET_RANK] (state, rank) {
    state.rank = rank
  },
  [types.SET_PLAYSTATE] (state, flag) {
    state.playState = flag
  },
  [types.SET_FULLSCREEN] (state, flag) {
    state.fullScreen = flag
  },
  [types.SET_PLAYLIST] (state, list) {
    state.playList = list
  },
  [types.SET_SEQUENCELIST] (state, list) {
    state.sequenceList = list
  },
  [types.SET_MODE] (state, mode) {
    state.mode = mode
  },
  [types.SET_CURRENT_INDEX] (state, index) {
    state.currentIndex = index
  }
}
export default mutations
