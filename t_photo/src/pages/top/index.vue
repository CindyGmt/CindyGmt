<template>
    <div class="top">
        <div class="nav_box">
            <div class="logo_box">
                <el-image :src="url" fit="contain" class="logo" lazy></el-image>
            </div>
            <NavMenu></NavMenu>
        </div>
    </div>
</template>
<script>
import NavMenu from "@/components/NavMenu.vue";
export default {
    components: {
        NavMenu
    },
    data(){
        return {
            url: ''
            // url: require('@/assets/img/logo.png')
        }
    },
    methods:{
    }
}
</script>
<style scoped lang="scss">
.top{
    width: 100%;
    height: 87px;
    background: transparent;
    position: absolute;
    .nav_box{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 100px;
        height: 86px;
        .logo_box{
            display: flex;
            width: 150px;
            height: 60px;
            justify-content: space-between;
            align-items: center;
            color: #5a5645;
        }
    }
}
</style>