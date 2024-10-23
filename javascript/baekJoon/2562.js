const input = [1, 3, 4, 5, 6454, 64646, 46464]

let arr = [input[0], 1]
for (let i = 0; i < input.length; i++) {
  if (i + 1 === input.length) {
    console.log(`${arr[0]}\n${arr[1]}`)
  } else {
    arr = arr[0] < input[i] ? [input[i], i + 1] : arr
  }
}

let maxIndex = 0
let maxValue = 0

for (let i = 0; i < input.length; i++) {
  if (maxValue < input[i]) {
    maxValue = input[i]
    maxIndex = i + 1
  }
}

console.log(maxValue)
console.log(maxIndex)

let max = Math.max(...input)
console.log(max)
console.log(input.indexOf(max) + 1)
