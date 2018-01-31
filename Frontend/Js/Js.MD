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
