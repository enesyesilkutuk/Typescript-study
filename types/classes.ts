class Person {
    name: string;
    age: number;

    constructor(isim: string, yas: number) {
        this.name = isim;
        this.age = yas;
    }

    describe() {
        console.log(`My name is ${this.name}`);
    }
};

const man = new Person("Furkan", 32);
console.log(man);
man.describe();


class Department {
    // private readonly id: string;
    // public name:string;
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


class Coder {
    
    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = 'Typescript',
    ) {

    }

    public getAge() {
        return `Hello, I'm ${this.age}`
    }

    public getLang() {
        return `My language is ${this.lang}`
    }
};

const Dave = new Coder("Dave", "rock", 42);
console.log(Dave.getLang());

class WebDev extends Coder {
    
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number,
    ) {
        super(name, music, age);
        this.computer = computer;
    }

    getLanguage() {
        return `I know ${this.lang} language`
    }
}

const newDev = new WebDev ("Asus", "Selin", "Pop", 5);
console.log(newDev.getLanguage());



