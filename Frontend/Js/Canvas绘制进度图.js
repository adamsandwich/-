/**
* 绘制圆角矩形
* @param ctx Canvas绘图环境
* @param x 矩形左上角顶点横坐标
* @param y 矩形左上角顶点纵坐标
* @param width 矩形宽度
* @param height 矩形高度
* @param radius 圆角半径
* @param color 填充颜色
*/
function roundedRect(ctx, x, y, width, height, radius,color)
{
   ctx.beginPath();
   ctx.moveTo(x, y + radius);
   ctx.lineTo(x, y + height - radius);
   ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
   ctx.lineTo(x + width - radius, y + height);
   ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
   ctx.lineTo(x + width, y + radius);
   ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
   ctx.lineTo(x + radius, y);
   ctx.quadraticCurveTo(x, y, x, y + radius);
   ctx.fillStyle = color;
   ctx.fillRect(100,150,200,60);
   //ctx.stroke();
}

/**
* 画直线箭头
* @param ctx Canvas绘图环境
* @param fromX 起点横坐标
* @param fromY 起点纵坐标
* @param toX 终点横坐标
* @param toY 终点纵坐标
* @param theta 三角斜边一直线夹角
* @param headlen 三角斜边长度
* @param width 箭头线宽度
* @param color 箭头颜色
*/
function drawArrow(ctx, fromX, fromY, toX, toY, theta, headlen, width, color)
{
    theta = typeof (theta) != 'undefined' ? theta : 30;
    headlen = typeof (theta) != 'undefined' ? headlen : 10;
    width = typeof (width) != 'undefined' ? width : 1;
    color = typeof (color) != 'color' ? color : '#000';
    // 计算各角度和对应的P2,P3坐标
    var angle = Math.atan2(fromY - toY, fromX - toX) * 180 / Math.PI,
        angle1 = (angle + theta) * Math.PI / 180,
        angle2 = (angle - theta) * Math.PI / 180,
        topX = headlen * Math.cos(angle1),
        topY = headlen * Math.sin(angle1),
        botX = headlen * Math.cos(angle2),
        botY = headlen * Math.sin(angle2);

    ctx.save();
    ctx.beginPath();

    var arrowX = fromX - topX,
        arrowY = fromY - topY;

    ctx.moveTo(arrowX, arrowY);
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    arrowX = toX + topX;
    arrowY = toY + topY;
    ctx.moveTo(arrowX, arrowY);
    ctx.lineTo(toX, toY);
    arrowX = toX + botX;
    arrowY = toY + botY;
    ctx.lineTo(arrowX, arrowY);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();
    ctx.restore();
}
/**
* 画箭头
* @param ctx Canvas绘图环境
* @param x0
* @param y0
* @param x1
* @param y1
* @param x2
* @param y2
* @param style 箭头样式
* @param color 箭头颜色
* @param width 箭头宽度
*/
function drawHead(ctx, x0, y0, x1, y1, x2, y2, style, color, width)
{
    if (typeof (x0) == 'string') {
        x0 = parseInt(x0);
    }
    if (typeof (y0) == 'string') {
        y0 = parseInt(y0);
    }
    if (typeof (x1) == 'string') {
        x1 = parseInt(x1);
    }
    if (typeof (y1) == 'string') {
        y1 = parseInt(y1);
    }
    if (typeof (x2) == 'string') {
        x2 = parseInt(x2);
    }
    if (typeof (y2) == 'string') {
        y2 = parseInt(y2);
    }

    var radius = 3,
        twoPI = 2 * Math.PI;

    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.lineTo(x2, y2);

    switch (style) {
        case 0:
            var backdist = Math.sqrt(((x2 - x0) * (x2 - x0)) + ((y2 - y0) * (y2 - y0)));
            ctx.arcTo(x1, y1, x0, y0, .55 * backdist);
            ctx.fill();
            break;
        case 1:
            ctx.beginPath();
            ctx.moveTo(x0, y0);
            ctx.lineTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.lineTo(x0, y0);
            ctx.fill();
            break;
        case 2:
            ctx.stroke();
            break;
        case 3:
            var cpx = (x0 + x1 + x2) / 3;
            var cpy = (y0 + y1 + y2) / 3;
            ctx.quadraticCurveTo(cpx, cpy, x0, y0);
            ctx.fill();
            break;
        case 4:
            var cp1x, cp1y, cp2x, cp2y, backdist;
            var shiftamt = 5;
            if (x2 == x0) {
                backdist = y2 - y0;
                cp1x = (x1 + x0) / 2;
                cp2x = (x1 + x0) / 2;
                cp1y = y1 + backdist / shiftamt;
                cp2y = y1 - backdist / shiftamt;
            } else {
                backdist = Math.sqrt(((x2 - x0) * (x2 - x0)) + ((y2 - y0) * (y2 - y0)));
                var xback = (x0 + x2) / 2;
                var yback = (y0 + y2) / 2;
                var xmid = (xback + x1) / 2;
                var ymid = (yback + y1) / 2;
                var m = (y2 - y0) / (x2 - x0);
                var dx = (backdist / (2 * Math.sqrt(m * m + 1))) / shiftamt;
                var dy = m * dx;
                cp1x = xmid - dx;
                cp1y = ymid - dy;
                cp2x = xmid + dx;
                cp2y = ymid + dy;
            }
            ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x0, y0);
            ctx.fill();
            break;
    }
    ctx.restore();
}

/**
* 画弧线箭头
* @param ctx
* @param x 起点横坐标
* @param y 起点纵坐标
* @param r 圆弧半径
* @param startangle 起始角度
* @param endangle 终止角度
* @param anticlockwise 反顺时针
* @param style 三角斜边一直线夹角
* @param which 箭头指向 1正向 2逆向
* @param angle
* @param d 箭头大小
* @param color 箭头颜色
* @param width 箭头线宽度
*/
function drawArcedArrow(ctx, x, y, r, startangle, endangle, anticlockwise, style, which, angle, d, color, width)
{
   style = typeof (style) != 'undefined' ? style : 3;
   which = typeof (which) != 'undefined' ? which : 1;
   angle = typeof (angle) != 'undefined' ? angle : Math.PI / 8;
   d = typeof (d) != 'undefined' ? d : 10;
   color = typeof (color) != 'undefined' ? color : '#000';
   width = typeof (width) != 'undefined' ? width : 1;

   ctx.save();
   ctx.beginPath();
   ctx.lineWidth = width;
   ctx.strokeStyle = color;
   ctx.arc(x, y, r, startangle, endangle, anticlockwise);
   ctx.stroke();
   var sx, sy, lineangle, destx, desty;
   ctx.strokeStyle = 'rgba(0,0,0,0)';
   if (which & 1) {
       sx = Math.cos(startangle) * r + x;
       sy = Math.sin(startangle) * r + y;
       lineangle = Math.atan2(x - sx, sy - y);
       if (anticlockwise) {
           destx = sx + 10 * Math.cos(lineangle);
           desty = sy + 10 * Math.sin(lineangle);
       } else {
           destx = sx - 10 * Math.cos(lineangle);
           desty = sy - 10 * Math.sin(lineangle);
       }
       drawArrow2(ctx, sx, sy, destx, desty, style, 2, angle, d, color, width);
   }

   if (which & 2) {
       sx = Math.cos(endangle) * r + x;
       sy = Math.sin(endangle) * r + y;
       lineangle = Math.atan2(x - sx, sy - y);
       if (anticlockwise) {
           destx = sx - 10 * Math.cos(lineangle);
           desty = sy - 10 * Math.sin(lineangle);
       } else {
           destx = sx + 10 * Math.cos(lineangle);
           desty = sy + 10 * Math.sin(lineangle);
       }
       drawArrow2(ctx, sx, sy, destx, desty, style, 2, angle, d, color, width);
   }
   ctx.restore();
}

function drawArrow2(ctx, x1, y1, x2, y2, style, which, angle, d, color, width)
{
    if (typeof (x1) == 'string') {
        x1 = parseInt(x1);
    }
    if (typeof (y1) == 'string') {
        y1 = parseInt(y1);
    }
    if (typeof (x2) == 'string') {
        x2 = parseInt(x2);
    }
    if (typeof (y2) == 'string') {
        y2 = parseInt(y2);
    }
    style = typeof (style) != 'undefined' ? style : 3;
    which = typeof (which) != 'undefined' ? which : 1;
    angle = typeof (angle) != 'undefined' ? angle : Math.PI / 9;
    d = typeof (d) != 'undefined' ? d : 10;
    color = typeof (color) != 'undefined' ? color : '#000';
    width = typeof (width) != 'undefined' ? width : 1;
    var toDrawHead = typeof (style) != 'function' ? drawHead : style;
    var dist = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    var ratio = (dist - d / 3) / dist;
    var tox, toy, fromx, fromy;
    if (which & 1) {
        tox = Math.round(x1 + (x2 - x1) * ratio);
        toy = Math.round(y1 + (y2 - y1) * ratio);
    } else {
        tox = x2;
        toy = y2;
    }

    if (which & 2) {
        fromx = x1 + (x2 - x1) * (1 - ratio);
        fromy = y1 + (y2 - y1) * (1 - ratio);
    } else {
        fromx = x1;
        fromy = y1;
    }

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(fromx, fromy);
    ctx.lineTo(tox, toy);
    ctx.stroke();

    var lineangle = Math.atan2(y2 - y1, x2 - x1);
    var h = Math.abs(d / Math.cos(angle));
    if (which & 1) {
        var angle1 = lineangle + Math.PI + angle;
        var topx = x2 + Math.cos(angle1) * h;
        var topy = y2 + Math.sin(angle1) * h;
        var angle2 = lineangle + Math.PI - angle;
        var botx = x2 + Math.cos(angle2) * h;
        var boty = y2 + Math.sin(angle2) * h;
        toDrawHead(ctx, topx, topy, x2, y2, botx, boty, style, color, width);
    }

    if (which & 2) {
        var angle1 = lineangle + angle;
        var topx = x1 + Math.cos(angle1) * h;
        var topy = y1 + Math.sin(angle1) * h;
        var angle2 = lineangle - angle;
        var botx = x1 + Math.cos(angle2) * h;
        var boty = y1 + Math.sin(angle2) * h;
        toDrawHead(ctx, topx, topy, x1, y1, botx, boty, style, color, width);
    }
}
//绘制阴影


/**
* 绘制阴影
* @param x 阴影Y轴偏移
* @param y 阴影X轴偏移
* @param blur 模糊尺寸
* @param color 颜色
*/
function drawShadow(x, y, blur, color)
{
    context.shadowOffsetX = x;
    context.shadowOffsetY = y;
    context.shadowBlur = blur;
    context.shadowColor = color;
}
