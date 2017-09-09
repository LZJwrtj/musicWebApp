import {getLyric} from 'api/recommend'
import {Base64} from 'js-base64'
export default class Song {
  constructor({id, mid, singer, name, album, duration, image, url}) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
  }
  getLyric() {
    return new Promise((resolve, reject) => {
      getLyric(this.id, function (err, res) {
        if (!err) {
          var data = Base64.decode(res.lyric)
          resolve(data)
        } else {
          reject(err)
        }
      })
    })
  }
}
export function createSong(musicData) {
  musicData.songid = musicData.songid ? musicData.songid : musicData.id
  musicData.songmid = musicData.songmid ? musicData.songmid : musicData.mid
  musicData.songname = musicData.songname ? musicData.songname : musicData.name
  musicData.albumname = musicData.albumname ? musicData.albumname : musicData.album.name
  musicData.albummid = musicData.albummid ? musicData.albummid : musicData.album.mid
  musicData.duration = musicData.interval
  musicData.image = `https://y.gtimg.cn/music/photo_new/T002R150x150M000${musicData.albummid}.jpg?max_age=2592000`
  musicData.url = `http://ws.stream.qqmusic.qq.com/${musicData.songid}.m4a?fromtag=46`
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.duration,
    image: musicData.image,
    url: musicData.url
  })
}
export function filterSinger(singer) {
  let ret = []
  singer.forEach((item) => {
    ret.push(item.name)
  })
  return ret.join('/')
}
