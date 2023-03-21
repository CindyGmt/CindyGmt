<!-- 联系 -->
<template>
    <section class="contact_page" id="contact_page">
            <div class="bg"></div>
            <div class="background-overlay">
                <div class="contain_box base-font">
                    <div class="contain">
                        <div class="contact-item">
                            <div class="item-title">社交网络</div>
                        </div>
                        <div class="contact-item">
                            <div class="item-title">联系我购买视频</div>
                        </div>
                        <div class="contact-item">
                            <div class="item-title">联系地址</div>
                        </div>
                    </div>
                </div>
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
    }
}

</style>