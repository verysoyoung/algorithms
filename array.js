function array() {
  const arr = [1, 2, 3]
  console.log(arr)
  arr.push(4) //O(1)
  arr.push(5, 6)
  console.log(arr)

  arr.splice(4, 0, 55) //O(n)
  console.log(arr)
  arr.splice(2, 1)
  console.log(arr)
}

let arr2 = new Array()

arr2.push(7)
arr2.push(1)
arr2.push(3)

console.log(arr2)

let arr3 = Array.from({ length: 5 }, () => 7)
console.log(arr3)

//2차원 배열
let arr4 = Array.from(Array(4), () => new Array(5))
console.log(arr4)

//2차원 배열 초기화
let arr5 = new Array(4)
for (let i = 0; i < arr5.length; i++) {
  arr5[i] = Array.from({ length: 5 }, (_, j) => i * 5 + j)
}

console.log('배열 초기화: ', arr5)

for (let x of arr5) {
  console.log('of: ', x)
}

let arrSlice = [2, 3, 4, 5, 6, 7]
console.log('slice: ', arrSlice.slice(2, 4)) //4, 5

console.log('indexOf: ', arrSlice.indexOf(7), arrSlice.indexOf(1))

array()
