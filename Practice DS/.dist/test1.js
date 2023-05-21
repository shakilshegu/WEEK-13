class Node {
    constructor(value){
        this.value = value
        this.next = null
      
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }
    insert(value){
        const newnode = new Node(value)
        if(this.head == null ){
            this.head = newnode
        }else{
             this.tail.next = newnode
        }
        this.tail = newnode
    }
    deletetail(){
        let temp =this.head
        while(temp){
            if(temp.next==this.tail){
                this.tail=temp
                temp.next=null
        }  
         temp=temp.next
        }
            
        }
   
    print(){
        let current = this.head
        while(current){
            console.log(current.value);
            current = current.next
        }
    }
   
}

const list  =  new LinkedList()

const arr = [1,2,3,4,5,6,7,8]
for(i=0;i<arr.length;i++){
     list.insert(arr[i])
}

list.deletetail()
console.log("taillllllllll",list.tail.value);
list.print()

