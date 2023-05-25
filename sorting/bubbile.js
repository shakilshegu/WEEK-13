

let arr1 = [9, 8, 7, 5, 4, 3, 2, 1];
for (i = 0; i < arr1.length ; i++) {
  for (j = 0; j < arr1.length - 1; j++) {
    if (arr1[j] > arr1[j + 1]) {
      let temp = arr1[j];
      arr1[j] = arr1[j + 1];
      arr1[j + 1] = temp;
    }
  }
}

console.log(arr1);
