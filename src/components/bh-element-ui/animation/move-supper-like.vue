<template>
  <div class="w-full h-full absolute top-0">
    <div class="supers">
      <div class="super"></div>
      <div class="super"></div>
      <div class="super"></div>
      <div class="super"></div>
    </div>
    <div class="supers2">
      <div class="super2"></div>
      <div class="super2"></div>
      <div class="super2"></div>
      <div class="super2"></div>
      <div class="super2"></div>
      <div class="super2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "move-supper-like",
  data() {
    return {};
  },

  methods: {},
};
</script>
<style lang="css">
/* super hiệu ứng */
.supers,
.supers2 {
  width: 100%;
  min-width: 200px;
  height: 100%;
  min-height: 200px;
  position: absolute;
  z-index: -1;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.super {
  position: absolute;
  height: 20%;
  min-height: 35px;
  width: 20%;
  min-width: 35px;
  background-image: url("../../../assets/icon/home/may_bay.svg");
  background-repeat: no-repeat;
  background-position: bottom;
  opacity: 0;
  animation: super-1 1.2s infinite cubic-bezier(0.5, 0.5, 0.5, 0.5);
}
.super2 {
  position: absolute;
  height: 20%;
  min-height: 35px;
  width: 20%;
  min-width: 35px;
  background-image: url("../../../assets/icon/home/trai_tim.svg");
  background-repeat: no-repeat;
  background-position: bottom;
  opacity: 0;
  animation: super-2 1.2s infinite cubic-bezier(0.5, 0.5, 0.5, 0.5);
}

@keyframes super-1 {
  0% {
    opacity: 1;
    bottom: 0%;
  }
  10% {
    opacity: 1;
    bottom: 20%;
  }
  20% {
    opacity: 1;
    bottom: 40%;
  }
  30% {
    opacity: 0.9;
    bottom: 60%;
  }
  40% {
    opacity: 0.7;
    bottom: 80%;
  }
  48% {
    opacity: 0;
    bottom: 90%;
  }
  100% {
    opacity: 0;
    bottom: 100%;
  }
}
@keyframes super-2 {
  0% {
    opacity: 1;
    bottom: 0%;
  }
  10% {
    opacity: 1;
    bottom: 20%;
  }
  20% {
    opacity: 1;
    bottom: 40%;
  }
  30% {
    opacity: 0.9;
    bottom: 60%;
  }
  40% {
    opacity: 0.7;
    bottom: 80%;
  }
  48% {
    opacity: 0.4;
    bottom: 90%;
  }
  100% {
    opacity: 0;
    bottom: 100%;
  }
}

.super:nth-child(1) {
  animation-delay: 0s;
  width: 10%;
  height: 10%;
  left: 65%;
}
.super:nth-child(2) {
  animation-delay: 0.2s;
  width: 20%;
  height: 20%;
  left: 45%;
}
.super:nth-child(3) {
  animation-delay: 0.4s;
  width: 28%;
  height: 28%;
  left: 55%;
}
.super:nth-child(4) {
  animation-delay: 0.7s;
  width: 30%;
  height: 30%;
  left: 22%;
}
.super2:nth-child(1) {
  animation-delay: 0.15s;
  width: 5%;
  height: 5%;
  left: 62%;
}
.super2:nth-child(2) {
  animation-delay: 0.35s;
  width: 10%;
  height: 10%;
  left: 50%;
}
.super2:nth-child(3) {
  animation-delay: 0.55s;
  width: 15%;
  height: 15%;
  left: 48%;
  transform: rotate(-35deg);
}
.super2:nth-child(4) {
  animation-delay: 0.63s;
  width: 20%;
  height: 20%;
  left: 60%;
  transform: rotate(-55deg);
}
.super2:nth-child(5) {
  animation-delay: 0.69s;
  width: 10%;
  height: 10%;
  left: 15%;
}
.super2:nth-child(6) {
  animation-delay: 0.82s;
  width: 40%;
  height: 40%;
  left: 25%;
}
</style>
