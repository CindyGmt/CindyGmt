<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <template v-for="item in navItem">
                <el-menu-item v-if="!item.children || item.children.length === 0" :index="item.name">{{item.name}}</el-menu-item>
                <el-submenu v-else :index="item.name">
                    <template slot="title">{{item.name}}</template>
                    <!-- 目前只考虑两层嵌套 -->
                    <el-menu-item v-for="child in item.children" :key="child.name" :index="child.name">{{child.name}}</el-menu-item>
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                activeIndex: '',
                navItem:[
                    {
                        name:'首页',
                        route:'/'
                    },
                    {
                        name:'作品',
                        route:'/works'
                    },
                    {
                        name:'特点',
                        route:'/characteristic'
                    },
                    {
                        name:'简介',
                        route:'/introduce'
                    },
                    {
                        name:'合作',
                        route:'/cooperate'
                    },
                    {
                        name:'留言',
                        route:'/leaveWord'
                    },
                    {
                        name:'联系',
                        route:'/contact'
                    },
                ]
            }
        },
        watch:{
            $route:{
                handler(n, o){
                    this.activeIndex = n.name
                },
                immediate: true
            }
        },
        methods:{
            handleSelect(index, indexPath){
                let foundItem = (name, arr) => {
                    if(arr.length === 0){
                        return
                    }
                    let foundArr = []
                    foundArr = arr.filter(item => {
                        return item.name === name
                    })
                    if(foundArr.length > 0){
                        return foundArr[0]
                    }
                }
                let i = 0
                let arr = this.navItem
                let route = ''
                while(i < indexPath.length){
                    let name = indexPath[i]
                    let obj = foundItem(name, arr)
                    if(obj){
                        i++
                        route = obj.route
                        arr = obj.children || []
                    }else{
                        route = ''
                    }
                }
                if(route){
                    this.$router.push(route);
                }
            }
        }
    }
</script>

<style scoped lang="scss">
.el-menu{
    border-bottom: none;
    background-color:transparent;
    .el-menu-item.is-active{
        background: transparent;
        color: #fff;
        border-bottom: 2px solid #fff;
    }
    .el-menu-item,.el-submenu{
        font-size: 16px;
        color: #999;
        &:hover{
            color: #fff;
            background: transparent;
        }
    }
}
::v-deep.el-menu--horizontal{
    .el-submenu{
        .el-submenu__title{
            color: #999!important;
        }
    }
}
</style>