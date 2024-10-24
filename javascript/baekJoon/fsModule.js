//파일시스템 모듈

let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
console.log(input)
