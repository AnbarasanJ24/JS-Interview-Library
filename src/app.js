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

    // Push element at the end - Time complexity - O (1)
    push(value) {

        // Create new node
        let newNode = new Node(value);

        // Check head exists or not, 
        // If exists make the new node as tail
        // else Insert the element next to the tail
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        // return complete list
        this.length++;
        return this;

    }

    // Remove element at the end - Time complexity O (1)
    pop() {

        // Base case 
        if (!this.head) return;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = 0
            return;
        }

        // Logic
        let lastItem = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;

        // return last removed Item 
        this.length--;
        return lastItem;
    }

    // Remove element from the start - Time Complexity O (1)
    shift() {

        // Base case 
        if (!this.head) return undefined;

        // Core logic
        let oldHead = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }

        // return new node
        this.length--;
        return oldHead;
    }

    // Unshift - Add element at the first -Time complexity is O (1)
    unShift(value) {

        let newNode = new Node(value);

        // Logic
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        // return list
        this.length++;
        return this;

    }

    // Get Elemnet at given index - Time complexity O (N)
    // Index starts from zero
    get(index) {

        // base case
        if (index < 0 || index === this.length) return undefined;

        // let middle = Math.floor(this.length/2);
        // let result = index <= middle ? getIndexedNode(this.head)

        // return node
    }
}

let dll = new DoublyLinkedList();
dll.push(5);
dll.push(4);
dll.push("Last Item");
dll.unShift("First")
dll.unShift("Second")
console.log("DLL", dll)
