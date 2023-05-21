class stack {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class insert {
  constructor() {
    this.top = null;
  }
  push(value) {
    let newnode = new stack(value);
    if (this.top == null) {
      this.top = newnode;
    } else {
      newnode.next = this.top;
      this.top = newnode;
    }
  }
  pop() {
    if (this.top == null) {
      console.log("stack is empty");
      return;
    } else {
      this.top = this.top.next;
    }
  }
  reverce(){
  let array = []
  for(let i=0 ;i<array.length;i++){
    array[i] = this.pop()
  }
 for(let i = 0 ; i< array.length; i++){
    stac.push(array[i])

 }
}
  print() {
    let currnet = this.top;
    while (currnet) {
      console.log(currnet.value);
      currnet = currnet.next;
    }
  }
}


let stac = new insert();
const arr = [1, 34, 5, 56, 6, 7];
for (i = 0; i < arr.length; i++) {
  stac.push(arr[i]);
}
stac.reverce()
stac.print();
