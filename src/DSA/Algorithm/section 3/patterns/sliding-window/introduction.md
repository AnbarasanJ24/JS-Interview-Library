# Sliding Window Pattern

    # Instead of repeatedy calculating sub array or sub string, we can minize the work using slidining window technique  
    # we will create a window which can be either array or number from one position to another
    # Based on problem statement, window size can be increased or decreased or new window can be created

# Indentify 
    # (Array or string) + (sub array or sub subtring) + (lonngest, shortest, max or min) with or without K(window size)

# Types
    # we have fixed (Easy) and variable window (Medium). In case of finding largest or smallest window it will be mostly variable window size

# Reference : https://leetcode.com/discuss/study-guide/657507/Sliding-Window-for-Beginners-Problems-or-Template-or-Sample-Solutions
# Template
    # create a counter or hash map to check each array or string input and move the same one by one using outer loop
    # Have a while loop inside to reduce or maintain the window side by adding a element and removing a element from the window.
    # Store the current maximum window size or minimum window size or number of windows based on problem requirement.

# Brute Force 
    => Repatative work, two loops 
    for(let i = 0 ; i < arr.length ; i++)
        for (let j = i; j < i+k ; j++ ) //K - Window size

