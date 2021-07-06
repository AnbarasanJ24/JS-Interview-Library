# Data structures

    # It's collection of values and maintain relationship among them.
    # We have some functions that can be applied to the collection of values
    # Different data structure is good for difefrenr things

# Linked List (Consider when we do more insert and delete operation)

    # Its a DS which is used to store value, it contains head, tail and length
    # we cannot access value with index as like array
    # Linked List consists of nodes and each nodes have value and pointer to next node or null
    # Metaphor -> Array (Elevator) -> With index we can directly go to the place
                  Linked List (staircase) -> we need to start from then head to reach the place

# Comparison Array Vs Linked List

    # Linked List
        # Do not have indexes
        # Connected via nodes with a next pointer
        # Random access is not allowed
        # Insertion / Deletion is efficient then array
    # Array
        # Element arranged with index
        # Insertion and deletion can be expensive
        # Random access is easy

# Comparison Singly Linked List vs Doubly lInked List

    # SLL
        # Each node has only one pointer so less memory
        # It is good for insert element at begining of the list
        # Reverse the linked list will be O (N) but requires more work
    # DDL
        # Each node has two pointers so more memory -> more flexibility
        #
        # we can start from tail and do the reverse easily

# Time complexity comparison

            Singly Linked List           Doubly Linked List

<!--
push        O (1)                        O (1)
pop         O (N)                        O (1)
shift       O (1)                        O (1)
unshift     O (N)                        O (1)
get         O (N)                        O (1)
set         O (N)                        O (1)
insert      O (N)                        O (1)
remove      O (N)                        O (1)
reverse     O (N)                        O (1)
-->
