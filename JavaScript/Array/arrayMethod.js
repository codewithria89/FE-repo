//Add element
let arr = new Array(1,2,3,4)
console.log(arr)

arr.push(5) //end
arr.unshift(0) // start
console.log(arr)

//Remove element
arr.pop() //remove last element
arr.shift()//remove first element
console.log(arr)

//splice and slice(interview questions) Modifying
let fruit = ["Apple", "Banana", "Cherry", "DragonFruit", "Mango"]
fruit.splice(1, 2)
console.log(fruit)

let nums = [10, 20, 30, 40, 50]
//nums.splice(2,3)
console.log(nums)
//adding new elements with splice method
nums.splice(2, 0, 300)
nums.splice(6,0,60,70,80)
//replacing element
nums.splice(4, 1, 100)
console.log(nums)


//slice
let number = [1,2,3,4,5]
let part = number.slice(1,4)
let p = number.slice(0, 4)
let x= number.slice(3,5)
console.log(part)
console.log(p)
console.log(x)

//Array Searching and sorting
let fruits = ["Apple", "Banana", "Cherry", "DragonFruit", "Mango"]
//indexOF - for specific index of array
console.log(fruits.indexOf("Cherry"))

//includes - to check if array contain that element
console.log(fruits.includes("Mango"))

//sort() & reverse() 
let letters = ["c", "d", "a","b","e"]
console.log(letters.sort())
console.log(letters.reverse())