function upperProperty(target: any, propName: string) {
    /*
        第一个参数：被装饰的类对象
        第二个参数：被装饰的属性名字
    */

    let value = target[propName];  // 把值取出来

    const getter = () => { // 定义两个函数
        return value;
    }

    const setter = (newValue: string) => {
        value = newValue.toUpperCase();
    }

    // 给属性进行替换操作
    if (delete target[propName]) {  // 删除原来的propName属性
        Object.defineProperty(target, propName, {  // 把新的propName属性添加到target上面去
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        })
    }
}

export class Person {

    @upperProperty  // 使用前面定义好的装饰器，放在属性名上就可以
    name!: string;

    constructor(name: string) {
        this.name = name;
    }
}

let p6 = new Person("Bob")
console.log(p6.name);


// 属性装饰器工厂函数，本质上是一个高阶函数，返回一个另一个函数即可
// 返回的函数有两个参数，和上面的是一样的形式
function factoryProperty(prefix: string): (target: any, propName: string) => void {
    return (target: any, propName: string) => {
        let value = target[propName];  // 把值取出来

        const getter = () => { // 定义两个函数
            return value;
        }
    
        const setter = (newValue: string) => {
            value = `${prefix}: ${newValue}`;
        }
    
        // 给属性进行替换操作
        if (delete target[propName]) {  // 删除原来的propName属性
            Object.defineProperty(target, propName, {  // 把新的propName属性添加到target上面去
                get: getter,
                set: setter
            })
        }
    }
}


export class P2 {
    @factoryProperty("yangj22")
    name!: string;
}

let p2 = new P2();
p2.name = "fredyang201"
console.log(p2.name);