Time complexity => Tells about how time increases when the size increase

<!-- Linear serach example -->
Best case:
    In order to find a element in the array of size 200,1000 or whatever 
    If we find the element at first index then size dosen't matter 
    Lets assume we find the element at first index in case of 1 lakh elements then we did 1 comparison 
    since we did only one comparison T.C will be O (1) => constant
    constant means size will not bring any changes to the T.C

Worst Case:
    After seraching entire elements of the array and not able to find the element 
    By the time we are making 200 comparison in case of 200 size, 1000 comparison in case of 1000 size
    When we draw a graph with above details it forms linear graph
    As the size increase the time is also increase linearly 
    Time complexity will be O (N), meanse we need to traverse entire array 