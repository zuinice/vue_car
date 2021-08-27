<!--
 * @Author: your name
 * @Date: 2021-08-24 10:15:17
 * @LastEditTime: 2021-08-24 15:23:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_car\src\views\index\index.vue
-->
<template>
  <div class="amap_container">
    <el-amap class="amap-box" vid="amapContainer" :events="events"></el-amap>
  </div>
</template>
<script>
import { AMapManager, lazyAMapApiLoaderInstance } from "vue-amap";

export default {
  data() {
    return {
      map: null,
      zoom: 18,
      events: {},
    };
  },
  mounted() {
    lazyAMapApiLoaderInstance.load().then(() => {
      this.map = new AMap.Map("amapContainer", {
        center: new AMap.LngLat(120.414331, 36.076298),
        zoom: this.zoom, //初始化地图层级
      });
    });
  },
};
</script>
<style lang="scss" scoped>
.amap_container {
  height: 100vh;
  width: 100vw;
}
</style>