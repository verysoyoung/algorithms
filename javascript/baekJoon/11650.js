let n = Number(input[0])
let arr = []
for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(' ').map(Number)
  arr.push([x, y])
}

const result = arr.sort((a, b) => compare(a, b))

function compare(a, b) {
  if (a[0] === b[0]) {
    return a[1] - b[1]
  } else {
    return a[0] - b[0]
  }
}

let answer = ''
for (let point of result) {
  answer += point[0] + ' ' + point[1] + '\n'
}

console.log(answer)
