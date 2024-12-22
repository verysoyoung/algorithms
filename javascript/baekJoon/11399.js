const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let n = Number(input[0])
let arr = input[1].split(' ').map(Number)

let list = arr.sort((a, b) => a - b)
let amount = 0
let count = 0
for (let i = 0; i < n; i++) {
  count = count + list[i]
  amount += count
}
console.log(amount)

let answer = 0
let summary = 0
for (let i = 0; i < n; i++) {
  summary += list[i] //i번째 사람이 기다린 총 시간
  answer += summary //지금까지 소요된 총 시간
}
console.log(answer)
