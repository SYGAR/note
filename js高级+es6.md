面向过程编程POP
面向对象编程OOP

对象是一个具体的事物
类抽象了对象的公共部分，它泛指某一大类

### constructor
通过class关键字创建类，类目我们习惯性定义首字母大写
constructor函数，可以接收传递过来的参数，同时返回实例对象
constructor函数只要new生成实例，就会自动调用这个函数，如果我们不写这个函数，类也会自动生成这个函数

### super
super关键字用于访问和调用对象父类上的函数。可以调用父类的构造函数，也可以调用父类的普通函数
super必须在子类this之前调用

在ES6中类没有变量提升，所以必须先定义类，才能通过类实例化对象
类里面的共有属性和方法一定要加this使用
constructor里面的this指向实例对象，方法里面的this指向这个方法的调用者

### insertAdjacentHTML
insertAdjacentHTML() 方法将指定的文本解析为 Element 元素，并将结果节点插入到DOM树中的指定位置。它不会重新解析它正在使用的元素，因此它不会破坏元素内的现有元素。这避免了额外的序列化步骤，使其比直接使用innerHTML操作更快。

### 双击禁止选定文字
双击的事件是：ondblclick
window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();

### 创建对象可以通过以下三种方式
1.对象字面量
2.new Object()
3.自定义构造函数