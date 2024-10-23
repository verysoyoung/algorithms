const input = [
  '2',
  '34',
  '3434',
  '3434',
  '4333113',
  '43333',
  '43333',
  '43333',
  '43323133',
  '22',
]

const data = input.map(n => Number(n))
let mySet = new Set()

for (let i = 0; i < 10; i++) {
  mySet.add(data[i] % 42)
}
console.log(...mySet)
console.log(mySet.size)

//답은 잘 나오고 있으나 백준사이트에서 틀린 답으로 나와서 확인중.. 확인 후 수정
const data2 = input.map(n => Number(n) % 42)

const set = new Set(data2)
console.log(...set)
console.log(set.size)
