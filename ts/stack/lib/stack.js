"use strict";
// 数据结构由什么组成？
// ADT 数据和操作数据方法
exports.__esModule = true;
// 栈 FILO 先进后出 队列 FIFO 先进先出 二叉树
// 元数据 items: any[]
// 方法: constructor this.items = []
// 入栈 push
// 出栈 pop
// 获取栈顶元素 peek
// 数量 size
// 是否为空 isEmpty
// 清空 clear
// 输出 toString 
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = new Array();
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Stack.prototype.clear = function () {
        this.items = [];
    };
    Stack.prototype.size = function () {
        return this.items.length;
    };
    Stack.prototype.toString = function () {
        return this.items.toString();
    };
    return Stack;
}());
exports["default"] = Stack;
