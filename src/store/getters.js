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
  },
  songImg (state) {
    if (state.musicList.length === 0) {
      return '/static/img/defaultSongImg.jpg'
    } else {
      return 'https://y.gtimg.cn/music/photo_new/T002R150x150M000' + state.musicList[state.musicPlace].album.mid + '.jpg?max_age=2592000'
    }
  },
  songInfo (state) {
    if (state.musicList.length === 0) {
      return {name: 'qq音乐', author: '最好听的音乐'}
    } else {
      return {name: state.musicList[state.musicPlace].name, author: state.musicList[state.musicPlace].singer[0].name}
    }
  },
  isMusicList (state) {
    return state.isMusicList
  },
  musicLists (state) {
    if (state.musicList.length === 0) {
      return false
    } else {
      return state.musicList
    }
  },
  nowSong (state) {
    if (state.musicPlace === -1) {
      return {id: -1}
    } else {
      return state.musicList[state.musicPlace]
    }
  },
  currentTime (state) {
    return state.currentTime
  },
  duration (state) {
    return state.duration
  },
  playing (state) {
    return state.playState
  }
}
