1. basic
    - context : Canvas 绘图环境</br>`var context = document.getElementById('CanvasId').getContext('2d');`
    - context 属性
        - 设置字体样式 </br> `context.font = "30px Courier New";`
        - 设置填充颜色 </br> `context.fillStyle = "black";`
        - 绘制文字 </br> `context.fillText("text", x, y);`
        - 把当前的绘制状态推进栈里 </br> `context.save();`
        - 移除自上一次调用 save 方法以来所添加的任何效果 </br> `context.restore();`
        - 绘制路径 </br> `ctx.stroke();`
        - 绘制路径颜色 </br> `ctx.strokeStyle="green";`
        - 线条末端线帽的样式 </br> `ctx.lineCap=""butt|round|square;`
2. function
    - 绘制圆角矩形 </br> `roundedRect(ctx, x, y, width, height, radius,color)`
    - 画直线箭头 </br> `drawArrow(ctx, fromX, fromY, toX, toY, theta, headlen, width, color)`
    - 画箭头 </br> `drawHead(ctx, x0, y0, x1, y1, x2, y2, style, color, width)`
    - 画弧线箭头 </br> `drawArcedArrow(ctx, x, y, r, startangle, endangle, anticlockwise, style, which, angle, d, color, width)`
    - 绘制阴影 </br> `drawShadow(x, y, blur, color)`
