"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
function openEnumerable(target, propName, descriptor) {
    console.log(target);
    console.log(propName);
    console.log(descriptor);
    descriptor.enumerable = true; // 把当前函数设置为可以列举的，也就是可以被for...in迭代出来
}
function toLog(target, methodName, descriptor) {
    // 得到当前被装饰的函数
    let oldMethod = descriptor.value;
    // 修改一下原来被装饰的函数
    descriptor.value = function (...args) {
        // 得到当前时间
        const now = new Date();
        // 调用原来的函数
        const result = oldMethod.apply(this, args);
        // 记录日志
        console.log(`*** function: ${methodName}, time at ${now.toLocaleString("zh-cn")}, result is ${result}`);
        // 返回原来函数的结果
        return result;
    };
}
class Person {
    constructor(starter) {
        this.name = "hello";
        this.starter = starter;
    }
    ;
    getName() {
        console.log(this.name, this.starter);
    }
    sum(...args) {
        return args.reduce((prev, curr) => prev + curr, this.starter);
    }
}
__decorate([
    openEnumerable
], Person.prototype, "getName", null);
__decorate([
    toLog
], Person.prototype, "sum", null);
exports.Person = Person;
let p7 = new Person(1);
console.log(p7.sum(1, 3, 4, 5));
// for (let attr in p7) {
//     console.log(attr)
// }
