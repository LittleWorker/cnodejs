<template>
  <div id="app">
    <headerBar></headerBar>
    <router-view></router-view>
    A new cnodejs program
  </div>
</template>

<script>
import headerBar from '@/components/headerBar.vue';
export default {
  name: 'app',
  components:{
    headerBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body,div,p{
  margin: 0;
  padding: 0;

}
ul{
  padding: 0px;
  margin:0px;
}
body{
    background: #e1e1e1;
    font-size: 0;
}
img{
  max-width:100%;
}
</style>
