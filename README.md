# Study-notes
![build:passing](https://img.shields.io/badge/build-passing-brightgreen.svg)
![language:JavaScript](https://img.shields.io/badge/language-JavaScript-blue.svg)
![language:C#](https://img.shields.io/badge/language-C%23-blue.svg)
## JS
1. Json
    ```
    //json字符串变为对象
    let jsonObject = JSON.parse(jsonString);
    //json对象变为字符串
    let jsonString = JSON.stringify(jsonObject);
    ```
### [Src](https://github.com/adamsandwich/Study_Notes/blob/master/JS/Sourse.js)
### Common Repository
1. [Chart.js](http://www.chartjs.org/) </br> 简单灵活的 JavaScript 图表
2. [Swiper.js](http://idangero.us/swiper/) </br> 纯 JavaScript 打造的滑动、触摸特效插件，面向手机、平板电脑等移动终端
### Canvas
1. basic
    * context : Canvas 绘图环境</br>`var context = document.getElementById('CanvasId').getContext('2d');`
    * context 属性
        * 设置字体样式 </br> `context.font = "30px Courier New";`
        * 设置填充颜色 </br> `context.fillStyle = "black";`
        * 绘制文字 </br> `context.fillText("text", x, y);`
        * 把当前的绘制状态推进栈里 </br> `context.save();`
        * 移除自上一次调用 save 方法以来所添加的任何效果 </br> `context.restore();`
        * 绘制路径 </br> `ctx.stroke();`
        * 绘制路径颜色 </br> `ctx.strokeStyle="green";`
2. function
    * 绘制圆角矩形 </br> `roundedRect(ctx, x, y, width, height, radius,color)`
    * 画直线箭头 </br> `drawArrow(ctx, fromX, fromY, toX, toY, theta, headlen, width, color)`
    * 画箭头 </br> `drawHead(ctx, x0, y0, x1, y1, x2, y2, style, color, width)`
    * 画弧线箭头 </br> `drawArcedArrow(ctx, x, y, r, startangle, endangle, anticlockwise, style, which, angle, d, color, width)`
    * 绘制阴影 </br> `drawShadow(x, y, blur, color)`

## CSS
### Lesson
1. Q : 页面上下滑动回弹至初始位置 <br/> A : 设置height属性为auto

### Common Repository
1. [weui](https://github.com/Tencent/weui)<br/>WeUI 为微信 Web 服务量身设计 [Example](https://weui.io/)
## icon
1. [flat-icon-design](http://flat-icon-design.com/)
2. [fontawesome](http://fontawesome.dashgame.com/)

## C \#
1. 匿名类 <br/> 方便 json序列化
    ```
    var class = new
    {
        attribute1 = "string",
        attribute2 = int,
        attribute3 = new { attribute = "string" }
    };
    ```
2. json 序列化
    ```
    JavaScriptSerializer jsonSerialize = new JavaScriptSerializer();
    jsonSerialize.Serialize(object);
    ```
3. json 反序列化
    ```
    JavaScriptSerializer jsonSerialize = new JavaScriptSerializer();
    var object = jsonSerialize.Deserialize<objectclass>(jsonString);
    ```
4. 4.5.1 `$`语法糖 <br/>
字符串前面加$符号后，字符串里{}内就可以写程序范围内的变量
    ```
    string id = "110";
    string query = $"select * from table where id={id}";
    ```

## Anaconda
- 创建环境
    ```
    conda create -n tensorflow python=3.5
    ```
- 删除环境
    ```
    conda remove -n tensorflow --all
    ```
- 进入环境 路径前显示(tensorflow)
    ```
    activate tensorflow
    ```

## Star List
|[验证码识别](https://github.com/ladingwu/identfying_code_recognize)|[Practical Projects](https://github.com/karan/Projects)|[GifLoadingView](https://github.com/Rogero0o/GifLoadingView)|[Neural Artistic Style](https://github.com/andersbll/neural_artistic_style)|[Py libraries](https://github.com/vinta/awesome-python)|
| :---: | :---: | :---: | :---: | :---: |
|[Bilibili用户爬虫](https://github.com/airingursb/bilibili-user)|[waifu2x-caffe](https://github.com/lltcggie/waifu2x-caffe)|[Hawk](https://github.com/ferventdesert/Hawk)|[OpenHardwareMonitor](https://github.com/openhardwaremonitor/openhardwaremonitor)|[Algorithms](https://github.com/nonstriater/Learn-Algorithms)|
|[思源宋体](https://github.com/adobe-fonts/source-han-serif)|[YouTube Downloader](https://github.com/bradlys/monochromatic-panda)|[You-Get](https://github.com/soimort/you-get)|[Font-Awesome](https://github.com/FortAwesome/Font-Awesome)|[Tensorflow](https://github.com/zhedongzheng/finch)|
|[LinqToExcel](https://github.com/paulyoder/LinqToExcel)|[Wi-Fi Cracking](https://github.com/brannondorsey/wifi-cracking)|[Shields Badge](https://github.com/badges/shields)|||

## Atom Packages
- markdown-preview-plus
- atom-html-preview
- markdown-table-editor
- simplified-chinese-menu
