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
        if (index < 0 || index >= this.length) return undefined;

        // Get middle and based on that choose traverse from head or tail
        let middle = Math.floor(this.length / 2);
        let resultNode = index <= middle ? this.getNodeFromHead(index) : this.getNodeFromTail(index);

        // return node
        return resultNode;
    }

    // helper Methods
    getNodeFromHead(index) {
        let current = this.head;
        let count = 0;
        while (count !== index) {
            count++;
            current = current.next;
        }
        return current;
    }

    // helper Methods
    getNodeFromTail(index) {
        let current = this.tail;
        let count = this.length - 1;
        while (count !== index) {
            count--;
            current = current.prev;
        }
        return current;
    }

    // set value for give index - Time complexity O (N)
    set(index, value) {

        // Base condition checked in get Method
        let foundNode = this.get(index);

        if (!foundNode) return false;

        foundNode.value = value;
        return true;
    }

    // Insert value at given index
    insert(index, value) {

        // Base case
        if (index < 0 || index > this.length) return false;

        if (index === 0) return !!this.unShift(value);
        if (index === this.length) return !!this.push(value);

        let newNode = new Node(value);
        let left = this.get(index - 1);
        let right = left.next;

        left.next = newNode;
        newNode.prev = left;
        newNode.next = right;
        right.prev = newNode;

        // return true/false
        this.length++;
        return true;
    }
}

let dll = new DoublyLinkedList();
// dll.push(1);
// dll.push(2);
// dll.push(3);
// dll.push(4);
// dll.push(5);
// dll.push(6);
dll.insert(11, 1)
// dll.unShift("First")
// dll.unShift("Second")
console.log("DLL", dll.insert(-11, 1))
