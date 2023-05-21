// function binery(start,end,arr,target){
//     mid = Math.floor(start+(end-start)/2)
//     if(start>end){
//         return
//     }
//     if(arr[mid]==target){
//         return mid
//     }
//     if(arr[mid]<target){
//         return binery(mid+1,end,arr,target)
//     }else{
//         return binery(start,mid-1,arr,target)
//     }
// }

// let arr = [1,2,3,4,5,6,7,8,9]
// console.log(binery(0,arr.length-1,arr,6))

// function factorial(n){
//     if(n<=1){
//         return 1
//     }else{
//         return n*factorial(n-1)
//     }
// }
// console.log(factorial(4))
// function generateArray(n) {
//     if (n === 1) {
//       return [1];  // Base case: return an array with only 1 when n is 1
//     }
  
//     var arr = generateArray(n - 1);  // Recursively generate the array for n-1
//     arr.push(n);  // Add n to the end of the array
//     return arr;
//   }
  
//   // Example usage

//   var result = generateArray(7);
//   console.log(result);

// function getarray(n){
//     if(n === 1){
//         return [1]
//     }
//     var arr =getarray(n-1)
//     arr.push(n)
//     return arr
// }

// console.log(getarray(9));
// function sumnumbers (n){
//     if(n===1){
//         return 1
//     }
//     let sum = sumnumbers(n-1)
//      sum = sum+n
//     return sum
// }
// console.log(sumnumbers(3));`