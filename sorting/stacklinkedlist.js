class StackNode {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

class Stack {
  constructor() {
      this.top = null;
      this.size = 0
  }
  
  push(value) {
      let newNode = new StackNode(value);
      if (this.top === null) {
          this.top = newNode;
      } else {
          newNode.next = this.top;
          this.top = newNode;
      }
  }
  pop(){
      if(this.top === null){
          console.log("empty");
          return
      }else{
          this.top = this.top.next
      }
  }
  pomiddile() {
    if (this.top === null) {
        console.log("Stack is empty.");
        return;
    }

    const middleIndex = Math.floor(this.size / 2);
    let currNode = this.top;
    let prevNode = null;
    let count = 0;
    
    while (count < middleIndex) {
        prevNode = currNode;
        currNode = currNode.next;
        count++;
    }
    
    if (prevNode !== null) {
        prevNode.next = currNode.next;
    } else {
        this.top = currNode.next;
    }
    
    this.size--;
}
  peek(){
      if(this.top === null){
          console.log("empty");
          return
      }else{
        return  this.top.value
      }
  }
  print() {
      let currNode = this.top;
      while (currNode) {
          console.log(currNode.value);
          currNode = currNode.next;
      }
  }
}

let stack = new Stack();
stack.push(10);
stack.push(22);
stack.push(33);
stack.push(44);
stack.print();
stack.pop();
console.log("peek", stack.peek());
