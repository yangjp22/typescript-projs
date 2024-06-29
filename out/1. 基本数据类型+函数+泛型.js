"use strict";
var MyColor;
(function (MyColor) {
    MyColor[MyColor["Yellow"] = 0] = "Yellow";
    MyColor[MyColor["Blue"] = 1] = "Blue";
    MyColor[MyColor["Red"] = 1] = "Red";
})(MyColor || (MyColor = {}));
var MyBaby;
(function (MyBaby) {
    MyBaby["Kite"] = "kite";
    MyBaby["Bob"] = "bob";
    MyBaby["Mark"] = "mark";
})(MyBaby || (MyBaby = {}));
let baby = MyBaby.Bob;
console.log(typeof (baby));
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
function myFunc() {
    console.log("hello word");
}
function test1() {
    console.log("nihao");
    return "hello world";
}
let res = test1();
console.log(res);
var Gender;
(function (Gender) {
    Gender["Male"] = "nan";
    Gender["Female"] = "nv";
})(Gender || (Gender = {}));
function isGender(name, female) {
    if (female) {
        return Gender.Female;
    }
    else {
        return Gender.Male;
    }
}
let myGender = isGender("bob");
console.log(myGender);
let yourGender = isGender("Linda", true);
console.log(yourGender);
function add(a, b) {
    return a + b;
}
console.log(add(1, 3));
console.log(add("hello ", "world"));
function addTest(a, b) {
    return a + b;
}
function advFunc(a, b, fn) {
    return fn(Math.abs(a), Math.abs(b));
}
console.log(advFunc(3, 4, addTest));
let ABS = (a) => Math.abs(a);
function addAfterAbs(a, b, fn) {
    return fn(a) + fn(b);
}
console.log(addAfterAbs(-1, 2, ABS));
console.log(addAfterAbs(3, 2, ABS));
function myAdd2(a, b, fn) {
    return fn(a) + fn(b);
}
function myAdd3(a, b, fn) {
    return fn(a) + fn(b);
}
function mySum(...a) {
    // let sum: number = 0;
    // for (let ele of a) {
    //     sum += ele;
    // }
    // return sum
    function innerSum() {
        let sum = 0;
        for (let ele of a) {
            sum += ele;
        }
        return sum;
    }
    return innerSum;
}
console.log(mySum(1, 2, 3, 4, 5, 6)());
function curry(fn) {
    return (a) => (b) => fn(a, b);
}
