### 数据库(database)是用来组织、存储和管理数据的仓库。

### 常见的数据库及分类
1.MySQL数据库（目前使用最广泛、流行度最高的开源免费数据库：Community +Enterprise）
2.Oracle数据库（收费）
3.SQL Server数据库（收费）
4.Mongodb数据库（Community +Enterprise）

其中，MySQL、Oracle、SQL Server属于传统型数据库（又叫做：关系型数据库或SQL数据库），这三者的设计理念相同，用法比较类似。
而Mongodb属于新型数据库（又叫做：非关系型数据库或NoSQL数据库），它在一定程度上弥补了传统型数据库的缺陷。

### 传统型数据库的数据组织结构
在传统数据库中，数据的组织结构分为数据库（database）、数据表（table）、数据行（row）、字段（field）这4大部分组成。

### 实际开发中库、表、行、字段的关系
1.在实际项目开发中，一般情况下，每个项目都对应独立的数据库。
2.不同的数据，要存储到数据库的不同表中。
3.每个表中具体存储哪些信息，由字段来决定。
4.表中的行，代表每一条具体的数据。

### 需要安装哪些MySQL相关的软件
对于开发人员来说，只需要安装MySQL Server和MySQL Workbench这两个软件。
MySQL Server:专门用来提供数据存储和服务的软件。
MySQL Workbench:可视化的MySQL管理工具，提供它，可以方便的操作存储在MySQL Server中的数据。

### 什么是SQL
SQL是结构化查询语言，专门用来访问和处理数据库的编程语言。能够让我们以编程的形式，操作数据库里面的数据。

三个关键点：
1.SQL是一门数据库编程语言
2.使用SQL语言编写出来的代码，叫做SQL语句
3.SQL语言只能在关系型数据库中使用（例如MySQL、Oracle、SQL Server）非关系型数据库（例如Mongodb）不支持SQL语言。

### SQL能做什么
1.从数据库中查询数据
2.向数据库中插入新的数据
3.更新数据库中的数据
4.从数据库删除数据
5.可以创建新数据库
6.可在数据库中创建新表
7.可在数据库中创建存储过程、视图
8.etc

### select语句
select语句用于从表中查询数据。执行的结果被存储在一个结果表中（称为结果集）。
SELECT * FROM 表名称
SELECT 列名称 FROM 表名称
注意：SQL语句中的关键字对大小写不敏感。SELECT等效于select，FROM等效于from。
```
select * from users
select username,password from users
```
### INSERT INTO 语句
INSERT INTO table_name(列1，列2，...) VALUES (值1, 值2, ...)
```
insert into users(username,password) values('tony stark','0981223')
```
### update语句
update语句用于修改表中的数据
UPDATE 表名称 SET 列名称 = 新值 WHERE 列名称 = 某值
```
update users set password='888888' where id=4
update users set password='admin123',status=1 where id=2
```
### DELETE语句
DELETE语句用于删除表中的行
DELETE FROM 表名称 WHERE 列名称 = 值
```
delete from users where id=4
```

### WHERE子句
WHERE子句用于限定选择的标准。在SELECT、UPADTE、DELETE语句中，皆可使用WHERE子句来限定选择的标准。

### AND和OR运算符
AND和OR可在WHERE子句中把两个或多个条件结合起来。
AND表示必须同时满足多个条件，相当于JavaScript中的&&运算符，例如if(a !==10 && a !==20)。
OR表示只要满足一个条件，相当于JavaScript中的||运算符，例如if(a !==10 || a !==20)。

### ODER BY语句
1.ORDER BY语句用于根据指定的列对结果集进行排序
2.ORDER BY语句默认按照升序对记录进行排序（ASC)
3.可以使用DESC降序排序
```
select * from users order by status asc
select * from users order by status desc
```

### 多重排序
对user表中的数据，先按照status字段进行降序排序，再按照username的字母排序，进行升序排序
```
select * from users order by status desc,username asc
```

### COUNT(*)
COUNT(*)函数用于返回查询结果的总数据条数
```
SELECT COUNT(*) FROM 表名称
```

### 使用AS为列设置别名
如果希望给查询出来的列名称设置别名，可以使用AS关键字。
```
SELECT COUNT(*) AS total FROM users WHERE status=0
```

### 例子
```
-- 通过 * 把 users 表中所有的数据查询出来
-- select * from users

-- 从 users 表中把 username 和 password 对应的数据查询出来
-- select username, password from users

-- 向 users 表中，插入新数据，username 的值为 tony stark  password 的值为 098123
-- insert into users (username, password) values ('tony stark', '098123')
-- select * from users

-- 将 id 为 4 的用户密码，更新成 888888
-- update users set password='888888' where id=4
-- select * from users

-- 更新 id 为 2 的用户，把用户密码更新为 admin123  同时，把用户的状态更新为 1
-- update users set password='admin123', status=1 where id=2
-- select * from users

-- 删除 users 表中， id 为 4 的用户
-- delete from users where id=4
-- select * from users

-- 演示 where 子句的使用
-- select * from users where status=1
-- select * from users where id>=2
-- select * from users where username<>'ls'
-- select * from users where username!='ls'

-- 使用 AND 来显示所有状态为0且id小于3的用户
-- select * from users where status=0 and id<3

-- 使用 or 来显示所有状态为1 或 username 为 zs 的用户
-- select * from users where status=1 or username='zs'

-- 对users表中的数据，按照 status 字段进行升序排序
-- select * from users order by status

-- 按照 id 对结果进行降序的排序  desc 表示降序排序   asc 表示升序排序（默认情况下，就是升序排序的）
-- select * from users order by id desc

-- 对 users 表中的数据，先按照 status 进行降序排序，再按照 username 字母的顺序，进行升序的排序
-- select * from users order by status desc, username asc

-- 使用 count(*) 来统计 users 表中，状态为 0 用户的总数量
-- select count(*) from users where status=0

-- 使用 AS 关键字给列起别名
-- select count(*) as total from users where status=0
-- select username as uname, password as upwd from users
```

### 在项目中操作数据库的步骤
1.安装操作MySQL数据库的第三方模块（mysql）
2.通过mysql模块连接到MySQL数据库
3.通过mysql模块执行SQL语句

#### 安装mysql模块
mysql模块是托管于npm上的第三方模块。它提供了在Node.js项目中连接和操作MySQL数据库的能力。想要在项目中使用它，需要先运行如下命令，将mysql安装为项目的依赖包：
npm install mysql

#### 配置mysql模块
在使用mysql模块操作MySQL数据库之前，必须先对mysql模块进行必要的配置，主要的配置步骤如下：
```js
// 1. 导入 mysql 模块
const mysql = require('mysql')
// 2. 建立与 MySQL 数据库的连接关系
const db = mysql.createPool({
  host: '127.0.0.1', // 数据库的 IP 地址
  user: 'root', // 登录数据库的账号
  password: 'admin123', // 登录数据库的密码
  database: 'my_db_01', // 指定要操作哪个数据库
})
```
### 测试mysql模块能否正常工作
```js
db.query('select 1', (err, results) => {
    if (err) return console.log(err.message);
    console.log(results);
})
```
```
问题：Node.js第一次连接MySQL数据库时出现ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
解决办法：https://blog.csdn.net/leilei__66/article/details/110674462
```

### 查询数据
```js
db.query('select * from users', (err, results) => {
    if (err) return console.log(err.message);
    console.log(results);
})
```
注意：如果执行的是select查询语句，则执行的结果是数组

### 插入数据
```js
const user = { username: 'Spider-Man', password: 'pcc123' }
    // 定义待执行的 SQL 语句
const sqlStr = 'insert into users (username, password) values (?, ?)'
    // 执行 SQL 语句
db.query(sqlStr, [user.username, user.password], (err, results) => {
    // 执行 SQL 语句失败了
    if (err) return console.log(err.message)
        // 成功了
        // 注意：如果执行的是 insert into 插入语句，则 results 是一个对象
        // 可以通过 affectedRows 属性，来判断是否插入数据成功
    if (results.affectedRows === 1) {
        console.log('插入数据成功!')
    }
})
```
注意：如果执行的是 insert into 插入语句，则 results 是一个对象
可以通过affectedRows属性，来判断是否插入数据成功

### 插入数据的便捷方式
向表中新增数据时，如果数据对象的每个属性和数据表的字段一一对应，则可以通过如下方式快速插入数据：
```js
const user = { username: 'Spider-Man2', password: 'pcc4321' }
    // 定义待执行的 SQL 语句
const sqlStr = 'insert into users set ?'
    // 执行 SQL 语句
db.query(sqlStr, user, (err, results) => {
    if (err) return console.log(err.message)
    if (results.affectedRows === 1) {
        console.log('插入数据成功')
    }
})
```

### 更新数据
```js
const user = { id: 6, username: 'aaa', password: '000' }
    // 定义 SQL 语句
const sqlStr = 'update users set username=?, password=? where id=?'
    // 执行 SQL 语句
db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
    if (err) return console.log(err.message)
        // 注意：执行了 update 语句之后，执行的结果，也是一个对象，可以通过 affectedRows 判断是否更新成功
    if (results.affectedRows === 1) {
        console.log('更新成功')
    }
})
```
### 更新数据的快捷方式
```js
const user = { id: 6, username: 'aaaa', password: '0000' }
    // 定义 SQL 语句
const sqlStr = 'update users set ? where id=?'
    // 执行 SQL 语句
db.query(sqlStr, [user, user.id], (err, results) => {
    if (err) return console.log(err.message)
    if (results.affectedRows === 1) {
        console.log('更新数据成功')
    }
})
```

### 删除数据
```js
const sqlStr = 'delete from users where id=?'
db.query(sqlStr, 5, (err, results) => {
    if (err) return console.log(err.message)
        // 注意：执行 delete 语句之后，结果也是一个对象，也会包含 affectedRows 属性
    if (results.affectedRows === 1) {
        console.log('删除数据成功')
    }
})
```

### 标记删除
使用DELETE语句,会把真正的数据从表中删除掉，为了保险起见，推荐使用标记删除的形式，来模拟删除的动作。所谓的标记删除，就算再表中设置类似于status这样的状态字段，来标记当前这条数据是否被删除。
当用户执行了删除的动作时，我们并没有执行DELETE语句把数据删除掉，而是执行了UPDATE语句，把这条数据对应的status字段标记为删除即可。
```js
// 标记删除
const sqlStr = 'update users set status=? where id=?'
db.query(sqlStr, [1, 6], (err, results) => {
  if (err) return console.log(err.message)
  if (results.affectedRows === 1) {
    console.log('标记删除成功')
  }
})
```

### web开发模式
目前主流的web开发模式有两种，分别是：
1.基于服务端渲染的传统web开发模式（服务端渲染的概念：服务器发送给客户端的HTML页面，是再服务器内通过字符串的拼接，动态生成的。因此，客户端不需要使用ajax这样的技术额外请求页面的数据。）
```
优点：
①前端耗时少。因为服务器端负责动态生成HTML内容，浏览器只需要直接渲染页面即可。尤其是移动端，更省电。
②有利于SEO。因为服务器端响应的是完整的HTML页面内容，所以爬虫更容易爬取获得信息，更利于SEO。
缺点：
①占用服务端资源。即服务器端完成HTML页面内容的拼接，如果请求较多，会对服务器造成一定的访问压力。
②不利于前后端分离，开发效率低。使用服务端渲染，则无法进行分工合作，尤其对于前端复杂度高的项目，不利于项目高效开发。
```
2.基于前后端分离的新型web开发模式
前后端分离的概念：前后端分离的开发模式，依赖于ajax技术的广泛应用。简而言之，前后端分离的web开发模式，就是后端只负责提供api接口，前端使用ajax调用接口的开发模式。
```
优点：
①开发体验好。前端专注于ui页面的开发，后端专注于api的开发，且前端有更多的选择性。
②用户体验好。ajax技术的广泛应用，极大的提高了用户的体验，可以轻松实现页面的局部刷新。
③减轻了服务器端的渲染压力。因为页面最终是再每个用户的浏览器中生成的。
缺点：
①不利于SEO。因为完整的HTML页面需要再客户端动态拼接完成，所以爬虫无法爬取页面的有效性息。（解决方案：利用vue、react等前端框架的SSR（server side render）技术能够很好的解决SEO问题！）
```

### 如何选择web开发模式
比如企业级网站，主要功能是展示而没有复杂的交互，并且需要良好的SEO，则这时我们就需要使用服务器端渲染；
而类似后台管理项目，交互性比较强，不需要考虑SEO，那么就可以使用前后端分离的开发模式。
另外，具体使用何种开发模式并不是绝对的，为了同时兼顾首页的渲染速度和前后端分离的开发效率，一些网站采用了首屏服务器端渲染+其他页面前后端分离的开发模式。

### 身份认证
身份认证（Authentication）又称“身份验证”、“鉴权”，是指通过一定的手段，完成对用户身份的确认。

#### 为什么需要身份认证
身份认证的目的，是为了确认当前所声称为某种身份的用户，确实是所声称的用户。

#### 不同开发模式下的身份认证
1.服务器端渲染推荐使用Session认证机制
2.前后端分离推荐使用JWT认证机制

### Session认证机制
#### 1.HTTP协议的无状态性
HTTP协议的无状态性，指的是客户端的每次HTTP请求都是独立的，连续多个请求之间没有直接的关系，服务器不会主动保留每次HTTP请求的状态。

#### 2.如何突破HTTP无状态的限制
在HTTP协议的无状态性的基础上，可以通过Cookie来解决这个问题。

#### 什么是Cookie
Cookie是存储在用户浏览器中的一般不超过4KB的字符串。它由一个名称（name）、一个值（value）和其他几个用于控制Cookie有效期、安全性、使用范围的可选属性组成。
不同域名下的Cookie各自独立，每当客户端发起请求时，会自动把当前域名下所有未过期的Cookie一同发送到服务器。
Cookie的几大特性：
1.自动发送
2.域名独立
3.过期时限
4.4KB限制
