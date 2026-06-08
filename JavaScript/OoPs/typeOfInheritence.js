//Single inher
class Animals {
eat() {
console.log("Eating");
}
}
class Dogs extends Animals {
bark() {
console.log("Barking");
}
}
let d = new Dogs()
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
let g = new Dog()
g.eat()
g.bark()

let p = new Puppy()
p.bark()
p.cry()

//hierarchical
class Animali {
eat() {
console.log("Eating");
}
}
class Dogo extends Animali {
bark() {
console.log("Barking");
}
}
class Catu extends Animali {
meow() {
console.log("Meowing");
}
}

let o = new Dogo()
o.bark()
o.eat()

let u = new Catu()
u.eat()
u.meow()