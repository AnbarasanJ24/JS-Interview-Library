<!-- To calculate Time and space complexity -->
# In DP, Time and space complexity is based on function calls 
const foo = (n) =>{
    if(n <= 1) return;
    foo(n-1);
}

o/p => 5 -> 4 -> 3 -> 2 -> 1 (5 times function is called and 5 function stack are created for N=5)
T = O (N)
S = O (N)

const bar = (n) =>{
    if(n <= 1) return;
    bar(n-2);
}

o/p => 5 -> 3 -> 1 (3 times function is called and 3 function stack are created for N=5)
T = O (N-2) => O(N)
S = O (N-2) => O(N)

const dib = (n) =>{
    if(n <= 1) return;
    dib(n-1);
    dib(n-1);
}

Here form the tree recursive calls and count the height it will 5. Then have 5 levels in the tree, count no of nodes in each level 
First level it will 5, second (4,4), third (2,2,2,2,2,2,2,2), fourth (1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1)
Each level it is increased by 2^N
