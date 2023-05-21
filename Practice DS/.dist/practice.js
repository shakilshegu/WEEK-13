class Node {
    constructor(value){
        this.value = value
        this.next = value
    }
}
class LinkedList {
    constructor(){
        this.head = null
        this.tail = null  
    }
    insert(value){
        const newnode  = new Node(value)
        if(this.head == null){
            this.head = newnode
        }else{
            this.tail.next = newnode
        }
        this.tail = newnode
    }
   inserthead(value){
    const newnode = new Node(value)
    let current = this.head
    if(current){
        newnode.next = this.head
        this.head = newnode
    }
   }
    insertEnd(value){
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
            if(curnode.value == newvalue){
             newnode.next=curnode.next
             curnode.next = newnode
             if(curnode==this.tail){
                this.tail = newnode
             }
            }
            curnode = curnode.next
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
        let current =this.head
        while(current){
            if(current.next.value ==  value ){
                current.next = current.next.next
                if(!current.next){
                    this.tail = curnode
                }
                return
            }
            current = current.next
        }
    }
    middil(){
        let mid  = this.head
        let temp = this.head
        while(temp && temp.next){
            mid = mid.next
            temp = temp.next.next
        }
        console.log((mid.value));
    }
    print(){
        let current = this.head
        while(current){
            console.log(current.value)
            current = current.next
        }
    }
}

const list = new LinkedList()

const arr = [1,2,3,4,5,5,6]
for(i=0;i<arr.length;i++){
    list.insert(arr[i])
}
list.inserthead(2000)
list.insertEnd(1300)
list.insertafter(5,2333)
list.delete(2333)

list.print()