import Vue from 'vue'
import Router from 'vue-router'


const Hello1 = import(/* webpackChunkName: "hello1" */ '@/components/HelloWorld');
const Hello2 = import(/* webpackChunkName: "hello2" */ '@/components/HelloWorld2');

Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          name: 'HelloWorld2',
          component: Hello2
      },
      {
          path: '/aaa',
          name: 'HelloWorld',
          component: Hello1
      },
  ]
})
