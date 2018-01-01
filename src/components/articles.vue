<template>
  <div class="articles">
    <div class="header">
      <span class="title">{{articleData.title}}</span>
    </div>
    <div class="container">
      <div class="content" v-html="articleData.content">
      </div>
    </div>
    <div class="replyArea">
      <span class="replyCounts">{{replyCounts}} 回复</span>
      <div class="reply" v-for="(item,index) in articleData.replies" :key="index">
        <div class="leftSide">
          <img class="avatar" :src="item.author.avatar_url" alt="">
        </div>
        <div class="rightSide">
          <span class="info">
            <span class="name">{{item.author.loginname}}</span>
            <span class="level">{{index+1}}楼</span>
          </span>
          <div class="replyContent" v-html="item.content">
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
 export default {
   name:'articles',
   data () {
     return {
       articleData:{},
       replyCounts:0
     }
   },
   components: {

   },
   mounted () {
     console.log(this.$route.params);
   },
   created () {
     //根据router传递过来的文章id请求文章内容
     let articleID= this.$route.params.id,
         that = this;
     fetch(`https://cnodejs.org/api/v1/topic/${articleID}`)
     .then(function(response){
       return response.json()
     }).then(function(json){
       that.articleData = json.data;
       that.replyCounts = json.data.replies.length;
     })
   }
 }
</script>

<style>
.articles{
  position: relative;
  width: 1100px;
  height: auto;
  margin-top:8px;
  margin-left: 300px;
}
.articles .header{
  position: relative;
  box-sizing: border-box;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  background: #fff;
}
.articles .title{
  font-size: 18px;
  font-weight: bold;
}
.articles .container{
  padding:12px;
  height: auto;
  box-sizing: border-box;
  background: #fff;
  font-size: 14px;
}
.articles .replyArea{
  position: relative;
  background: #fff;
  border-radius: 3px 3px 0 0; 
  margin-top:12px;
}
.articles .replyCounts{
  display: inline-block;
  width: 100%;
  height:40px;
  font-size: 14px;
  line-height: 40px;
  padding-left:6px;
  background-color: #f6f6f6;
  box-sizing: border-box;
}
.articles .reply{
  box-sizing: border-box;
  height:auto;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
.articles .reply .leftSide{
  float: left;
  width:48px;
}
.articles .reply .leftSide img{
  height: 30px;
  width:30px;
}
.articles .reply .rightSide{
  padding-left:36px;
  min-height:70px;
  width:100%;
  box-sizing: border-box;
}
.articles .info{
  font-size:12px;
}
.articles .replyContent{
  font-size: 16px;
  box-sizing: border-box;
  padding-left:8px;
}
</style>
