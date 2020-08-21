const getUserInfo = function (user) {
    return `name:${user.name}, age:${user.age}`
}

// 队友们 跟 用户可能会不按要求传参 潜在 bug
// java c++ typescript
// getUserInfo({name: 'koala', age: 18})

// getUserInfo()

// getUserInfo({name: 'koala'})

// getUserInfo({name: 'koala', height: 1.66})
// 返回值
