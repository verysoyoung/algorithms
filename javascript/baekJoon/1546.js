//평균값 구하기

const n = 6
const data = [90, 67, 56, 45, 34, 99]

const max = Math.max(...data)
const max2 = data.reduce((a, b) => Math.max(a, b))
console.log(max, max2)
const result =
  data.map(num => (num / max) * 100).reduce((acc, cur) => acc + cur) / n
console.log(result)
