function quick(arr){
    if(arr.length<2){
        return arr
    }
    let pivot=arr[arr.length-1]
    let left=[]
    let right=[]

    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quick(left), pivot, ...quick(right)]
}

// const arr=[1,3,5,57,2,86,2,1,30]
// console.log(quick(arr))

// function quick(arr) {
//     if (arr.length < 2) {
//         return arr;
//     }
//     let middleIndex = Math.floor(arr.length / 2);
//     let pivot = arr[middleIndex];
//     let left = [];
//     let right = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i === middleIndex) {
//             continue; // Skip the pivot element
//         }
//         if (arr[i] < pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }
//     return [...quick(left), pivot, ...quick(right)];
// }

// const arr = [1, 3, 5, 57, 2, 86, 2, 1, 30];
// console.log(quick(arr));
