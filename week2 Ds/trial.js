// let array = [5,6,9,2,3,1,12,10]
//  let small = array[0]
// let curr = 0
// let k =0;
// let prev = 0;
// for(let j = 0 ; j< array.length ; j++){
//     for(let i = j ; i< array.length ; i++){
//         if( array[i] < small){
//             console.log(i);
//             curr = i
//             small = array[i]
//         }
//     } 
//         temp = array[curr]
//         array[curr] = array[j]
//         array[j] = temp
//         small=array[j+1]
//         k++;
        
//     }

// console.log(array);


// // function partition(array,start,end){
// //     let i = start + 1
// //     let pivot = array[start]
// //     for(let j = start+1 ; j<= end ; j++){
// //         if(array[j]< pivot){
// //             let temp = array[i]
// //                array[i] = array[j]
// //                array[j] = temp 
// //                i++;
// //         }
// //     }
// //     let temp = array[i -1]
// //     array[i - 1] = array[start]
// //     array[start]= temp 
// //     return i-1

// // }
// // function quickSort(array,start,end){
// //      if(start < end){
// //      let pivot = partition(array,start,end)
// //       quickSort(array,start,pivot-1) 
// //       quickSort(array,pivot+1,end)
// //      }
// // }
// // let array = [1,2,3,4,14,50,1,5,2]
// // quickSort(array,0,array.length-1)
// // console.log(array);



// function partition(array,start,end){
//     let i = start +1 
//     let pivot = array[start]
//     for(let j = start +1 ; j <= end ; j++){
//         if(array[j]< pivot){
//             let temp = array[j]
//             array[j] = array[i]
//             array[i] = temp 
//             i++;
//         }
//     }
//     temp = array[i-1]
//     array[i-1] = array[start]
//     array[start]=temp 
//     return i - 1
// }
// function quickSort(array,start,end){
//     if(start < end){
//     let pivot = partition(array,start,end)
//     quickSort(array,start,pivot-1)
//     quickSort(array,pivot+1,end)
//     }
// }
// array = [8,66,2,8,1,11,15,14]
// quickSort(array,0,array.length-1)
// console.log(array);



    //   insertion sort


// let array = [8,12,-25,66,4]
// for(let i = 0 ; i< array.length ; i++){
//    let j = i - 1 ;
//    let temp = array[i]
//     while(j >= 0 && array[j] > temp){
//         array[j+1] = array[j]
//         j--;
//     }
//     array[j+1] = temp;
// }
// console.log(array);


        //   bouble sort


let arra = [7,-8,-12,55,4]
let limit = arra.length
for(let i = 0 ; i< limit ; i++){
    for(let j = 0 ; j < limit - i - 1  ; j++){
        if(arra[j] > arra[j+1]){
            let temp = arra[j]
            arra[j] = arra[j+1]
            arra[j+1] = temp 
           
        }
    }
}
console.log(arra);
