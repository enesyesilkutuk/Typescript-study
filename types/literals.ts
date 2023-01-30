// Literal types are the types which are based on typescript core types such as string, number, boolean etc. In the concat function below, resConversion parameter is a literal type.

function concat(input1: string | number, input2: string | number, resConversion:'as-number' | 'as-string'): string | number {
    let result: number | string;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resConversion === 'as-number') {
        return +result;
    }
    else {
        return result.toString();
    }
};

console.log(concat("12", "14", 'as-string'));
console.log(concat("12", 16, 'as-number'));
console.log(concat(12, 14, 'as-number'));
console.log(concat(12, 14, 'as-string'));
console.log(concat("max", "john", 'as-string'));