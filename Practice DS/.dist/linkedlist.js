// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor(){
//         this.head = null
//         this.tail = null
//     }
//    insert(value){
//     const newnode = new Node(value)
//     if(this.head == null){
//         this.head = newnode
//     }else{
//         this.tail.next = newnode
//     }
//     this.tail = newnode
//    }
//    print(){
//     let current = this.head
//     while(current){
//         console.log(current.value)
//         current = current.next
//     }
//    }
// }

// const list = new LinkedList()
// const arr = [1,2,3,4,5]

// for(i=0;i<arr.length;i++){
//     list.insert(arr[i])
// }
// list.print()


class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.tail = null
    }
    insert(value){
        const newnode = new Node(value)
        if(this.head == null){
            this.head = newnode

        }else{
            this.tail.next =  newnode
        }
        this.tail = newnode
    }
    inserthead(value){
        const newnode = new Node(value)
        let current = this.head
        if(current){
            newnode.next = this.head
            this.head =  newnode
        }
    }
    insertend(value){
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
        this.head = this.head.next;
        return
    }
    let curnode = this.head;
    while(curnode){
        if(curnode.next.value == value){
            curnode.next = curnode.next.next;
            if(!curnode.next){
                this.tail = curnode
            }
            return
        }
        curnode = curnode.next
    }
  }
  sum(){
    let  temp = this.head
    let sum = 0
    while(temp){
        sum = sum+temp.value
        temp = temp.next
    }
    console.log(sum)
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
        console.log(current.value)
        current = current.next
  }

}
middil(){
    let mid = this.head
    let temp = this.head
    while(temp && temp.next){
        mid = mid.next
        temp= temp.next.next
    }
    console.log(mid.value);
}

}


const list = new LinkedList()
const arr = [1,2,3,4,5]
for(i=0;i<arr.length;i++){
    list.insert(arr[i])
}
list.inserthead(200)
list.insertend(300)
list.insertafter(3,39)
list.sum()

list.print()
                                                                        

