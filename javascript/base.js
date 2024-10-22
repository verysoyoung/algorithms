let data = [5, 4, 6, 8, 2, 4]

let minValue = data.reduce((a, b) => Math.min(a, b))
console.log(minValue)

//배열 초기화
let arr = new Array(5).fill(0)
console.log(arr)

//집합 자료형
let mySet = new Set() //집합 객체 생성

//여러 개의 원소 삽입
mySet.add(3)
mySet.add(1)
mySet.add(2)
mySet.add(6)
mySet.add(3) //중복된 원소는 포함하지 않음

console.log('mySet size', mySet.size)
console.log('mySet has', mySet.has(3))

//원소 5 제거
mySet.delete(3)

for (let item of mySet) console.log(item)

// 특정 실수에 대하여 toFixed()를 이용해 소수점 아래 둘째 자리까지 출력
let x = 123.456
console.log(x.toFixed(2)) //반올림
