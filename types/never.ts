// --------- unknown type --------------

let userInput: unknown;
let userName: string;

userInput = 9;
userInput = true;
userInput = "ali";
// userName = userInput // type unknown is not assignable to type string

if (typeof userInput === 'string') {
    userName = userInput; // the suitable way
};

// --------- never type --------------

function generateError(message: string, code: number): never {
    throw { message, errorCode: code}; // this function never returns anything, even does not return undefined
};

generateError("An error occured", 500);
// const result = generateError("An error occured", 500); // returns nothing
// console.log(result); // logs empty line of code
