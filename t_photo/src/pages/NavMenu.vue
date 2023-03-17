<template>
    <div class="nav-menu">
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
import { mapState } from 'vuex'
    export default {
        data(){
            return {
                activeIndex: '',
                navItem:[
                    {
                        name:'首页',
                        id:'main_page'
                    },
                    {
                        name:'作品',
                        id:'works_page'
                    },
                    {
                        name:'特点',
                        id:'characteristic_page'
                    },
                    {
                        name:'简介',
                        id:'introduce_page'
                    },
                    {
                        name:'合作',
                        id:'cooperate_page'
                    },
                    {
                        name:'留言',
                        id:'leaveWord_page'
                    },
                    {
                        name:'联系',
                        id:'contact_page'
                    },
                ]
            }
        },
        computed: {
            ...mapState({
                observerName: state => state.navmenu.observerName
            }),
        },
        watch:{
            $route:{
                handler(n, o){
                    this.activeIndex = n.name
                },
                immediate: true
            },
            observerName:{
                handler(n, o){
                    this.activeIndex = n
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
                let id = ''
                while(i < indexPath.length){
                    let name = indexPath[i]
                    let obj = foundItem(name, arr)
                    if(obj){
                        i++
                        id = obj.id
                        arr = obj.children || []
                    }else{
                        id = ''
                    }
                }
                if(id){
                    if(this.$route.path !== '/' && this.$route.path !== '/main'){
                        this.$router.push('/' + id.split('_')[0])
                    }else{
                        document.getElementById(id) && document.getElementById(id).scrollIntoView({ behavior: "smooth", block: 'center' });
                    }
                    
                    // this.$router.push(route);
                }
            }
        }
    }
</script>

<style scoped lang="scss">
.nav-menu{
    height: 100%;
        display: flex;
    align-items: center;
    .el-menu{
    border-bottom: none;
    background-color:transparent;

    .el-menu-item,.el-submenu{
        font-size: 0.8rem;
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
        &:hover,&:focus{
            color: #fff;
            background: transparent;
        }
    }
    .el-menu-item.is-active{
        background: transparent;
        color: #fff;
    }
}
::v-deep.el-menu--horizontal{
    .el-submenu{
        .el-submenu__title{
            color: #999!important;
        }
    }
}
}

@media screen and (max-width: 768px){
    
    .nav-menu{
            position: absolute;
            top: 0;
            left: 0;
            height: 100vh;
            width: 30%;
            min-width: 200px;
            background: #1a1a1a;
            align-items: flex-start;
            padding-top: 20px;
            .el-menu{
                .el-menu-item,.el-submenu{
                    font-size: 12px;
                    width: 100%;
                    margin-left:0;
                    text-align: left;
                    padding-left: 30px;
                    transition: padding-left 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
                    &:hover{ 
                        padding-left: 35px;
                        transition: padding-left 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
                    }
                }
            }
            
        }
}
</style>