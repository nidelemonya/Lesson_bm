// 将一个字符串改变成另一个字符串, 莱文斯坦距离是多少?
var a = "mitcmu";
var b = "mtacnu";
var n = 6,
    m = 6; // 长度 有可能不等
// 各种策略都去尝试下， 用递归很容易 f(n,m) f(0,0)
// 回溯
var minDist = Infinity // 最大值, JS 无穷大
// 一个大问题 分成若干个相似的小问题, 递归
function lwstBT(i, j, edist) { // 递归 每一次都是 i,j
    // dist 依赖上一步的编辑距离 0 + 1
    // 退出条件
    if (i == n || j == m) { // 不一定同时到达
        if (i < n) {
            edist += (n - i);
        }
        if (j < m) {
            edist += (m - j);
        }
        if (edist < minDist) {
            minDist = edist;
        }
        return;
    }
    if (a[i] == b[j]) {
        lwstBT(i + 1, j + 1, edist) // 两个相等, 不改变编辑距离
    } else {
        // 穷举
        lwstBT(i + 1, j, edist + 1); // 删除a[i] 或者 b[j]前添加一个字符
        // 增
        // 删
        lwstBT(i, j + 1, edist + 1); // 删除b[j] 或者 a[i]前添加一个字符
        lwstBT(i + 1, j + 1, edist + 1); // 替换为相同字符
        // 改
    }
}
lwstBT(0, 0, 0);
console.log(minDist);