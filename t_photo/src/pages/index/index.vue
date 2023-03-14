<template>
    <div class="index_page">
      <top :class="isFixed ? 'isFixed' :''" id="searchBar"></top>
      <div class="contain">
        <router-view></router-view>
      </div>
    </div>
  </template>
   
 <script>
    import top from "../top/index.vue";
   
    export default {
        components: {
          top,
        },
        name: "index",
        data() {
          return {
            isFixed: false
          };
        },
        mounted () {
          window.addEventListener('scroll', this.handleScroll)
        },
        destroyed () {
          window.removeEventListener('scroll', this.handleScroll)
        },
        methods: {
          handleScroll () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            var offsetTop = 87
            if (scrollTop > offsetTop) {
            this.isFixed = true
            } else {
            this.isFixed = false
            }
          },
        }
      };
  </script>
   
  <style scoped lang="scss">
  .index_page{
    position: relative;
  }
  .isFixed{
    position: fixed;
    z-index: 9;
    background-color: #1a1a1a;
    opacity: 1;
    box-shadow: 0 0 6px rgb(0 0 0 / 25%);
    transition: all 0.5s ease 0s;
  }
  .contain{
    min-height: calc(100vh - 300px);
  }
  </style>