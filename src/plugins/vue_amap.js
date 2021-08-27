
import Vue from 'vue';
import VueAMap from 'vue-amap';

Vue.use(VueAMap);

VueAMap.initAMapApiLoader({
  key: 'b338b82e8f1c04f61c74757344ea9c8e',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4',
  uiVersion: '1.0.11' // 版本号
});