let arr = [1, 8, 6, 4, 3, 8, 65, 43, 65, 33, 43]

//오름차순
function compare(a, b) {
  if (a < b) return -1
  else if (a > b) return 1
  else return 0
}

arr.sort(compare)
console.log(arr)

function compare2(a, b) {
  //a가 b보다 작을 때, 반환 값이 음수가 되어 a가 앞에 위치한다.
  return a - b
}

arr.sort(compare2)
console.log(arr)

console.log(arr.sort((a, b) => a - b))

//내림차순
function compare3(a, b) {
  //b가 a보다 작을 때, 반환 값이 음수가 되어 b가 앞에 위치한다.
  return b - a
}

arr.sort(compare3)

console.log(arr.sort((a, b) => b - a))

console.log(arr)

//대소문자를 구분하지 않도록 toUpperCase() 메서드 사용

let arrString = ['fineapple', 'Banana', 'durian', 'Apple', 'carrot']

function compare4(a, b) {
  let upperCaseA = a.toUpperCase()
  let upperCaseB = b.toUpperCase()
  if (upperCaseA < upperCaseB) -1
  else if (upperCaseA > upperCaseB) 1
  else 0
}

console.log(arrString.sort(compare4))

let arrObject = [
  { name: '홍길동', score: 20 },
  { name: '김영희', score: 80 },
  { name: '박수영', score: 40 },
]

function compare5(a, b) {
  return a.score - b.score
}

console.log(arrObject.sort(compare5))
