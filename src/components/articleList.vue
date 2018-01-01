<template>
<div class="container">
      <div class="cell" v-for="(item,index) in listItem" :key="index">
        <router-link :to="{path:`/user/${item.author.loginname}`}" tag="img" class="avatar" :src="item.author.avatar_url"></router-link>
        <span class="views">
          <i class="reply">{{item.reply_count}}</i>
          /<i class="visit">{{item.visit_count}}</i>
        </span>
        <span class="typeIcon" :class="{topType:item.top,goodType:item.good}">{{item.tabType}}</span>
        <router-link :to="{path:`/article/${item.id}`}" class="articleTitle" tag="span">{{item.title}}</router-link>
        <span class="lastReplyTime">{{item.lastReplyText}}</span>
      </div>
</div>
</template>

<script>
 export default {
   name:'articleList',
   props:{
     listItem:Array
   },
   data () {
     return {
     }
   },
   components: {

   }
 }
</script>

<style>
.container{
  position: relative;
  background-color: #fff;
}
.cell{
  position: relative;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
}
.cell:hover{
  background-color: #f5f5f5;
}
.avatar{
  margin-left: 10px;
  width:30px;
  height:30px;
  vertical-align: text-bottom;
  cursor: pointer;
}
.views{
  display: inline-block;
  margin-left:4px;
  width:70px;
  font-size:12px;
  text-align: center;
  line-height:50px;
}
.views >i{
  font-style: normal;
}
.views > .reply{
  color: rgb(158, 120, 192);
}
.views > .visit{
  color: rgb(180, 180, 180);
}
.articleTitle{
  cursor: pointer;
}
.typeIcon{
  margin-left:2px;
  font-size:12px;
  border-radius: 3px;
  background-color: rgb(229, 229, 229);
  color: rgb(153, 153, 153);
  padding:2px 4px;
  line-height: 50px;
}
.topType,
.goodType{
  background-color: rgb(128, 189, 1);
  color: #fff;
}
.articleTitle{
  font-size: 16px;
  line-height: 50px;
  padding-left:4px; 
}
.lastReplyTime{
  float:right;
  margin-right: 8px;
  font-size: 12px;
  line-height: 50px;
  cursor: pointer;
  color: rgb(119, 128, 135);
}
</style>
