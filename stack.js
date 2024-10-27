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

stack.push('11')
stack.push('22')
stack.push('33')
stack.push('44')
stack.push('55')
console.log('stack:', stack)

stack.pop()
stack.pop()
stack.pop()
stack.pop()

console.log('stack:', stack)

let stack2 = new Array()

stack2.push('11')
stack2.push('22')
stack2.push('33')
stack2.push('44')
stack2.push('55')
console.log('stack2:', stack2)

stack2.pop()
stack2.pop()
stack2.pop()

let reversed = stack2.reverse()

console.log('stack2 reversed: ', reversed)
console.log('stack2:', stack2)
