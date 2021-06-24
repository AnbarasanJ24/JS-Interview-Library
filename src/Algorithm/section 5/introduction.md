# In JS, we already have linear search using indexOf, includes, find and findIndex - Time complexity O(N)

# Comapring Bubble, Selection & Insertion

    # In completely sorted array or nearly sorted Bubble do minimum swap and Insertion just compare with next element without swap. Both are good at almost sorted
    # All three sorts average and worst time complexity is O (N^2)
    # O (N) for bubble and insertion sort, where O (N^2) for selection sort
    # Space complexity is O (N)

# All abover sorts are comparison sorts, we nned to compare element with element then will decide the sorting place

# we can do better using radix sort which is used to sort integer only not strings, Radix sort is faster than comparison sort but based on some proof they stated both radix and compariosn are equal
