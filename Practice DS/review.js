
//    function binery(start,end,arry,x){
//         let mid =Math.floor(start+(end-start)/2)
//         if(start>end){
//             return -1
//         }
//         if(arry[mid]==x){
//             return mid
//         }if(arry[mid]<x){
//            return binery(mid+1,end,arry,x)
//         }else {
//            return binery(start,mid-1,arry,x)
//         }
//     }

// const arry = [1,2,3,4,5,6,7,8]
// console.log(binery(0,arry.length-1,arry,5))

// function binery(start,end,arry,x){
//     let mid = Math.floor(start+(end-start)/2)
//         if(start>end){
//              return -1
//         }
//         if(arry[mid]==x){
//             return mid
//         }if(arry[mid]<x){
//             return binery(mid+1,end,arry,x)
//         }else{
//             return binery(start,mid-1,arry,x)
//         }
// }

// const arry = [1,2,3,4,5,6,7,8,9]
// console.log(binery(0,arry.length-1,arry,10));




// function binery(start,end,arr,x){
//     let mid = Math.floor(start+(end-start)/2)
//     if(start>end){
//         return -1
//     }
//     if(arr[mid]==x){
//         return mid
//     }
//     if(arr[mid]<x){
//         return binery(mid+1,end,arr,x)
//     }else{
//         return binery(start,mid-1,arr,x)
//     }
// }
// const arr = [1,2,3,4,5,6,7,8,9]
// console.log(binery(0,arr.length-1,arr,6));

// const arr = [6,5,4,3,9,8,0]
// function result(arr,t){
//     let p1=[]
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//               if(arr[i]+arr[j]==t){
//                  p1.push(arr[i],arr[j])
//                  return p1
//               }

//         }
//     }
// }
// console.log(result(arr,10))

// const sameNumber = (array, target) => {
//     for (i = array.length - 1; i >=0 ; i--) {
//         if(array[i] === target) {
//             array.splice(i, 1)
//             array.push(target)
//         }
//     }
//     return array;
// }

// const array = [6, 1, 6, 8, 10, 4, 15, 6, 3, 9, 6];
// const target = 6;

// console.log(sameNumber(array, target));

// const samenumber = (arr,t)=>{
//     for(i=arr.length - 1;i>=0;i--){
//         if(arr[i] === t){
//             arr.splice(i,1)
//             arr.push(t)
//         }
//     }
//     return arr
// }

// const arr = [6,1,3,4,5,6,8,9,4,3,6,7,6]

// function binery(start,end,array,target) {
//     if(start>end){
//         return -1
//     }
//     let mid = Math.floor(start+(end-start)/2)
//     if(array[mid] == target){
//         return mid
//     }
//     if(array[mid]<end){
//         return binery(mid+1,end,array,target)
//     }else{
//         return binery(start,mid-1,array,target)
//     }
// }

// const array = [1,2,3,4,5,6,7,8,9]
//  console.log(binery(0,array.length-1,array,8))