# Python
![language:Python](https://img.shields.io/badge/language-Python-blue.svg)
## Repository
1. [Requests](./Requests.MD) - HTTP 库
2. [RE](./RE.MD) - 正则表达式库
## Notes
1. Python交互式环境的提示符：`>>>` <br>
      Windows命令行模式的提示符：`C:>`
2. `r' '`表示`' '`内部的字符串默认不转义
        ```
        >>> print(r'\\\t\\')
        \\\t\\
        ```
3. 多行字符串 `'''...'''`
    ```
    >>> print('''line1
    ... line2
    ... line3''')
    line1
    line2
    line3
    ```
4. 通常用全部大写的变量名表示常量
    ```
    PI = 3.14159265359
    ```
5. list tuple <br> tuple只有一个元素时
    ```
    list=[a,b,c]
    tuple=(a,b,c)
    tupleOne=(a,)
    ```
6. `*args` 是**可变参数**，args接收的是一个tuple；<br>
  `**kw` 是**关键字参数**，kw接收的是一个dict。
<<<<<<< HEAD
7. 默认情况下，dict迭代的是key。如果要迭代value，可以用`for value in d.values()`，如果要同时迭代key和value，可以用`for k, v in d.items()`。
8. `isinstance(object, classinfo)` 如果参数object是classinfo的实例，或者object是classinfo类的子类的一个实例， 返回True。如果object不是一个给定类型的的对象， 则返回结果总是False。
9. map(function, iterable)
    ```
    >>> list(map(str, [1, 2, 3, 4, 5, 6, 7, 8, 9]))
    ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    ```
10. reduce(function, iterable)
    ```
    reduce(f, [x1, x2, x3, x4]) = f(f(f(x1, x2), x3), x4)
    ```
11. 返回函数 闭包
    ```
    def count():
    fs = []
    for i in range(1, 4):
        def f():
             return i*i
        fs.append(f)
    return fs

    f1, f2, f3 = count()

    >>> f1()
    9
    >>> f2()
    9
    >>> f3()
    9
    ```
    `f1,f2,f3 = count()` -> `[f1,f2,f3]`<br/>
    `count()`中每次循环产生一个函数，`count()`返回的是一个`list[f(),f(),f()]`，f()返回的值是`i*i`而不是`1*1`或`2*2`，因此当三个函数都返回时，`i`已经变成3了，所以`f()`的值是9，结果是`[9,9,9]`，所以调用`f1`,`f2`,`f3`结果都是9。
12. `__slots__` <br>
    限制实例的属性。比如，只允许对Student实例添加name和age属性。
    ```
    class Student(object):
    __slots__ = ('name', 'age') # 用tuple定义允许绑定的属性名称
    ```
    `__slots__`定义的属性仅对当前类实例起作用，对继承的子类是不起作用的

## Anaconda - 包管理与环境管理
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
