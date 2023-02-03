interface Greetable {
    name: string;
    birthYear: number;
    greet(phrase: string): void;
};

class Person implements Greetable {
    public age: number;
    protected gradYear: number;
    public yearExperience: number;
    constructor(public name: string, yas: number, public birthYear: number) {
        this.age = yas;
    }
    greet(hometown: string): void {
        console.log(`Hello,my name is ${this.name}, I'm ${this.age} years old and I was born in ${hometown} in ${this.birthYear}`)
    }
    getGradYear(): number {
        this.gradYear = this.birthYear + 22;
        return this.gradYear;
    }
    getYearExperience(): number {
        this.yearExperience = new Date().getFullYear() - this.gradYear;
        return this.yearExperience;
    }
};

const student = new Person("Hakan", 41, 1982);
console.log(student);
student.greet("Konya");
console.log(student.birthYear); // 1982
// console.log(student.gradYear); it can not be accessed because it is protected
console.log(student.getGradYear()); // 2004
console.log(student.yearExperience); // undefined
console.log(student.getYearExperience()); // 19
console.log(student.yearExperience); // 19