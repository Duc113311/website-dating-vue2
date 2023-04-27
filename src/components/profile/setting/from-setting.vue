<template>
  <div class="w-full h-full">
    <div class="height-scroll overflow-scroll w-full">
      <!--  -->
      <SliderGold></SliderGold>
      <!-- <PhonePage></PhonePage> -->
      <!-- <LocationPage></LocationPage> -->
      <div class="mt-5">
        <GlobalPage></GlobalPage>
        <DistancePage></DistancePage>
        <AgePage></AgePage>
        <ShowMePage></ShowMePage>
        <ControlSeePage></ControlSeePage>
        <!-- <CardStackPage></CardStackPage> -->
        <ShowWifiPage></ShowWifiPage>
        <!-- <SwitchEvent></SwitchEvent> -->
        <SwitchTopic></SwitchTopic>
        <!-- <SwitchReadReceipts></SwitchReadReceipts> -->
        <SwitchActivity></SwitchActivity>
        <ShowDistance></ShowDistance>
        <!-- <NotificationPage></NotificationPage> -->
        <DarkThemePage></DarkThemePage>
        <!-- <PrivacyPage></PrivacyPage> -->
        <LogOutPage></LogOutPage>
      </div>
      <!--  -->
    </div>
  </div>
</template>

<script>
import LogOutPage from "./property-setting/log-out-page";
import SwitchActivity from "./property-setting/switch-activity";
// import SwitchReadReceipts from "./property-setting/switch-read-receipts";
import SwitchTopic from "./property-setting/switch-topic";
// import SwitchEvent from "./property-setting/switch-event";
import { mapMutations } from "vuex";
import SliderGold from "../../packages/common/slider-gold";
import AgePage from "./property-setting/age-page.vue";
// import CardStackPage from "./property-setting/card-stack-page.vue";
import ControlSeePage from "./property-setting/control-see-page.vue";
import DarkThemePage from "./property-setting/dark-theme-page.vue";
import DistancePage from "./property-setting/distance-page.vue";
import GlobalPage from "./property-setting/global-page.vue";
// import LocationPage from "./property-setting/location-page.vue";
// import NotificationPage from "./property-setting/notification-page.vue";
// import PhonePage from "./property-setting/phone-page.vue";
import ShowDistance from "./property-setting/show-distance.vue";
import ShowMePage from "./property-setting/show-me-page.vue";
import ShowWifiPage from "./property-setting/show-wifi-page.vue";
// import PrivacyPage from "./property-setting/privacy-page.vue";
export default {
  components: {
    LogOutPage,
    SwitchActivity,
    // SwitchReadReceipts,
    SwitchTopic,
    // SwitchEvent,
    SliderGold,
    // PhonePage,
    // LocationPage,
    GlobalPage,
    DistancePage,
    AgePage,
    ShowMePage,
    // CardStackPage,
    ShowWifiPage,
    ShowDistance,
    // NotificationPage,
    DarkThemePage,
    ControlSeePage,
    // PrivacyPage,
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

  mounted() {},
};
</script>

<style lang="scss">
.el-slider__button-wrapper {
  z-index: 1 !important;
}

.el-switch__core:after {
  content: "";
  position: absolute;
  top: -3px !important;
  border-radius: 100%;
  margin-left: -5px;
  transition: all 0.3s;
  width: 24px !important;
  height: 24px !important;
  background-color: #fff;
}
</style>
