// Everything in Linked list has node

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class SinglyLinkedList {

    // On creation this three properties should be mandatory
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    // Insert element at the end (Push) - Time Complexity O (1)
    push(value) {

        // Create a Node with value
        let newNode = new Node(value);

        // If Head is null then new node -> Head and Tail 
        // Else Tail will point to new node then update tail as new node 

        if (this.head === null) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;

        // Return the new linked list 
        return this;
    }

    // Delete elenment at the last - Time complexity O (N)
    pop() {

        // Corner case
        if (!this.head) {
            this.length = 0;
            return;
        }

        // In case od single Node
        if (this.head === this.tail) {
            this.head = this.tail = null;
            this.length = 0;
            return;
        }

        // In case of multiple Node, find the tail Node and previous of it
        // Make the previous as tail
        let current = this.head.next;
        let previous = this.head;

        while (current.next !== null) {
            previous = previous.next;
            current = current.next;
        }
        previous.next = null;
        this.tail = previous;

        this.length--;


        // return the removed node value
        return current;
    }


    // Shift element at the begining - Time complexity O (1)
    shift() {

        // Base case 
        if (!this.head) {
            this.length = 0;
            return undefined;
        }

        // Store the head in seperate node to rettun at last 
        // Move head next to head
        let temp = this.head;
        this.head = this.head.next;

        if (this.length === 1) {
            this.tail = null;
        }

        this.length--;

        // return removed head
        return temp;
    }


    // Add node at the begining -Time complexity O (1)
    unshift(value) {

        let newNode = new Node(value);

        // Base case
        if (!this.head || this.length === 0) {
            this.head = this.tail = newNode;

        } else {
            // Create new Node and point its next to head
            // Update the current node as head
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;

        // return a added value
        return newNode;
    }

    // Get element at the passed index
    get(index) {

        // corner case 
        if (index < 0 || index >= this.length) {
            return null;
        }

        let counter = 0;
        let current = this.head;

        while (current && counter !== index) {
            current = current.next;
            counter++;
        }

        // return element at the passed index
        return current;
    }


}

let list = new SinglyLinkedList();
list.push("Hello");
list.push("There!");
list.push("How are you");
// let removed = list.pop();
// console.log("removed", removed)
// list.pop();
// list.pop();
// list.pop();
// list.shift();
// list.shift();
// list.shift();
// list.shift();
list.unshift("Good Morning")
let getList = list.get(5);
console.log("List", getList)