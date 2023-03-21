<!-- 合作 -->
<template>
    <section class="cooperate_page" id="cooperate_page">
            <div class="bg">
                <div class="contain_box base-font">
                    <div class="title1">商务合作</div>
                    <div class="contain">
                        <div class="cooperate-box">
                            <div class="cooperate-item">
                                <div class="item-title">市场运营</div>
                                <p>服务器硬件使用国内领先的Xeon处理器、32个物理CPU核心高配服务器在提供超高性能</p>
                                <p class="red-p">informa@email.com</p>
                                <p>服务器硬件使用国内领先的Xeon处理器、32个物理CPU核心高配服务器在提供超高性能</p>
                                <p class="red-p">Bevideo@email.com</p>
                            </div>
                            <div class="cooperate-item">
                                <div class="item-title">视频购买</div>
                                <p>服务器硬件使用国内领先的Xeon处理器、32个物理CPU核心高配服务器在提供超高性能其中，服务器硬件使用国内领先的Xeon处理器。</p>
                                <ul>
                                    <li><span class="marker"></span>高配服务器在提供超高性能的同时</li>
                                    <li><span class="marker"></span>更可减少出错几率昂贵的中港加速网络</li>
                                    <li><span class="marker"></span>在大陆地区也可以迅</li>
                                    <li><span class="marker"></span>速稳定地打开网站</li>
                                </ul>
                            </div>
                            <div class="cooperate-item">
                                <div class="item-title">版权所有</div>
                                <p>服务器硬件使用国内领先的Xeon处理器、32个物理CPU核心高配服务器在提供超高性能其中，服务器硬件使用国内领先的Xeon处理器、32个物理CPU核心、RAID10存储、ECC内存、SSD硬盘，高配服务器在提供超高性能的同时，更可减少出错几率；</p>
                                <p>另外，优质、昂贵的中港加速网络确保您在大陆地区也可以迅速稳定地打开香港的网站。起飞页拥有中国大陆、中国香港以及全球5个海外云节点可供选择，将网站一键部署到距离客户近的国家和地区。</p>
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
        }
    }
    
}
</script>
<style scoped lang="scss">
.cooperate_page{
    .bg{
        background: url('../../assets/img/bg/bg_3.jpg') no-repeat;
        background-size: cover;
        background-attachment: fixed;
        background-position-x: center;
        .contain_box{
            width: 100%;
            padding-top: 6rem;
            .title1{
                padding: 0.5rem 0 6rem 0;
                font-size: 1.68rem;
            }
            .contain{
                padding-bottom: 5rem;
                .cooperate-box{
                    display: flex;
                    justify-content: center;
                    .cooperate-item{
                        width: 18rem;
                        max-width: 18rem;
                        min-width: 18rem;
                        margin: 0 2rem;
                        .item-title{
                            font-size: 1.4rem;
                            text-align: left;
                        }
                        p,ul{
                            color: rgb(181, 181, 181);
                            text-align: left;
                            font-size: 0.68rem;
                            margin: 0.5rem 0;
                            list-style: none;
                            .marker{
                                display: inline-block;
                                width: 5px;
                                height: 5px;
                                border-radius: 50%;
                                background-color: #ef2121;
                                margin: 0 0.5rem;
                            }
                        }
                        .red-p{
                            color: #ef2121;
                            font-size: 1rem;
                            font-family: courier new;
                        }
                    }
                }
            }
            
        }
    }
}
@media screen and (max-width: 768px){
    .cooperate_page{
        height: auto;
        .bg{
        .contain_box{
            .title1{
                font-size: 16px;
            }
            .contain{
                .cooperate-box{
                    flex-direction: column;
                    align-items: center;
                    .cooperate-item{
                        width: 90rem;
                        max-width: 90rem;
                        min-width: 90rem;
                        margin-bottom: 3rem;
                        .item-title{
                            font-size: 14px;
                            text-align: center;
                        }
                        p{
                            text-align: center;
                            font-size: 12px;
                            margin: 1rem 0;
                        }
                        ul{
                            font-size: 12px;  
                        }
                        .red-p{
                            font-size: 12px;
                        }
                    }
                }
            }
            
        }
    }
    
}
}
</style>