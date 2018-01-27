# JS
![language:JavaScript](https://img.shields.io/badge/language-JavaScript-blue.svg)
## Repository
1. [jQuery BlockUI Plugin](https://github.com/malsup/blockui/) </br> 元素的叠加、常用于弹窗、加载元素
2. [Chart.js](http://www.chartjs.org/) </br> 简单灵活的 JavaScript 图表
3. [Swiper.js](http://idangero.us/swiper/) </br> 纯 JavaScript 打造的滑动、触摸特效插件，面向手机、平板电脑等移动终端
## Personal Code
- [Canvas绘制进度图](https://github.com/adamsandwich/Study_Notes/blob/master/JS/Canvas绘制进度图.js)
## Notes
1. Json
    ```
    //json字符串变为对象
    let jsonObject = JSON.parse(jsonString);
    //json对象变为字符串
    let jsonString = JSON.stringify(jsonObject);
    ```
2. Canvas
    - basic
        * context : Canvas 绘图环境</br>`var context = document.getElementById('CanvasId').getContext('2d');`
        * context 属性
            * 设置字体样式 </br> `context.font = "30px Courier New";`
            * 设置填充颜色 </br> `context.fillStyle = "black";`
            * 绘制文字 </br> `context.fillText("text", x, y);`
            * 把当前的绘制状态推进栈里 </br> `context.save();`
            * 移除自上一次调用 save 方法以来所添加的任何效果 </br> `context.restore();`
            * 绘制路径 </br> `ctx.stroke();`
            * 绘制路径颜色 </br> `ctx.strokeStyle="green";`
    - function
        * 绘制圆角矩形 </br> `roundedRect(ctx, x, y, width, height, radius,color)`
        * 画直线箭头 </br> `drawArrow(ctx, fromX, fromY, toX, toY, theta, headlen, width, color)`
        * 画箭头 </br> `drawHead(ctx, x0, y0, x1, y1, x2, y2, style, color, width)`
        * 画弧线箭头 </br> `drawArcedArrow(ctx, x, y, r, startangle, endangle, anticlockwise, style, which, angle, d, color, width)`
        * 绘制阴影 </br> `drawShadow(x, y, blur, color)`
