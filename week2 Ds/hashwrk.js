class hashtable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let total = 0
        for(let i= 0 ; i< key.length ; i++){
            total += key.charCodeAt(i)
        } 
        return total % this.size 
    }
    set(key,value){
     let index = this.hash(key)
     let bucket = this.table[index]
     if( !bucket){
        this.table[index] = [[key,value]]
    }
    else{
        let same = bucket.find(item => item[0] === key)
        if(same){
            same[1] = value
        }else{
            bucket.push([key,value])
        }
    }
}
   get(key){
    let index = this.hash(key)
    let bucket = this.table[index]
     if(bucket){
      let same = bucket.find(item => item[0] === key)
        if(same){
           return same[1]
        }
    }
    return console.log("key not found");
    
   }
   remove(key){
    let index = this.hash(key)
    let bucket = this.table[index]
    if(bucket){
      let same = bucket.find(item => item[0] === key)
      if(same){
       return bucket.splice(bucket.indexOf(same),1) 
      }
    }
   }
   prime(key){
    let index = this.hash(key)
    let count = 0 
    for(let i = 2 ; i< index ; i++){
        if(index % i == 0){
            count ++;
        }
    }if(count == 0){
       return console.log(index,"prime");
    }else{
       return console.log(index,"not prime");
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

let tabl = new hashtable(50)
tabl.set("name","palakkad")
tabl.set("name","knkhkh")
tabl.set("age",20)
tabl.set("mane","prasad")
tabl.set("place","palakkad")
tabl.set("myname","krishnan")
tabl.get("name")
tabl.remove("age")
// table.remove("")

// tabl.prime("aaalaikkal")
// console.log(tabl.get("mane"));
 tabl.display()
