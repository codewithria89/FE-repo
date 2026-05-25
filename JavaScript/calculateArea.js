function calculateArea(...args) {
    const pi = 3.14;

    if (args.length === 1) {
        let radius = args[0];
        let area = pi * radius * radius;
        return area;
    } else if(args.length === 2) {
         let length = args[0];
         let width = args[1];
         let area = length * width;
         return area;
    } else {
        return "Invalid number of arguments";
    }
}