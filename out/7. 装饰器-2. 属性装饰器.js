"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.P2 = exports.Person = void 0;
function upperProperty(target, propName) {
    /*
        第一个参数：被装饰的类对象
        第二个参数：被装饰的属性名字
    */
    let value = target[propName]; // 把值取出来
    const getter = () => {
        return value;
    };
    const setter = (newValue) => {
        value = newValue.toUpperCase();
    };
    // 给属性进行替换操作
    if (delete target[propName]) { // 删除原来的propName属性
        Object.defineProperty(target, propName, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}
class Person {
    constructor(name) {
        this.name = name;
    }
}
__decorate([
    upperProperty // 使用前面定义好的装饰器，放在属性名上就可以
], Person.prototype, "name", void 0);
exports.Person = Person;
let p6 = new Person("Bob");
console.log(p6.name);
// 属性装饰器工厂函数，本质上是一个高阶函数，返回一个另一个函数即可
// 返回的函数有两个参数，和上面的是一样的形式
function factoryProperty(prefix) {
    return (target, propName) => {
        let value = target[propName]; // 把值取出来
        const getter = () => {
            return value;
        };
        const setter = (newValue) => {
            value = `${prefix}: ${newValue}`;
        };
        // 给属性进行替换操作
        if (delete target[propName]) { // 删除原来的propName属性
            Object.defineProperty(target, propName, {
                get: getter,
                set: setter
            });
        }
    };
}
class P2 {
}
__decorate([
    factoryProperty("yangj22")
], P2.prototype, "name", void 0);
exports.P2 = P2;
let p2 = new P2();
p2.name = "fredyang201";
console.log(p2.name);
