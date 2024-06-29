export class Person {
    name: string;
    age: number;
    protected gender: boolean = false;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log("I am eating in Person class.")
    }

}

class Student extends Person {
    no: number;

    constructor(name: string, age: number, no: number) {
        super(name, age);
        this.no = no;
    }

    study() {
        console.log("I am studying...")
        console.log(this.gender);
    }
}

let stu = new Student("Bob", 21, 1);
stu.study();