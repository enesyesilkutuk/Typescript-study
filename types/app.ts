function addTwo(n1: number, n2: number) {
    return n1 + n2;
};

let combineValues: Function;
combineValues = addTwo;

console.log(combineValues(8,6)); // 14

let sumValues: (a: number, b: number, c: number) => number;
sumValues = addTwo;

console.log(sumValues(5,6,8)); // 11 it doesn't accept the third parameter