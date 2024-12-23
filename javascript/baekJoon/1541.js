let input = '1+4+5+353-133+34+4343-3434'
let groups = input.split('-')
let answer = 0
for (let i = 0; i < groups.length; i++) {
  console.log('groups:', groups)
  let cur = groups[i]
    .split('+')
    .map(Number)
    .reduce((a, b) => a + b)
  if (i === 0) {
    answer += cur // 첫 번째 그룹은 항상 덧셈
    console.log('+', cur)
  } else {
    console.log('-', cur) // 두 번째 그룹부터 뺄셈
    answer -= cur
  }
}
console.log(answer)
