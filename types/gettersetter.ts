class Bands {
    private dataState: string[];
  
    constructor () {
        this.dataState = [];
    }
  
    public get getData(): string[] {
        return this.dataState;
    }
  
    public set setData(value: string[]) {
        if (Array.isArray(value) && value.every((item) => typeof item === 'string')) {
            this.dataState = value;
            return;
        }
        else throw new Error("Parameter is not an array of strings");
    }
  };
  
  const MyBands = new Bands();
  MyBands.setData =["Neil Young", "Led Zep"]; // execution of setter function
  console.log(MyBands.getData); // ["Neil Young", "Led Zep"] invoke of getter function alert: there is no () at the end of getData
  MyBands.setData = [...MyBands.getData, "Elvis Presley"];
  console.log(MyBands.getData); // ["Neil Young", "Led Zep", "Elvis Presley"];