const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let n = Number(input[0])
let list1 = input[1].split(' ')
let arr = []
for (let i = 0; i < n; i++) {
  arr.push(Number(list1[i]))
}
let list = arr.sort((a, b) => a - b)
let amount = 0
let count = 0
for (let i = 0; i < n; i++) {
  count = count + list[i]
  amount += count
}
console.log(amount)
