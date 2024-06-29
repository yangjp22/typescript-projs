interface SpeakAble {
    readonly name: string;

    displayName?: string;

    speak(): void;
}

// 接口的应用一. 描述对象的形状
let speak: SpeakAble = {
    name: "Bob",

    displayName: "BOB",

    speak() {
        console.log(`I am ${this.name}`)
    }
}

speak.speak();


// 接口的应用二. 接口用来规范类的实现
interface Eatable {
    eat(): void;
}

export class Person implements SpeakAble, Eatable {
    name: string;
    displayName?: string | undefined;

    constructor(name: string, displayName?: string) {
        this.name = name;
        this.displayName = displayName;
    }

    speak(): void {
        console.log("I am speaking...")
    }

    eat(): void {
        console.log("I am eating...")
    }
}

// 接口的应用三. 在接口中定义任意属性
export interface Human {
    id: number;
    name: string;

    [propName: string]: any;
}

let person_1: Human = {
    id:  1,
    name: "person_1",
    age: 12,
    gender: "male"
}

console.log(person_1);