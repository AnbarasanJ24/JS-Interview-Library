//  Create Doubly Linked list which support 
//  push, pop, shift, unshift, insert, remove , get, set, reverse 

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {

    constructor() {
        this.head = this.tail = null;
        this.length = 0;
    }

    // Push - Time complexity 
    push(value) {

        // Create new node
        let newNode = new Node(value);

        // Check head exists or not, 
        // If exists make the new node as tail
        // else Insert the element next to the tail
        if (!this.head) {
            this.head = newNode;
            return;
        } else {
            this.tail.next = newNode;
        }

        // return complete list
        this.length++;
        return this;

    }
}

let dll = new DoublyLinkedList();
dll.push(5);
dll.push(2);
console.log("DLL", dll)
