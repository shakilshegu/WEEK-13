function quick(arr){
    if(arr.length<2){
        return arr
    }
    let pivot=arr[arr.length-1]
    let left=[]
    let right=[]

    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quick(left), pivot, ...quick(right)]
}

const arr=[1,3,5,57,2,86,2,1,30]
console.log(quick(arr))

function quick(a) {
    if (a.length < 2) {
        return a;
    }
    let middleIndex = Math.floor(a.length / 2);
    let pivot = a[middleIndex];
    let left = [];
    let right = [];

    for (let i = 0; i < a.length; i++) {
        if (i === middleIndex) {
            continue;   
        }
        if (a[i] < pivot) {
            left.push(a[i]);
        } else {
            right.push(a[i]);
        }
    }
    return [...quick(left), pivot, ...quick(right)];
}

const a = [1, 3, 5, 57, 2, 86, 2, 1, 30];
console.log(quick(a));

function quick(m){
    if(m.length<2){
        return m
    }
    let middleIndex = Math.floor(m.length/2)
    let pivot = m[middleIndex]
    let left = []
    let right = []

    for(let i=0 ; i<m.length;i++){
        if(i === middleIndex){
            continue
        }
        if(m[i]<pivot){
           left.push(m[i])
        }else{
            right.push(m[i])
        }
    }
    return [...quick(left),pivot,...quick(right)]
}
let m =  [1,4,6,8,5,8,5,8,5]
console.log(quick(m))

function qick (frr){
    if(frr.length<2){
        return arr
    }
    let middleIndex = Math.floor(frr.length/2)
    let pivot = frr[middleIndex]
    let left = []
    let right = []
    for(let i = 0 ;i<frr.length;i++){
        if(i === middleIndex){
            continue
        }
        if(frr[i]<pivot){
            left.push(frr[i])
        }else{
            right.push(frr[i])
        }
    }
    return [...quick(left),pivot,...quick(right)]
}

const frr = [1, 3, 5, 57, 2, 86, 2, 1, 30];
console.log(quick(frr));