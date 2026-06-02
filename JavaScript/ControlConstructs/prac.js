let a = 20;
 if (a > 18) {
    console.log("Eligible");
 }

 //2
  let num = 2;

if (num > 0) {
    console.log("Positive");
} else {
    console.log("Negative");
}

//3

let nums = 45;
if (nums > 0) {
    console.log("Positive");
} else if (num < 0) {
      console.log("Negative");
} else {
      console.log("Zero");
}

//4

let marks = 45;

if (marks >= 40) {
      console.log("Pass");
} else if (marks >= 80) {
    console.log("Distinaction");
}

let grade = "A";

switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
    case "D":
        console.log("Poor");
        break;
    default:
        console.log("Invalid Grade");
}

//5
let month = 7;

switch (month) {
    case 3:
    case 4:
    case 5:
        console.log("Summer");
        break;
    case 11:
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;
    case 6:
    case 7:
    case 8:
    case 9:
        console.log("Rainy");
        break;
    default:
        console.log("Invalid Month");
}

      do {
            pin = prompt("Enter your 4-digit PIN:");
            if (pin === "1234") {
                alert("PIN accepted. Access granted.");
                break;
            } else {
                alert("Incorrect PIN. Please try again.");
            }
        } while (true);