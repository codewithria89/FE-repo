//Single inher
class Animal {
eat() {
console.log("Eating");
}
}
class Dog extends Animal {
bark() {
console.log("Barking");
}
}
let d = new Dog()
d.eat()
d.bark()

//Multilevel
class Animal {
eat() {
console.log("Eating");
}
}
class Dog extends Animal {
bark() {
console.log("Barking");
}
}
class Puppy extends Dog {
cry() {
console.log("Crying");
}
}
