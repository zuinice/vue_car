<!--
 * @Author: your name
 * @Date: 2021-08-27 14:17:50
 * @LastEditTime: 2021-08-27 15:56:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_car\src\components\navbar\index.vue
-->
<template>
  <div class="navbar">
    <ul>
      <li><i class="icon icon-help"></i></li>
      <li><i class="icon icon-search"></i></li>
      <li class="icon_botton">选择车辆</li>
      <li><i class="icon icon-location"></i></li>
      <li><i class="icon icon-user"></i></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "VueCarIndex",

  components: {},

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 7vh;
  z-index: 10;
  text-align: center;
}
ul li {
  display: inline-block;
}
.icon_botton {
  height: 44px;
  width: 10.1vw;
  border-radius: 20px;
  line-height: 44px;
  background-color: $color_main;
  color: #fff;
  margin: 0 7.5px;
  cursor: pointer;
}
.icon {
  vertical-align: middle;
  margin: 0 7.5px;
  cursor: pointer;
}
</style>
