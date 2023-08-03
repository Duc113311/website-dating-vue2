<template>
  <div class="w-full h-full show-error absolute z-50">
    <div class="v-modal-bg cursor-pointer" @click="onHidePopover()"></div>
    <div class="absolute position-v flex justify-center items-center">
      <div class="bor-form">
        <div class="flex items-center select-option">
          <img src="../../../assets//icon/ic_report_dark.svg" alt="" />
          <div class="ml-3">Report</div>
        </div>
        <div class="flex items-center select-option">
          <img src="../../../assets//icon/ic_safety (1).svg" alt="" />
          <div class="ml-3">Safety Center</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bh-popover",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    onHidePopover() {
      debugger;
      this.$emit("onChangeHidePopover", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.position-v {
  right: 43px;
  bottom: 47rem;
}
.bor-form {
  border: 1px solid #434a5d;
  border-top-left-radius: 10px 10px;
  border-bottom-left-radius: 10px 10px;
  border-bottom-right-radius: 10px 10px;
  background-color: #434a5d;
  width: 210px;
}
.select-option {
  padding: 16px;
}
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
  right: 50%;
  transform: translate(-50%, -50%);
  animation-name: zoomIn;
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}
</style>
