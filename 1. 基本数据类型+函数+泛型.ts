enum MyColor {
    Yellow, Blue, Red=1
}


 enum MyBaby {
    Kite = "kite",
    Bob = "bob",
    Mark = "mark"
 }

let baby: MyBaby = MyBaby.Bob;

console.log(typeof(baby))



let myMap = new Map([
        ["a", 12],
        ["b", 23],
        ["c", 32]
]);
console.log(myMap);
console.log(myMap.size);

console.log(myMap.keys(), myMap.values());



let mySet = new Set([1, 3, 4, 2, 3, 1, 4, 5]);
console.log(mySet);
console.log(mySet.size);

 
function myFunc(){
    console.log("hello word");
}

function test1(): string {
    console.log("nihao")
    return "hello world"
}

let res: string = test1();
console.log(res)

enum Gender {
    Male = "nan",
    Female = "nv"
}

function isGender(name: string, female?: boolean): Gender {
    if (female) {
        return Gender.Female;
    } else {
        return Gender.Male;
    }
}

let myGender: Gender = isGender("bob");
console.log(myGender)

let yourGender: Gender = isGender("Linda", true);
console.log(yourGender);


function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: any, b:any): any {
    return a + b;
}

console.log(add(1, 3));
console.log(add("hello ", "world"));


type myFuncType = (a: number, b: number) => number;

function addTest(a: number, b: number): number {
    return a + b;
}
function advFunc(a: number, b:number, fn: myFuncType): number {
    return fn(Math.abs(a), Math.abs(b));
}

console.log(advFunc(3, 4, addTest));


type ABSType = (a: number) => number;

let ABS = (a: number): number => Math.abs(a);

function addAfterAbs(a: number, b: number, fn: ABSType): number {
    return fn(a) + fn(b);
}

console.log(addAfterAbs(-1, 2, ABS));
console.log(addAfterAbs(3  , 2, ABS));


type myFunc2<T> = (x: T) => T;


function myAdd2(a: number, b: number, fn: myFunc2<number>): number {
    return fn(a) + fn(b);
}


function myAdd3(a: string, b: string, fn: myFunc2<string>): string {
    return fn(a) + fn(b);
}

function mySum(...a: number[]): () => number {
    // let sum: number = 0;
    // for (let ele of a) {
    //     sum += ele;
    // }
    // return sum

    function innerSum(): number {
        let sum = 0;

        for (let ele of a) {
            sum += ele;
        }
        return sum;
    }

    return innerSum;
}

console.log(mySum(1, 2, 3, 4, 5, 6)());

function curry<T, U, V>(fn: (a: T, b: U) => V): (a: T) => (b: U) => V {
    return (a) => (b) => fn(a, b);
}
