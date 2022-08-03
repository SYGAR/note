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

### 分支合并冲突
打开包含冲突的文件，手动解决冲突之后，再执行如下的命令
git add .
git commit -m ""

### 把本地分支推送到远程仓库
-u表示把本地分支和远程分支进行关联，只有第一次推送的时候需要带 -u 参数
git push -u 远程仓库的别名 本地分支名称：远程分支名称 
例子： git push -u origin payment:pay

如果希望远程分支的名称和本地分支名称保持一致，可以对命令进行简化：git push -u origin payment

### 查看远程仓库的所有分支列表的信息
git remote show 远程仓库名称

### 从远程仓库中，把对应的远程分支下载到本地仓库，保持本地分支和远程分支名称相同
git checkout 远程分支的名称
例子：git checkout pay

### 从远程仓库中，把对应的远程分支下载到本地仓库，并把下载的本地分支进行重命名
git checkout -b 本地分支名称 远程仓库名称/远程分支名称
例子：git checkout -b payment origin/pay

### 从远程仓库，拉取当前分支最新的代码，保持当前分支的代码和远程分支代码一致
git pull

### 删除远程仓库中，指定名称的远程分支
git push 远程仓库名称 --delete 远程分支名称
例子：git push origin --delete pay