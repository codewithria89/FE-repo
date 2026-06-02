let a = 10; // Global
function outer() {
    let b = 20; //Local
    function inner() {
            if(true) {
                let c = 30; //block
                console.log(a);
                console.log(b);
                console.log(c);
        }
    }
    inner();
}
outer();