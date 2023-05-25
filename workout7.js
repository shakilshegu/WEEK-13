class StackNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
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
