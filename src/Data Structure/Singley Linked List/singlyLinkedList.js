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


}

let list = new SinglyLinkedList();
list.push("Hello");
list.push("There!");
list.push(24);
console.log("List", list)