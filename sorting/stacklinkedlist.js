class Stack {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class Insert {
    constructor() {
      this.top = null;
    }
  
    push(data) {
      let newNode = new Stack(data);
      if (this.top == null) {
        this.top = newNode;
      } else {
        newNode.next = this.top;
        this.top = newNode;
      }
    }
  
    pop() {
      if (this.top == null) {
        console.log("The stack is empty");
        return;
      } else {
        this.top = this.top.next;
      }
    }
  
    peek() {
      if (this.top == null) {
        console.log("The stack is empty");
        return;
      }
      return this.top.data;
    }
  
    print() {
      let curNode = this.top;
      while (curNode) {
        console.log(curNode.data);
        curNode = curNode.next;
      }
    }
  
    reverse() {
      let prevNode = null;
      let curNode = this.top;
      let nextNode = null;
  
      while (curNode) {
        nextNode = curNode.next;
        curNode.next = prevNode;
        prevNode = curNode;
        curNode = nextNode;
      }
  
      this.top = prevNode;
    }
  }
  
  let stack = new Insert();
  stack.push(10);
  stack.push(22);
  stack.push(33);
  stack.push(44);
  stack.pop();
  stack.print();
  console.log("peek", stack.peek());
  stack.reverse();
  stack.print();
  