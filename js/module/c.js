// default export 默认导出
export default 1;

// default import 默认导入
import xx from './xx.js'


// named export 命名导出
export const a =1;
const b =2;
export const c = function(){};
export {
    b
}

// export default {
//     a:1,
//     b:2
// }
import {a,b} from '.../js'; // 非结构