// Queue is a data structure based on FIFO principle
// First In First Out
// Any human queues, Preference to downnload and uploading resources
// Printing one page of many pages maintained in queue

// Time complexity
// Insert and remove at O (1)
// Search and Access at O (N)

// Array Implementation 
// we can enqueue using push O (1) and dequeue using shift O (N)
// Or we can enqueue using unshift O (N) and dequeue using pop O (1)

// Linked List Implementation
// we can Single Linked list which support insert at last O (1) 
// and remove at firdt O (1)
// We can also use Doubly linked List which support insert at last O (1) 
// and remove at firdt O (1)

// we can do insert at end and remove at first - O (1)
// Else we can insert at first O (1) and remove at last - O (N  )


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    // Insert element at last
    // Create a Node and insert next to tail
    enqueue(data) {

        let newNode = new Node(data);

        // Base case
        if (this.length === 0) {
            this.first = this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode
        }

        // return new length
        return this.length++;

    }

    // Remove at first 
    // Store head and move head to next item
    dequeue() {

        // Base case
        if (this.length === 0) return;

        let temp = this.first;

        if (this.length === 1) {
            this.first = this.last = null;
        } else {
            this.first = this.first.next;
        }

        // return removed item
        this.length--;
        return temp.data;
    }

}

let queue = new Queue();
queue.enqueue("1")
queue.enqueue("2")
queue.enqueue("3")
queue.enqueue("4")
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())