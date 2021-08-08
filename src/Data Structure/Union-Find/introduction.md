# Union Find Or Disjoint set

    # Data structure to keep track of elements which are split into one or more disjoint sets
    # Primary operation - Find and Union

# Path compression technique

    # Without path compression we have to go one by one to reach the root but in path compression most of the nodes will point to root
    # It will be easy to find the root by compressing the path

# Cycle Detection

    # Check both the vertex lies in the same set then there is a cycle

# Application

    # Kruskal's minimum spanning tree algorithm
    # Grid percolation (Check path from bottom to top)
    # Network connectivity
    # Least common ancestor in trees
    # Image processing

# Time complexity

<!--
Construction         O(N)
Union                O(N)
Find                 O(N)
Get component set    O(N)
Check if connected   O(N)
Cont components      O(1)
-->
