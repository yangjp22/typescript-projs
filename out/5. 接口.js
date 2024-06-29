"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
// 接口的应用一. 描述对象的形状
let speak = {
    name: "Bob",
    displayName: "BOB",
    speak() {
        console.log(`I am ${this.name}`);
    }
};
speak.speak();
class Person {
    constructor(name, displayName) {
        this.name = name;
        this.displayName = displayName;
    }
    speak() {
        console.log("I am speaking...");
    }
    eat() {
        console.log("I am eating...");
    }
}
exports.Person = Person;
let person_1 = {
    id: 1,
    name: "person_1",
    age: 12,
    gender: "male"
};
console.log(person_1);
