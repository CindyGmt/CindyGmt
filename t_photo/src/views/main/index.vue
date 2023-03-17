<!-- 首页 -->
<template>
    <div class="main_box">
        <maincontainer></maincontainer>
        <works></works>
        <characteristic></characteristic>
        <introduce></introduce>
        <cooperate></cooperate>
        <leaveWord></leaveWord>
        <contact></contact>
    </div>
</template>
<script>
import maincontainer from './maincontainer.vue'
import works from '../works/index.vue'
import characteristic from '../characteristic/index.vue'
import introduce from '../introduce/index.vue'
import cooperate from '../cooperate/index.vue'
import leaveWord from '../leaveWord/index.vue'
import contact from '../contact/index.vue'
import { mapState } from 'vuex'
export default{
    components:{ maincontainer, works, characteristic, introduce, cooperate, leaveWord, contact },
    data(){
        return {
            navItem:[
                {
                    name:'首页',
                    id:'main_page'
                },
                {
                    name:'作品',
                    id:'works_page'
                },
                {
                    name:'特点',
                    id:'characteristic_page'
                },
                {
                    name:'简介',
                    id:'introduce_page'
                },
                {
                    name:'合作',
                    id:'cooperate_page'
                },
                {
                    name:'留言',
                    id:'leaveWord_page'
                },
                {
                    name:'联系',
                    id:'contact_page'
                },
              ]
        }
    },
    computed: {
        ...mapState({
            resizeWidth: state => state.app.resizeWidth
        }),
    },
    mounted(){
        this.observerEl()
    },
    methods:{
        
        observerEl(){
              const getFocus = (entries, observer) => {
                if(this.resizeWidth <= 768)return
                if(entries.length > 0){
                  let entry = entries[0]
                  let entriesNavItem = this.navItem.filter(item => {
                    return item.id === entry.target.id
                  })
                  this.$store.commit('SET_OBSERVERNAME', entriesNavItem[0].name)
                }
              }
              const observer = new IntersectionObserver(getFocus, { threshold: 0.6 });
              this.navItem.forEach(item => {
                  const target = document.getElementById(item.id);
                  observer.observe(target);
              })
          }
    }
}
</script>
<style lang="scss" scoped>
// ::v-deep.main_box{
//     section{
//         width: 100%;
//         height: 100vh;
//     }
// }
</style>