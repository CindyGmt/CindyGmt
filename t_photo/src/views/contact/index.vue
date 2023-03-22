<!-- 联系 -->
<template>
    <section class="contact_page" id="contact_page">
            <div class="bg"></div>
            <div class="background-overlay base-font">
                <div class="contact-item">
                    <div class="item-title tl">社交网络</div>
                    <ul class="social">
                        <li style="background-position-x: -64px;"></li>
                        <li style="background-position-x: -128px;"></li>
                        <li style="background-position-x: -192px;"></li>
                        <li style="background-position-x: -256px"></li>
                        <li style="background-position-x: -320px;"></li>
                    </ul>
                </div>
                <div class="contact-item">
                    <div class="item-title">联系我购买视频</div>
                    <span>
                        <p>+1 (844) 123 456 78</p>
                        <p class="red">information@email.com</p>
                    </span>
                    <img src="@/assets/img/code.jpg" alt="">
                </div>
                <div class="contact-item tr">
                    <div class="item-title">联系地址</div>
                    <span>
                        <p>江苏省，南京市</p>
                        <p>高新工业园区</p>
                        <p>江苏省苏州市工业园区</p>
                    </span>
                    
                </div>
                <div class="contact-item"><span>©  2020 个人网站模板. All Rights Reserved. <i class="red">隐私政策</i></span></div>
            </div>
        </section>
</template>
<script>
export default{
    
}
</script>
<style scoped lang="scss">
.contact_page{
    position: relative;
    .bg{
        background: url('../../assets/img/bg/bg_4.jpg') no-repeat;
        background-size: cover;
        background-attachment: fixed;
        background-position-x: center;
    }
    .background-overlay{
        background-color: rgba(27,27,27,0.9);
        z-index: 2;
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
        bottom: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0 10rem;
        box-sizing: border-box;
        flex-wrap: wrap;
        .contact-item{
            width: 20.5rem;
            height: 10.2rem;
            min-width: 20.5rem;
            max-width: 20.5rem;
           .item-title{
                margin: 1rem 0;
                font-size: 12px;
                font-weight: bold;
           }
           .tl{
            text-align: left;
           }
           .social{
                margin: 1rem 0;
                list-style: none;
                height: 32px;
                padding: 0;
                li{
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    float: left;
                    background: url('../../assets/img/social_icon_32x32.png') no-repeat;
                    background-position-y: -64px;
                    margin-right: 0.5rem;
                }
           }
           span{
            display: block;
            color: rgb(181, 181, 181);
            font-size: 0.68rem;
            margin: 1rem 0;
            p{
                margin: 0.3rem;
            }
            .red{
                font-family: 'element-icons';
            }
           }
           img{
            width: 5rem;
           } 
        }
        .tr{
            text-align: right;
        }
    }
}
@media screen and (max-width: 768px){
    .contact_page{
    height: 154vw;
    .background-overlay{
        flex-direction: column;
        flex-wrap: nowrap;
        padding: 10rem;
        .contact-item{
            height: auto;
            width: auto;
            min-width: unset;
            max-width: unset;
            margin-bottom: 10rem;
           .tl{
            text-align: center;
           }
           .social{
                height: auto;
           }
           span{
            font-size: 13px;
            .red{
                font-family: 'element-icons';
            }
           }
           img{
            width: 20rem;
           } 
        }
        .tr{
            text-align: center;
        }
    }
}
}
</style>