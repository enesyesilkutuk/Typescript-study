class Department {
    // private readonly id: string;
    // public name:string;
    protected employees: string[] = [];
    static fiscalYear = 2022;
    constructor(private readonly id: string, public name: string) {
        // this.name = name;
        // this.id = id;
    }

    describe() {
        console.log(`Department (with id:${this.id}): ${this.name}`);
    };

    getFiscal() {
        return Department.fiscalYear;
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
};

class ITDepartment extends Department {
    public admins: string[]
    constructor(id: string, admins: string[] ) {
        super(id, 'IT'); // I want the name of all instances to be "IT"
        this.admins = admins;
    }
}

const software = new ITDepartment("d1", ["Max"]);
console.log(software.name); // 'IT'
console.log(software.admins); // ["Max"]
console.log(software.getFiscal()); // 2022

class InfoDepartment extends Department {
    static year: number = 1996;
    constructor(name: string, id: string, public readonly year: number) {
        super(name, id);
        this.year =year;
    }

    static getDate() {
        return `This department was founded in ${this.year}`;
    }

    getYear() {
        return `Individual year: ${this.year}`
    }
}

const newDep = new InfoDepartment("Secret", "3", 1991);
console.log(newDep.year); // 1991
console.log(InfoDepartment.getDate()); // This department was founded in 1996
console.log(InfoDepartment.year); // 1996
console.log(newDep.getYear()); // Individual year: 1991

class ComputerDepartment extends Department {
    public location: string;
    addEmployee(employee: string): void { // We overrided addEmployee method in Department class
        if (this.employees.includes(employee)){
            alert(`${employee} already exits in this department`);
            return;
        }
        console.log(`${employee} joined us`);
        this.employees.push(employee);
    }
    defineLocation(loc: string): void {
        this.location = loc;
        console.log(`Location has been set as ${this.location}`);
        // console.log(`Location has been set as ${loc}`); // Same with above
    }
};

const compDep1 = new ComputerDepartment("3", "Asus");
console.log(compDep1.location); // undefined
compDep1.addEmployee("Hasan"); // 'Hasan joined us' 1
compDep1.printEmployeeInfo(); // 1 ["Hasan"]
compDep1.defineLocation("Los Angeles"); // Location has been set as Los Angeles
compDep1.addEmployee("Hasan"); // logs nothing because Hasan already exists

