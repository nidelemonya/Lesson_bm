const {
    createStore,
    combineReducers
} = require('redux');
// action：纯对象（{}）, type 字段：区分这个action 干啥的，常量, 整个应用中是唯一的
// Symbol () 里面是给人看的，传什么值都无所谓
const LOGIN_STATUS = Symbol('login/change-login-status');
const POSTS_STATUS = Symbol('posts/change-posts-status');
let isLogin = false;
let posts = [];
// 状态 reducer（纯函数）
// state 上一次的状态
// createStore 经过 reducer 生成 store ： 状态默认值
// dispatch action 也要 reducer 生成 store ： 用户触发
// reducer 兼顾两者： 判断
function loginReducer(state = isLogin, action) {
    switch (action.type) {
        case LOGIN_STATUS:
            return !state           // 返回新的state， 不是修改原来那个变量
        default:                    // default 默认值
            return state;
    }
}

function postsReducer(state = posts, action) {
    switch (action.type) {
        case POSTS_STATUS:
            return action.newPosts;
        default:
            return posts;
    }
}
// 自研状态管理库：单向

const loginAction = {
    type: LOGIN_STATUS,
    a: 1
}
const postAction = {
    type: POSTS_STATUS,
    newPosts: [{
        a: 1
    }, {
        a: 2
    }]
}
// 分了 login posts
// 接受一个
// combineReducers 集合
const rootReducer = combineReducers({
    login: loginReducer,
    posts: postsReducer
})
// 状态存到 store
// 没有指定任何 action type
const store = createStore(rootReducer); // createStore（需要返回值） 也调用了 reducer
console.log(store);
// mapStateToProps
console.log('now', store.getState());

// action - reducer

// mapDispatchToProps
store.dispatch(loginAction);
store.dispatch(postAction);
console.log('now', store.getState());
// 去到  loginReducer 、 postsReducer，该去到哪个

// react-redux