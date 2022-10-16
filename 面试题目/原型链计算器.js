// 题目√
// 请用 原型链 或者 class 实现一个计算器，能够实现链式加减乘除
// 如: const calculator = new myCalculator(123);
// calculator.add(1).minus(2).multi(3).div(4).pow(2);

//使用原型链实现
function myCalculator(num) {
  this.num = num;
}
myCalculator.prototype.add = function (n) {
   this.num=this.num+n;
   return this;
}
myCalculator.prototype.minus = function (n) {
   this.num=this.num-n;
   return this;
}
myCalculator.prototype.multi = function (n) {
   this.num=this.num*n;
   return this;
}
myCalculator.prototype.div = function (n) {
   this.num=this.num/n;
   return this;
}
myCalculator.prototype.pow = function (n) {
   this.num=Math.pow(this.num,n);
   return this;
}
let sum=new myCalculator(123).add(1).minus(2).multi(3).div(4).pow(2);
console.log(sum.num);

//使用class实现
class MyCalculator1{
   constructor(value){
      this.value=value;
   }
   add(newValue){
      this.value+=newValue;
      return this;
   }
   minus(newValue){
      this.value-=newValue;
      return this;
   }
   multi(newValue){
      this.value*=newValue;
      return this;
   }
   div(newValue){
      this.value/=newValue;
      return this;
   }
   pow(newValue){
      this.value=Math.pow(this.value,newValue);
      return this;
   }
}
let sum1=new MyCalculator1(123).add(1).minus(2).multi(3).div(4).pow(2);
console.log(sum1.value);