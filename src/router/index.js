import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '@/components/mainPage'
import articles from '@/components/articles'
import userInfo from '@/components/userInfo'

Vue.use(Router);
const routes=[{
  path:'/mainPage',
  component:mainPage},
  {
    path:'/',
    redirect:'/mainPage'},
  {
    path:'/article/:id',
    component:articles
  },
  {
    path:'/user/:userID',
    component:userInfo
  }
];

export default new Router({
  routes
})
