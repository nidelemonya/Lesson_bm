const debounce = (fn, delay) => {
    let timeout = null;
    return (...arg) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn.apply(this, arg)
        },delay)
    }
}

const throttle = (fn, delay = 500) => {
    let flag = true
    return (...arg) => {
        if (!flag) return
        flag = false
        setTimeout(() => {
            fn.apply(this,arg)
            flag = true
        },delay)
    }
}