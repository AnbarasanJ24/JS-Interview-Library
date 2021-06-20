// Class -> Buleprint for creating object, it has pre defined properties and method 
class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Instance Method - we can access this method by creating object 
    display() {
        return this.name;
    }

    // Class Method - belong to class and can be used only class not by instance of class
    // If something we ned to calculate between the instance of the class then we can go with static methods 
    static allEmployess(...employess) {
        return employess;
    }



}

let anbu = new Employee("Anbarasan", 25);
let ramya = new Employee("Ramya", 25);

console.log(Employee.allEmployess([anbu, ramya]))