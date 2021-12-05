# what is Tabulation
    => Building a Table with previous solution iteratively 

# General Table Notes
    => For table we are using array, it should be always extra one space than requirement 
       (For Ex: fib(6) => Needs array of 0 to 6 which is 7 in length)
    => Fill the table with zero for counting problem 

# Tabulation Recipe
    => Visualize the problem as a table (Input which is reducing the problem)
    => size of the table is based on input+1 
    => initialize the table with default values
    => seed the trivial answer to the table
    => iterate through the table
    => fill further position based on current position (Think Recursive ways & convert it into iterative)