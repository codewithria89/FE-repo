// console.log("1. Open BookMyShow"); //8sec
// console.log("2. Search Movie"); //3 secs
// console.log("3. Select seats"); //5 secs
// console.log("4. Make payment"); //1 sec
// console.log("5. Ticket Booked"); //2secs
//settimeout
// setTimeout(() => {
// console.log("1. Open BookMyShow"); }, 8000);
// setTimeout(() => {
// console.log("2. Search Movie"); }, 3000);
// setTimeout(() => {
// console.log("3. Select seats"); }, 5000);
// setTimeout(() => {
// console.log("4. Make payment"); }, 1000);
// setTimeout(() => {
// console.log("5. Tickect booked"); }, 2000);

//CallBack
setTimeout(() => {
console.log("1. Open BookMyShow");
setTimeout(() => {
    console.log("2. Search Movie");
        setTimeout(() => {
            console.log("3. Select seats");
                setTimeout(() => {
                    console.log("4. Make payment");
                        setTimeout(() => {
                            console.log("5. Tickect booked");
                        }, 2000);
                }, 1000);
        }, 5000);
    }, 3000);
}, 8000);