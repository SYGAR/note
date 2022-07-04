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