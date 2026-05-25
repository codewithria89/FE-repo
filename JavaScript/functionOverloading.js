// function with same name with different parameters

function add(){
    console.log(10 + 10); //0 parameters
}

function add(a) {
    console.log(a + 10); // 1 paramteres
}

function add(a, b) {
    console.log(a + b); // 2parameters
}
add(); //Nan (Not a number)
add(10); //Nan
add(10, 20); //30