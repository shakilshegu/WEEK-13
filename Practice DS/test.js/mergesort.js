function mergsort(arr){
   if(arr.length < 1){
    return arr
   }
   const mid = Math.floor(arr.length/2)
   const leftarr = arr.slice(0,mid)
   const rightarr = arr.slice(mid)
   return merge(mergsort(leftarr),mergsort(rightarr))
}
function merge(leftarr,rightarr) {
    const sortedarr =[]
    while(leftarr.length && rightarr.length){
        if(leftarr[0]<=rightarr[0]){
            sortedarr.push(leftarr.shift())
        }else{
            sortedarr.push(rightarr.shift())
        }
    }
    return [...sortedarr,...leftarr,...rightarr]
}

const arr = [2,5,3,1,5,3,5,6]
console.log(mergsort(arr));