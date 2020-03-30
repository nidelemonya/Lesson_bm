/*bilibili 2020校招技术类笔试：
    输入一个 "YYYY-MM-dd"格式的日期字符串，输出该天是当年的第几天（1月1日是每年的第1天）
输入描述：
        一个 "YYYY-MM-dd"格式的日期字符串
输出描述：
        该天是当年的第几天
输入例子1：
        2019-01-09
输出例子1：
        9
输入例子2：
        2004-03-01
输出例子2：
        61
例子说明2：
        2004年为闰年，所以是31+29+1=61天
*/
//Date();

//用户输入的日期字符串 now 表示现在时间
var now="2020-03-30"
var nowDate =new Date(now);
//${}把里面的表达式变成字符串
var firstDayDate =new Date(`${nowDate.getFullYear()}-01-01`);//当年第一天
//计算两个日期之间间隔的毫秒数
//getTime() :返回距 1970 年 1 月 1 日之间的毫秒数
var ms =nowDate.getTime() - firstDayDate.getTime();
var days =parseInt(ms/(1000*60*60*24))+1;
console.log(days);