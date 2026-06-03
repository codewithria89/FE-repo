//creting object (Dircetly)
let student = {
    name: "Anjali",
    age: 23,

    study() {
        console.log("Student studies.")
    }
};
console.log(student.name);
console.log(student.age);
student.study();

//class

class Student {
    name = "Amith"
    age = 23

    study(){
        console.log("Studies");
    }
}
let s = new Student();
console.log(s.name);
console.log(s.age);
s.study();

const addNumbers = (num1, num2) => num1 + num2;

console.log(addNumbers(10, 20)); 



