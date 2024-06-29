abstract class Animal {
    name!: string;
    abstract speak(): void;

    eat() {
        console.log("I am eating..")
    }
}


class Cat extends Animal {
    speak() {
        console.log("I am a cat, I am speaking...")
    }
}

let cat = new Cat();

cat.speak();
cat.eat();