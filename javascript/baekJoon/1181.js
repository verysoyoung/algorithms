let [n, ...arr] = input

const set = new Set(arr)
const data = [...set]
const arrrrr = data.sort()
const result = arrrrr.sort((a, b) => compare(a, b))
function compare(a, b) {
  return a.length - b.length
}
let answer = ''
for (let point of result) {
  answer += point + '\n'
}
console.log(answer)
