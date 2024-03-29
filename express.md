## 官方给出的概念：Express是基于Node.js平台，快速、开放、极简的Web开发框架。

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
```
express.static()
通过以下的代码就可以将public目录下的图片、css文件、JacaScript文件对外开放访问了
```
```js
app.use(express.static('public'))
```
<mark>注意：Express在指定的静态目录中查找文件，并对外提供资源的访问路径。因此，存放静态文件的目录名不会出现在URL中，比如上面的public不会出现在URL中</mark>

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
```
每当一个请求到达服务器之后，需要先经过路由的匹配，只有匹配成功之后，才会调用对应的处理函数。
在匹配时，会按照路由的顺序进行匹配，如果请求类型和请求的URL同时匹配成功，则Express会将这次请求，转交给对应的function函数进行处理。
路由匹配的注意点：
1.按照定义的先后顺序进行匹配
2.请求类型和请求的URL同时匹配成功，才会调用对应的处理函数
```

### 路由的使用
#### 模块化路由
```
1.创建路由模块对应的.js文件
2.调用express.Router()函数创建路由对象
3.向路由对象上挂载具体的路由
4.使用module.exports向外共享路由对象
5.使用app.use()函数注册路由模块
```

#### 为路由模块添加前缀
app.use('/api',router)

### 中间件的概念
```
中间件(Middleware)，特指业务流程的中间处理环节。当一个请求到达Express的服务器之后，可以连续调用多个中间件，从而对这次请求进行预处理。

Express的中间件，本质上就是一个function处理函数。
注意：中间件函数的形参列表中，必须包含next参数。而路由处理函数中只包含req和res。
next函数是实现多个中间件连续调用的关键，它表示把流转关系转交给下一个中间件或路由。
```

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
```
1.一定要在路由之前注册中间件
2.客户端发送过来的请求，可以连续调用多个中间件进行处理
3.执行完中间件的业务代码之后，不要忘记调用next()函数
4.防止代码逻辑混乱，调用next()函数之后不要再写额外的代码
5.连续调用多个中间件之后，多个中间件之间，共享req和res对象
```

### 中间件的分类
```
1.应用级别的中间件
通过app.use()或app.get()或app.post(),绑定到app实例上的中间件，叫做应用级别的中间件。
```
```
2.路由级别的中间件
绑定到express.Router()实例上的中间件
ps:应用级别中间件是绑定到app实例上，路由级别中间件绑定到router实例上
```
```
3.错误级别的中间件
专门用来捕获整个项目中发生的异常错误，从而防止项目异常崩溃的问题。
格式：app.use(function(err,req,res,next){
    // do something
})
注意：错误级别的中间件，必须注册在所有路由之后.
```
```
4.Express内置的中间件
1.express.static()：用来处理静态资源的中间件，可以处理静态资源，如图片、css、js等。（无兼容性）
2.express.json()：用来解析请求体中的json数据，并将其转换成对象。（有兼容性）
3.express.urlencoded()：用来解析请求体中的x-www-form-urlencoded数据，并将其转换成对象。（有兼容性）
```
```
5.第三方的中间件
非Express官方内置的
使用步骤：
1.运行npm install body-parser安装中间件
2.使用require导入中间件
3.调用app.use()注册并使用中间件
```

### 基于cors解决跨域问题
```
解决接口跨域问题的方案主要有两种：
1.CORS（主流的解决方案，推荐使用）
2.JSONP（有缺陷的解决方案，只支持GET请求）
```

#### 使用步骤
cors是Express的一个第三方中间件。通过安装和配置cors中间件
```
1.运行npm install cors安装中间件
2.使用const cors = require('cors')导入中间件
3.在路由之前调用app.use(cors())配置中间件
```

#### cors
```
CORS（Cross-Origin Resource Sharing，跨域资源共享）由一系列HTTP响应头组成，这些HTTP响应头决定浏览器是否阻止前端JS代码跨域获取资源。
浏览器的同源安全策略默认会阻止网页“跨域”获取资源。但如果接口服务器配置了CORS相关的HTTP响应头，就可以解除浏览器端的跨域访问限制。
```

#### cors的注意事项
```
1.CORS主要在服务器端进行配置，客户端浏览器无须做任何额外的配置，即可请求开启了CORS的接口。
2.CORS在浏览器中有兼容性，只有支持XMLHttpRequest Level2的浏览器,才能正常访问开启了CORS的服务端接口（例如：IE10+,Chrom4+,FireFox3.5+)。
```
#### CORS响应头部-Access-Control-Allow-Origin
```
Access-Control-Allow-Origin：<origin> | *
其中<origin>是一个域名或者IP地址，表示允许访问的域名或者IP地址，*表示允许任意域名访问。
例如,下面的字段值将只允许来自Http://itcast.cn的请求
res.setHeader('Access-Control-Allow-Origin', 'http://itcast.cn');

如果指定了Access-Control-Allow-Origin字段的值为通配符*，表示允许来自任何域的请求
res.setHeader('Access-Control-Allow-Origin', '*');
```
#### CORS响应头部-Access-Control-Allow-Headers
``` 
默认情况下，CORS仅支持客户端向服务器发送如下的9个请求头：
Accept, Accept-Language, Content-Language, DPR,Downlink, Save-Data, Viewport-Width, Width,Content-Type(值仅限于text/plain,multipart/form-data,application/x-www-form-urlencoded三者之一)。
如果客户端向服务器发送了额外的请求头信息，则需要在服务器端，通过Access-Control-Allow-Headers对额外的请求头进行声明，否则这次请求会失败。
例如：
res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Custom-Header');
```

#### CORS响应头部-Access-Control-Allow-Methods
```
默认情况下，CORS仅支持客户端发起GET,POST,HEAD请求。
如果客户端希望通过PUT,DELETE等方式请求服务器的资源，则需要在服务器端，通过Access-Control-Allow-Methods来指明实际请求所允许使用的HTTP方法。
例如：
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
允许所有：
res.setHeader('Access-Control-Allow-Methods', '*');
```

#### CORS请求的分类
```
客户端在请求CORS接口时，根据请求方式和请求头的不同，可以将CORS的请求分为两大类，分别是：
1.简单请求
2.预检请求
```

#### 简单请求
```
同时满足以下两大条件的请求，就属于简单请求
1.请求方式:GET,POST,HEAD三者之一
2.HTTP头部信息不超过以下几种字段：无自定义头部，Accept,Accept-Language,Content-Language,DPR,Downlink,Save-Data,Viewport-Width,Width,Content-Type(只有三个值text/plain,multipart/form-data,application/x-www-form-urlencoded三者之一)。
```

#### 预检请求
```
只要符合以下任何一个条件的请求，都需要进行预检请求：
1.请求方式为GET,POST,HEAD之外的请求METHOD类型
2.请求头中包含自定义头部
3.向服务器发送了application/json格式的数据

在浏览器与服务器正式通信之前，浏览器会先发送OPTION请求进行预检，以获知服务器是否允许该实际请求，所以这一次的OPTION请求称为“预检请求”。服务器成功响应预检请求后，才会发送真正的请求，并且携带真实数据。
```

#### 简单请求和预检请求的区别
```
简单请求的特点：客户端与服务器之间只会发生一次请求。
预检请求的特点：客户端与服务器之间会发生两次请求，OPTION预检请求成功之后，才会发起真正的请求。
```

### JSONP的概念与特点
```
概念：浏览器通过<script>标签的src属性，请求服务器上的数据，同时，服务器返回一个函数的调用，这种请求数据的方式叫做JSONP。
特点：
1.JSON[不属于真正的Ajax请求，因为它没有使用XMLHttpRequest这个对象。
2.JSONP仅支持GET请求，不支持POST，PUT,DELETE等请求。
```

#### 创建JSONP接口的注意事项
```
如果项目中已经配置了CORS跨域资源共享，为了防止冲突，必须在配置CORS中间件之前声明JSONP的接口。否则JSONP接口会被处理成开启了CORS的接口。
```

#### 实现JSONP接口的步骤
```
1.获取客户端发送过来的回调函数的名字
2.得到要通过JSONP形式发送给客户端的数据
3.根据前两步得到的数据，拼接出一个函数调用的字符串
4.把上一步拼接得到的字符串，响应给客户端的<script>标签进行解析进行
```



