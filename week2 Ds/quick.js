

//paritioning the pivot
function partition(arr, start, end) {
    let i = start + 1;
    let pivot = arr[start];

    for (let j = start + 1; j <= end; j++) {
        if (arr[j] < pivot) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            i++;
        }
    }
    let temp = arr[i - 1]
    arr[i - 1] = arr[start]
    arr[start] = temp
    return i - 1 ;
}  
function quickSort(arr, start, end) {
    if (start < end) {
        //finding the correct pivot position
        let pivotPos = partition(arr, start, end);
        quickSort(arr, start, pivotPos - 1);
        quickSort(arr, pivotPos + 1, end);
    }
}
let arr = [10, 7, 15, 11, 6, 2];

quickSort(arr, 0,arr.length-1);
console.log(arr);



// const array =[5, 2, 8, 9, 1, 3, 7, 6, 4, 10];
// const result = quickSort(array)
// console.log(result);

// class hashtable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size 
//     }
//     hash(key){
//     let tot = 0 
//     for(let i = 0 ; i < key.length ; i++){
//         tot += key.charCodeAt(i)
//     } return tot % this.size
//     }
//     set(key,value){
//         let index = this.hash(key)
//         this.table[index] =[key,value] 
//     }
//     get(key){
//         let index = this.hash(key)
//         if()
//     }
//     display(){
//         for(let i = 0 ; i<this.table.length ; i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i]);
//             }
//         }
//     }

// }
// let table = new hashtable(5)
// table.set("name","prasad")
// table.set("placE","palakkad")
// table.display()