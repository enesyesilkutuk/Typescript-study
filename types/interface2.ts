// type addFunc = (a: number, b: number) => number;

// const sum: addFunc = (x: number, y: number): number => {
//     return x + y;
// };

// console.log(sum(7,8));

// Interfaces are used to define the structure of objects.In the end, functions are also objects so interfaces can be used to define 
// the function types.
// Interfaces may also have optional properties.

interface addTwoNumbers {
    (n1: number, n2: number): number;
};

const calcSumFunc: addTwoNumbers = (a: number, b: number) => a + b;
console.log(calcSumFunc(4,6)); // 10