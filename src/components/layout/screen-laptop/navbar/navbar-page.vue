<template>
  <div class="w-full h-full">
    <!-- header -->
    <div
      class="w-full h-20 bg-slate-500 flex justify-between items-center pl-5 pr-5"
    >
      <div>
        <div class="nav-icon">
          <img src="../../../../assets/icon/ic_icon_app.svg" alt="" />
        </div>
      </div>
      <div class="flex justify-end gap-4">
        <div class="nav-icon">
          <img src="../../../../assets/icon/ic_explore_tab_light.svg" alt="" />
        </div>
        <div class="nav-icon">
          <img src="../../../../assets/icon/ic_safety (1) light.svg" alt="" />
        </div>
      </div>
    </div>

    <!-- Body -->

    <div class="w-full">
      <div class="p-3">Discovery Settings</div>
      <div class="border-form-style">
        <div class="flex justify-between p-3 bg-color bg-border-bottom">
          <div>Location</div>
          <div class="flex items-center">
            <div>Trung hòa, Việt Nam</div>
            <div class="cursor-pointer ml-2">
              <BhChevron></BhChevron>
            </div>
          </div>
        </div>
        <div class="bg-color p-3 bg-border-bottom">
          <CtrlSliderDistance></CtrlSliderDistance>
        </div>
        <div class="flex justify-between p-3 bg-color bg-border-bottom">
          <div>Looking for</div>
          <div class="flex items-center">
            <div>Women</div>
            <div class="cursor-pointer ml-2">
              <BhChevron></BhChevron>
            </div>
          </div>
        </div>
        <div class="p-3 bg-color bg-border-bottom">
          <CtrlSliderAge></CtrlSliderAge>
        </div>
        <div class="p-3 bg-color bg-border-bottom">
          <CtrlSwitch></CtrlSwitch>
        </div>
        <div class="flex justify-between p-3 bg-color bg-border-bottom">
          <div>Preferred Languages</div>
          <div class="flex items-center">
            <div class="cursor-pointer ml-2">
              <BhChevron></BhChevron>
            </div>
          </div>
        </div>
      </div>

      <div class="p-3">
        Going global will allow you to see people from around the world after
        you've run out of profiles nearby
      </div>

      <div>
        <CtrlRadioText></CtrlRadioText>
      </div>

      <div class="bg-color p-3 bg-border-bottom">
        <CtrlSwitchTopPick></CtrlSwitchTopPick>
      </div>
    </div>
  </div>
</template>

<script>
import CtrlSwitchTopPick from "../../../control/ctrl-switch-top-pick";
import CtrlRadioText from "../../../control/ctrl-radio-text";
import CtrlSwitch from "../../../control/ctrl-switch";
import CtrlSliderDistance from "../../../control/ctrl-slider-distance";
import CtrlSliderAge from "../../../control/ctrl-slider-age";
import BhChevron from "../../../bh-element-ui/button/bh-chevron";
export default {
  components: {
    CtrlSwitchTopPick,
    CtrlRadioText,
    CtrlSwitch,
    CtrlSliderDistance,
    CtrlSliderAge,
    BhChevron,
  },
  name: "navbar-page",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.nav-icon {
  width: 40px;
  height: 40px;
  border-radius: 30px;
  background-color: #24313d;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bg-border-bottom {
  border-bottom: 1px solid #383d50;
}

.bg-color {
  background-color: #f6fbff;
}

.border-form-style {
  border-bottom-width: 1px;
  border-top-width: 1px;
  border-color: #e2ebf3;
}
</style>
