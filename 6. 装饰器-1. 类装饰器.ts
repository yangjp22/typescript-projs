// 给被装饰类的属性和函数赋值
function addProperty(constructor: Function) {
    /*
    * 定义的是一个类装饰器，类装饰器，参数是当前被装饰的类的构造函数
    */
    constructor.prototype.name = "zhangshan"
    constructor.prototype.eat = () => {
        console.log("执行了eat函数")
    }

}

@addProperty
export class Person {
    name!: string;
    eat!: Function;
    constructor() {}
}

// 类装饰器工厂函数，本质上是一个高阶函数，返回一个另一个函数即可
// 返回的函数有1个参数，和上面的是一样的形式
export function factoryClass(prefix: string): (constructor: Function) => void {
    return (constructor: Function) => {
        constructor.prototype.name = `${prefix}: ${constructor.prototype.name}`;
        constructor.prototype.eat = () => {
            console.log("I am eating...")
        }
    }
}

@factoryClass("yangj22")
export class P2 {
    name!: string;
    eat!: Function;
    constructor() {}
}

let p2 = new P2();
p2.name = "fredyang201"
console.log(p2.name);
p2.eat();