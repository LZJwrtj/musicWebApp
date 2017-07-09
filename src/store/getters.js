export default {
  isShowHeader (state) {
    return state.isShowHeader
  },
  isShowNav (state) {
    return state.isShowNav
  },
  isShowPlay (state) {
    return state.isShowPlay
  },
  isShowPlayBar (state) {
    return state.isShowPlayBar
  },
  isShowRouter (state) {
    return state.isShowRouter
  },
  btnClass (state) {
    return state.playState ? 'fa fa-pause' : 'fa fa-play'
  },
  location (state) {
    return state.location
  }
}
