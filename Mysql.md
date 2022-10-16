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

### Cookie不具有安全性
由于Cookie是存储在浏览器中的，而且浏览器也提供了读写Cookie的API，因此Cookie很容易被伪造，不具有安全性。因此不建议服务器将重要的隐私数据，通过Cookie的形式发送给浏览器。
注意：千万不要使用Cookie存储重要且隐私的数据！比如用户的身份信息、密码等。
### Cookie在身份认证中的作用
客户端第一次请求服务器的时候，服务器通过响应头的形式，向客户端发送一个身份认证的Cookie，客户端会自动将Cookie保存在浏览器中。
随后，当客户端浏览器每次请求服务器的时候，浏览器会自动将身份认证相关的Cookie，通过请求头的形式发送给服务器，服务器即可验明客户端的身份。

### 在Express中使用Session认证
#### 安装express-session中间件
```
npm install express-session
```

#### 配置express-session中间件
```js
const session = require('express-session')
app.use(session({
    secret: 'itheima',
    resave: false,
    saveUninitialized: true
}))
```

#### 向session中存数据
```js
app.post('/api/login', (req, res) => {
    // 判断用户提交的登录信息是否正确
    if (req.body.username !== 'admin' || req.body.password !== '000000') {
        return res.send({ status: 1, msg: '登录失败' })
    }

    // TODO_02：请将登录成功后的用户信息，保存到 Session 中
    // 注意：只有成功配置了 express-session 这个中间件之后，才能够通过 req 点出来 session 这个属性
    req.session.user = req.body // 用户的信息
    req.session.islogin = true // 用户的登录状态
    res.send({ status: 0, msg: '登录成功' })
})
```
#### 从session中取数据
```js
app.get('/api/username', (req, res) => {
    // TODO_03：请从 Session 中获取用户的名称，响应给客户端
    if (!req.session.islogin) {
        return res.send({ status: 1, msg: 'fail' })
    }
    res.send({
        status: 0,
        msg: 'success',
        username: req.session.user.username,
    })
})
```

#### 清空session
```js
app.post('/api/logout', (req, res) => {
    // TODO_04：清空 Session 信息
    req.session.destroy()
    res.send({
        status: 0,
        msg: '退出登录成功',
    })
})
```

### JWT认证机制
#### 了解Session认证的局限性
Session认证机制需要配合Cookie才能实现。由于Cookie默认并不支持跨域访问，所以，当涉及到前端跨域请求后端接口的时候，需要做很多额外的配置，才能实现跨域Session认证。

注意：
当前端请求后端接口不存在跨域问题的时候，推荐使用Session身份认证机制。
当前端需要跨域请求后端接口的时候，不推荐使用Session身份认证机制，推荐使用JWT认证机制。

#### 什么是JWT
JWT（Json Web Token）是目前最流行的跨域认证解决方案。

#### JWT的工作原理
用户的信息通过Token字符串的形式，保存在客户端浏览器中。服务器通过还原Token字符串的形式来认证用户的身份。

#### JWT的组成部分
JWT通常由三个部分组成，分别是Header（头部）、Payload（有效荷载）、Signature（前面）。三者之间使用英文的“.”分隔。
Header.Payload.Signature
```
其中：
Playload部分才是真正的用户信息，它是用户信息加密之后生成的字符串。
Header和Signature是安全性相关的部分，只是为了保证Token的安全性。
```
#### JWT的使用方式
客户端收到服务器返回的JWT之后，通常会将它储存在localStorage或sessionStorage中。此后，客户端每次与服务端通信，都要带上上这个JWT的字符串，从而进行身份认证，推荐的做法是把JWT放在HTTP请求头Authorization字段中
```js 
Authorization: Bearer <Token>
```

#### 安装JWT相关的包
```
npm install jsonwebtoken express-jwt
```

#### 导入JWT相关的包
```js
//1,导入用于生成 JWT 字符串的包
const createJWT = require('jsonwebtoken')
    //2.导入用于将客户端发送过来的 JWT 字符串，解析还原成JSON对象的包
var { expressjwt: jwt } = require('express-jwt')
```

#### 定义secret密钥
为了保证JWT字符串的安全性，防止JWT字符串在网络传输过程中被别人破解，我们需要专门定义一个用于加密secret密钥：
1.当生成JWT字符串的时候，需要使用secret密钥对用户信息进行加密，最终得到加密好的JWT字符串
2.当把JWT字符串解析还原成JSON对象的时候，需要使用secret密钥进行解密
```js
const secret = 'itheima No1 ^_^'
```

#### 在登录成功后生成JWT字符串
调用jsonwebtoken包提供的sign()方法，将用户信息加密成JWT字符串，响应给客户端
```js
app.post('/api/login', function(req, res) {
    // 将 req.body 请求体中的数据，转存为 userinfo 常量
    const userinfo = req.body
        // 登录失败
    if (userinfo.username !== 'admin' || userinfo.password !== '000000') {
        return res.send({
            status: 400,
            message: '登录失败！'
        })
    }
    // 登录成功
    // TODO_03：在登录成功之后，调用 jwt.sign() 方法生成 JWT 字符串。并通过 token 属性发送给客户端
    const tokenStr = createJWT.sign({ username: userinfo.username }, secretKey, { expiresIn: '30s' })
    res.send({
        status: 200,
        message: '登录成功！',
        token: tokenStr // 要发送给客户端的 token 字符串
    })
})
```

#### 将JWT字符串还原为JSON对象
客户端每次在访问那些有权限接口的时候，都需要主动通过请求头中的Authorization字段，将Token字符串发送到服务器进行身份认证。
此时，服务器可以通过express-jwt这个中间件，自动将客户端发送过来的Token解析还原成JSON对象：
```js
app.use(jwt({ secret: secretKey, algorithms: ['HS256'] }).unless({ path: [/^\/api\//] }))
```

#### 使用req.auth获取用户信息
当express-jwt这个中间件配置成功后，即可在那些有权限的接口中，使用req.auth对象，来访问从JWT字符串中解析出来的用户信息了
```js
app.get('/admin/getinfo', function(req, res) {
    // TODO_05：使用 req.user 获取用户信息，并使用 data 属性将用户信息发送给客户端
    console.log(req.auth);
    res.send({
        status: 200,
        message: '获取用户信息成功！',
        data: req.auth // 要发送给客户端的用户信息
    })
})
```
#### 捕获解析JWT失败后产生的错误
当使用express-jwt解析Token字符串时，如果客户端发送过来的Token过期或不合法，会产生一个解析失败的错误，影响项目的正常运行。我们可以通过Express的错误中间件，捕获这个错误并进行相关的处理，示例代码如下：
```js
app.use((err, req, res, next) => {
        // 这次错误是由 token 解析失败导致的
        if (err.name === 'UnauthorizedError') {
            return res.send({
                status: 401,
                message: '无效的token',
            })
        }
        res.send({
            status: 500,
            message: '未知的错误',
        })
    })
```
