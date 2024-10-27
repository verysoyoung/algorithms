//배열로 접근
class Queue {
  constructor() {
    this.items = []
    this.head = 0
    this.tail = 0
  }
  enqueue(item) {
    this.items[this.tail] = item
    this.tail++
  }
  dequeue() {
    const item = this.items[this.head]
    delete this.items[this.head]
    this.head++
    return item
  }
  peek() {
    return this.items[this.head]
  }
  getLength() {
    return this.tail - this.head
  }
}

const queue = new Queue()
queue.enqueue(2)
queue.enqueue(1)
queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
queue.dequeue()
console.log(queue.getLength())

console.log(queue)
