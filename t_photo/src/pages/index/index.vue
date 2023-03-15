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
  ::v-deep.isFixed{
    height: 68px;
    position: fixed;
    z-index: 9;
    background-color: #1a1a1a;
    opacity: 1;
    box-shadow: 0 0 6px rgb(0 0 0 / 25%);
    transition: all 0.5s ease 0s;
    .nav-menu{
      .el-menu-item,.el-submenu{
        &:hover{
            .underline{
                opacity: 1;
                width: 100%;
                transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
            }
        }
    }
    .el-menu-item.is-active{
      border-bottom: 1px solid #fff;
        .underline{
            display: none;
        }
    }
  }
}
  .contain{
    min-height: calc(100vh - 300px);
  }
  @media screen and (max-width: 992px) {
    ::v-deep.isFixed{
        height: 56px;
        .nav-menu{
      .el-menu-item,.el-submenu{
        &:hover{
            .underline{
                opacity: 0;
            }
        }
    }
    .el-menu-item.is-active{
      border-bottom: 1px solid transparent;
        .underline{
            display: none;
        }
    }
  }
    }
}
  </style>