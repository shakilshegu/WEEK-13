// let arr = [1,5,12,7,77,1,3,5]


// for(let i=1;i<arr.length;i++){
//     let temp = arr[i];
//     let j = i-1;
//     while (j>=0 && arr[j]>temp) {
//         arr[j+1] = arr[j];
//         j--;
//     }
//     arr[j+1]=temp
// }

// console.log(arr)

// let arr = [12,4,45,6,8,9,3]

// for(let i=1;i<arr.length;i++){
//     let temp = arr[i]
//     let j = i-1;
//     while(j>=0 && arr[j]>temp) {
//         arr[j+1]=arr[j]
//         j--
//     }
//     arr[j+1] = temp
// }

// console.log(arr);


// let arr = [1,2,3,4,5,6,7]

// for(let i=1;i<arr.length;i++){
//     let temp = arr[i]
//     let j = i-1
//     while (j>=0&&arr[j]>temp) {
//         arr[j+1]= temp
//         j--;
//     }
//     arr[j+1] = temp
// }

// console.log(arr);

let arr = [8, 6, 5, 4, 3, 2];

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
