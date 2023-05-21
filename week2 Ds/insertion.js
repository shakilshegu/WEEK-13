let arr = [7, 4, -2,-9,-8,0,-1, 5];
let n = arr.length


for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  console.log(arr);





  
// for (let i = 0; i < n; i++) {   //number of rounds 
//     let temp = arr[i];
//     let j = i;
//     while (j > 0 && temp < arr[j - 1]) {//checking left side
//         arr[j] = arr[j - 1];
//         j = j - 1;//moving position by left one time
//     }
//     arr[j] = temp;   //correct index of value

// }
// console.log(arr);


