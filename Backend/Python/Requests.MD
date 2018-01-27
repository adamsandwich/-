# Requests库
1. Requests对象
    - `requests.get(url, params = None, **kwargs)` <br/>
    url:获取页面的url链接 <br/>
    params:url中的额外参数，字典或字节流格式，可选 <br/>
    **kwargs:12个控制访问的参数
2. Response对象
    - |属性|说明|
    |-|-|
    |r.status_code| HTTP请求的返回状态，200表示连接成功，404表示失败|
    |r.text| HTTP响应内容的字符串形式，即，url对应的页面内容|
    |r.encoding| 从HTTP header中猜测的响应内容编码方式|
    |r.apparent_encoding| 从内容中分析出的响应内容编码方式（备选编码方式）|
    |r.content| HTTP响应内容的二进制形式|
3. Requests库的异常
    | 异常 | 说明 |
    | ---- | ---- |
    |requests.ConnectionError| 网络连接错误异常，如DNS查询失败、拒绝连接等|
    |requests.HTTPError| HTTP错误异常|
    |requests.URLRequired| URL缺失异常|
    |requests.TooManyRedirects| 超过最大重定向次数，产生重定向异常|
    |requests.ConnectTimeout| 连接远程服务器超时异常|
    |requests.Timeout| 请求URL超时，产生超时异常|
