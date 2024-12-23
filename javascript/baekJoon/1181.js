let [n, ...arr] = input

const data = [...new Set(arr)] //중복 제거
const result = data.sort((a, b) => compare(a, b))
function compare(a, b) {
  if (a.length != b.length) return a.length - b.length
  else {
    //길이가 같을 경우 사전 순으로 정렬
    if (a < b) return -1
    else if (a > b) return 1
    else return 0
  }
}
let answer = ''
for (let point of result) {
  answer += point + '\n'
}
console.log(answer)
