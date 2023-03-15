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
        </section>
</template>
<script>
</script>
<style lang="scss" scoped>
.main_page{
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
}
@media screen and (max-width: 992px) {
    .main_page{
        .background-media{
            display: none;
        }
        .bg{
            display: block;
        }
    }

}
</style>