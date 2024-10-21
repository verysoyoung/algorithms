const arr = [1, 2, 3, 4, 5]
arr.shift()
// FIFO 원칙, 선입선출 원칙
// 배열을 이용하면 한 번 순회후 '위치 조정시간'이 추가로 필요해서 다른 언어보다 시간복잡도가 올라간다.
// 자바스크립트에서는 큐와 관련된 객체가 내장되어있지 않다. 큐를 이용하기 위해서는 자체 구현이 필요하다.

export class Queue {
  constructor() {
    this.storage = {}
    this.front = 0
    this.rear = 0
  }
  //크기구하기
  size() {
    if (this.storage[this.rear] === undefined) {
      return 0
    } else {
      return this.rear - this.front + 1
    }
  }
  add(value) {
    if (this.size() === 0) {
      this.storage['0'] = value
    } else {
      this.rear += 1
      this.storage[this.rear] = value
    }
  }
  popleft() {
    let temp
    //데이터가 한 개 남은경우. front, rear 위치가 같은경우
    if (this.front === this.rear) {
      temp = this.storage[this.front]
      delete this.storage[this.front]
      this.front = 0
      this.rear = 0
    } else {
      temp = this.storage[this.front]
      delete this.storage[this.front]
      this.front += 1
    }
    return temp
  }
}

const example = new Queue()
example.add(12)
console.log('example 1 :', example, example.size())

example.add(1)
example.add(2)
example.add(3)
example.add(4)
console.log('example 1 :', example, example.size())

example.popleft()
console.log('example 2 :', example, example.size())

example.popleft()
example.popleft()
example.popleft()
example.popleft()
console.log('example 3 :', example, example.size())
