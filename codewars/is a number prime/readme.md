## 质数定义
质数(Prime number)，又称素数，指在大于1的自然数中，除了1和该数自身外，无法被其他自然数整除的数（也可定义为只有1与该数本身两个正因数的数）。大于1的自然数若不是素数，则称之为合数（也称为合成数）。

1. 大于1的自然数不是质数就是合数，因此可以通过判断是否是合数来进行优化。

2. 直接判断是不是质数运算量过大。通过定义可知大于1的自然数不是质数就是合数，因此可以通过判断合数来进行优化。

3. 假设num是个合数，它必然是两数之积，即num = a*b,且a,b均为不为1的正整数，a,b要么一大一小，要么相等。当a为最小值2时，b有最大值，即合数的最大因数为num/2，最小因数为2。换句话说一个数在2到num/2之间范围内有因数为合数，没因数为素数。

4. 上面的方式是通过最大因数判断，还可以继续优化减少运算。合数num为它的两个平方根之积，即num = ![](https://math.jianshu.com/math?formula=%5Csqrt%7Bnum%7D) * ![](https://math.jianshu.com/math?formula=%5Csqrt%7Bnum%7D), num=a*b,当a,b不相等时，一个大于![](https://math.jianshu.com/math?formula=%5Csqrt%7Bnum%7D)，一个小于![](https://math.jianshu.com/math?formula=%5Csqrt%7Bnum%7D)，即合数num较小的因数范围为2到![](https://math.jianshu.com/math?formula=%5Csqrt%7Bnum%7D)之间。