<template>
  <div class="w-full h-full show-error absolute z-50">
    <div class="v-modal-bg cursor-pointer" @click="onHidePopupPackage()"></div>
    <div class="w-full absolute top-64 left-0 flex justify-center items-center">
      <div
        class="bg-button-clear relative rounded-lg w-96 title-default bg-color-default"
      >
        <div class="absolute image-close">
          <div class="w-8" @click="onHidePopupPackage()">
            <img src="../../../assets/icon/icon-cancel.png" alt="" srcset="" />
          </div>
        </div>
        <div class="p-5 text-center">
          <div class="w-full padding-title">{{ valueTitleQuestion }}</div>

          <div class="w-full padding-describe">
            <p>
              {{ describeQuestion }}
            </p>
          </div>

          <div
            class="flex justify-center items-center w-full mt-3 h-form-like-footer"
          >
            <div
              @click="onActionCancel(false)"
              class="w-32 mr-5 cursor-pointer button-default rounded-xl p-3 text-center justify-center flex"
            >
              Cancel
            </div>
            <div
              @click="onActionApply(true)"
              class="w-32 ml-5 button-active cursor-pointer rounded-xl p-3 text-center justify-center flex"
            >
              Apply
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bh-question",
  data() {
    return {};
  },

  props: ["titleQuestion", "describeQuestion"],
  computed: {
    valueTitleQuestion() {
      return this.titleQuestion;
    },

    valueDescribeQuestion() {
      return this.describeQuestion;
    },
  },
  methods: {
    onHidePopupPackage() {
      this.$emit("onHidePopupPackage", false);
    },

    onActionCancel(val) {
      debugger;
      this.$emit("onHidePopupPackage", false);
    },

    onActionApply(val) {
      debugger;
      this.$emit("onActionApplyQuestion", val);
    },
  },
};
</script>

<style lang="css">
.image-close {
  top: -10px;
  right: -10px;
}
@keyframes zoomIn {
  from {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
}
.show-error {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-name: zoomIn;
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}
</style>
