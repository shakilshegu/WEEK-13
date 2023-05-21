
// function selection(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let min=i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[min]){
//                 min=j
//             } 
//         }
//         let temp=arr[i]
//         arr[i]=arr[min]
//         arr[min]=temp
//     } 
//     return arr
// }

// const arr=[1,3,5,57,2,86,2,1,30]
// console.log(selection(arr))

function selectionsort(arr ) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min != i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

const arr = [7, 3, 5, 57, 2, 86, 2, 5, 30, 1]
console.log(selectionsort(arr));

