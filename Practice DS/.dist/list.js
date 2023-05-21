class Node {
    constructor(value){
        this.value = value
        this.next  = value
    }
}

class linkedList {
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
        let current = this.head
        if(current){
                      newnode.next =this.head
                      this.head = newnode
        }
    }
     insertend(value){
        const newnode =  new Node(value)
        if(this.tail){
               this.tail.next= newnode
         this.tail = newnode
        }
     }
     insertafter(newvalue,value){
        const newnode = new Node(value)
        let temp = this.head
        while(temp){
            if(temp.value == newvalue){
                 newnode.next = temp.next
                temp.next  = newnode
                if(temp == this.tail)
                this.tail = newnode
            }
            temp= temp.next
        }
     }
     detete(value){
        if(!this.head){
            return
        }
        if(this.head.value == value){
            this.head = this.head.next
            return
        }
        let temp = this.head ;
        while(temp){
            if(temp.next.value == value){
                temp.next = temp.next.next
                if(!temp.next){
                    this.tail  = temp
            }   
            return
            }
            temp=temp.next
        }
     }
     sum(){
       let sum = 0
       let temp = this.head
        while(temp){
            sum = sum+temp.value
            temp = temp.next
        }
        console.log(sum);
     }
        print(){
        let current  = this.head
        while(current){
            console.log(current.value)
            current = current.next
            
        }
    }
}


 const list = new linkedList()

 const arr = [1,2,3,4,5,7]
 for(i=0;i<arr.length;i++){
    list.insert(arr[i])
 }
 list.inserthaed(1000)
 list.insertend(2000)
 list.insertafter(300,2)
 list.detete(2000)
 list.sum()

list.print()