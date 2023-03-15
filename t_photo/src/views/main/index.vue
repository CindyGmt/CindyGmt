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
export default{
    components:{ maincontainer, works, characteristic, introduce, cooperate, leaveWord, contact }
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