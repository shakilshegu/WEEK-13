
function binery(start,end,arr,target){
    mid = Math.floor(start+(end-start)/2)
    if(start>end){
        return -1
    }
    if(arr[mid]== target){
        return mid
    }
    if(arr[mid]<target){
        return binery(mid+1,end,arr,target)
    }else{
        return binery(start,mid-1,arr,target)
    }
}











let arr = [1,2,3,4,5,6,7,8]