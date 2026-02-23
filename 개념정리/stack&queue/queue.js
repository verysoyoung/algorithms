class Queue {
  constructor {
    this.array = [];
  }
  enqueue(value) {
    this.array.push(value);
  }
  dequeue() {
    return this.array.shift();
  }
  peek() {
    return this.array[0]
  }
}

const queue = new Queue();
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue.dequeue());
console.log(queue.peek());
