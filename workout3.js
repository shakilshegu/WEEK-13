
///////////////dubboile short///////////////////////////


// let arr = [1,2,3,4,5,67,4,2]
// for(let i = 0;i<arr.length-1;i++){
//     for(let j =0;j<arr.length-1;j++){
//         if(arr[j]>arr[j+1]){
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] =  temp
//         }
//     }
// }

// console.log(arr);


////////////////insertionsort/////////////////////////////

// let a = [1,2,4,2,1,3,2]

// for(let i= 1;i<a.length;i++){
//     let temp = a[i]
//     let j = i-1
//     while(j>=0 && a[j]>temp){
//         a[j+1] = a[j]
//         j--
//     }
//     a[j+1] = temp
// }

// console.log(a);


/////////////////////seletion sort////////////////////////////

// let b = [22,3,4,42,3,4,2,4,22]
// function selection(b){
//     for(let i =0;i< b.length-1;i++){
//         let min = i
//         for(let j =i+1;j<b.length;j++){
//             if(b[j]<b[min]){
//                 min = j
//             }
//         } 
//         if(min!== i){
//            let temp = b[i]
//            b[i] = b[min]
//            b[min]=temp
//         } 
//     }
//     return b 
// }
// console.log(selection(b));

////////////////////quick sort////////////////

// const x = [2,4,2,4,2,244,24,42,4]

// function quick(x){
//     if(x.length < 2){
//         return x
//     }
//     let middleIndex = Math.floor(x.length/2)
//     let pivot = x[middleIndex]
//     let left = []
//     let right = []

//     for(let i=0;i<x.length;i++){
//         if(i === middleIndex){
//             continue
//         }
//         if(x[i]<pivot){
//             left.push(x[i])
//         }else{
//             right.push(x[i])
//         }
//     }
//     return [...quick(left),pivot,...quick(right)]
// }

// console.log(quick(x))

/////////////////////meargeshot////////////////////////
// const f = [2, 3, 13, 1, 31, 3, 3, 2];

// function meargsort(f) {
//   if (f.length <= 1) {
//     return f;
//   }
//   const mid = Math.floor(f.length / 2);
//   const leftArr = f.slice(0, mid);
//   const rightArr = f.slice(mid);

//   return merge(meargsort(leftArr), meargsort(rightArr));
// }

// function merge(leftArr, rightArr) {
//   const sortedArr = [];
//   while (leftArr.length && rightArr.length) {
//     if (leftArr[0] <= rightArr[0]) {
//       sortedArr.push(leftArr.shift());
//     } else {
//       sortedArr.push(rightArr.shift());
//     }
//   }
//   return [...sortedArr, ...leftArr, ...rightArr];
// }

// console.log(meargsort(f));
