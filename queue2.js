//객체로 접근
class Queue {
  constructor() {
    this.storage = {}
    this.front = 0
    this.rear = 0
  }
  add(value) {
    if (this.size() === 0) {
      this.storage['0'] = value
    } else {
      this.rear += 1
      this.storage[this.rear] = value
    }
  }
  popLeft() {
    let temp
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
  size() {
    if (this.storage[this.rear] === undefined) {
      return 0
    } else {
      return this.rear - this.front + 1
    }
  }
}

const test = new Queue()
test.add(1)
test.add(1)
console.log(test)
