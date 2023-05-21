let arr = [1, 2, 5, 37, 9, 2, 4];
for (i = 0; i < arr.length - 1; i++) {
  for (j = 0; j < arr.length - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr);

let arr1 = [9, 8, 7, 5, 4, 3, 2, 1];
for (i = 0; i < arr1.length - 1; i++) {
  for (j = 0; j < arr1.length - 1; j++) {
    if (arr1[j] > arr1[j + 1]) {
      let temp = arr1[j];
      arr1[j] = arr1[j + 1];
      arr1[j + 1] = temp;
    }
  }
}

console.log(arr1);
