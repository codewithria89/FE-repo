//HighOrderFunction
function order(callprepare, callserverCustomer) {
    console.log("1. Order food");
    callprepare();
    callserverCustomer();
}

//call back functions
function prepare() {
    console.log("2. Preparation started");
}

function serverCustomer() {
    console.log("3. enjoy your food");
}

order(prepare, serverCustomer);
