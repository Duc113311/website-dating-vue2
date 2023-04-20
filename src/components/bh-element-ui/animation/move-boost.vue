<template>
  <div class="w-full h-full flex justify-center">
    <div class="hearts">
      <div class="heart"></div>
      <div class="heart"></div>
      <div class="heart"></div>
      <div class="heart"></div>
    </div>
    <div class="hearts2">
      <div class="heart2"></div>
      <div class="heart2"></div>
      <div class="heart2"></div>
      <div class="heart2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "move-boost",

  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="css">
.hearts,
.hearts2 {
  width: 25%;
  min-width: 50px;
  height: 25%;
  min-height: 100px;
  position: absolute;
  z-index: -1;
  bottom: 90%;
}

.heart {
  position: absolute;
  height: 20%;
  min-height: 35px;
  width: 20%;
  min-width: 35px;
  background-image: url("../../../assets/icon/home/h1.svg");
  background-repeat: no-repeat;
  background-position: bottom;
  opacity: 0;
  animation: floating-heart 6s infinite cubic-bezier(0.5, 0.5, 0.5, 0.5);
}

.heart2 {
  position: absolute;
  height: 20%;
  min-height: 35px;
  width: 20%;
  min-width: 35px;
  background-image: url("../../../assets/icon/home/h2.svg");
  background-repeat: no-repeat;
  background-position: bottom;
  opacity: 0;
  animation: floating-heart1 6s infinite cubic-bezier(0.5, 0.5, 0.5, 0.5);
}

@keyframes floating-heart {
  0% {
    opacity: 0;
    bottom: 0%;
    left: 0%;
  }
  10% {
    opacity: 1;
    bottom: 20%;
    left: 70%;
  }
  20% {
    bottom: 40%;
    left: 10%;
  }
  30% {
    bottom: 60%;
    left: 50%;
  }
  40% {
    opacity: 1;
    bottom: 80%;
    left: 5%;
  }
  48% {
    opacity: 0;
    bottom: 100%;
    left: 60%;
  }
  100% {
    opacity: 0;
    bottom: 100%;
    left: 90%;
  }
}

@keyframes floating-heart1 {
  0% {
    opacity: 0;
    bottom: 0%;
    right: 0%;
  }
  10% {
    opacity: 1;
    bottom: 20%;
    right: 70%;
  }
  20% {
    bottom: 40%;
    right: 10%;
  }
  30% {
    bottom: 60%;
    right: 50%;
  }
  40% {
    opacity: 1;
    bottom: 80%;
    right: 5%;
  }
  48% {
    opacity: 0;
    bottom: 100%;
    right: 60%;
  }
  100% {
    opacity: 0;
    bottom: 100%;
    right: 90%;
  }
}

.heart:nth-child(1) {
  animation-delay: 0s;
}

.heart:nth-child(2) {
  animation-delay: 2s;
}

.heart:nth-child(3) {
  animation-delay: 4s;
}

.heart:nth-child(4) {
  animation-delay: 6s;
}

.heart2:nth-child(1) {
  animation-delay: 1s;
}

.heart2:nth-child(2) {
  animation-delay: 3s;
}

.heart2:nth-child(3) {
  animation-delay: 5s;
}

.heart2:nth-child(4) {
  animation-delay: 7s;
}
</style>
