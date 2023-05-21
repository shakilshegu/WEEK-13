class hashTable{
    constructor(size)
    {
        this.table=new Array(size)
        this.size=size;
    }
    hash(key)
    {
        let total=0;
        for(let i=0;i<key.length;i++)
        {
            total+= key.charCodeAt(i)
        }return total%this.size;
    }
    set(key,value)
    {
        let index=this.hash(key)
        if(this.table[index]==null)
        {
            this.table[index]=[]
        }this.table[index].push([key,value])
    }
    prim(key){
        for(let i = 0 ; i < key.length ; i++){
            tot += key.charCodeAt(i)
        }
    }
    get(key)
    {
        let index=this.hash(key)
        if(this.table[index]==null)
        {
            return undefined;
        }for(let i=0;i<this.table[index].length;i++)
        {
            if(this.table[index][i][0]==key){
            return this.table[index][i][1]
            }
        }return undefined
    }
    remove(key)
    {
        let index=this.hash(key)
        if(this.table[index]==null)
        {
            return undefined;
        }for(let i=0;i<this.table[index].length;i++)
        {
            if(this.table[index][i][0]==key)
            {
                this.table[index].splice(0,1)
                return true
            }
        }return undefined;
    }
    display()
    {
        for(let i=0;i<this.table.length;i++)
        {
            if(this.table[i])
            {
                console.log(i,this.table[i]);
            }
        }
    }

}
let table=new hashTable(5)
table.set("name","prasad")
table.set("mane","collition")
table.set("age","2")
console.log(table.get("name"));
  table.remove("name")
 table.display()