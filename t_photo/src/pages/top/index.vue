<template>
    <div class="top">
        <div class="nav_box">
            <div class="menu_btn" @click.stop="$store.commit('SET_IFSHOW',true)">
                <svg-icon icon-class="menulist" />
            </div>
            <div class="logo_box">
                <el-image :src="url" fit="contain" class="logo" lazy></el-image>
            </div>
            <transition name="fade">
                <NavMenu v-show="ifShow"></NavMenu>
            </transition>
            
        </div>
    </div>
</template>
<script>
import NavMenu from "@/pages/NavMenu.vue";
import { mapState } from 'vuex'
export default {
    components: {
        NavMenu
    },
    data(){
        return {
            url: require('@/assets/img/logo/logo.jpg')
            // url: require('@/assets/img/logo.png')
        }
    },
    computed: {
        ...mapState({
            resizeWidth: state => state.app.resizeWidth,
            ifShow: state => state.navmenu.ifShow
        }),
    },
    watch:{
        resizeWidth:{
            handler(n,o){
                if(n <= 768){
                    this.$store.commit('SET_IFSHOW',false)
                }else{
                    this.$store.commit('SET_IFSHOW',true)
                }
            },
            immediate: true
        },
    },
    methods:{
    },
}
</script>
<style scoped lang="scss">
.top{
    width: 100%;
    height: 87px;
    background: transparent;
    position: absolute;
    z-index: 9;
    .nav_box{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 100px;
        height: 100%;
        position: relative;
        .menu_btn{
            display: none;
            font-size: 25px;
            cursor: pointer;
            padding: 5px;
            position: absolute;
            left: 20px;
        }
        .logo_box{
            display: flex;
            width: 13rem;
            height: 100%;
            justify-content: space-between;
            align-items: center;
            color: #5a5645;
        }
    }
}
@media screen and (max-width: 768px) {
    .top{
        height: 56px;
    position: fixed;
    z-index: 9;
    background-color: #1a1a1a;
    opacity: 1;
    box-shadow: 0 0 6px rgb(0 0 0 / 25%);
    transition: all 0.5s ease 0s;
    .nav_box{
        .menu_btn{
            display: block;
        }
        .logo_box{
            width: 150px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }
        .fade-enter-active, .fade-leave-active {
            transition: left .5s cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
            left: -100%;
        }
    }
    }
}
</style>