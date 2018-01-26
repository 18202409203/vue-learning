import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import r1 from '@/components/r1'  // 先引入文件
import r2 from '@/components/r2'
import r3 from '@/components/r3'
import r4 from '../components/r4.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/r1',   // 再写进路由
      component: r1
    },
    {
      path: '/r2',
      component: r2
    },
    {
      path: '/r3',
      component: r3
    },
    {
      path: '/r4',
      component: r4
    }
  ]
})
