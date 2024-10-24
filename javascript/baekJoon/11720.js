const data = '133389483294839'

const result1 = [...data].map(Number).reduce((acc, cur) => acc + cur)

let answer = 0
for (let x of data) {
  answer += Number(x)
}

console.log(result1, answer)
