class Person {
    // 三要素：属性(成员属性, 或者叫对象属性)，函数，构造函数

    name!: string;
    age!: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    set newName(value: string) {
        this.name = value;
    }

    get newName(): string {
        return this.name;
    }

    eat(): void {
        console.log(`${this.name} is eating...`)
    }
}

const person = new Person("Bob", 23);
person.eat();