class Stack {
    constructor() {
        this.items = [];
    }

    push(value) {
        this.items.push(value);
    }

    pop() {
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.toString());
    }

    change(position, value) {
        if (position >= 0 && position < this.items.length) {
            this.items[position] = value;
            return true;
        }
        return false;
    }

    findMiddle() {
        const middleIndex = Math.floor(this.items.length / 2);
        return this.items[middleIndex];
    }

    sum() {
        let total = 0;
        for (let i = 0; i < this.items.length; i++) {
            total += this.items[i];
        }
        return total;
    }

    reverseElements() {
        this.items = this.items.reverse();
    }

    deleteMiddle() {
        const middleIndex = Math.floor(this.items.length / 2);
        this.items.splice(middleIndex, 1);
    }
}

const stack1 = new Stack();
console.log(stack1.isEmpty());
stack1.push(290);
stack1.push(22);
stack1.push(33);
stack1.push(44);
stack1.push(55);
stack1.push(66);

console.log(stack1.size());
stack1.print();
console.log(stack1.pop());
console.log(stack1.peek());

stack1.change(1, 55);
console.log(stack1.size());
stack1.print();

console.log("Middle element:", stack1.findMiddle());
console.log("Sum of elements:", stack1.sum());

stack1.reverseElements();
stack1.print();

stack1.deleteMiddle();
console.log("After deleting middle element:");
stack1.print();



