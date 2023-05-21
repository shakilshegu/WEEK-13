
class Node{
    constructor(value){
        this.value= value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
    }
    insert(value){
        const newnode = new Node(value)
        if(this.head==null){
            this.head=newnode
        }else{
            this.tail.next=newnode
        }
        this.tail=newnode

    }
    inserthead(value){
        const newnode = new Node(value)
        let temp =this.head
        if(temp){
              newnode.next  = this.head
              this.head=newnode              
        }
    }
    insertend(value){
        const newnode = new Node(value)
        let current = this.tail
        if(current){
            this.tail.next = newnode
            this.tail = newnode
        }
    }
    inserafter(newvalue,value){
        const newnode = new Node(value)
        let curnode = this.head
        while(curnode){
            if(curnode.value == newvalue){
                newnode.next = curnode.next
                 curnode.next = newnode
                 if(curnode == this.tail){
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
       let curnode = this.head;
       while(curnode){
        if(curnode.next.value == value){
            curnode.next = curnode.next.next
            if(!curnode.next){
                this.tail  = curnode
            }
            return
        }
        curnode = curnode.next 
        
       }
    }
    print(){
        let current = this.head
        while(current){
            console.log(current.value)
            current= current.next
        }
    }
}
const list = new LinkedList()
const arr = [1,2,3,4,5,5,6]
for(i=0;i<arr.length;i++){
    list.insert(arr[i])
}
list.inserthead(200)
list.insertend(400)
list.inserafter(5,10000)
list.print()
