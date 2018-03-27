# Study-Notes
![build:passing](https://img.shields.io/badge/build-passing-brightgreen.svg)
![language:JavaScript](https://img.shields.io/badge/language-JavaScript-blue.svg)
![language:C#](https://img.shields.io/badge/language-C%23-blue.svg)
![language:Python](https://img.shields.io/badge/language-Python-blue.svg)

## Frontend
- [Js](https://github.com/adamsandwich/Study_Notes/blob/master/Frontend/Js/Js.MD)
- [Css](https://github.com/adamsandwich/Study_Notes/blob/master/Frontend/Css/Css.MD)
- [Html](https://github.com/adamsandwich/Study_Notes/blob/master/Frontend/Html/Html.MD)
- [印记中文开发文档](https://www.docschina.org/)
- [MDN Web Docs](https://developer.mozilla.org/zh-CN/)
- [Markdown Css](https://github.com/adamsandwich/Study_Notes/blob/master/Frontend/Css/Markdown.css) 从Atom偷的(ง •_•)ง
## Backend
- [C#](https://github.com/adamsandwich/Study_Notes/blob/master/Backend/C%23/C%23.MD)
- [Python](https://github.com/adamsandwich/Study_Notes/blob/master/Backend/Python/Python.MD)

## Machine Learning
- [TensorFlow](https://github.com/adamsandwich/Study_Notes/blob/master/Backend/Python/TensorFlow.MD)
## Linux
- [Linux](https://github.com/adamsandwich/Study_Notes/blob/master/Linux/Linux.MD)
## Shortcut Key
1. Visual Studio
    - `Ctrl + K + D` 格式化Html代码
    - `Ctrl + K + C` 注释代码
    - `Ctrl + R + W` 显示空格
2. JetBrain Series
    - `Ctrl + Alt + L` 代码自动对齐
    - `Ctrl + Shift + Enter` 行尾添加分号
    - `Ctrl + /` 使用//进行注释
    - `Ctrl + Shift + /` 使用/**/进行注释
    - `Alt + Enter` 优化导入包
    - `Alt + Insert` 智能插入,生成Getter、Setter构造器、Maven中的Plugin等等

## Tips
- WIFI:T:**安全等级**;S:**Wi-Fi名称**;P:**密码**; <br/>
    [zxing](https://github.com/zxing/zxing/wiki/Barcode-Contents#wifi-network-config-android) 提出的一种编码形式「Wifi Network config (Android)
- `ping -l 65500 -t ip地址`

## Git
- Commit Message 规范 <br/>
    Example : `Emoji[Optional] Type Subject Body[Optional]` <br/>
    Type :
    ```
    Feat : 增加新功能；
    Fix : 修复错误；
    Docs : 修改文档；
    Style : 修改样式；
    Refactor : 代码重构；
    Test : 增加测试模块，不涉及生产环境的代码；
    Chore : 更新核心模块，包配置文件，不涉及生产环境的代码；
    ```
    Subject : 标题不超过50个字符，结尾不需要对应的句号；应该使用祈使句来描述，比如：修复标点符号错误。 <br/>
    Body : 对本次 Commit 做一些背景说明，阐释具体的原因和内容，但是不解释具体的过程。注意：正文的文字不能超过72个字符。