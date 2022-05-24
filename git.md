### 配置用户信息
 git config --global user.name ""
 git config --global user.email ""

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

### 提交文件
git commit
git commit -m "新建了index.html文件"

### 撤销文件的修改
git checkout --index.html

### 一次性将所有的新增和修改过的文件加入暂存区
git add .

### 移除对应的文件
git reset HEAD 要移除的文件名称
git reset HEAD .移除所有

### 跳过暂存区 直接提交到仓库
git commit -a -m "..."

### 将远程仓库克隆到本地
git clone 远程仓库的地址

### 查看分支列表
git branch

### 创建新分支
git branch 分支名称

### 切换分支
git checkout 分支名称

### 分支快速创建和切换
-b 表示创建一个新分支
checkout 表示切换到刚刚新建的分支上
git checkout -b 分支名称

### 合并分支
git merge 分支名称

### 删除分支
git branch -d 分支名称
