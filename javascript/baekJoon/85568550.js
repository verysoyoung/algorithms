//최소,최대값 원소 순회하기
const n = 5
const arr = [1, 34, 56, 4333, 23]
console.log(`${Math.min(...arr)} ${Math.max(...arr)}`)

let minValue = 1000001
let maxValue = -1000001

for (let i = 0; i < n; i++) {
  if (minValue > arr[i]) minValue = arr[i]
  if (maxValue < arr[i]) maxValue = arr[i]
}

console.log(minValue, maxValue)

let min = arr.reduce((acc, cur) => (acc > cur ? cur : acc))
let max = arr.reduce((acc, cur) => (acc < cur ? cur : acc))

console.log(min, max)
