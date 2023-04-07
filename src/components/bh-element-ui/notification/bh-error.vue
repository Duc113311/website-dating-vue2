<template>
  <div class="w-full h-full show-error absolute z-30">
    <div class="v-modal-bg" @click="onHidePopupPackage()"></div>
    <div class="w-full absolute top-64 left-0 flex justify-center items-center">
      <div class="bg-button-clear relative rounded-lg">
        <div class="absolute image-close">
          <div class="w-8" @click="onHidePopupPackage()">
            <img src="../../../assets/icon/icon-cancel.png" alt="" srcset="" />
          </div>
        </div>
        <div class="p-5 text-center">
          <div class="w-full padding-title">Image Error</div>

          <div class="w-full padding-describe-item">
            <p>Your photo does not match.</p>
            <p>Please select a photo again</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bh-error",
  data() {
    return {};
  },
  methods: {
    onHidePopupPackage() {
      this.$emit("onHidePopupPackage", false);
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
