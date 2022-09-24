### webpack插件
通过安装和配置第三方插件，可以拓展webpack的能力，从而让webpack用起来更方便。最常用的webpack插件有如下两个：
1.webpack-dev-server
类似于node.js阶段用到的nodemon工具
每当修改了源代码，webpack会自动进行项目的打包和构建
2.html-webpack-plugin
webpack中的HTML插件（类似于一个模板引擎插件）
可以通过此插件自定制index.html页面的内容

### 安装webpack-dev-server
```js
npm install webpack-dev-server@3.11.2 -D
```

### 配置webpack-dev-server
1.修改package.json -> scripts中的dev命令如下：
```js
 "scripts": {
        "dev": "webpack serve"
    }
```
2.再次运行npm run dev命令，重新进行项目的打包
3.在浏览器中访问http://localhost:8080地址，查看自动打包效果

注意：webpack-dev-server会启动一个实时打包的http服务器
```
出现问题：Unable to load '@webpack-cli/serve' command
解决办法：npm install webpack-cli -D
```

注意：webpack-dev-server默认会把打包好的文件放到内存中，而不是放到dist目录中，所以在index.html中通过script标签引入的是内存中（根目录下）的打包文件，而不是dist目录中的打包文件
