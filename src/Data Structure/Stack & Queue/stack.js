// Stack is a data structure based on LIFO principle 
// LIFO - Last in first out
// Call stack and browser history object in browser
// Undo/Redo 

// Time compleixty 
// Insert, Remove - O (1)
// Search, Access - O (N)

// Array Implementation 
// We can use push and pop - Time complexity O (1)
// We can use unsfift and shift - Time complexity O (N)


// Linked List Implementation
// In singley linked list, add last is O (1) and removing at last is O(1)
// In Doubly linked list, add and remove at last is O (1)
// But in singley linked list we can add and remove at first is O (1)


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    // create Node, point new node to head and make new node as head
    push(data) {
        let newNode = new Node(data);

        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }

        return this.length++;
    }

    // If head exists then remove head
    // else store head in temp and move head to next step
    pop() {

        if (!this.first) return null;
        let tempNode = this.first;

        if (this.length === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }

        // return removed value
        this.length--;
        return tempNode.data;
    }
}

let stack = new Stack();
stack.push("1")
stack.push("2")
stack.push("3")

console.log(stack.pop())
console.log(stack.pop())