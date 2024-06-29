"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.P2 = exports.factoryClass = exports.Person = void 0;
// 给被装饰类的属性和函数赋值
function addProperty(constructor) {
    /*
    * 定义的是一个类装饰器，类装饰器，参数是当前被装饰的类的构造函数
    */
    constructor.prototype.name = "zhangshan";
    constructor.prototype.eat = () => {
        console.log("执行了eat函数");
    };
}
let Person = class Person {
    constructor() { }
};
Person = __decorate([
    addProperty
], Person);
exports.Person = Person;
// 类装饰器工厂函数，本质上是一个高阶函数，返回一个另一个函数即可
// 返回的函数有1个参数，和上面的是一样的形式
function factoryClass(prefix) {
    return (constructor) => {
        constructor.prototype.name = `${prefix}: ${constructor.prototype.name}`;
        constructor.prototype.eat = () => {
            console.log("I am eating...");
        };
    };
}
exports.factoryClass = factoryClass;
let P2 = class P2 {
    constructor() { }
};
P2 = __decorate([
    factoryClass("yangj22")
], P2);
exports.P2 = P2;
let p2 = new P2();
p2.name = "fredyang201";
console.log(p2.name);
p2.eat();
