<template>
    <section class="main_page" id="main_page">
            <div class="background-media">
                <video
                autoplay="autoplay"
                muted="muted"
                volume="0"
                poster="https://ccdn.goodq.top/caches/0949e197e2481ff51826a8a6ab38f749/aHR0cDovLzVmMTE0NzFmY2EyODMudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAyMC8wNy9hNWRlZWRjNmE3NWExZThkMTdjMzJmMGZjZjVmNTgxMHByZXZpZXdfaW1hZ2UtOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp" 
                loop="loop" 
                width="100%" height="100%"
                class="section-background-video">
                    <source type="video/webm" src="https://ccdn.goodq.top/caches/0949e197e2481ff51826a8a6ab38f749/aHR0cDovLzVmMTE0NzFmY2EyODMudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAyMC8wNy9hNWRlZWRjNmE3NWExZThkMTdjMzJmMGZjZjVmNTgxMC53ZWJt.webm">
                    <source type="video/mp4" src="https://ccdn.goodq.top/caches/0949e197e2481ff51826a8a6ab38f749/aHR0cDovLzVmMTE0NzFmY2EyODMudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAyMC8wNy9hNWRlZWRjNmE3NWExZThkMTdjMzJmMGZjZjVmNTgxMC5tcDQ_p_p100_p_3D.mp4">
                </video>
            </div>
            <div class="bg"></div>
            <div class="contain_bg">
                <div class="vc_img_box">
                    <img src="@/assets/img/vc.jpg" alt="">
                </div>
                <div class="vc_text_box">
                    <div class="style_icon">
                        <img src="@/assets/img/vc_line.jpg" alt="">
                    </div>
                    <div class="to_more">
                        <span>更多视频<i class="el-icon-right"></i></span>
                    </div>
                </div>
            </div>
        </section>
</template>
<script>
</script>
<style lang="scss" scoped>
.main_page{
    position: relative;
    .background-media{
        display: block;
        width: 100%;
        height: 100%;
        .section-background-video{
            object-fit:cover;
        }
    }
    .bg{
        display: none;
        background: url('../../assets/img/bg/bg_5.jpg') no-repeat;
        background-size: 100% 100%;
    }
    .contain_bg{
        background-color: rgba(22,22,22,0.6);
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        .vc_img_box{
            position: absolute;
            left: 50%;
            bottom: 50%;
            transform: translate(-50%, 50%);
            width: 31%;
            img{
                width: 100%;
            }
        }
        .vc_text_box{
            position: absolute;
            bottom: 2%;
            left: 50%;
            transform: translateX(-50%);
            .style_icon{
                margin-bottom: 0.5rem;
                img{
                    width: 10rem;
                }
            }
            .to_more{
                display: inline-block;
                padding: 1rem;
                cursor: pointer;
                span{
                    color: #fff;
                    padding-bottom: 0.6rem;
                    border-bottom: 2px solid #fff;
                }
            } 
        }
    }
}
@media screen and (max-width: 768px) {
    .main_page{
        .background-media{
            display: none;
        }
        .bg{
            display: block;
        }
        .contain_bg{
            .vc_text_box{
                .style_icon{
                    img{
                        width: 20rem;
                    }
                }
                .to_more{
                    padding: 0 0 1rem 0;
                }
            }
        }
    }

}
@media screen and (max-width: 768px){
    .main_page{
        .contain_bg{
            .vc_text_box{
                .to_more{
                    span{
                        font-size: 12px;
                    }
                }
            }
        }
    }

}
</style>