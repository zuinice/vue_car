<!--
 * @Author: liujj
 * @Date: 2021-08-24 15:40:10
 * @LastEditTime: 2021-09-07 15:11:26
 * @LastEditors: Please set LastEditors
 * @Description: a demo based on vue
 * @FilePath: \vue_car\src\views\cars\cars.vue
-->
<template>
  <div class="cars" @click="user">
    <div class="cars_swiper">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <car-item height="600px" />
        </swiper-slide>
        <swiper-slide>
          <car-item />
        </swiper-slide>
        <swiper-slide>
          <car-item />
        </swiper-slide>
        <swiper-slide>
          <car-item />
        </swiper-slide>
        <swiper-slide>
          <car-item />
        </swiper-slide>
        <swiper-slide>
          <car-item />
        </swiper-slide>
        <swiper-slide>
          <car-item />
        </swiper-slide>
        <swiper-slide>
          <car-item />
        </swiper-slide>
      </swiper>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import carItem from "./carItem.vue";
export default {
  name: "VueCarCars",
  components: {
    Swiper,
    SwiperSlide,
    carItem,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },

  mounted() {},

  methods: {
    user() {
      // this.$router.push({ name: "user" });
    },
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("sider change");
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
.cars_swiper {
  position: relative;
  padding: 0 4vw;
  .swiper-container {
    overflow: inherit;
  }
  .swiper-button-prev,
  .swiper-button-next {
    top: 50%;
    height: 100px;
    width: 60px;
    margin-top: -50px;
    border-radius: 100px;
    background-color: #fff;
    @include webkit(box-shadow, 0 0 18px 0 rgba(0, 0, 0, 0.2));
    transition: all 0.3s ease 0s;
    &.swiper-button-disabled {
      opacity: 1;
    }
    &:hover {
      background-color: $color_main;
    }
  }
  .swiper-button-prev {
    left: 50px;
    &::after {
      content: "";
      height: 14px;
      width: 14px;
      border-top: 3px solid #000;
      border-left: 3px solid #000;
      transform: rotate(-45deg);
      margin-left: 5px;
    }
    &:hover {
      &::after {
        border-top: 3px solid $color_blue;
        border-left: 3px solid $color_blue;
      }
    }
  }
  .swiper-button-next {
    right: 50px;
    &:after {
      content: "";
      height: 14px;
      width: 14px;
      border-top: 3px solid #000;
      border-right: 3px solid #000;
      transform: rotate(45deg);
      margin-right: 5px;
    }
    &:hover {
      &::after {
        border-top: 3px solid $color_blue;
        border-right: 3px solid $color_blue;
      }
    }
  }
}
</style>