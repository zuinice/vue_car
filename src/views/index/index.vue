<!--
 * @Author: your name
 * @Date: 2021-08-24 10:15:17
 * @LastEditTime: 2021-08-27 14:21:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_car\src\views\index\index.vue
-->
<template>
  <div>
    <!--汽车数据的渲染 -->
    <cars></cars>
    <!-- 地图 -->
    <amap></amap>
    <!-- 导航 -->
    <Navbar />
    <!-- 会员 -->
    <div class="child_view" :class="[show ? 'open' : '']">
      <router-view />
    </div>
  </div>
</template>
<script>
import amap from "../amap/index.vue";
import cars from "../cars/cars.vue";
import Navbar from "../../components/navbar/index.vue";

export default {
  components: { amap, cars, Navbar },
  data() {
    return {};
  },
  computed: {
    show() {
      const router = this.$route;
      return router.name === "Home" ? false : true;
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.child_view {
  position: fixed;
  top: 0;
  bottom: 0;
  right: -20vw;
  z-index: 200;
  width: 20vw;
  background-color: #34293f;
  color: #fff;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -ms-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  &.open {
    right: 0;
  }
}
</style>