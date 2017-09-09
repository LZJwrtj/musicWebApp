export function shuffle(arr) {
  var _arr = arr.slice()
  for (var i = 0; i < _arr.length; i++) {
    let j = getRandomInt(0, i)
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = t
  }
  return _arr
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
