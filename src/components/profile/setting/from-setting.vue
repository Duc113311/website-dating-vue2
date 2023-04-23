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
      <ControlSeePage></ControlSeePage>
      <card-stack-page></card-stack-page>
      <show-wifi-page></show-wifi-page>
      <form-switch
        :objectQAEvent="objectSwitch.qEvent"
        @onChangeComponent="onChangeQAEvent"
      ></form-switch>
      <form-switch
        :objectQAEvent="objectSwitch.topic"
        @onChangeComponent="onChangeShowTopPicks"
      ></form-switch>
      <show-distance></show-distance>
      <notification-page></notification-page>
      <dark-theme-page></dark-theme-page>
      <form-link-web-page></form-link-web-page>
      <log-out-page></log-out-page>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import SliderGold from "../../packages/common/slider-gold";
import AgePage from "./property-setting/age-page.vue";
import CardStackPage from "./property-setting/card-stack-page.vue";
import ControlSeePage from "./property-setting/control-see-page.vue";
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
    CardStackPage,
    ShowWifiPage,
    FormSwitch,
    ShowDistance,
    NotificationPage,
    DarkThemePage,
    ControlSeePage,
  },
  name: "from-setting-page",
  data() {
    return {
      objectSwitch: {
        qEvent: {
          titleName: "Q&A Events",
          valueSwitch:
            this.$store.state.userModule.user_profile.settings
              .showMePersonLikeMe,
          describeName:
            "Turning this off will remove Q&A event content from your profile, and you'll no longer see profiles with Q&A event content",
        },
        topic: {
          titleName: "Show me Top picks",
          valueSwitch:
            this.$store.state.userModule.user_profile.settings
              .showMePersonLikeMe,
          describeName:
            "Turning this on will allow you to be shown as a featured Top Pick to other users near you",
        },
      },
    };
  },

  methods: {
    ...mapMutations(["setShowTopPicks"]),
    onChangeQAEvent(val) {
      console.log(val);
    },

    onChangeShowTopPicks(val) {
      console.log(val);
      const topPicks =
        this.$store.state.userModule.user_profile.settings.showMePersonLikeMe;
      if (topPicks) {
        this.setShowTopPicks(false);
      } else {
        this.setShowTopPicks(true);
      }
    },
  },

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
