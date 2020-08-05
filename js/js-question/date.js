// 时间戳转日期格式
function format(time, format) {
    var t = new Date(time);
    var tf = function (i) {
        return (i < 10 ? '0' : '') + i
    };
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
        switch (a) {
            case 'yyyy':
                return tf(t.getFullYear());
                break;
            case 'MM':
                return tf(t.getMonth() + 1);
                break;
            case 'mm':
                return tf(t.getMinutes());
                break;
            case 'dd':
                return tf(t.getDate());
                break;
            case 'HH':
                return tf(t.getHours());
                break;
            case 'ss':
                return tf(t.getSeconds());
                break;
        }
    })
}



function time(time = +new Date()) {

    var date = new Date(time + 8 * 3600 * 1000); // 增加8小时

    return date.toJSON().substr(0, 19).replace('T', ' ');

}

time(); // "2018-08-09 18:25:54"


console.log(format(1594806659 * 1000, "yyyy-MM-dd HH:mm:ss"))


console.log(time(1594806659 * 1000))


