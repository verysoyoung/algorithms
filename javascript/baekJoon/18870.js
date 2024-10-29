const n = Number(input[0])
const data = input[1].split(' ').map(Number)

let uniqueArray = [...new Set(data)].sort((a, b) => a - b)

let myMap = new Map()
for (let i = 0; i < uniqueArray.length; i++) {
  myMap.set(uniqueArray[i], i)
}

let answer = ''
for (x of data) answer += myMap.get(x) + ' '

console.log(answer)
