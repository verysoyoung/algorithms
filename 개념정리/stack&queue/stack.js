class Stack {
  constructor() {
    this.array = []
  }
  push(value) {
    this.array.push(value)
  }
  pop() {
    return this.array.pop()
  }
  peek() {
    return this.array[this.array.length - 1]
  }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.peek())
