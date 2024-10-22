const value = 4

let data = new Array(Number(value)).fill(0)
let answer = data.map((_, i) => i + 1).reduce((acc, cur) => acc + cur)

console.log(answer)
