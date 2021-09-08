<!--
 * @Author: liujj
 * @Date: 2021-09-07 08:38:53
 * @LastEditTime: 2021-09-07 15:17:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_car\src\views\cars\varItem.vue
-->
<template>
  <div>
    <div class="cars_item">
      <header class="header">
        <span class="header_lef">
          <img src="../../assets/images/cars-logo.png" alt="" />
          <span>Mustang 2019款</span>
        </span>
        <span class="header_rig">新能源汽车 5座</span>
      </header>
      <div class="content">
        <div class="content_lef">
          <div>
            <h1 class="cars_number">鲁 B745N8</h1>
            <ul class="energy">
              <li class="active"></li>
              <li class="active"></li>
              <li class="active"></li>
              <li class="active"></li>
              <li class="active"></li>
              <li class="active"></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <p class="distance">
              <span>约</span>
              <strong>600</strong>
              <span>KM</span>
            </p>
          </div>
        </div>
        <div class="content_rig">
          <img src="../../assets/images/pic001.jpg" alt="" />
        </div>
      </div>
      <footer class="footer">
        <span>青岛软件园停车场</span>
      </footer>
    </div>
    <div class="cars_item cars_detail" :style="'height:' + height">
      <header class="header">
        <span class="header_lef">
          <img src="../../assets/images/cars-logo.png" alt="" />
          <span>Mustang 2019款</span>
        </span>
        <span class="header_rig">新能源汽车 5座</span>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueCarCaritem",
  props: {
    height: {
      type: String,
      default: "25vh",
    },
  },
  components: {},

  directives: {},

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.cars_item {
  height: 25vh;
  // width: 21vw;
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
.content {
  display: flex;
}
.content_rig {
  width: 50%;
  flex: 0.8;
  img {
    width: 100%;
  }
}
.content_lef {
  flex: 1.2;
  display: flex;
  align-items: center;
}
.cars_number {
  font-size: 17px;
}
.energy {
  display: inline-block;
}
.energy > li {
  display: inline-block;
  width: 0.5vw;
  height: 1.6vw;
  background-color: rgb(229, 226, 226);
  border-radius: 10px;
}
.energy > li:not(:first-child) {
  margin-left: 2px;
}
.active {
  background: linear-gradient(#17a8fa, #108dd9);
}
.footer {
  margin-top: 1.5vh;
  border-top: 1px solid rgb(229, 226, 226);
}
.distance {
  display: inline-block;
  margin-left: 8px;
  strong {
    font-size: 18px;
    font-weight: 800;
    margin: 0 2px;
  }
  span {
    font-size: 12px;
    opacity: 50%;
  }
}
.footer {
  overflow: hidden;
  position: relative;
}
.footer > span {
  display: inline-block;
  margin-top: 5px;
  opacity: 50%;
  line-height: 20px;
  &::after {
    content: "";
    position: absolute;
    right: 5px;
    width: 8px;
    height: 8px;
    margin-top: -4px;
    border-top: 1px solid #000;
    border-right: 1px solid #000;
    transform: rotate(45deg);
    top: 50%;
  }
}
.cars_detail {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>