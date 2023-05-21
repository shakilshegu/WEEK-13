let array = [8,5,6,4,11,2]
let n = array.length

for(let i = 0 ; i< n ; i++){
    for(j = 0 ; j< n-i-1 ; j++){
       if(array[j] > array[j+1]){
        let temp = array[j]
        array[j]= array[j+1]
        array[j+1] = temp
         
       }
    }
}
console.log(array);

// let array = [8,5,6,4,11,2]
// let n = array.length

// for(let i = 0 ; i< n ; i++){
//     for(j = 0 ; j< n-i-1 ; j++){
//        if(array[j] > array[j+1]){
//         let temp = array[j]
//         array[j]= array[j+1]
//         array[j+1] = temp
         
//        }
//     }
// }
// console.log(array);