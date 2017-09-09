import jsonp from 'assets/js/jsonp'
import {commonParams, options} from './config'

export function getSingerDetail(singerId) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'

  const data = Object.assign({}, commonParams, {
    order: 'listen',
    begin: 0,
    num: 80,
    singerid: singerId,
    uin: 0,
    platform: 'h5page',
    needNewCode: 1,
    from: 'h5'
  })
  return jsonp(url, data, options)
}
