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
             let popped = this.top.data
            this.top = this.top.next
              return popped
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
stac.reverse()
stac.display()
// stac.display()

// class node{
//     constructor(data){
//     this.data = data 
//     this.next = null
//     }
// }
// class stack{
//     constructor(){
//         this.top = null
//     }

// push(data){
// let newnode = new node(data)
// if(this.top == null){
//     this.top = newnode
// }else{
//     newnode.next = this.top 
//     this.top = newnode 
// }
// }
// pop(){
//   if(this.top == null){
//   console.log("stack is empty");
//   }
//   else{
//     this.top = this.top.next 
//   }
// }
// display(){
//   let  curr = this.top 
//     while(curr){
//         console.log(curr.data);
//         curr = curr.next 
//     }
// }
// }

// let stac = new stack()
// stac.push(12)
// stac.push(22)
// stac.push(32)
// stac.push(42)
// stac.display()