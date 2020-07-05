阿里 winter 重选前端
![](https://static001.geekbang.org/resource/image/96/9e/9684130e423b6734b23652f4f0b6359e.jpg)
原则
- 对传统div 块级元素 + span行内元素 css 的重构
    em i span
    1. p > div
-  爬虫派出的蜘蛛是看不见 读不懂的 需要加一些语义化的H5标签
让算法了解网页的意义。
     
语义化
1. html 语义化标签
2. 找出不合理的地方
    结构相关？
    header + footer 二线公司
    1. aside + article (main/content)
    2. nav +ol>li
    3. hgroup 到底需不需要用 <hr/> => 不应该使用
    <hgroup>
        <h1>Welcome to my WWF</h1>
        <hr/>
        <h2>For a living planet</h2>
    </hgroup>
    - https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/hr
    - HTML <hr> 元素表示段落级元素之间的主题转换（例如，一个故事中的场景的改变，或一个章节的主题的改变）。

    - 在HTML的早期版本中，它是一个水平线。现在它仍能在可视化浏览器中表现为水平线，但目前被定义为语义上的，而不是表现层面上。所以如果想画一条横线，请使用适当的css样式来修饰。
    4. <abbr  title="World Wide Web">WWW</abbr>
        爬虫派出的蜘蛛是看不见 读不懂的 需要加一些语义化的H5标签
        让算法了解网页的意义。
    5. figure
    6. pre + code
       pre + samp