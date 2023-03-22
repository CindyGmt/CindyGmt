<!-- 简介 -->
<template>
    <section class="introduce_page" id="introduce_page">
            <div class="bg">
                <div class="contain_box base-font">
                    <div class="title1">工作室简介</div>
                    <div class="contain">
                        <div class="introduce-box">
                            <div class="introduce-item">
                                <el-collapse v-model="activeName" accordion>
                                    <el-collapse-item v-for="(item, i) in collapseList" :key="i" :title="item.title" :name="item.index">
                                        <p>{{ item.contain }}</p>
                                    </el-collapse-item>
                                </el-collapse>
                            </div>
                            <div class="introduce-item">
                                <img src="@/assets/img/person.jpg" alt="">
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
            activeName:'1',
            collapseList:[
                {
                    index:'1',
                    title:'某综艺节目剪辑师',
                    contain:'视频剪辑是对视频源进行非线性编辑的软件，属多媒体制作软件范畴。软件通过对加入的图片、背景音乐、特效、场景等素材与视频进行重混合，对视频源进行切割、合并，通过二次编码，生成具有不同表现力的新视频。'
                },
                {
                    index:'2',
                    title:'电影X的花絮剪辑师',
                    contain:'视频剪辑是对视频源进行非线性编辑的软件，属多媒体制作软件范畴。软件通过对加入的图片、背景音乐、特效、场景等素材与视频进行重混合，对视频源进行切割、合并，通过二次编码，生成具有不同表现力的新视频。'
                },
                {
                    index:'3',
                    title:'热门综艺节目总剪辑',
                    contain:'视频剪辑是对视频源进行非线性编辑的软件，属多媒体制作软件范畴。软件通过对加入的图片、背景音乐、特效、场景等素材与视频进行重混合，对视频源进行切割、合并，通过二次编码，生成具有不同表现力的新视频。'
                },
                {
                    index:'4',
                    title:'某综艺节目剪辑师',
                    contain:'视频剪辑是对视频源进行非线性编辑的软件，属多媒体制作软件范畴。软件通过对加入的图片、背景音乐、特效、场景等素材与视频进行重混合，对视频源进行切割、合并，通过二次编码，生成具有不同表现力的新视频。'
                },
                {
                    index:'5',
                    title:'热门综艺节目总剪辑',
                    contain:'视频剪辑是对视频源进行非线性编辑的软件，属多媒体制作软件范畴。软件通过对加入的图片、背景音乐、特效、场景等素材与视频进行重混合，对视频源进行切割、合并，通过二次编码，生成具有不同表现力的新视频。'
                },
            ]
        }
    }
}
</script>
<style scoped lang="scss">
::v-deep.introduce_page{
    .bg{
        .contain_box{
            width: 100%;
            padding-top: 6rem;
            .title1{
                padding: 0.5rem 0 6rem 0;
                font-size: 1.68rem;
            }
            .contain{
                padding-bottom: 5rem;
                .introduce-box{
                    .introduce-item{
                        display: inline-block;
                        width: 29rem;
                        padding-left: 2rem;
                        padding-right: 2rem;
                        .el-collapse{
                            border-top:none;
                            border-bottom:none;
                            .el-collapse-item{
                                border-left: 1px solid #fff;
                                padding-left: 1rem;
                                .el-collapse-item__header{
                                    background: transparent;
                                    border-bottom: none;
                                    color: #fff;
                                    font-size: 0.8rem;
                                }
                                .el-collapse-item__wrap{
                                    background: transparent;
                                    border-bottom: none;
                                    .el-collapse-item__content{
                                        color: rgb(181, 181, 181);
                                        text-align: left;
                                        font-size: 0.68rem;
                                    }
                                }
                                
                            &:hover{
                                border-color: #ef2121;
                                .el-collapse-item__header{
                                    color: #ef2121;
                                }
                            }
                            }
                            .is-active{
                                border-color: #ef2121;
                                .el-collapse-item__header{
                                    color: #ef2121;
                                }
                            }
                            
                        }
                        img{
                            width: 85%;
                        }
                    }
                }
            }
            
        }
    }
}
@media screen and (max-width: 768px){
    ::v-deep.introduce_page{
        height: auto;
        .bg{
        .contain_box{
            .title1{
                font-size: 18px;
            }
            .contain{
                .introduce-box{
                    .introduce-item{
                        display: block;
                        width: auto;
                        padding-left: 10rem;
                        padding-right: 10rem;
                        padding-bottom: 10rem;
                        .el-collapse{
                            .el-collapse-item{
                                .el-collapse-item__header{
                                    font-size: 14px;
                                }
                                .el-collapse-item__wrap{
                                    .el-collapse-item__content{
                                        font-size: 13px;
                                    }
                                }
                            }
                            
                        }
                        img{
                            width: 65%;
                        }
                    }
                }
            }
            
        }
    }
    
}
}
</style>