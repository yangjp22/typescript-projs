function openEnumerable(target: any, propName: string, descriptor: PropertyDescriptor) {
    console.log(target)
    console.log(propName)
    console.log(descriptor);

    descriptor.enumerable = true;   // 把当前函数设置为可以列举的，也就是可以被for...in迭代出来
}

function toLog(target: any, methodName: string, descriptor: PropertyDescriptor) {
    // 得到当前被装饰的函数
    let oldMethod = descriptor.value

    // 修改一下原来被装饰的函数
    descriptor.value = function(...args: any[]):number {
        // 得到当前时间
        const now = new Date();

        // 调用原来的函数
        const result = oldMethod.apply(this, args)
        
        // 记录日志
        console.log(`*** function: ${methodName}, time at ${now.toLocaleString("zh-cn")}, result is ${result}`);

        // 返回原来函数的结果
        return result
    }
}

export class Person {
    name: string = "hello";
    starter: number;

    constructor(starter: number) {
        this.starter = starter;
    };

    @openEnumerable
    getName() {
        console.log(this.name, this.starter);
    }

    @toLog
    sum(...args: number[]): number {
        return args.reduce((prev: number, curr: number) => prev + curr, this.starter)
    }
}

let p7 = new Person(1);
console.log(p7.sum(1, 3, 4, 5))

// for (let attr in p7) {
//     console.log(attr)
// }
