const n = 4

let data = new Array(Number(n)).fill(0)
let answer = data.map((_, i) => i + 1).reduce((acc, cur) => acc + cur)

console.log(answer)

//등차수열의 합 공식
console.log((n * (n + 1)) / 2)
