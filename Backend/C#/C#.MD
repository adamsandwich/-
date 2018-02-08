# C\#
![language:C#](https://img.shields.io/badge/language-C%23-blue.svg)
## Notes
1. 匿名类 <br/> 方便 json序列化
    ```
    var class = new
    {
        attribute1 = "string",
        attribute2 = int,
        attribute3 = new { attribute = "string" }
    };
    ```
2. json 序列化与反序列化 <br />
    现**不推荐**此种，**强烈建议使用Newtonsoft.Json**
    ```
    序列化
    JavaScriptSerializer jsonSerialize = new JavaScriptSerializer();
    string json = jsonSerialize.Serialize(object);
    反序列化
    JavaScriptSerializer jsonSerialize = new JavaScriptSerializer();
    var object = jsonSerialize.Deserialize<objectclass>(jsonString);
    ```
    **强烈建议使用如下**
    ![json性能比较](../../Images/json性能对比.png)
    ```
    using Newtonsoft.Json;
    序列化
    string json = JsonConvert.SerializeObject(object);
    反序列化
    public static T Deserialize<T>(string json)
    {
        JsonSerializer m_json = new JsonSerializer();
        m_json.NullValueHandling = NullValueHandling.Ignore;
        m_json.ObjectCreationHandling = ObjectCreationHandling.Replace;
        m_json.MissingMemberHandling = MissingMemberHandling.Ignore;
        m_json.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
        StringReader sr = new StringReader(json);
        JsonTextReader reader = new JsonTextReader(sr);
        object result = m_json.Deserialize(reader, typeof(T));
        reader.Close();
        return (T)result;
    }
    ```
3. `${}`字符串格式 - 语法糖 <br/>
    字符串前面加$符号后，字符串里{}内就可以写程序范围内的变量
    ```
    string id = "110";
    string query = $"select * from table where id={id}";
    ```
4. 测试代码执行时间
    ```
    System.Diagnostics.Stopwatch watch = new System.Diagnostics.Stopwatch();
    watch.Start();  //开始监视代码运行时间
    //需要测试的代码
    watch.Stop();  //停止监视
    TimeSpan timespan = watch.Elapsed;  //获取当前实例测量得出的总时间
    ```
5. Q : 使用Linq时，异常已有打开的与此 Command 相关联的 `DataReader`，必须首先将它关闭。<br/>
    A : 设定ConnectionString加上`MultipleActiveResultSets=true`，允许在单个连接上执行多重的数据库查询或存储过程。这样的结果是，你能够在单个连接上得到和管理多个、仅向前引用的、只读的结果集。
6. `Response.Redirect`
    - 为`true`时，相当于在`Redirect`后调用`Exit Sub/Function`，不再执行Redirect后的语句;
    - 为`false`时，依然执行`Redirect`后的语句。
7. `Entity Framework`中`DB First`从数据库更新模型时实体一定要有主键，否则无法更新模型
8. LINQ
    - group by
        ```
        var record = (from r in db.table_a
                    from p in db.table_b
                    where r.ID == p.ID
                    group r by new
                    {
                        Attribute1 = p.ID,
                        Attribute2 = p.Name,
                        Attribute3 = p.Price
                    } into g
                    select new DemoModel()
                    {
                        ID = g.Key.Attribute1,
                        Name = g.Key.Attribute2,
                        Price = g.Key.Attribute3,
                        Count = g.Count()
                    });
        ```