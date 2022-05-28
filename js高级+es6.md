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

### 构造函数创建对象
```javascript
 function Star(uname, age) {
            this.uname = uname;
            this.age = age;
            this.sing = function() {
                console.log('我会唱歌');

            }
        }

        var ldh = new Star('刘德华', 18);
        var zxy = new Star('张学友', 19);
        console.log(ldh);
        ldh.sing();
        zxy.sing();
```
构造函数是一种特殊的函数，主要用来初始化对象，即为对象成员变量赋初始值，它总与new一起使用。我们可以把对象中一些公共的属性和方法抽取出来，然后封装到这个函数里面。
在JS中，使用构造函数时要注意以下两点：
1.构造函数用于创建某一类对象，其首字母要大写
2.构造函数要<mark>和new一起使用</mark>才有意义

new在执行时会做四件事情：
① 在内存中创建一个新的空对象
② 让this指向这个新对象
③ 执行构造函数里面的代码，给这个新对象添加属性和方法
④ 返回这个新对象（所以构造函数里面不需要return）

### 实例成员和静态成员
实例成员就是构造函数内部通过this添加的成员，实例成员只能通过实例化的对象来访问 例如 console.log(ldh.uname)

静态成员 在构造函数内部本身上添加的成员，例如 console.log(Star.uname)

### 构造函数原型 prototype
构造函数通过原型分配的函数是所有对象共享的
我们也称prototype为原型对象
一般情况下，我们的公共属性定义到构造函数里面，公共的方法我们放到原型对象身上