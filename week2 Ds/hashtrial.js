class hashtable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
  hash(key){
    let total = 0
    for(let i = 0; i< key.length ; i++){
     total += key.charCodeAt(i)
    }
    return total % this.size
}
 set(key,value){
    let index = this.hash(key)
    console.log(index);
    if(this.table[index] == null)
    {
       this.table[index] = []
    } 
    this.table[index].push([key,value])
}
 get(key){
    let index = this.hash(key)
    return this.table[index]
 }
 remove(key){
    let index = this.hash(key)
    this.table[index] = undefined
 }
 prime(key){
    let num = this.hash(key)
   let flag = 0
    for(let i = 2 ; i< num ; i++){
        if(num % i == 0 ){
              flag ++
        }
    }if(flag == 0){
        console.log("prime");
    }else{
        console.log("not prime");
    }

 }
 display(){
    for(let i = 0 ; i< this.table.length ; i++){
        if(this.table[i]){
            console.log(i,this.table[i]);
        }
    }
 }
  
}
let table = new hashtable(22)
table.set("name","prasad")
table.set("mane","collition")
table.set("pravin","collition")
table.set("age",17)
table.prime("pravin")
table.display()
 console.log(table.get("name"));
 