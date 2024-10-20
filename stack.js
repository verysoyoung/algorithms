class Stack {
  constructor() {
    this.arr = []
    this.index = 0
  }
  push(value) {
    this.arr[this.index++] = value
  }
  pop() {
    if (this.index <= 0) return null
    const result = this.arr[this.index--]
    return result
  }
}

let stack = new Stack()

console.log('stack:', stack.push('11'))
console.log('stack:', stack.push('22'))
console.log('stack:', stack.push('33'))
console.log('stack:', stack.push('44'))
console.log('stack:', stack.push('55'))
console.log('stack:', stack)

console.log('stack:', stack.pop())
console.log('stack:', stack.pop())
console.log('stack:', stack.pop())
console.log('stack:', stack.pop())

console.log('stack:', stack)
