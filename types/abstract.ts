abstract class Department {
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

    abstract getFullMonth(date: Date): string;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
};

class FinanceDepartment extends Department {
    getFullMonth(date: Date): any | string {
        if (date.getMonth() === 0) return "January";
       
        if (date.getMonth() === 1) return "February";
        
        if (date.getMonth() === 2) return "March";
        
        if (date.getMonth() === 3) return "April";
        
        if (date.getMonth() === 4) return "May";
        
        if (date.getMonth() === 5) return "June";
        
        if (date.getMonth() === 6) return "July";
        
        if (date.getMonth() === 7) return "August";
        
        if (date.getMonth() === 8) return "September";
        
        if (date.getMonth() === 9) return "October";
        
        if (date.getMonth() === 10) return "November";
        
        if (date.getMonth() === 11) return "December";
        
    }
};

const finance = new FinanceDepartment("5", "FinanceSection");
console.log(finance.getFullMonth(new Date()));
console.log(typeof finance.getFullMonth(new Date()));
finance.describe();