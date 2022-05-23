### 配置用户信息
 git config --global user.name "yemengxia"
 git config --global user.email "2404701479@qq.com"

### 查看所有的全局配置项
git config --list --global

### 查看指定的全局配置项
git config user.name
git config user.email

### 获取帮助信息
git help <verb> 
要想打开git config 命令的帮助手册 git help config
想要获取 git config 命令的快速参考 git config -h

### 将当前的目录转化为Git仓库
git init

### 显示文件状态
git status
精简显示 git status -s/git status --short

### 开始跟踪一个文件
git add index.html