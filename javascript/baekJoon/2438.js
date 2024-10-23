const n = 5
for (let i = 1; n >= i; i++) {
  console.log('*'.repeat(i))
}

let result = ''
for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    result += '*'
  }
  result += '\n'
}
console.log(result)
