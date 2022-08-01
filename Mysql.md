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

