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

    // Get element at the passed index -Time complexity O (N)
    get(index) {

        // corner case 
        if (index < 0 || index >= this.length) return null;

        // Create counter and initialize current node 
        // Keep updating current node untill index equal to current
        // Once matched update the current node value
        // let current = this.head;
        // let counter = 0;
        let counter = 0;
        let current = this.head;

        while (current && counter !== index) {
            current = current.next;
            counter++;
        }

        // return element at the passed index
        return current;
    }

    // Set Element at the passed index -Time complexity O (N)
    set(index, value) {

        // Base case 
        if (index < 0 || index >= this.length) return null;

        //  use get function
        let current = this.get(index);
        current.value = current ? value : null;

        // Return new node
        return current;

    }

    // Insert new node at the specific position-Time complexity O (N)
    insert(index, value) {

        // Corner case, return null if index less than zero and 
        // greater then length
        // If index is zero then use unshift
        // If index match with the length then use push
        if (index < 0 || index > this.length) return false;
        if (index === 0 || previous === 0) return !!this.unshift(value);
        if (index === this.length || next === this.length) return !!this.push(value);


        // Create new node & Get current and previous node 
        let newNode = new Node(value);
        let previous = this.get(index - 1);
        let next = this.get(index);
        previous.next = newNode;
        newNode.next = next;


        // return boolean
        this.length++;
        return true;
    }

    // Remove element from the list for give index
    // Skipping comments because this function same like insert process
    // -Time complexity O (N)
    remove(index) {

        // Corner case
        // If index is zero then use shift
        // If index is length minus -1 then use pop
        if (index < 0 || index >= this.length) return false;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        // Get current and next node
        // Point current next to next node 
        let previous = this.get(index - 1);
        let removed = previous.next;
        previous.next = removed.next;

        // return boolean 
        this.length--;
        return true;
    }

    // Print all values in list
    print() {
        if (!this.head) return null;
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    // Reverse the linked list - 
    // Naive Time complexity -> O (N) and space complexity O (N)
    reverse() {

        // Base case
        if (!this.head) return null;

        // Loop the linked list and collect value in array and reverse it
        // Loop the same linked list and update the value from array
        let current = this.head;
        let values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }

        let index = values.length;
        current = this.head;
        while (current) {
            current.value = values[--index];
            current = current.next;
        }

        return this;
    }

    // Reverse In place - Efficient 
    // Time complexity - O (N)
    // Space complexity - O (1)

    reverseInplace() {
        // 1->2->3->Null
        //  P  C  
        // Null<-1<- 2<- 3

        // Corner case
        if (!this.head) return null;

        // Create current,previous Nodes
        // iterate the loop
        // Take next back up and move current pointer to previous
        // move current and previous for next node iteration
        let current = this.head;
        this.head = this.tail;
        let previous = null;
        while (current) {
            let next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        return this;
    }

}

let list = new SinglyLinkedList();
list.push("Hello");
list.push("There!");
list.push("How are you");
let removed = list.pop();
list.pop();
list.shift();
list.insert(0, "Good Morning")
list.set(7, "Anbu")
let getList = list.get(2);
list.remove(2);
console.log("removed", removed)
let reversedList = list.reverseInplace();
console.log("List", reversedList.print());

