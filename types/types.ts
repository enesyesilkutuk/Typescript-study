type User = {
    name: string;
    age: number;
};

const user1: User = {
    name: "Hakan",
    age: 40,
};

function greet(user: { name: string; age: number }){
    console.log(`Hi, I'm ${user.name} and ${user.age} years old`);
};

// greet function can be written as greetMe function in a shorter way

function greetMe(user: User){
    console.log(`Hi, I'm ${user.name} and ${user.age} years old`);
};

const example = {
    name: "Canan",
    age: 27,
};

greetMe(example);