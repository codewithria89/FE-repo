class Parent {
    constructor(name) {
        this.name  = name;
    }
    marry() {
        console.log("MArry at 29");
    }
}

class Child extends Parent {
    constructor(name , age) {
        super(name);
        this.age = age;
    }
    marry() {
        super.marry();
        console.log("Marry at 32");
    }
}

let c = new Child("HArry",23);
console.log(c.name);
console.log(c.age)
c.marry()