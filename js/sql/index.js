const users = [{
        id: 0,
        name: 'wxj',
        age: 18,
        sex: 'male'
    },
    {
        id: 1,
        name: 'john',
        age: 28,
        sex: 'male'
    },
    {
        id: 2,
        name: 'bob',
        age: 33,
        sex: 'male'
    },
    {
        id: 3,
        name: 'tom',
        age: 22,
        sex: 'male'
    },
    {
        id: 4,
        name: 'alice',
        age: 18,
        sex: 'female'
    },
    {
        id: 5,
        name: 'rihana',
        age: 35,
        sex: 'female'
    },
    {
        id: 6,
        name: 'sara',
        age: 20,
        sex: 'female'
    }
]

// SQL 业务能力封装起来
// es5 function 类
// 抽象
function SQL(table) {
    this.table = table; // 数据源
    // 结果的保存变量 当下的结果, 保存每一步的操作过后的结果 this._result
    this._result = null; // 结构 挂载this 对象属性? 中间结果
    this._getRows = function () {
        // 有结果就返回结果 没结果就返回表
        return this._result ? this._result : this.table
    }
}
// 条件动作
SQL.prototype.where = function (predicate) {
    // filter
    // console.log(predicate);
    var rows = this._getRows();
    // console.log(rows);

    // 对于引用类型，我们不能typeof来判断具体的类型，因为返回的都是‘object’
    // 判断是不是数组
    // 1. instanceof
    // if (rows instanceof Array) {

    // 2. Array.isArray(rows)
    // if (Array.isArray(rows)) {

    // 3. 对象构造函数的 constructor
    if (rows.constructor === Array) {
        // 如果是数组的话
        this._result = rows.filter(predicate);
    } else {
        // 如果是对象的话 object
        // 拿出每一个数组 filter 返回的仍然是对象
        // console.log(Object.keys(rows));
        this._result = Object.keys(rows)
            .reduce(function (groups, group) {
                groups[group] = rows[group].filter(predicate);
                return groups;
            }, {})
    }
    // console.log(this._result);
    return this;
}
SQL.prototype.groupBy = function (key) {
    // console.log(key);
    var rows = this._getRows(); // 带_的方法 私有方法
    // console.log(rows);
    // 分组 reduce
    // 一个结果数组n 分组成 一个json object 1
    this._result = rows.reduce(function (groups, row) {
        // console.log(groups, row);
        var group = row[key];
        // console.log(group);
        // console.log(groups);
        // 如果没有就新建一个
        if (!groups[group]) { // 总有第一次
            groups[group] = [];
        }
        groups[group].push(row);
        return groups;
    }, {}) // 初始值
    // console.log(this._result);
    return this;
}

SQL.prototype.getResult = function() {
    return this._result;
}

var sql = new SQL(users);
// filter
var predicate = function (row) {
    return row.age < 30;
}
var result = sql
    .groupBy('sex') // 链式调用
    .where(predicate)
    .getResult();

console.log(result);

// 函数最后返回 this 就可以链式调用