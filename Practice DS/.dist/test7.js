// >start
// >set the value i to 0
// >set ths value n maximum number you want print
// >start looping i to n
// >inside in the loop i value printing
// >incremt the value i by 1 in each itration
// >end

// function binery(start,end,arr,target){
//     mid = Math.floor(start+(end-start)/2)
//     if(start>end){
//         return -1
//     }
//     if(arr[mid] == target){
//         return mid
//     }
//     if(arr[mid]<target){
//       return binery(mid+1,end,arr,target)
//     }else{
//         return binery(start,mid-1,arr,target)
//     }
// }

// const arr = [1,2,3,4,5,6,7,8,9]
// console.log(binery(0,arr,length-1,arr,9));

// function facctria(n){
//     if(n<=1){
//         return 1
//     }else{
//         return n*facctria(n-1)
//     }
// }
//  console.log(facctria(n));

// function array(n){
//     if(n===1){
//         return [1]
//     }
//     let arr = array(n-1)
//     arr.push(n)
//     return arr
// }
// console.log(array(8))

// function sumof(n){
//     if(n===1){
//         return 1
//     }
//     let sum = sumof(n-1)
//     sum = sum+n
//     return sum
// }

// class Node{
//     constructor(value){
//         this.value = value
//         this.head = null
//     }
// }
// class linkedlist{
//     constructor(){
//         this.head = null
//         this.tail = null
//     }
//     insert(value){
//         const newnode = new Node(value)
//         if(this.head == null){
//             this.head = newnode
//         }else{
//             this.tail.next = newnode
//         }
//         this.tail = newnode
//     }
//     inserhead(value){
//         const newnode = new Node(value)
//         let curnode = this.head
//         if(curnode){
//           newnode.next = this.head
//           this.head = newnode
//         }
//     }
//     inserttail(value){
//         const newnode = new Node(value)
//         if(this.tail){
//             this.tail.next = newnode
//             this.tail = newnode
//         }
//     }
//     inserafter(value,addvalue){
//         const newnode = new Node(value)
//         let curnode = this.head
//         while (curnode) {
//             if(curnode.value == addvalue){
//                 newnode.next = curnode.next
//                 curnode.next = newnode
//                 if(curnode == this.tail){
//                     this.tail = newnode
//                 }
//             }
//             curnode = curnode.next
//         }
//     }
//     deletetail(){
//         if(!this.head){
//             return
//         }
//         let curnode = this.head
//         while (curnode) {
//             if(curnode.next == this.tail){
//                 this.tail = curnode
//                 this.tail.next = null
//                 return
//             }
//             curnode = curnode.next
//         }
//     }
//     deletetall(value){
//         if(!this.head){
//             return
//         }
//         if(this.head.value == value){
//             this.head = this.head.next
//             return
//         }
//         let curnode = this.head
//         while(curnode){
//             if(curnode.next.value == value){
//                 curnode.next = curnode.next.next
//                 if(!curnode){
//                     this.tail = curnode
//                 }
//                 return
//             }
//             curnode = curnode.next 
//         }
//     }
//     sum(){
//         let curnode = this.head
//         let sum = 0
//         while (curnode) {
//             sum = sum+curnode.value
//             curnode = curnode.next
//         }
//         console.log(sum)
//     }
//     middil(){
//         let mid = this.head
//         let temp = this.head
//         while(temp && temp.next){
//             mid = mid.next
//             temp = temp.next.next
//         } 
//         console.log(mid.value);
//     }

//     print(){
//         let curnode = this.head
//         while (curnode) {
//             console.log(curnode.value)
//             curnode = curnode.next
//         }

//     }
// }

//  let list = new linkedlist()
//  let arr = [1,2,3,4,6,5,7,8]

//  for(i=0;i<arr.length;i++){
//     list.insert(arr[i])
//  }
//  list.inserhead(99999)
//  list.inserttail(434343)
//  list.inserafter(300,4)
//  list.sum()


//  list.print()

// let arr = [1,2,44,55,44,3,2,1]
// let k = []
// let c= 0

// for(let i = 0 ;i< arr.length;i++){
//     let count = 0;
//     for(let j=0 ; j<arr.length;j++){
//         if(i!=j&&arr[j]==arr[i]){
//             count ++;
//             break;
//         }
//     }if(count == 0){
//         k[c] = arr[i]
//         c++
//     }
// }

// console.log(k)

// let x = "hello"
// let arr = x.split("")
// let leat = arr.pop()
// arr.unshift(leat)
// let y = arr.join("")
// console.log(y);
//  const arr = [5,4,5,2,4,6,8,9]
//  console.log(m);
//  let target = 10
 
//  function find(arr,target) {
//     for(i=0;i<arr.length;i++){
//         for(j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]==target){
//                 arr = [arr[j],arr[i]]
//                 return arr
//             }
//         }
//     }
//  }
//  console.log(find(arr,10))
