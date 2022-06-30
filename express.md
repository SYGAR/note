官方给出的概念：Express是基于Node.js平台，快速、开放、极简的Web开发框架。

### 安装
```js
npm i express@4.17.1
```

### 监听GET请求
```js
// 1. 导入 express
const express = require('express')
// 2. 创建 web 服务器
const app = express()

// 4. 监听客户端的 GET 和 POST 请求，并向客户端响应具体的内容
app.get('/user', (req, res) => {
  // 调用 express 提供的 res.send() 方法，向客户端响应一个 JSON 对象
  res.send({ name: 'zs', age: 20, gender: '男' })
})
```

### 监听POST请求
```js
app.post('/user', (req, res) => {
  // 调用 express 提供的 res.send() 方法，向客户端响应一个 文本字符串
  res.send('请求成功')
})
```

### 获取URL中携带的查询参数
```js
app.get('/', (req, res) => {
  // 通过 req.query 可以获取到客户端发送过来的 查询参数
  // 注意：默认情况下，req.query 是一个空对象
  console.log(req.query)
  res.send(req.query)
})
```

### 获取URL的动态参数
通过 req.params 可以获取到客户端发送过来的动态参数
```js
app.get('/user/:ids/:username', (req, res) => {
  // req.params 是动态匹配到的 URL 参数，默认也是一个空对象
  console.log(req.params)
  res.send(req.params)
})
```

### 托管静态资源
1.express.static()
通过以下的代码就可以将public目录下的图片、css文件、JacaScript文件对外开放访问了
```js
app.use(express.static('public'))
```
<mark>注意：Express在指定的静态目录中查找文件，并对外提供资源的访问路径。因此，存放静态文件的目录名不会出现在URL中，比如上面的public不hi出现在URL中</mark>

### 托管多个静态资源目录
```js
app.use(express.static('public'))
app.use(express.static('files'))
```
访问静态资源文件时，express.static()函数会根据目录的添加顺序查找所需的文件。

### 挂载路径前缀
如果希望在托管的静态资源访问路径之前，挂载路径前缀，则可以使用如下的方式：
```js
app.use('./public',express.static('public'))
```

### nodemon
#### 能够监听项目文件的变动，当代码被修改后，nodemon会自动帮我们重启项目，极大方便了开发和调试。

#### 安装nodemon
在终端中，运行如下命令，即可将nodemon安装为全局可用的工具：
```js
npm install -g nodemon
```
#### 使用nodemon
传统是node app.js
```js
nodemon app.js
```

### 路由
广义上来讲，路由就是映射关系。
在Express中，路由指的是客户端请求与服务器处理函数之间的映射关系。Express中的路由分3部分组成，分别是请求的类型、请求的URL地址、处理函数。
```js
app.METHOD(PATH, HANDLER)
```
### 路由的匹配过程
每当一个请求到达服务器之后，需要先经过路由的匹配，只有匹配成功之后，才会调用对应的处理函数。
在匹配时，会按照路由的顺序进行匹配，如果请求类型和请求的URL同时匹配成功，则Express会将这次请求，转交给对应的function函数进行处理。
路由匹配的注意点：
1.按照定义的先后顺序进行匹配
2.请求类型和请求的URL同时匹配成功，才会调用对应的处理函数

### 路由的使用
#### 模块化路由
1.创建路由模块对应的.js文件
2.调用express.Router()函数创建路由对象
3.向路由对象上挂载具体的路由
4.使用module.exports向外共享路由对象
5.使用app.use()函数注册路由模块

#### 为路由模块添加前缀
app.use('/api',router)

### 中间件的概念
中间件(Middleware)，特指业务流程的中间处理环节。当一个请求到达Express的服务器之后，可以连续调用多个中间件，从而对这次请求进行预处理。

Express的中间件，本质上就是一个function处理函数。
注意：中间件函数的形参列表中，必须包含next参数。而路由处理函数中只包含req和res。
next函数是实现多个中间件连续调用的关键，它表示把流转关系转交给下一个中间件或路由。

#### 定义中间件函数
```js
const mw = function(req,res,next){
    next()
}
```

#### 全局生效的中间件
```js
const mw = function(req,res,next){
    next()
}
app.use(mw)
```

#### 定义全局中间件的简化形式

```js
app.use(function(req,res,next){
    next()
})
```

#### 中间件的作用
多个中间件之间，共享同一份req和res。可以在上游的中间件中，统一为req或res对象添加自定义的属性或方法，供下游的中间件或路由进行使用。

#### 定义多个全局中间件
可以用app.use()连续定义多个全局中间件。客户端请求到达服务器之后，会按照中间件定义的先后顺序依次进行调用。

#### 局部生效的中间件
不使用app.use()定义的中间件，叫做局部生效的中间件。
```js
app.get('/',mw1,function(req,res,next){
    next()
})
```

### 定义多个局部中间件
```js
app.get('/',mw1,mw2,function(req,res,next){
    next()
})
app.get('/',[nw1,nw2],function(req,res,next){
    next()
})
```

### 中间件的5个使用注意事项
1.一定要在路由之前注册中间件
2.客户端发送过来的请求，可以连续调用多个中间件进行处理
3.执行完中间件的业务代码之后，不要忘记调用next()函数
4.防止代码逻辑混乱，调用next()函数之后不要再写额外的代码
5.连续调用多个中间件之后，多个中间件之间，共享req和res对象