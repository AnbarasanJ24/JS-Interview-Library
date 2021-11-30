# What is DP?
    Solving bigger problem with it own sub problem recursive solution 
    Dont call the same recursive function again and agian 

<!-- To calculate Time and space complexity -->
# In DP, Time complexity is based on function calls and space complexity is based on height of the tree
const foo = (n) =>{
    if(n <= 1) return;
    foo(n-1);
}

o/p => 5 -> 4 -> 3 -> 2 -> 1 (5 times function is called and 5 function stack are created for N=5)
T = O (N)
S = O (N)

<!--  -->

const bar = (n) =>{
    if(n <= 1) return;
    bar(n-2);
}

o/p => 5 -> 3 -> 1 (3 times function is called and 3 function stack are created for N=5)
T = O (N-2) => O(N)
S = O (N-2) => O(N)

<!--  -->

const dib = (n) =>{
    if(n <= 1) return;
    dib(n-1);
    dib(n-1);
}

Here form the tree recursive calls and count the height it will 5. Then have 5 levels in the tree, count no of nodes in each level 
First level it will 5, second (4,4), third (2,2,2,2,2,2,2,2), fourth (1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1)
Each level it is increased as 1, 2, 4, 16....2^N
Space complexity is O (Height/ No of levels) => O(N)

<!--  -->
const dib = (n) =>{
    if(n <= 1) return;
    dib(n-2);
    dib(n-2);
}
Here Time complexity will be O (2^N) and space complexity is O (N/2)=> O (N)