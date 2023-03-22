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
                            <div class="form-box">
                                <el-form ref="leaveWordform" :model="form" :rules="rules">
                                    <el-form-item label="姓名" prop="name">
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>
                                    <el-form-item label="电话" prop="phone">
                                        <el-input v-model="form.phone"></el-input>
                                    </el-form-item>
                                    <el-form-item label="邮箱" prop="email">
                                        <el-input v-model="form.email"></el-input>
                                    </el-form-item>
                                    <el-form-item label="微信" prop="wechat">
                                        <el-input v-model="form.wechat"></el-input>
                                    </el-form-item>
                                    <el-form-item label="内容" prop="contain">
                                        <el-input v-model="form.contain" type="textarea"></el-input>
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button class="btn" @click="submitForm('leaveWordform')">立即提交</el-button>
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
            rules:{
                name:[{ required: true, message: '这是一个必填项哦', trigger: 'blur' }],
                email:[{ required: true, message: '这是一个必填项哦', trigger: 'blur' }],
                contain:[{ required: true, message: '这是一个必填项哦', trigger: 'blur' }],
            }
        }
    },
    methods:{
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
}
</script>
<style scoped lang="scss">
::v-deep.leaveWord_page{
    .bg{
        background-position: bottom;
        .contain_box{
            width: 100%;
            padding-top: 6rem;
            .title1{
                padding: 3rem 0 2rem 0;
                font-size: 1.68rem;
                margin: 0 auto;
                width: 60rem;
                text-align: left;
            }
            .contain{
                padding-bottom: 5rem;
                .leave-word-box{
                    display: flex;
                    justify-content: center;
                    .leave-word{
                        width: 27rem;
                        margin: 0 3rem;
                        font-size: 0.73rem;
                        color: #b5b5b5;
                        text-align: left;
                        p{
                            margin: 0;
                        }
                    }
                    .form-box{
                        width: 27rem;
                        margin: 0 3rem;
                        .el-form-item__label{
                            color:#a6a6a6;
                            font-size: 0.73rem;
                        }
                        .el-form-item__content{
                            .el-input{
                                background: transparent;
                                .el-input__inner{
                                    background: transparent;
                                    border: none;
                                    border-radius: 0;
                                    border-bottom: 1px solid #fff;
                                }
                            }
                            .el-textarea__inner{
                                background: transparent;
                                border: none;
                                border-radius: 0;
                                border-bottom: 1px solid #fff;
                            }
                            .el-form-item__error{
                                font-size: 0.625rem;
                            }
                        }
                        .btn{
                            font-size: 0.8rem;
                            padding: 0.5rem 1.5rem;
                        }
                    }
                }
            }
            
        }
    }

}
@media screen and (max-width: 768px){
    ::v-deep.leaveWord_page{
        height: auto;
        .bg{
        .contain_box{
            .title1{
                font-size: 18px;
                width: 85rem;
                text-align: left;
            }
            .contain{
                .leave-word-box{
                    flex-direction: column;
                    align-items: center;
                    .leave-word{
                        width: 85rem;
                        font-size: 14px;
                    }
                    
                    .form-box{
                        width: 85rem;
                        .el-form-item__label{
                            font-size: 15px;
                        }
                        .el-form-item__content{
                            .el-form-item__error{
                                font-size: 13px;
                            }
                        }
                        .btn{
                            font-size: 15px;
                            padding: 5px 15px;
                        }
                    }
                }
            }
            
        }
    }
    
}
}
</style>