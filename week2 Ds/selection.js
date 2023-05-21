let array = [5,6,-9,2,3,-1,12,10]

for(let j = 0 ; j< array.length ; j++){
           minindex = j
    for(let i = j ; i< array.length ; i++){
        if(array[minindex] < array[i] ){
            minindex = i 
        }
    } 
        temp = array[minindex]
        array[minindex] = array[j]
        array[j] = temp
    }

console.log(array);


// let arra = [5,15,12,-12,13]

// for(let i = 0 ; i< arra.length-1 ; i++){
//         minindex = i
//     for(let j = i ; j < arra.length ; j++){
//         if(arra[minindex] > arra[j]){
//             minindex = j 
//         }
//     }  
//     let temp = arra[minindex]
//        arra[minindex]= arra[i]
//        arra[i] = temp

// }
// console.log(arra);



// let array = [5,2,8,5,3,12,10]

// for(let i = 0 ; i< array.length-1 ; i++){
//     minindex = i
//     for(let j = i ; j< array.length ; j++){
//         if(array[minindex] > array[j]){
//             minindex = j 
//         }
//     }
//     let temp = array[minindex]
//     array[minindex] = array[i]
//     array[i] = temp 
// }
// console.log(array);




// let arra = [ 8,6,1,2,8,7,-2]

// for(let i = 0 ; i < array.length ; i++){
//     j = i - 1
//     temp = arra[i]
//     while( j >=0 && arra[j] > temp){
//         arra[j+1]=  array[j]
//         j--;
//     }
//     arra[j+1] = temp
// }
// console.log(arra);


// let arr = [4,12,4,5,77,-5,-1]
// let n = arr.length

// for(let i = 0 ; i< arr.length ; i++){
//     for(j = 0; j<n ; j++ ){
//         if(arr[j] > arr[j+1]){
//             temp = arr[j+1]
//             arr[j+1] = arr[j]
//             arr[j] = temp
//     }
//     }n--;
// }

// console.log(arr);


