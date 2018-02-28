# Html
![language:JavaScript](https://img.shields.io/badge/language-Html-blue.svg)
## Notes
1. `<label>` `for`属性规定 label 与哪个表单元素绑定。如表单元素为radio、checkbox时，点击label时焦点会移植绑定表单元素上。
    ```
    <label for="demo">demo</label>
    <input type="text" id="demo" />
    ```
2. 响应式布局 手机端 `<head>`
    ```
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">  
    name="viewport" - 名称=视图
    width=device-width - 页面宽度=设备宽度(可以理解为获取你手机的屏幕宽度)
    initial-scale - 初始的缩放比例  
    minimum-scale - 允许用户缩放到的最小比例   
    maximum-scale - 允许用户缩放到的最大比例  
    user-scalable - 用户是否可以手动缩放
    minimal-ui - 移动端Safari浏览器不显示地址栏和工具栏(iOS7.1新增)
    ```
