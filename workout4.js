// const arr = [2,3,1,6,7,8,4,6,3]

// function mergSort(arr){
//     if(arr.length <= 1){
//         return arr
//     }
//     const mid = Math.floor(arr.length/2)
//     const leftArr = arr.slice(0,mid)
//     const rightArr = arr.slice(mid)
//     return merge(mergSort(leftArr),mergSort(rightArr))
// }

// function merge(leftArr,rightArr){
//     const sortedArr = []
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0]<=rightArr[0]){
//             sortedArr.push(leftArr.shift())
//         }else{
//             sortedArr.push(rightArr.shift())
//         }
//     }
//     return [...sortedArr,...leftArr,...rightArr]
// }

// console.log(mergSort(arr));

////////////////////////////////quick sort ////////////////////////////////

const array = [4, 2, 4, 3, 5, 5, 2, 5, 2, 5, 7];

function quick(array) {
  if (array < 2) {
    return array;
  }
  let middleIndex = Math.floor(array.length / 2);
  let pivot = array[middleIndex];
  let left  = [];
  let right = [];

  for (let i = 0; i < array.length; i++) {
    if (i === middleIndex) {
      continue;
    }
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quick(left), pivot, ...quick(right)];
}

console.log(quick(array));
