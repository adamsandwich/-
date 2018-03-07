# JS
![language:JavaScript](https://img.shields.io/badge/language-JavaScript-blue.svg)
## Repository
1. [jQuery BlockUI Plugin](https://github.com/malsup/blockui/) </br> 元素的叠加、常用于弹窗、加载元素
2. [Chart.js](http://www.chartjs.org/) </br> 简单灵活的 JavaScript 图表
3. [Swiper.js](http://idangero.us/swiper/) </br> 纯 JavaScript 打造的滑动、触摸特效插件，面向手机、平板电脑等移动终端
## Personal Code
- [Canvas绘制进度图](https://github.com/adamsandwich/Study_Notes/blob/master/Frontend/Js/Canvas绘制进度图.js)
## Notes
1. Json
    ES5标准内置JSON对象
    ```
    //json字符串变为对象
    let jsonObject = JSON.parse(jsonString);
    //json对象变为字符串
    let jsonString = JSON.stringify(jsonObject);
    ```
2. [Canvas](./Canvas.MD)
3. `setTimeout(fn, x)` </br>
    表示延迟x毫秒之后执行fn，记住及时清除`clearTimeout()`。HTML5规范规定最小延迟时间不能小于4ms，即x如果小于4，会被当做4来处理。
4. `setInterval(func, delay)` </br>
    重复调用一个函数或执行一个代码段，在每次调用之间具有固定的时间延迟。
5. Q : jQuery 嵌套 event 触发多次 </br>
    A : 所有事件的绑定都会委托给更底层的`.on()`在`$.event`对象中所有的事件都被push到一个数组中，当绑定的回调函数相同时，得先解绑`.unbind()`
6. Q : Ajax异步加载的元素无法被 jQuery 选择器选择</br>
    A : `$()`的时候缓存了这个 jQuery 对象，异步加载的元素在`$()`之后，所以失效。</br>
    **解决方案**：通过`.on()`方法绑定事件，绑定到它的父级`$(selector).on(event,childSelector,function)`
7. Q : C# `DateTime`对象时间显示
    A : 页面数据初始化时格式化数据
    ```
    var date = '/Date(1461772800000)/'
    var pa = /.*\((.*)\)/;  
    var unixtime = date.match(pa)[1].substring(0, 10);  
    var result= getTime(unixtime);

    function getTime(/** timestamp=0 **/) {  
        var ts = arguments[0] || 0;  
        var t, y, m, d, h, i, s;  
        t = ts ? new Date(ts * 1000) : new Date();  
        y = t.getFullYear();  
        m = t.getMonth() + 1;  
        d = t.getDate();  
        h = t.getHours();  
        i = t.getMinutes();  
        s = t.getSeconds();  
        // 可根据需要在这里定义时间格式    
        return y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d) + ' ' + (h < 10 ? '0' + h : h) + ':' + (i < 10 ? '0' + i : i) + ':' + (s < 10 ? '0' + s : s);  
    }  
    ```
8. console.time()和console.timeEnd(), 用来显示代码的运行时间
    ```
    console.time("控制台计时器一");
    for(var i=0;i<1000;i++){
        for(var j=0;j<1000;j++){}
        }
    console.timeEnd("控制台计时器一");
    ```
9. console.count（这个方法非常实用哦）当你想统计代码被执行的次数。
10. console.table方法