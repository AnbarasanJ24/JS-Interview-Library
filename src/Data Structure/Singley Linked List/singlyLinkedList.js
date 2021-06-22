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

    // Insert element at the end (Push)
    push(value) {

        // Create a Node with value
        let newNode = new Node(value);

        // If Head is null then new node -> Head and Tail 
        // Else Tail will point to new node then update tail as new node 

        if (head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            tail = newNode;
        }


    }
}