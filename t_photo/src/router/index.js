import Vue from 'vue'
import VueRouter from 'vue-router'

// 防止连续点击多次路由报错
let routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const Index = r => require.ensure([], () => r(require('@/pages/index/index')), 'index');
const Main = r => require.ensure([], () => r(require('@/views/main/index')), 'main'); //首页
const Works = r => require.ensure([], () => r(require('@/views/works/index')), 'works'); //作品
const Characteristic = r => require.ensure([], () => r(require('@/views/characteristic/index')), 'characteristic'); //特点
const Introduce = r => require.ensure([], () => r(require('@/views/introduce/index')), 'introduce'); //简介
const Cooperate = r => require.ensure([], () => r(require('@/views/cooperate/index')), 'cooperate'); //合作
const LeaveWord = r => require.ensure([], () => r(require('@/views/leaveWord/index')), 'leaveWord'); //留言
const Contact = r => require.ensure([], () => r(require('@/views/contact/index')), 'contact'); //联系

const routes = [
    {
        path: '/',
        component: Index,
        redirect:'/main',
        children: [
        {
            path: 'main',
            name: '首页',
            component: Main
        },
        {
            path: 'works',
            name: '作品',
            component: Works
        },
        {
            path: 'characteristic',
            name: '特点',
            component: Characteristic
        },
        {
            path: 'introduce',
            name: '简介',
            component: Introduce
        },
        {
            path: 'cooperate',
            name: '合作',
            component: Cooperate
        },
        {
            path: 'leaveWord',
            name: '留言',
            component: LeaveWord
        },
        {
            path: 'contact',
            name: '联系',
            component: Contact
        },
        ]
    },
]
const router = new VueRouter({
    mode: 'history', // 去掉url中的#
    scrollBehavior: () => ({ y: 0 }),
    routes // (缩写) 相当于 routes: routes
})

export default router