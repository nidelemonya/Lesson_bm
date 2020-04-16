// java 强类型语言
// js 的 超集 typescript
// const getArea = (w: number, h: number):number => w * h;
const getArea = (w: number, h: number): number => {
    return w * h;
}
getArea(11.1, 213);

// 如何写出优质代码
// 1. 注释
// 2. 可读性 for Map, filter, every， some
// 3. area 从js 的繁琐 到ts的强类型 
// 最后生成的是js文件  ts 文件可以帮我们校验 增强写代码的准确信 
// 增长点 写文章