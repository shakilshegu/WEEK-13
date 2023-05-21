// function reverce(array){
//     for(let i = array.length-1;i>=0;i--){
//         console.log(array[i]);
//     }
// }

// let array = [1,2,3,4,5,6]

// console.log(reverce(array));



function factorial(n) {
     if(n<=1){
        return 1
     }else{
        return n*factorial(n-1)
     }
}

console.log(factorial(3))


function factorial(n){
   if(n<=1){
      return 1
   }else{
      return n*factorial(n-1)
   }
}

console.log(factorial(4))

function factorial(n){
   if(n<=1){
      return 1
   }else{
      return n*factorial(n-1)
   }
}
 console.log(factorial(4));






 

//  const arr=[1,2,3,4,5]
//  function sum(arr){
//    if(arr.length==1){
//       return arr[0]
//    }else{
//       return arr.pop()+sum(arr)
//    }
//  }

// console.log(sum(arr))

// let  array = [1,2,3,4,5,6,6,]
// for(let i=0;i<array.length;i++){
//     let count = true
//     for(let j=0;j<array.length;j++){
//         if(i !=j && array[i]==array[j]){
//             count = false
//             break;
//         }
//     }
// }if(count){
//     console.log(arry[i]);
// }