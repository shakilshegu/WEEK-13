let arr = [7, 4, -2,-9,-8,0,-1, 5];
let n = arr.length


for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  console.log(arr);





  
// for (let i = 0; i < n; i++) {   //number of rounds 
//     let temp = arr[i];
//     let j = i;
//     while (j > 0 && temp < arr[j - 1]) {//checking left side
//         arr[j] = arr[j - 1];
//         j = j - 1;//moving position by left one time
//     }
//     arr[j] = temp;   //correct index of value

// }
// console.log(arr);

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