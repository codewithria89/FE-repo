for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//2

let i = 1;
while(i <= 5) {
    console.log(i);
    i++;
}

//3
let pin;

/*do {
    pin = prompt("Enter PIN:");
} while (pin !== "1234");

console.log("PIN Accepted");*/

//4
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

//5

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}

let fruits = ["Apple", "Banana", "Mango"];
for(let fruit of fruits) {
    console.log(fruit);
}

let student = {name: " John", age: 32, grade: " A"};
for (let key in student){
    console.log(key+ " is "+ student[key]);
}