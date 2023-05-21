class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}


class linkedlist {
    constructor(){
        this.head = null
        this.tail = null
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
    inserthaed(value){
        const newnode = new Node(value)
        if(this.head){
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
    insertafter(value,addvalue){
        const newnode = new Node(value)
        let curnode = this.head
        while (curnode) {
            if(curnode.value == addvalue){
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
        let curnode = this.haed
        while(curnode){
            if(curnode.next.value == value){
                curnode.next = curnode.next.next
                if(!curnode){
                    this.tail = curnode
                }
                return
            }
            curnode = curnode.next
        }
    }
    deletetail(){
        if(!this.head){
            return
        }
        let curnode = this.head
        while (curnode) {
            if(curnode.next == this.tail){
                this.tail = curnode
                this.tail.next = null
                return
            }
            curnode = curnode.next
        }
    }
    sum(){
        let curnode = this.head
        let sum = 0
        while (curnode) {
           sum = sum+curnode.value
            curnode = curnode.next           
        }
    }
    print(){
        let curnode = this.head
        while (curnode) {
            console.log(curnode.value);
            curnode = curnode.next
            
        }
    }
}

let list = new linkedlist()
 let arr = [1,2,3,4,5,6,67,8,9]
 for(i=0;i<arr.length;i++){
    list.insert(arr[i])
 }
 list.inserthaed(5555)
 list.inserttail(231233)
 list.insertafter(78787,3)
 list.print()