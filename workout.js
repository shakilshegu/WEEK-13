class stack {
    constructor(){
        this.items = []
    }

    push(value){
        this.items.push(value);
    }
    pop(){
        return this.items.pop()
    }
    isempty(){
        return this.items.length === 0;
    }
    peek(){
        return this.items[this.items.length-1];
    }
    size(){
        return this.items.length
    }
    change(position,value){
        if(position>=0 && position<this.items.length){
            this.items[position] = value
            return true;
        }
        return false;
    }
    middile(){
        let middile = Math.floor(this.items.length/2);
        return this.items[middile]
    }
    sum(){
        let sum = 0
        for(let i = 0;i<this.items.length;i++){
            sum +=this.items[i]
        }
        return sum
    }
    reverce(){
        this.items = this.items.reverse()
    }
    deletemiddile(){
    let middile = Math.floor(this.items.length/2)
    this.items.splice(middile,1)
    }
    print(){
        console.log(this.items.toString());
    }
}

const list = new stack()
list.push(30)
list.push(50)
list.push(40)
list.push(55)
list.push(66)
list.push(77)
list.change(1,33)
list.pop()
console.log(list.isempty());
console.log(list.peek());
console.log(list.size());
console.log(list.middile());
console.log(list.sum());
list.reverce()
list.print()