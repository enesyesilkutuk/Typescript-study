// class Person {
//     name: string;
//     age: number;

//     constructor(isim: string, yas: number) {
//         this.name = isim;
//         this.age = yas;
//     }

//     describe() {
//         console.log(`My name is ${this.name}`);
//     }
// };

// const adam = new Person("Furkan", 32);
// console.log(adam);
// adam.describe();

class Department {
    // private readonly id: string;
    // private name:string;
    private employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
        // this.name = name;
        // this.id = id;
    }

    describe() {
        console.log(`Department (with id:${this.id}): ${this.name}`);
    };

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
};

const accounting = new Department("1", "Accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Mark");

accounting.employees[2] = "John";
accounting.id = "2"; // id can not be modified because it is readonly
console.log(accounting.employees); // employees is not accessible from outside of class
console.log(accounting.id)

accounting.describe();
accounting.printEmployeeInfo();


