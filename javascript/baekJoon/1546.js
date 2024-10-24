//평균값 구하기

const n = Number(input[0])
const data = input[1].split(' ').map(Number)

const max = Math.max(...data)
const result =
  data.map(num => (num / max) * 100).reduce((acc, cur) => acc + cur) / n
console.log(result)
