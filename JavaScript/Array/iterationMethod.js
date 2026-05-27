//foreach function
let fruits = ["apple", "banana", "cherry"]
fruits.forEach(fruit => console.log(fruit)) //fruit- is act as pointer

let numbers = [1,2,3]
numbers.forEach(i => console.log(`The numbers is ${i}`));
numbers.forEach(i => console.log(`The numbers is ${i * 5}`));

//map function
let num =  [1,2,30]
let squared = num.map(num => num * num)
console.log(squared)

//filter
let nums = [1,2,3,4,5,6]
let eveNum = nums.filter(n => n % 2 == 0)
console.log(eveNum)