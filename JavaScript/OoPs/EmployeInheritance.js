class Employee {
    constructor(name, age, role) {
        this.name = name; this.age = age;
        this.role = role;
    }
    display() {
        console.log(this.name + " is working here");
    }

    designation() {
        console.log(this.name + " is working under " + this.role);
    }
}

class Developer extends Employee {
    work() {
        console.log(this.name +" works perfectly")
    }
}

class Tester extends Employee {
    work() {
        console.log("I am coding");
    }
}

let d = new Developer("Abhi", 23, "SDE1");
d.display();
d.designation();
d.work();

let t = new Tester("Suman", 21, "Tester");
t.display();
t.designation();
t.work();