class Stack {
    constructor() {
        this.items = []
    }

    push(data) {
        this.items.push(data)
    }

    pop() {
        return this.items.pop()
    }

    size() {
        return this.items.length
    }
}

let s ='hello'
let stack = new Stack()
let r = ''

for(let i of s){
    stack.push(i)
}

while(stack.size()) {
    r += stack.pop()
}

console.log(r)