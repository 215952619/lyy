import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Rank from '@/components/rank'
import RankInfo from '@/components/rankinfo'
import Plist from '@/components/plist'
import PlistInfo from '@/components/plistinfo'
import Singer from '@/components/singer'
import SingerInfo from '@/components/singerInfo'
import Player from '@/components/player'
import Details from '@/components/details'
import Undefined from '@/components/404'
import Get from '@/components/get'
import User from '@/components/user'
import Regist from '@/components/regist'
import About from '@/components/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      name: 'home',
      component: Home
    }, {
      path: '/rank',
      name: 'rank',
      component: Rank,
      redirect: '/rank/info/8888',
      children: [{
        path: '/rank/info/:rankid',
        name: 'rankInfo',
        component: RankInfo
      }]
    }, {
      path: '/plist',
      name: 'plist',
      component: Plist,
      redirect: '/plist/info/530877',
      children: [{
        path: '/plist/info/:specialid',
        name: 'plistInfo',
        component: PlistInfo
      }]
    }, {
      path: '/singer',
      name: 'singer',
      component: Singer,
      redirect: '/singer/info/88',
      children: [{
        path: '/singer/info/:classid',
        name: 'singerInfo',
        component: SingerInfo
      }]
    }, {
      path: '/player',
      name: 'player',
      component: Player
    }, {
      path: '/details',
      name: 'details',
      component: Details
    }, {
      path: '/user',
      name: 'user',
      component: User
    }, {
        path: '/regist',
        name: 'regist',
        component: Regist
    }, {
      path: '/about',
      name: 'about',
      component: About
    }, {
      path: '/get',
      name: 'get',
      component: Get
    }, {
      path: '*',
      name: 'undefined',
      component: Undefined
    }
  ]
})
