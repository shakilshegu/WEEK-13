

// let b = [3,4,5,6,3,7,5];

// for (let i = 1; i < b.length; i++) {
//   let temp = b[i];
//   let j = i - 1;
//   while (j >= 0 && b[j] > temp) {
//     b[j + 1] = b[j];
//     j--;
//   }
//   b[j + 1] = temp;
// }

// console.log(b);

let  m =[1,24,5,7,8,3,231,3,5]

for(i=1;i<m.length;i++){
    let temp =m[i]
    let j = i-1
    while (j>=0 && m[j]>temp) {
        m[j+1] = m[j]
        j--

    }
    m[j+1] = temp
}
console.log(m);