<!--
 * @Author: your name
 * @Date: 2021-08-24 15:40:10
 * @LastEditTime: 2021-08-27 16:56:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_car\src\views\cars\cars.vue
-->
<template>
  <div class="cars" @click="user">
    <div class="cars_item">
      <header class="header">
        <span class="header_lef">
          <img src="../../assets/images/cars-logo.png" alt="" />
          <span>Mustang 2019款</span>
        </span>
        <span class="header_rig">新能源汽车 5座</span>
      </header>
      <div class="content"></div>
      <footer></footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueCarCars",
  components: {},
  data() {
    return {};
  },

  mounted() {},

  methods: {
    user() {
      // this.$router.push({ name: "user" });
    },
  },
};
</script>

<style lang="scss" scoped>
.cars {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 15vh;
  z-index: 11;
}
.cars_item {
  height: 25vh;
  width: 25vw;
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  @include webkit(box-shadow, 0 0 18px 0 rgba(0, 0, 0, 0.2));
  @include webkit(box-sizing, border-box);
  margin: auto;
}
.header {
  display: flex;
  span {
    flex: 1;
  }
}
.header_lef {
  img {
    height: 3vh;
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
  }
}
.header_rig {
  height: 3vh;
  line-height: 3vh;
  text-align: right;
  opacity: 50%;
}
</style>