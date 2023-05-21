class Node{
    constructor(key,value){
        this.key = key;
        this.value = value;
        this.next=null;
    }
}
class Hash{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }
    hash(key){
        let hash = 0;
        for(let i=0;i<key.length;i++){
            hash +=key.charCodeAt(i);
        }
        return hash%this.size;
    }
    set(key,value){
        const index = this.hash(key);
        const bucket = this.table[index];
        if(!bucket){
            this.table[index]=new Node(key,value);
        }else{
            let current = this.table[index];
            while(current.next){
                if(current.key === key){
                    console.log(key);
                    current.value = value;
                    return;
                }
                current = current.next;
            }
            current.next = new Node(key,value);
        }
    }

    get(key){
        const index = this.hash(key);
        let current = this.table[index];
        while(current){
            if(current.key === key){
                 console.log(current.value);
            }
            current = current.next;
        }
        return console.log("key not found at the hash table");
    }
    delete(key){
        const index = this.hash(key);
        let current = this.table[index];
        if(!current){
            return console.log("not key fount hastable");
        }
        if(current.key === key){
            this.table[index]=current.next;
             return console.log("deleted",current.value);
        }
        while(current.next){
            if(current.next.key === key){
                const value = current.next.value;
                current.next = current.next.next;
                return console.log("deleted", value);
            } 
            current = current.next;
        }
        return console.log("not key fount hastable");
    }
    display() {
        for (let i = 0; i < this.size; i++) {
          let current = this.table[i];
          if (current) {
            while (current) {
              console.log(i,current.value);
              current = current.next;
            }
          }
        }
    }
}
const table = new Hash(50);
table.set('gender',"male");
table.set("mane","prasad");
table.set("name","dora");
table.set("place","palakkad");
table.set("place","aalaikkal");
table.display();
 
