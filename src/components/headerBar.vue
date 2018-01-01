<template>
  <div class="headerBar">
    <router-link to="/" class="icon" tag="span"></router-link>
    <div class="menu">
      <router-link to="/" tag="span">首页</router-link>
      <router-link to="/" tag="span">新手入门</router-link>
      <router-link to="/" tag="span">API</router-link>
      <router-link to="/" tag="span">关于</router-link>
      <router-link to="/" tag="span">注册</router-link>
    </div>
  </div>
</template>

<script>
 export default {
   name:'headerBar',
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style>
.headerBar{
  position: relative;
  width: 100%;
  height: 48px;
  background: #444;
}
.icon{
  position: relative;
  background: url('http://o4j806krb.qnssl.com/public/images/cnodejs_light.svg');
  background-repeat: no-repeat;
  display: inline-block;
  height: 100%;
  width: 120px;
  left: 300px;
  background-position: 50%;
  cursor: pointer;
}
.menu{
  display: inline-block;
  height: 100%;
  font-size: 14px;
  position: absolute;
  right:300px;
  text-align: center;
  line-height: 48px;
  color: #ccc;
}
.menu > span{
  margin-left: 16px;
  cursor: pointer;
}
.menu > span:hover{
  color:#fff;
}
</style>
