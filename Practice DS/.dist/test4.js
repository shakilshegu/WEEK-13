
// function binery(start,end,arr,target) {
//     let mid = Math.floor(start+(end-start)/2)
//     if(start>end){
//         return -1
//     }
//     if(arr[mid] == target){
//         return mid
//     }
//     if(arr[mid]<target){
//         return binery(mid+1,end,arr,target)
//     }else{
//         return binery(start,mid-1,arr,target)
//     }
// }

// const arr = [1,2,3,4,5,6,7,8,9]
// console.log(binery(0,arr.length-1,arr,6))

class Node{
    constructor(value){
        this.value  = value
        this.next   =null
    }
}
class LinkedList{
    constructor(){
        this.head = null
        this.next = null
    }
    insert(value){
        const newnode = new Node(value)
        if(this.head == null){
               this.head = newnode
        }else{
            this.tail.next  = newnode
        }
        this.tail = newnode
    }
    insethaed(value){
        const newnode = new Node(value)
        if(this.head){
            newnode.next = this.head
             this.head = newnode
        }
    }
    inserttail(value){
        const newnode = new Node(value)
        if(this.tail)
        {
            this.tail.next = newnode
              this.tail = newnode
        }
    }
    insertafter(newvalue,value){
        const newnode = new Node(value)
        let curnode = this.head
        while (curnode) {
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
    detetetail(){
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
       let temp = this.head
       let sum = 0
        while (temp) {
            sum = sum+temp.value
            temp = temp.next
        }
        console.log(sum);
    }

    print(){
        let curnode = this.head
        while(curnode){
            console.log(curnode.value);
            curnode=curnode.next
        }
    }
}

const list = new LinkedList()
const arr = [1,2,3,4,4,5,6,7,78]
for(i=0;i<arr.length;i++)
{
list.insert(arr[i])
}
list.insethaed(22000)
list.inserttail(777)
list.insertafter(3,500)
list.detetetail(777)
list.sum()
list.print()