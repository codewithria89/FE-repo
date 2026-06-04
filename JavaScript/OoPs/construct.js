class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    study() {
        console.log(this.name , " is studying");
    }
}
let s = new Student("Abhi", 23);
    console.log(s.name);
    console.log(s.age);
    s.study();

let s1 = new Student("Bhavaya", 24);
    console.log(s1.name);
    console.log(s1.age);
    s1.study();