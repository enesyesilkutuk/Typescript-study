interface Musician {
    readonly name: string,
    instrument: string,
    play(action:string): string,
};

class Artist implements Musician {

    constructor(public name: string, public instrument: string) {
        // this.name =name;
        // this.instrument = instrument;
    }

    play(action:string) {
        return `${this.name} ${action} ${this.instrument}`
    }
};

const singer = new Artist("Hamza", "guitar");
console.log(singer.play("plays")); // Hamza plays guitar

class Peeps {
    static count: number = 0;

    static getCount(): number {
        return Peeps.count;
    }

    public id: number;

    constructor(public name:string) {
        // this.name = name;
        this.id = ++Peeps.count;
    }
}

const ali = new Peeps("Ali");
const esra = new Peeps("Esra");
const aslı = new Peeps("Aslı");

console.log(ali.name); // Ali
console.log(ali.id); // 1
console.log(aslı.name); // Aslı
console.log(aslı.id); // 3
console.log(esra.name); // Esra
console.log(esra.id); // 2

console.log(Peeps.count); // 3
console.log(Peeps.getCount()); // 3