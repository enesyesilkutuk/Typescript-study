const button = document.querySelector('button')! as HTMLButtonElement;

button.addEventListener('click', () => console.log("Button was clicked"));

// tsc app.ts

const add = (a:number, b:number, c: boolean) => {
    if (c)  return a + b;
    alert("There occured a problem");
};

const num1 = 13;
const num2 = 35;
const go = true;

const res = add(num1, num2, go);
console.log(res);



