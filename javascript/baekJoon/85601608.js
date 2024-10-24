for (let i = 1; i <= Number(input[0]); i++) {
  const data = input[i].split(' ').map(Number)
  let sum = 0
  const n = data[0]
  for (let j = 1; j <= n; j++) {
    sum += data[j]
  }
  const average = sum / n
  let result = 0
  for (let j = 1; j <= n; j++) {
    if (average < data[j]) {
      result += 1
    }
  }
}
console.log(`${((result / n) * 100).toFixed(3)}%`)
