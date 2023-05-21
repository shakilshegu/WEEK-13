let array = [9,8,6,7,12]
function partition(array,lower,upper){
let pivot = array[lower]
let start = lower
let end = upper

while(start < end ){
    while(array[start] <= pivot){
        start++;
    }
    while(array[end] > pivot){
         end--;
    }
    if(start < end){
        let temp = 0 
        temp = array[start]
        array[start] = array[end]
        array[end] = temp
    }
}
 temp = array[lower]
 array[lower] = array[end]
 array[end] = temp
 return end;
}

function quicksort(array,lower,upper){
       if(lower < upper){
        loc = partition(array,lower,upper)
        quicksort(array,lower,loc-1)
        quicksort(array,loc+1,upper)
        
       }
       
}

 quicksort(array,0,array.length-1)
 console.log(array);

