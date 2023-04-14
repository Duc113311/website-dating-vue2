<template>
  <div
    class="loading-app absolute top-0 left-0 w-full h-full"
    :style="`background: ${bgColorParam}`"
  >
    <div class="w-full h-full flex justify-center items-center">
      <div
        class="img-filter"
        :style="`background-image: url('${urlImageParam}')`"
      ></div>
      <div class="">
        <div class="circle-effects">
          <span style="--i: 0" :style="colorParam"></span>
          <span style="--i: 1" :style="colorParam"></span>
          <span style="--i: 2" :style="colorParam"></span>
          <span style="--i: 3" :style="colorParam"></span>
          <span style="--i: 4" :style="colorParam"></span>
          <span style="--i: 5" :style="colorParam"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "load-app",
  data() {
    return {};
  },

  props: ["urlImage", "codeColor", "bgColor"],
  computed: {
    urlImageParam() {
      return this.urlImage;
    },

    colorParam() {
      const myStyle = {
        backgroundColor: this.codeColor,
      };
      return myStyle;
    },

    bgColorParam() {
      return this.bgColor;
    },
  },

  methods: {},
};
</script>

<style lang="css">
.circle-effects {
  position: relative;
  width: 230px;
  height: 230px;
  border-radius: 50%;
  background-position: 50% 50%;
  background-size: 100%;
}

.circle-effects span {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  animation: pulseAnimate 4s ease-out infinite;
  animation-delay: calc(1s * var(--i));
  z-index: 1;
}

.img-filter {
  width: 120px;
  height: 120px;
  background-position: revert;
  background-size: cover;
  position: absolute;
  z-index: 9;
  border-radius: 120px;
}

@keyframes pulseAnimate {
  100% {
    opacity: 0;
    transform: scale(2);
  }
}
</style>
