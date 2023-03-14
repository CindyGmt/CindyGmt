<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <template v-for="item in navItem">
                <el-menu-item v-if="!item.children || item.children.length === 0" :index="item.name">{{item.name}}<i class="underline"></i></el-menu-item>
                <el-submenu v-else :index="item.name">
                    <template slot="title">{{item.name}}<i class="underline"></i></template>
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

    .el-menu-item,.el-submenu{
        font-size: 16px;
        color: #999;
        padding: 0 10px;
        margin-left: 20px;
        position: relative;
        border-bottom: 0px solid transparent;
        .underline{
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
            width: 0;
            height: 1px;
            background-color: #fff;
            opacity: 0;
            transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
        }
        &:hover{
            color: #fff;
            background: transparent;
            .underline{
                opacity: 1;
                width: 100%;
                transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
            }
        }
    }
    .el-menu-item.is-active{
        background: transparent;
        color: #fff;
        border-bottom: 1px solid #fff;
        .underline{
            display: none;
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