// selection sort

array = [55,12,-5,66,-2,64]

for(let i = 0 ; i< array.length ; i++){
    mini = i
    for( let j = i +1 ; j < array.length ; j++){
        if(array[j] < array[mini]){
            mini = j 
        }
    }
    temp = array[i] 
    array[i] = array[mini]
    array[mini] = temp 
}


console.log(array);


// bouble sort 


let arr = [12,6,-1,88,63,2,5,4]
let limit = arr.length
for(let i = 0 ; i< arr.length ; i++){
    for(j = 0 ; j< limit ; j++){
        if(arr[j] > arr[j+1]){
            temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
        
    }limit--
}
console.log(arr);


// insertion sort 


array1 = [12,-5,88,19,10,22,2]

for(let i = 1 ; i < array1.length ; i++){
    let temp = array1[i]
    j = i -1
    while(  j >= 0 && array1[j] > temp){
        array1[j+1] = array1[j]
    }
    array1[j+1] = temp 
}

console.log(array1);

