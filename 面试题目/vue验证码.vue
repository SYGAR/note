// 题目
// 请实现一个获取验证码的按钮组件，它在被点击之后，会触发 onClick 属性，并且同时进入 60s 的倒计时，在倒计时结束前，它会处于禁用状态。
// PS：主要考察 React 或 Vue 的能力，不用关注样式细节

<template>
  <div> <input type="text" value="请输入手机号">
   <button @click="time">获取验证码</button>
   </div>
</template>

<script>
export default {
methods:{
  // 倒计时60s,倒计时结束前,禁用按钮
  time(){
    var time = 60;
    var timer = setInterval(function(){
      time--;
      if(time == 0){
        clearInterval(timer);
      }
    },1000)
  }

}
}
</script>

<style>

</style>