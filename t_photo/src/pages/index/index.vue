<template>
    <div class="index">
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
            var offsetTop = 86
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
  .isFixed{
    position: fixed;
    z-index: 9;
    width: 100%;
    background-color: #000000a8;
    opacity: 1;
    box-shadow: 0 0 6px 3px rgb(0 0 0 / 60%);
    transition: all 0.4s ease 0s;
  }
  .contain{
    min-height: calc(100vh - 300px);
  }
  </style>