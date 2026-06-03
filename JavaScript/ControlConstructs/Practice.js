/*1*/
function addNumbers(num1, num2) {
    return num1 + num2;
}

let result = addNumbers(10, 20);
console.log(result);

/*2*/
let num =  10;
 if( num > 0) {
    console.log("Positive number");
 } else if (num < 0){
    console.log("Negative number");
 } else {
    console.log("given number is zero");
 }

/*3*/

let marks = 90;
if (marks >= 90 && marks <= 100) {
      console.log("A+");
} else if (marks >= 80) {
    console.log("A");
} else if (marks >= 70) {
    console.log("B");
} else if (marks >= 60) {
    console.log("C");
} else if (marks >= 0) {
    console.log("Low marks");
} else {
    console.log("Tu to gaya betaaaa");
}

/*4*/
for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) { 
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}


function reverseNumber(num) {
    return parseFloat(num.toString().split('').reverse().join(''));
}

console.log(reverseNumber(123));

/*w/o inbuilt function*/
let n1 = 1234
function revNum(n1) {
    let reverse = 0;
    while(n1 > 0) {
    let rem = n1 % 10;
    reverse = reverse * 10 + rem ;
    n1 = parseInt(n1 / 10);
    }
  return reverse;
}
console.log(revNum(n1));

