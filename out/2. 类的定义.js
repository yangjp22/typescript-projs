"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    set newName(value) {
        this.name = value;
    }
    get newName() {
        return this.name;
    }
    eat() {
        console.log(`${this.name} is eating...`);
    }
}
const person = new Person("Bob", 23);
person.eat();
