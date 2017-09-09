import * as types from './mutations-types'
import {playMode} from 'assets/js/config'
import {shuffle} from 'assets/js/until'

export const selectPlay = function ({commit, state}, {list, index}) {
  if (state.mode === playMode.random) {
    let randomList = shuffle(list)
    commit(types.SET_PLAYLIST, randomList)
    index = findIndex(randomList, list[index])
  } else {
    commit(types.SET_PLAYLIST, list)
  }
  commit(types.SET_SEQUENCELIST, list)
  commit(types.SET_CURRENT_INDEX, index)
  commit(types.SET_PLAYSTATE, true)
  commit(types.SET_FULLSCREEN, true)
}
export const allPlay = function ({commit, state}, {list}) {
  if (state.mode === playMode.random) {
    let randomList = shuffle(list)
    commit(types.SET_PLAYLIST, randomList)
  } else {
    commit(types.SET_PLAYLIST, list)
  }
  commit(types.SET_SEQUENCELIST, list)
  commit(types.SET_CURRENT_INDEX, 0)
  commit(types.SET_PLAYSTATE, true)
  commit(types.SET_FULLSCREEN, true)
}

function findIndex(list, song) {
  return list.findIndex((item) => {
    return item.id === song.id
  })
}

export const insertSong = function ({commit, state}, song) {
  let playList = state.playList.slice()
  let sequenceList = state.sequenceList.slice()
  let currentIndex = state.currentIndex
  //  记录当前的歌曲
  let currentSong = playList[currentIndex]
  //  查找当前播放列表中是否有要插入的歌曲并返回索引值
  let fpIndex = findIndex(playList, song)
  //  索引+1表示在下一首插入
  currentIndex++
  //  把歌曲插入到当前索引的位置
  playList.splice(currentIndex, 0, song)
  //  如果包含了这首歌
  if (fpIndex > -1) {
    if (currentIndex > fpIndex) {
      playList.splice(fpIndex, 1)
      currentIndex--
    } else {
      playList.splice(fpIndex + 1, 1)
    }
  }
  //  在sequenceList中找到当前歌曲的索引
  let currentSIndex = findIndex(sequenceList, currentSong) + 1

  let fsIndex = findIndex(sequenceList, song)

  sequenceList.splice(currentSIndex, 0, song)
  if (fsIndex > -1) {
    if (currentSIndex > fsIndex) {
      sequenceList.splice(fsIndex, 1)
    } else {
      sequenceList.splice(fsIndex + 1, 1)
    }
  }
  commit(types.SET_PLAYLIST, playList)
  commit(types.SET_SEQUENCELIST, sequenceList)
  commit(types.SET_CURRENT_INDEX, currentIndex)
  commit(types.SET_PLAYSTATE, true)
  commit(types.SET_FULLSCREEN, true)
}
