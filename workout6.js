function meargshort(arr){
    if(arr.length<=1){
        return arr;
    }
    const mid =Math.floor(arr.length/2)
    const leftArr = arr.slice(0,mid)
    const rightArr =arr.slice(mid)
    return merge(meargshort(leftArr),meargshort(rightArr));
}

function merge(leftArr,rightArr){
    const sortedArr = []
    while (leftArr.length && rightArr.length) {
        if(leftArr[0]<=rightArr[0]){
            sortedArr.push(leftArr.shift());
        }else{
            sortedArr.push(rightArr.shift());
        }
    }
    return [...sortedArr,...leftArr,...rightArr]
}

const arr = [2,4,5,2,4,53,5,]

console.log(meargshort(arr));