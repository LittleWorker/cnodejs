<template>
  <div class="userInfo">
    <router-link to="/" tag="span" class='backMain'>主页</router-link>
    <div class="personInfo">
      <img class="avatar" :src="userData.avatar_url" alt="头像">
      <span class="userName">{{userData.loginname}}</span>
      <p class="score">{{userData.score}} 积分</p>
    </div>
    <div class="createTalk">

    </div>
    <div class="joinTalk">

    </div>
  </div>
</template>

<script>
 export default {
   name:'userInfo',
   data () {
     return {
       userData:{}
     }
   },
   components: {

   },
   created () {
      let that = this;
      let fetch_url = `https://cnodejs.org/api/v1/user/${this.$route.params.userID}`;
      fetch(fetch_url)
      .then(function(response){
        return response.json();})
      .then(function(json){
        that.userData = json.data;
      })
   }
 }
</script>

<style>
.userInfo{
  position: relative;
  width: 1100px;
  height: auto;
  margin-top:8px;
  margin-left: 300px;  
}
.backMain{
  display: inline-block;
  width: 100%;
  height:40px;
  color:rgb(128, 189, 1);
  font-size: 12px;
  line-height:40px;
  background-color: rgb(246, 246, 246);
  box-sizing: border-box;
  padding-left:10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}
.personInfo{
  position: relative;
  width: 100%;
  height: auto;
  box-sizing:border-box;
  padding:14px 10px 16px 10px; 
  background: #fff;
  font-size:14px;
}
.personInfo > .avatar{
  width:40px;
  height:40px;
}
.personInfo .score{
  margin-top: 4px;
}
</style>
