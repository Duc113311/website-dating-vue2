<template>
  <div class="w-full h-full">
    <div class="height-scroll overflow-scroll w-full">
      <SliderGold></SliderGold>
      <PhonePage></PhonePage>
      <location-page></location-page>
      <global-page></global-page>
      <distance-page></distance-page>
      <age-page></age-page>
      <show-me-page></show-me-page>
      <control-page></control-page>
      <card-stack-page></card-stack-page>
      <show-wifi-page></show-wifi-page>
      <form-switch></form-switch>
      <show-distance></show-distance>
      <notification-page></notification-page>
      <dark-theme-page></dark-theme-page>
      <form-link-web-page></form-link-web-page>
      <log-out-page></log-out-page>
    </div>
  </div>
</template>

<script>
import SliderGold from "../../packages/common/slider-gold";
import ControlPage from "../edit-profile/property-user/control-page.vue";
import AgePage from "./property-setting/age-page.vue";
import CardStackPage from "./property-setting/card-stack-page.vue";
import DarkThemePage from "./property-setting/dark-theme-page.vue";
import DistancePage from "./property-setting/distance-page.vue";
import FormSwitch from "./property-setting/form-switch.vue";
import GlobalPage from "./property-setting/global-page.vue";
import LocationPage from "./property-setting/location-page.vue";
import NotificationPage from "./property-setting/notification-page.vue";
import PhonePage from "./property-setting/phone-page.vue";
import ShowDistance from "./property-setting/show-distance.vue";
import ShowMePage from "./property-setting/show-me-page.vue";
import ShowWifiPage from "./property-setting/show-wifi-page.vue";
export default {
  components: {
    SliderGold,
    PhonePage,
    LocationPage,
    GlobalPage,
    DistancePage,
    AgePage,
    ShowMePage,
    ControlPage,
    CardStackPage,
    ShowWifiPage,
    FormSwitch,
    ShowDistance,
    NotificationPage,
    DarkThemePage,
  },
  name: "from-setting-page",
  data() {
    return {};
  },

  methods: {},

  mounted() {
    debugger;
  },
};
</script>

<style lang="scss">
.el-slider__button-wrapper {
  z-index: 10 !important;
}
</style>
