<!-- 作品 -->
<template>
    <section class="works_page" id="works_page">
        <div class="bg">
            <div class="contain_box base-font">
                <div class="title1">欢迎查看我的作品</div>
                <div class="contain">
                    <div class="video_box">
                        <div class="video_item mx_1" v-for="item in videoList">
                            <video
                            muted="muted"
                            volume="0"
                            :poster="item.posterImg"
                            width="100%"
                            class="section-background-video">
                                <source type="video/webm" :src="item.url1">
                                <source type="video/mp4" :src="item.url2">
                            </video>
                            <div class="title2">{{ item.title }}</div>
                        </div>
                    </div>
                    <div class="tips">PS：视频文件需要额外购买<span class="red">云视频空间</span>使用，不包含在基础套餐之内。</div>
                    <el-button class="btn">更多作品</el-button>
                </div>
            </div>
        </div>
        </section>
</template>
<script>
export default{
    data(){
        return {
            videoList:[
                {
                    title:'极北星空',
                    url1:'http://5f11471fca283.t74.qifeiye.com/qfy-content/uploads/2020/07/8aa17b72f37575effe2a50d2d2890f8a.webm',
                    url2:'http://5f11471fca283.t74.qifeiye.com/qfy-content/uploads/2020/07/8aa17b72f37575effe2a50d2d2890f8a.mp4',
                    posterImg:'https://ccdn.goodq.top/caches/0949e197e2481ff51826a8a6ab38f749/aHR0cDovLzVmMTE0NzFmY2EyODMudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAyMC8wNy9jOWEzMWRjNTEzNjk4MmY5ZTA5YjM3NmQ0YjMzNjZiNi02MDB4NDQwLTkwLndlYnA_p_p100_p_3D.webp'
                },
                {
                    title:'蒲公英的断舍离',
                    url1:'http://5f11471fca283.t74.qifeiye.com/qfy-content/uploads/2020/07/6846ae2ff378e192048c2e3bce88dfec.webm',
                    url2:'http://5f11471fca283.t74.qifeiye.com/qfy-content/uploads/2020/07/6846ae2ff378e192048c2e3bce88dfec.mp4',
                    posterImg:'https://ccdn.goodq.top/caches/0949e197e2481ff51826a8a6ab38f749/aHR0cDovLzVmMTE0NzFmY2EyODMudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAyMC8wNy8yNTJkYThhZWZhYmE1MzViOTc1MDA2NDQzMGJmOWIyZi02MDB4NDQwLTkwLndlYnA_p_p100_p_3D.webp'
                }
                
            ]
        }
    }
    
}
</script>
<style scoped lang="scss">
.works_page{
    
    .bg{
        .contain_box{
            width: 100%;
            padding-top: 6rem;
            .title1{
                padding: 0.5rem 0 3rem 0;
                font-size: 1.68rem;
            }
            .contain{
                padding-bottom: 5rem;
                .video_box{
                    display: flex;
                    justify-content: center;
                    .video_item{
                        max-width: 600px;
                        .title2{
                            padding: 0.5rem 0;
                            font-size: 0.84rem;
                        }
                    }
                }
                .tips{
                    font-size: 0.75rem;
                    padding: 1.5rem 1rem 1rem 1rem;
                    width: 50%;
                    margin: 0 auto;
                }
                .btn{
                    font-size: 0.8rem;
                    padding: 0.5rem 1.5rem;
                    
                }
            }
            
        }
        
    }
}

@media screen and (max-width: 768px){
    .works_page{
        height: auto;
        .bg{
            .contain_box{
        .title1{
            font-size: 16px;
        }
        .contain{
            .video_box{
                // display: flex;
                // justify-content: center;
                .video_item{
                    // max-width: 600px;
                    .title2{
                        font-size: 12px;
                    }
                }
            }
            .tips{
                    font-size: 10px;
                }
                .btn{
                    font-size: 10px;
                    padding: 5px 15px;
                }
        }
        
    }
        }
    
}
}

</style>