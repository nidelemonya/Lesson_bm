// 面向接口的编程 是一切高级编程范式的开端 使用设计模式
// interface Java
interface Iuser {
    name: string;
    age: number;
}

const getUseInfo = (user: Iuser): string => {
    return `name:${user.name}, age:${user.age}`
}