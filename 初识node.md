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
使用fs模块来操作文件，则需要使用如下的方式先导入它：
const fs = require('fs)

#### 读取指定文件中的内容
fs.readFile(path[,options],callback)

#### 向指定的文件中写入内容
fs.writeFile(file,data[,option],callback)