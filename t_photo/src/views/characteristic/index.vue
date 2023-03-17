<!-- 特点 -->
<template>
    <section class="characteristic_page" id="characteristic_page">
            <div class="bg">
                <div class="contain_box base-font">
                    <div class="title1">用于商业和个人项目的创意视频工作室</div>
                    <div class="contain">
                        <div class="list-box">
                            <div class="list-item" v-for="item in characterList">
                                <img :src="item.img" alt="">
                                <h1>{{ item.title }}</h1>
                                <p>{{ item.text }}</p>
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
            characterList:[
                {
                  img:'https://ccdn.goodq.top/caches/0949e197e2481ff51826a8a6ab38f749/aHR0cDovLzVmMTE0NzFmY2EyODMudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAyMC8wNy80NDQ4M2JlMjc2NzkzMzQxZDE4YWEwZDBjZmE3ZjllNy0zMjJ4MTgzLTkwLndlYnA_p_p100_p_3D.webp',
                  title:'原创视频',
                  text:'自助建站平台全面采用第二代云服务器和云网络,其中，服务器硬件使用国内领先的Xeon处理器、32个物理CPU核心高配服务器在提供超高性能'  
                },
                {
                  img:'https://ccdn.goodq.top/caches/0949e197e2481ff51826a8a6ab38f749/aHR0cDovLzVmMTE0NzFmY2EyODMudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAyMC8wNy9hYjZhMDYyNGRmZWY0YjdhMmE0MGU3NDY0ZmZmMzIyOS0zMjJ4MTgzLTkwLndlYnA_p_p100_p_3D.webp',
                  title:'原创视频',
                  text:'自助建站平台全面采用第二代云服务器和云网络,其中，服务器硬件使用国内领先的Xeon处理器、32个物理CPU核心高配服务器在提供超高性能'  
                },
                {
                  img:'https://ccdn.goodq.top/caches/0949e197e2481ff51826a8a6ab38f749/aHR0cDovLzVmMTE0NzFmY2EyODMudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAyMC8wNy8zZTA1YTg0MTlhNTAzNWVhMTc2OWVjYzhjYWM2ODhkMS0zMjJ4MTgzLTkwLndlYnA_p_p100_p_3D.webp',
                  title:'原创视频',
                  text:'自助建站平台全面采用第二代云服务器和云网络,其中，服务器硬件使用国内领先的Xeon处理器、32个物理CPU核心高配服务器在提供超高性能'  
                },
            ]
        }
    }
    
}
</script>
<style scopr lang="scss">
.characteristic_page{
    .bg{
        background: url('../../assets/img/bg/bg_1.jpg') no-repeat;
        background-size: cover;
        background-attachment: fixed;
        background-position-x: center;
        .contain_box{
            width: 100%;
            padding-top: 6rem;
            .title1{
                padding: 0.5rem 0 3rem 0;
                font-size: 1.68rem;
            }
            .contain{
                padding-bottom: 5rem;
                .list-box{
                    display: flex;
                    .list-item{
                        img{
                            width: 16.8rem;
                        }
                        h1{
                            font-weight: 100;
                            font-size: 1.15rem;
                        }
                        p{
                            font-size: 0.73rem;
                            max-width: 325px;
    text-align: center;
                        }
                    }
                }
            }
            
        }
    }
}
@media screen and (max-width: 768px){
    .characteristic_page{
        height: auto;
        .bg{
            .contain_box{
        .title1{
            font-size: 16px;
        }
        
        
    }
        }
    
}
}
</style>