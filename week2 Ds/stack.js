class stack{
    constructor(data){
        this.data = data;
        this.next = null
    }
}
 class insert{
     constructor(){
        this.top = null
     }
    push(data){
    let newnode = new stack(data)
    if (this.top ==null){
         this.top = newnode
    }else{
         newnode.next = this.top
          this.top = newnode
    }
    } 
    pop(){
        if(this.top == null){
            console.log("the stack is empty");
            return;
        }else{
            this.top = this.top.next
        }
    }
    reverse(){
        let array =[]
     for(let i = 0 ; i< 5 ; i++){
    array[i]= this.pop()
    }
     for(let i = 0 ; i< array.length; i++){
    stac.push(array[i])
    }
    } 
    reverse() {
        let array = [];
        let curr = this.top;
        while (curr) {
            array.push(curr.data);
            curr = curr.next;
        }
        this.top = null;
        for (let i = array.length - 1; i >= 0; i--) {
            this.push(array[i]);
        }
    }

    display(){
      let  curr = this.top 
        while(curr){
            console.log(curr.data);
            curr = curr.next
        }
    }
    
 }

 
let  stac = new insert()
stac.push(10)
stac.push(20)
stac.push(30)
stac.push(40)
stac.push(50)
stac.pop()

stac.display()


