// const n = Number(input[0])
// const data = input[1].split(' ').map(Number)
// Map은 키가 있는 데이터를 저장한다는 점에서 객체와 유사. but 맵은 키에 다양한 자료형을 허용한다는 점에서 차이가 있음
// new Map()
// map.set(key, value)
// map.get(key)
// map.has(key)
// map.delete(key)
// map.clear()
// map.size
// map.keys()

const data = [23, 4, 2, 5, 6, 2, -10]

let uniqueArray = [...new Set(data)].sort((a, b) => a - b)

let myMap = new Map()
for (let i = 0; i < uniqueArray.length; i++) {
  //매핑 수행
  myMap.set(uniqueArray[i], i) //인덱스를 넣어줌
}
console.log(myMap.size)
console.log(myMap.entries())
console.log(myMap.has(23))
console.log(myMap.get(23))

let answer = ''
for (let x of data) answer += myMap.get(x) + ' '

console.log(answer)
