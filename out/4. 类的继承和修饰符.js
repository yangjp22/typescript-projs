"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, age) {
        this.gender = false;
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log("I am eating in Person class.");
    }
}
exports.Person = Person;
class Student extends Person {
    constructor(name, age, no) {
        super(name, age);
        this.no = no;
    }
    study() {
        console.log("I am studying...");
        console.log(this.gender);
    }
}
let stu = new Student("Bob", 21, 1);
stu.study();
