// 类型定义文件 React FC
// 类型声明和业务分开
interface Iuser {
    name: string;
    age: number;
}
type IuserInfoFunc =  (user: Iuser) => string;

const getUsInfo:IuserInfoFunc = (user) => {
    return `name:${user.name}, age:${user.age}`
}