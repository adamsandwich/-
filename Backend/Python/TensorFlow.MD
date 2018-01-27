# TensorFlow
1. 安装`Anaconda`
2. 查看tensorflow支持的py版本 [点击此处查看](https://pypi.python.org/pypi/tensorflow/)
3. 创建环境
```
conda create -n tensorflow python=3.5
```
4. 进入环境 路径前显示(tensorflow)
```
activate tensorflow
```
5. 安装tensorflow
```
pip install tensorflow
```
6. 测试是否安装成功，在虚拟环境下，输入`python`进入Python命令行 </br>
   显示’Hello, TensorFlow!’则安装成功。
```
import tensorflow as tf
hello = tf.constant('Hello, TensorFlow!')
sess = tf.Session()
print(sess.run(hello))
```
