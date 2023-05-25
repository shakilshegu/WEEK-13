function quick(arr){
    if(arr.length < 2){
        return arr
    }
    let middleIndex = Math.floor(arr.length/2)
    let pivot = arr[middleIndex]
    let left = []
    let right = []
    for(let i =0 ;i<arr.length;i++){
        if(i === middleIndex){
            continue
        }
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quick(left),pivot,...quick(right)]
}

let arr = [2,3,4,51,5,6,3,5]
console.log(quick(arr));
