### 为什么javaScript 可以在浏览器中被执行？
浏览器中有javaScript解析引擎

### 为什么javaScript可以操作Dom和Bom？
每个浏览器都内置了Dom和Bom这样的API函数，因此，浏览器中的JavaScript才可以调用它们。

### 查看已安装的node.js的版本号
打开终端，在终端输入node -v

### 在node.js环境中执行javascript代码
1.打开终端
2.输入node要执行的js文件的路径

按住shift+右键 打开powershell终端
使用⬆键，可以快速定位到上一次执行的命令
使用tab键，能够快速补全路径
使用esc键，能够快速清空当前已输入的命令
输入cls命令，可以清空终端

### fs文件系统模块
fs模块是Node.js官方提供的、用来操作文件的模块。它提供了一系列的方法和属性，用来满足用户对文件的操作需求。

使用fs模块来操作文件，则需要使用如下的方式先导入它：
const fs = require('fs)

#### 读取指定文件中的内容
fs.readFile(path[,options],callback)

#### 向指定的文件中写入内容
fs.writeFile(file,data[,option],callback)
1.只能用来创建文件，不能用来创建路径，得先新建文件夹 fs.mkdir(path[,options],callback)
2.重复调用fs.writeFile()写入同一个文件，新写入的内容会覆盖之前的旧内容
### fs模块-路径动态拼接的问题
在使用fs模块操作文件时，如果提供的操作路径是./或../开头的相对路径时，很容易出现路径动态拼接错误的问题。
原因：代码在运行的时候，会以执行node命令时所处的目录，动态拼接出被操作文件的完整路径。
解决方案：在使用fs模块操作文件时，直接提供完整的路径，不要提供./或../开头的相对路径，从而防止路径动态拼接的问题。
 __dirname 表示当前文件所处的目录
 __dirname + '/files/1.txt'
 
 ### path模块
path模块是Node.js官方提供的、用来处理文件路径的模块。它提供了一系列的方法和属性，用来满足用户对文件路径的操作需求。
#### path.join(path1,path2,path3...),用来将多个路径片段拼接成一个完整的路径字符串。

#### path.basename(path[,ext]),用来从路径字符串中，将文件名解析出来。

#### path.extname(path),用来从路径字符串中，将文件扩展名解析出来。

### http模块
用来创建web服务器模块，通过http模块提供的http.createServer()方法，就能方便的把一台普通的电脑，变成一台web服务器，从而对外提供web资源服务。
const http = require('http')

### 创建web服务器基本步骤
1.导入http模块
const http = require('http')
2.创建web服务器实例
const server = http.createServer()
3.为服务器实例绑定reqquest事件，监听客户端的请求
server.on('request',(req,res)=>{
    // req是客户端的请求，res是服务器的响应
req.url // 请求的url
req.method // 请求的方法
res.end// 响应给客户端的内容
4.启动服务器
server.listen(80,()=>{
    console.log('server running at http://127.0.0.1:80')
})




