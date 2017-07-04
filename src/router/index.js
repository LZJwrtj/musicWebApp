import Vue from 'vue'
import Router from 'vue-router'
import recommend from '@/components/recommend/recommend'
import rank from '@/components/rank/rank'
import songList from '@/components/songList/songList'
import radio from '@/components/radio/radio'
import MV from '@/components/MV/MV'

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
      path: '/songList',
      component: songList
    },
    {
      path: '/radio',
      component: radio
    },
    {
      path: '/MV',
      component: MV
    },
    {
      path: '*',
      redirect: '/recommend'
    }
  ]
})
