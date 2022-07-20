// If we join smaller tree below taller tree then 
// the tree height will not be increased

// Time complexity
// Find - O (Log N)
// Union - O (Log N)


class UF {
    id = [];
    size = [];
    constructor(count) {
        this.count = count;
        for (let index = 0; index < this.count; index++) {
            this.id[index] = index;
            this.size[index] = 0;
        }
    }

    root(idx) {
        // If the index and its corresponding value is same then root is found
        while (idx !== this.id[idx]) {
            // Path compression Technique 
            this.id[idx] = this.id[this.id[idx]];
            idx = this.id[idx]
        }


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

        // Take size of P and Q 
        let p = this.root(idx1);
        let q = this.root(idx2);

        if (p === q) return;

        if (this.size[p] > this.size[q]) {
            this.id[q] = p;
            this.size[p] += this.size[q];
        } else {
            this.id[p] = q;
            this.size[q] += this.size[p];
        }

    }
}