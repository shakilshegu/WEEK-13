// class Stack {
//     constructor() {
//         this.items = []
//     }

//     push(data) {
//         this.items.push(data)
//     }

//     pop() {
//         return this.items.pop()
//     }

//     size() {
//         return this.items.length
//     }
// }

// let s ='hello'
// let stack = new Stack()
// let r = ''

// for(let i of s){
//     stack.push(i)
// }

// while(stack.size()) {
//     r += stack.pop()
// }

// console.log(r)

/////////////////////stack in linkedlist //////////////////

// class stacknode {
//     constructor(value){
//         this.value = value
//         this.next = null ; 
//     }
// }

// class Stack {
//     constructor(){
//         this.top = null
//     }
//     push(value){
//         let newnode = new stacknode(value)
//         if(this.top === null){
//            this.top = newnode
//         }else{
//             newnode.next = this.top
//             this.top = newnode
//         }
//     }
//     pop(){
//         if(this.top === null){
//           console.log("empty");
//          }else{
//            this.top = this.top.next
//          }
//     }
//     peek(){
//         if(this.top === null){
//          console.log("empty");
//          return
//          }else{
//             return this.top.value
//          }
//     }
//     print(){
//         let currnoe = this.top
//         while (currnoe) {
//             console.log(currnoe.value);
//             currnoe = currnoe.next
//         }

//     }
// }

// let stack = new Stack()
// stack.push(10);
// stack.push(22);
// stack.push(33);
// stack.push(44);
// stack.pop()
// console.log("peeek",stack.peek());
// stack.print()


/////////////////////queue in linkedlist //////////////////////////

class queueNode {
    constructor(value){
        this.value = value 
        this.next = null
    }
}

class queue{
    constructor(){
        this.front = null
        this.rear = null
    }
    enqueue(value){
        let newnode = new queueNode(value)
        if(this.front == null){
            this.front = newnode
            this.rear = newnode
        }else{
            this.rear.next = newnode
            this.rear = newnode
        }
    }
    dequeue(){
        if(this.front == null){
            console.log("queue is empy");
        }else{
            this.front = this.front.next
        }
    }
    print(){
        let curr = this.front
        while(curr){
            console.log(curr.value);
            curr  = curr.next
        }
    }
}

let list = new queue()
list.enqueue(333)
list.print()