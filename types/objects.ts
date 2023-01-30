// How to Define an object

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: "Enes",
    age: 32,
    hobbies: ["football"],
    role: [12, "driver"],
};

console.log(person.name); 
console.log(person.age);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
};

// How to Define a nested object

const product: {
    id: string;
    price: number;
    tags: string[];
    details: {
        title: string;
        description: string;
    };
} = {
    id: '1',
    price: 123,
    tags: ['super', "excellent"],
    details: {
        title: "pencil",
        description: "good",
    }
};

// Working with enums

enum Role {
    ADMIN, READ_ONLY, AUTHOR
};

// ADMIN : 0, READ_ONLY : 1, AUTHOR : 2

enum Status {
    MANAGER = 23,
    DEVELOPER,
    BOSS,
};

// MANAGER: 23, DEVELOPER: 24, BOSS: 25

enum Position {
    FRONTEND = "FRONTEND", BACKEND = 451, FULL_STACK = 916
};

// console.log(Position.BACKEND); 451

const man = {
    name: "ali",
    age: 21,
    hobbies: ["theatre", "basketball"],
    role: Role.ADMIN,
};

const member: {
    name: string;
    age: number;
    hobbies: (string | number)[];
    role: [number, string];
    status: string | number;
} = {
    name: "Enes",
    age: 32,
    hobbies: ["football", 15, "swimming"],
    role: [90, "asd"],
    status: Position.FRONTEND,
};

console.log(member.status); // FRONTEND
