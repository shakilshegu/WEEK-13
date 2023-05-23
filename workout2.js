class queue{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class pos{
    constructor(){
        this.front = null
        this.rear = null
    }
    enqueue(value){
        let newnode = new queue(value)
        if(this.front == null){
            this.front  = newnode
            this.rear = newnode
        }else{
            this.rear.next = newnode
            this.rear = newnode
        }
    }
    dequeue(){
        if(this.front ==   null){
            console.log("queue is empty ");
        }else{
            this.front = this.front.next
        }
    }
    print(){
        let curr = this.front
        while (curr) {
            console.log(curr.value);
            curr = curr.next
        }
    }
}
let list  = new pos()
list.enqueue(12)
list.enqueue(44)
list.enqueue(33)
list.enqueue(22)
list.dequeue()
list.print()
