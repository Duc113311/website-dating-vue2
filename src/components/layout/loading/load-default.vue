<template>
  <div class="loading">
    <div class="w-full h-full">
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
      <div class="text-describe z-20 absolute">Finding people near you...</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "load-default",
  data() {
    return {};
  },

  props: ["urlImage", "codeColor"],
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
  background-image: url("@/assets/image-dating/round_blind_date\ \(1\).png");
  width: 229px;
  height: 230px;
  background-position: center;
  background-size: cover;
  position: absolute;
  z-index: 9;
}

@keyframes pulseAnimate {
  100% {
    opacity: 0;
    transform: scale(2);
  }
}
</style>
