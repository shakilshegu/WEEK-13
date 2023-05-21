// function selectionsort(arr ) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         let min = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[min]) {
//                 min = j;
//             }
//         }
//         if (min != i) {
//             let temp = arr[i];
//             arr[i] = arr[min];
//             arr[min] = temp;
//         }
//     }
//     return arr;
// }

// const arr = [6,8,6,4,32,1,3]
// console.log(selectionsort(arr));

function selection(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      let min = i;
      for (let j = i + 1; j < arr.length; j++) { // Fixed the loop condition
        if (arr[j] < arr[min]) {
          min = j;
        }
      }
      if (min !== i) {
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
      }
    }
    return arr;
  }
  
  let arr = [1, 2, 3, 42, 4, 2, 34, 2, 32];
  console.log(selection(arr));
  