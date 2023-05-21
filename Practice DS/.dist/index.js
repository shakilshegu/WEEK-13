const arr =["s","h","a","k","i"]
for(let i=0;i<arr.length;i++){
    let ascival = arr[i].charCodeAt(0)
    if(i==0 || i==arr.length-1){
        let  b = ascival-32
        let chars=String.fromCharCode(b)
        console.log(chars);
    }else{
        console.log(arr[i]);
    }
}

const arr1 = ["s","h","k","i","l"]
for( let i=0;i<arr1.length;i++){
    let ascivalu = arr1[i].charCodeAt(0)
    if(i==2){
        let x = ascivalu-32
        let chars= String.fromCharCode(x)
        console.log(chars);
    }else{
        console.log(arr1[i]);
    }
}


class checker{
    binary(start,end,arry,x){
        let mid=Math.floor((start+end)/2)
        if(arry[mid]==x){
            return mid
        }
        else if(x>arry[mid]){
            start = mid-1
        }
        else if(x<arry[mid]){
            end=mid-1

        }
        return -1
        }
}

const check = new checker()
const arry = [1,2,4,5,6,7,8,9]
let start = 0
let end = arry.length-1
console.log(check.binary(start,end,arry,x=5));

