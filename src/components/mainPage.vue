<template>
  <div class="mainPage">
    <div class="navi" @click="naviChange($event)">
      <span class="active">全部</span>
      <span >精华</span>
      <span >分享</span>
      <span >回答</span>
      <span >招聘</span>
      <span >客户端测试</span>
    </div>
    <articleList :listItem="listItem"></articleList>
  </div>
</template>

<script>
  import articleList  from './articleList.vue';
  let themeURL = `https://cnodejs.org/api/v1/topics`;
  export default {
    name:'mainPage',
    data () {
      return {
        listItem:[],
        el_navi_span:null,
      }
    },
    methods: {
      getUrl(type){
        if(type == "all"){
          themeURL = `https://cnodejs.org/api/v1/topics`;
          return;
        }
        themeURL =`https://cnodejs.org/api/v1/topics?tab=${type}`;
      },
      getThemeType(item){
        if(item.top){
          return "置顶";
        }else if(item.good){
          return "精华";
        }
        let tabType="";
        switch(item.tab){
          case "share":
            tabType = "分享";
            break;
          case "ask":
            tabType = "问答";
            break;
          default:
            tabType = "其他";
            break;
        }
        return tabType;
      },
      getLastReplyText(item){
        // 获取当前时间及上次回复的毫秒数
        let currentTime =  new Date().getTime(),
            lastReplyTime = new Date(item.last_reply_at).getTime(),
            diffTime = currentTime - lastReplyTime;
        //
        let min_ms=60*1000,
            hour_ms = min_ms*60,
            day_ms = 24 *hour_ms,
            month_ms = 30*day_ms,
            year_ms = 12 * month_ms;
        let lastReplyText = "",
            temp_count=0;
        if(diffTime < min_ms){
          lastReplyText ="刚刚";
        }else if(diffTime<hour_ms){
          temp_count = Math.floor(diffTime/min_ms);
          lastReplyText = `${temp_count} 分钟前`;
        }else if(diffTime<day_ms){
          temp_count = Math.floor(diffTime/hour_ms);
          lastReplyText = `${temp_count} 小时前`;
        }else if(diffTime<month_ms){
          temp_count = Math.floor(diffTime/day_ms);
          lastReplyText = `${temp_count} 天前`;
        }else if(diffTime<year_ms){
          temp_count = Math.floor(diffTime/month_ms);
          lastReplyText = `${temp_count} 月前`;
        }else{
          temp_count = Math.floor(diffTime/year_ms);
          lastReplyText = `${temp_count} 年前`;
        }
        return lastReplyText;
      },
      getArticleList(type){
        this.getUrl(type);
        let  that = this;
     //初始化请求全部类型数据
        fetch(themeURL,{method:'GET'})
        .then(function(response){
          return response.json();})
        .then(function(json){
          console.log(json);
          let listItem = json.data;
          for(let i in listItem){
            listItem[i].tabType = that.getThemeType(listItem[i]);
            listItem[i].lastReplyText = that.getLastReplyText(listItem[i]);
          }
          that.listItem = listItem;
        })
      },
      naviChange(event){
        console.log(event.target);
        if(event.target.tagName == "DIV"){
          //如果点击到div本身，则不做任何操作
          return;
        }
        //清楚navi下所有span的class
        for(let i=0;i<this.el_navi_span.length;i++)
        {
          this.el_navi_span[i].removeAttribute("class")
        }
        //添加active class
        event.target.className="active";
        switch(event.target.innerText){
          case "全部":
            this.getArticleList("all");
            break;
          case "精华":
            this.getArticleList("good");
            break;
          case "分享":
            this.getArticleList("share");
            break;
          case "回答":
            this.getArticleList("ask");
            break;
          case "照聘":
            break;
          default:
            break;
        }
      }
    },
    components: {
      articleList
    },
    created () {
      //进入页面，初始化请求全部类型数据
      this.getArticleList("all");
   },
   mounted () {
     //提前获取DOM元素，避免在点击事件中每次都获取
     this.el_navi_span = document.getElementsByClassName('navi')[0].children;
   }
  }
</script>

<style>
.mainPage{
  position: relative;
  width: 1100px;
  height: auto;
  margin-top:8px;
  margin-left: 300px;
}
.navi{
  position: relative;
  width: 100%;
  height:40px ;
  font-size: 14px;
  background-color: #f6f6f6;
  line-height: 40px;
  padding-left: 16px;
  box-sizing: border-box;
}
.navi >span{
  position: relative;
  width: auto;
  height: 18px;
  color: #80bd01;
  margin-right: 20px;
  cursor: pointer;
  padding: 3px;
}
.navi >span:hover{
  color:#005580;
}
.navi >span.active{
  background:#80bd01;
  color:white;
  border:1px solid #80bd01;
  border-radius: 5px;
}
</style>
