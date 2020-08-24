import React, { Component } from 'react';
export default class Order extends Component {
    childRef = React.createRef()
    parentRef = React.createRef()
    child = (e) => {
        console.log(1)
        e.stopPropagation();
    }
    parent = () => {
        console.log(2)
    }
    componentDidMount() {
        // 原生 js 点击事件 先执行
        // document.addEventListener('click',() = ? {
        // 哪一个 DOM 节点 回调该被执行
        // }
        document.addEventListener('click', () => {
            console.log('document')
        })
        this.childRef.current.addEventListener('click', () => {
            console.log('child')
        })
        this.parentRef.current.addEventListener('click', () => {
            console.log('parent')
        })
        const elements = (
            <ul>
                <li>1</li>
                <li>2</li>
            </ul>
        )
        console.log(elements)
    }
    render() {
        return (
            <div ref={this.parentRef} onClick={this.parent}>
                <div ref={this.childRef} onClick={this.child}>
                    child
                </div>
            </div>
        )
    }
}