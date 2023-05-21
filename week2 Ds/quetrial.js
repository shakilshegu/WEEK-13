class queue{
    constructor(data){
       this.data = data
       this.next = null
    }
}
class pos{
    constructor(){
        this.front = null 
        this.rear = null
    }
    enqueue(data){
        let newnode = new queue(data)
        if(this.front== null){
            this.front = newnode
             this.rear = newnode 
        }else{
             this.rear.next  = newnode 
             this.rear = newnode
        }
    }
    dequeue(){
        if(this.front == null){
            console.log("queue is empty");
        }
        else{
            this.front = this.front.next
        }
    }
    display(){
        let curr = this.front
        while (curr) {
            console.log(curr.data);
            curr = curr.next 
        }
    }
}
let queu = new pos()
queu.enqueue(12)
queu.enqueue(22)
queu.enqueue(32)
queu.enqueue(42)
queu.dequeue()
queu.display()