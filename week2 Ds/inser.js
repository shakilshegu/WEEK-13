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
        if(this.rear == null){
            this.front  = newnode
            this.rear = newnode
        }else{
            this.rear.next = newnode
            this.rear = newnode
        }
    }
    dequeue(){
        if(this.front == null){
            console.log("queue is empty");
            return
        }else{
             this.front = this.front.next

            // console.log(this.rear.data,"hi");
        if(this.front == null){
            this.rear = null
        }
        }
        
    }
    display(){
        let curr = this.front
        while(curr){
            console.log(curr.data);
            curr = curr.next 
        }
    }
}

let queu = new pos()
queu.enqueue(10)
queu.enqueue(20)
queu.enqueue(30)
queu.enqueue(40)

 queu.dequeue()
//  queu.dequeue()
//  queu.dequeue()
queu.display()