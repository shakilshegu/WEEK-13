class stack {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class staack {
    constructor(){
        this.top = null
    }
    push(value){
      let newnode = new stack(value)
      if(this.top == null ){
        this.top = newnode
      }else{
        newnode.next = this.top
        this.top = newnode
      }
      
    }
    pop(){
        if(this.top == null ){
            console.log("this stack i d empty");
            return ;
        }else{
            this.top = this.top.next;
        }
    }
    peek(){
        if(this.top == null ){
            console.log("empty");
            return
        }
        return this.top.value
    }
    reverse(){
        let prevNode =null
        let curNode = this.top
        let nextnode = null
        while(curNode){
            nextnode = curNode.next
            curNode.next = prevNode
            prevNode = curNode
            curNode = nextnode
        }
        this.top  = prevNode;
    }
    print(){
        let curNode = this.top
        while(curNode){
            console.log(curNode.value);
            curNode = curNode.next
        }
    }
}

const list = new staack()
list.push(11)
list.push(22)
list.push(33)
list.push(44)
list.push(55)
list.pop()
list.print()
console.log("peeeek",list.peek());
list.reverse();
list.print()
