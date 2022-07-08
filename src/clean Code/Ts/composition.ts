// Inheritance - we have a tightly coupled system, 
// when we have to change any property or method in base class then it will be more work

// Composition - we have loosely coupled system,
// when we have to change any property or method, we can create new class and link with required class

// steps to achieve composition
// Create seperate class with required methods and property 
// Create new class and instantiate required classes in constructor 
// Use the class methods and property using dot notation

class Coding {
    name: string;
    constructor(name) {
        this.name = name;
    }
    code() {
        console.log(this.name + 'coding');
    }
}

class Playing {
    playCricket() {
        console.log('playCricket');
    }
    playFootball() {
        console.log('playFootball');
    }
}

class Swimming {
    swim() {
        console.log('swim');
    }
}

class Dancing {
    dance() {
        console.log("Dance")
    }
}

class Anbu {
    code: Coding;
    play: Playing;
    constructor(name) {
        this.code = new Coding(name);
        this.play = new Playing();
    }
}

class Ram {
    swim: Swimming;
    code: Coding;
    dance: Dancing;

    constructor(name) {
        this.swim = new Swimming();
        this.code = new Coding(name);
        this.dance = new Dancing();
    }
}

const anbu2 = new Anbu('Anbu');
anbu.code.code();
anbu.play.playCricket();
