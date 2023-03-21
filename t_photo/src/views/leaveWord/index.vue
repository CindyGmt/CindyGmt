<!-- 留言 -->
<template>
    <section class="leaveWord_page" id="leaveWord_page">
            <div class="bg">
                <div class="contain_box base-font">
                    <div class="title1">在线联系</div>
                    <div class="contain">
                        <div class="leave-word-box">
                            <div class="leave-word">
                                <p>自助建站平台全面采用第二代云服务器和云网络其中，服务器硬件使用国内领先的Xeon处理器、32个物理CPU核心高配服务器在提供超高性能自助建站平台全面采用第二代云服务器和云网络其中，服务器硬件使用国内领先的Xeon处理器、32个物理CPU核心高配服务器在提供超高性能</p>
                            </div>
                            <div class="form-box" ref="form" :model="form" :rules="rules">
                                <el-form>
                                    <el-form-item label="姓名"></el-form-item>
                                    <el-form-item label="电话"></el-form-item>
                                    <el-form-item label="邮箱"></el-form-item>
                                    <el-form-item label="微信"></el-form-item>
                                    <el-form-item label="内容"></el-form-item>
                                    <el-form-item>
                                        <el-button type="primary" @click="onSubmit">立即提交</el-button>
                                    </el-form-item>
                                </el-form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>
<script>
export default{
    data(){
        return {
            form:{},
            rules:{}
        }
    },
    methods:{
        onSubmit(){}
    }
}
</script>
<style scoped lang="scss">
.leaveWord_page{
    .bg{
        background-position: bottom;
        .contain_box{
            width: 100%;
            padding-top: 6rem;
            .title1{
                padding: 0.5rem 0 6rem 0;
                font-size: 1.68rem;
            }
            .contain{
                padding-bottom: 5rem;
            }
            
        }
    }

}

</style>