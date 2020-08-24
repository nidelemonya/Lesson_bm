import React, { Component } from 'react';
class Mix extends Component {
    state = {
        visiable: false
    }

    handleToggle = (e) => {
        // console.log(1)
        this.setState({
            visiable: !this.state.visiable
        })
        // console.log(this.state.visiable)
        // e.stopPropagation(); js 原生事件与 React 事件 混合
        // React 会把 所有的 React 语法写出来的事件 放到 document 上面
        // 所有的事件 统一采用的事件监听 都是一个
        // document.addEventListener('click') 其他同理
        // 事件监听器 内部维护了 元素 和 事件处理函数 的关系
        // e.stopPropagation() 不生效 是因为 它也是 react 自己实现的 阻止冒泡
        // 仅限于 都用 react 的事件 才生效
        // 合成事件: 就是 react 的一套事件系统
        // 阻止不了 原生 js 事件
    }

    handleContent = (e) => {
    }

    componentDidMount() {
        document.body.addEventListener('click', () => {
            // console.log(2)
            this.setState({
                visiable: false
            })
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleToggle}>toggle</button>
                <div style={{display: this.state.visiable ? 'block' : 'none'}} onClick={this.handleContent}>
                    内容
                </div>
            </div>
        )
    }
}

export default Mix;