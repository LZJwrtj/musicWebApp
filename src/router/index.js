import Vue from 'vue'
import Router from 'vue-router'
import recommend from '@/components/recommend/recommend'
import rank from '@/components/rank/rank'
import search from '@/components/search/search'
import hotListYe from '../components/hotListYe/hotListYe.vue'
import rankList from '../components/rankList/rankList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/recommend',
      component: recommend
    },
    {
      path: '/rank',
      component: rank
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '*',
      redirect: '/recommend'
    },
    {
      name: 'hotListYe',
      path: '/recommend/hotListYe/:valId',
      component: hotListYe
    },
    {
      name: 'rankList',
      path: '/rank/rankList/:valId',
      component: rankList
    }
  ]
})
