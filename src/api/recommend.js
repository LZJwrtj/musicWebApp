import jsonp from 'assets/js/jsonp'
import oriJsonp from 'jsonp'
import {commonParams, options} from './config'

export function getRecommend(callback) {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  return oriJsonp(url, {
    param: 'jsonpCallback',
    name: 'callback'
  }, function(err, data) {
    callback(err, data)
  })
}

export function getDetail(recommendId) {
  const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    needNewCode: 1,
    new_format: 1,
    pic: 500,
    disstid: recommendId,
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    nosign: 1
  })
  return jsonp(url, data, options)
}
export function getLyric(id, callback) {
  var url = 'https://api.darlin.me/music/lyric/' + id
  return oriJsonp(url, function (err, data) {
    callback(err, data)
  })
}
