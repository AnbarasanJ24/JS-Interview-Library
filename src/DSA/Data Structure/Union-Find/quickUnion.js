// Quick Union - Since Union is expensive in quick find we can optimize it 
// Time complexity - find O (N) and Union O (N)
// Here quick union is expensive beacuse of finding the root of the tree(tall tree)

class UF {
    id = [];
    constructor(count) {
        this.count = count;
        for (let index = 0; index < this.count; index++) {
            id[index] = index;

        }
    }

    root(idx) {
        // If the index and its corresponding value is same then root is found
        while (idx !== this.id[idx])
            idx = this.id[idx]

        return idx;
    }

    find(idx1, idx2) {
        // base case
        if (idx1 < 0 || idx1 > count) return;
        if (idx2 < 0 || idx2 > count) return;

        return this.root(idx1) === this.root(idx2);

    }

    union(idx1, idx2) {
        // base case
        if (idx1 < 0 || idx1 > count) return;
        if (idx2 < 0 || idx2 > count) return;

        // P's parent will be the child of Q's parent
        let p = this.root(idx1);
        let q = this.root(idx2);
        this.id[p] = q;

    }
}