import React from 'react';
import { func } from 'prop-types';

const sum = 2 ** 2

function obsever() {

}
@obsever
class App extends Component {
    render() {
        return (
            <div>
                <img src="baidu.com" alt="baidu" className="box"/>
            </div>
        )
    }
}
// 为什么要引入 React
// 因为 上面这句话在 浏览器上运行时候已经不在了 
// 实际上是 React.createElement('div',null)       
// 三个参数 第一个是 标签名字 ，第二个是 属性， 第三个及其以后的是 子节点