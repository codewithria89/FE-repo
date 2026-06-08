//hybrid

class Animal {
    work(){
        console.log("Soundsss...")
    }
}

class Dog extends Animal {
    eat() {
        console.log("Eating...")
    }
}

class puppy extends Dog{
    sleep() {
        console.log("Puppy is sleeping")
    }
}

class cat extends Animal {
    meow() {
        console.log("Meowww")
    }
}

let d = new Dog();
d.work()
d.eat()

let p = new puppy();
p.eat()
p.sleep()

let c = new cat()
c.work()
c.meow()