function iterativeLog(array) {
  array.forEach((x, i) => {console.log(`${i}: ${x}`)})
}

function iterate(callback) {
  let arr = ['cat','fish','mouse']
  arr.forEach(callback)
  return arr
}

function doToArray(array, callback) {
    array.forEach(callback)
}