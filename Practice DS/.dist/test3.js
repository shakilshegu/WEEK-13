class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
 constructor(){
    this.head = null
    this.tail  = null
 }
 insert(value){
    const newnode = new Node(value)
    if(this.head == null){
        this.head = newnode
    }else{
        this.tail.next = newnode
    }
    this.tail = newnode
 }
 inserthead(value){
    const newnode = new Node(value)
    let curnode = this.head
    if(curnode){
        newnode.next = this.head
        this.head = newnode
    }
 }
 inserttail(value){
    const newnode = new Node(value)
    if(this.tail){
        this.tail.next = newnode
        this.tail = newnode
    }
 }
 insertafter(newvalue,value){
   const newnode = new Node(value)
   let curnode = this.head
   while(curnode){
    if(curnode.value == newvalue ){
         newnode.next = curnode.next
         curnode.next = newnode
         if(curnode == this.tail){
            this.tail = newnode
         }

    }
   curnode =curnode.next
    }
   }
   delete(value){
    if(!this.head){
        return
    }
    if(this.head.value == value){
        this.head = this.head.next
        return
    }
    let curnode = this.head 
    while(curnode){
        if(curnode.next.value == value){
            curnode.next = curnode.next.next
            if(!curnode.next){
                this.tail = curnode
            }
            return
        }
        curnode = curnode.next
    }
   }
   sum(){
    let temp = this.head
    let sum =0
    while (temp) {
     sum= sum+temp.value
     temp = temp.next        
    }
    console.log(sum);
   }
   deletetail() {
    if (!this.head) {
        return;
    }

    let temp = this.head;
    while (temp) {
        if (temp.next == this.tail) {
            this.tail = temp;
            this.tail.next = null;
            return;
        }
        temp = temp.next;
    }
}

 print(){
    let curnode = this.head
    while(curnode){
        console.log(curnode.value)
        curnode = curnode.next
    }
 }
}

const list  = new LinkedList()
const arr = [1,23,55,53,5,5,8,9]
 for(i=0;i<arr.length;i++){
    list.insert(arr[i])
 }
 list.inserthead(10000)
 list.inserttail(9999)
 list.insertafter(9,1000)
 list.sum()
 list.delete(53)
 list.deletetail()
 list.print()