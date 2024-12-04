const input = 'data'
const n = Number(input[0])
let arr = []
for (let i = 0; i <= n; i++) {
  let age = Number(input[i].split(' ')[0])
  let name = input[i].split(' ')[1]
  arr.push([age, name])
}

arr.sort((a, b) => a[0] - b[0])

let answer = ''

for (let x of arr) answer += x[0] + ' ' + x[1] + '\n'
console.log(answer)
