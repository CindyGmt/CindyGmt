<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  mounted(){
    this.getW()
    window.addEventListener("resize", this.getW)
  },
  beforeDestroy(){
    window.removeEventListener('resize', this.getW)
  },
  methods:{
    getW(){
      let w = document.body.clientWidth
      this.$store.commit('SET_RESIZEWIDTH',w)
      let fontSize
      let fW = document.documentElement.clientWidth
      fontSize = fW*1/100
      document.documentElement.style.fontSize = fontSize + 'px';
      
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
