// function mergeSort(arr) {
//     if (arr.length <= 1) {
//       return arr;
//     }
//     const mid = Math.floor(arr.length / 2);
//     const left = mergeSort(arr.slice(0, mid));
//     const right = mergeSort(arr.slice(mid));
  
//     return merge(left, right);
//   }
//   function merge(left, right) {
//     const result = [];
  
//     while (left.length && right.length) {
//       if (left[0] <= right[0])  {
//         result.push(left.shift());
//       } else {
//         result.push(right.shift());
//       }
//     }
  
//     return result.concat(left, right);
//   }

//   const unsortedArray = [4, 5,12 , 3, 1,-12,-1,33];
// const sortedArray = mergeSort(unsortedArray);

// console.log(sortedArray); 

function mergesort(array){
  if(array.length <=1){
    return array
  }
  else{
   let  mid = Math.floor(array.length /2)
  let  left = mergesort(array.slice(0,mid))
  let  right = mergesort(array.slice(mid))
  return merge(left,right)
  }
}
function merge(left,right){
  let result = []
  while(left.length && right.length){
    if(left[0] <= right[0]){
        result.push(left.shift())
    }else{
      result.push(right.shift())
    }
  }
  return result.concat(left,right)
}
let array = [8,6,44,2,-44,12]
let array2 = mergesort(array)
console.log(array2);