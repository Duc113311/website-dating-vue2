<template>
  <div class="w-full h-full relative bg-verified-success">
    <div class="w-full h-full p-5">
      <div class="w-full header-detail flex justify-center items-center">
        <div class="w-full flex justify-center items-center">
          <div class="">
            <BhBack @onBackComponent="onBackVerified()"></BhBack>
          </div>
          <div class="ml-28 w-3/4 title-print flex items-center">
            <img
              width="40"
              src="@/assets/icon/ic_verified_enable.svg"
              alt=""
              srcset=""
            />
            <div>Photo verified</div>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center body-detail-tow">
        <div class="bor-image"></div>
      </div>

      <div class="footer-detail">
        <BhJoin @onNextBlindOption="onNextBlindOption()"></BhJoin>
        <BhNothank></BhNothank>
      </div>
    </div>
  </div>
</template>

<script>
import BhNothank from "../../bh-element-ui/button/bh-nothank";
import BhJoin from "../../bh-element-ui/button/bh-join";
import BhBack from "../../bh-element-ui/button/bh-back";
export default {
  components: {
    BhNothank,
    BhJoin,
    BhBack,
  },
  name: "photo-verified",

  data() {
    return {};
  },

  methods: {
    onBackVerified() {
      this.$router.go(-1);
    },

    onNextBlindOption() {
      this.$router.push({ path: "/user-verified" });
    },
  },
};
</script>

<style lang="css">
.bg-verified-success {
  background-image: url(@/assets/image-dating/bg_verified_photo.png);
  background-position: center;
  background-repeat: repeat;
  background-size: cover;
}

.body-detail-tow {
  height: 70%;
}

.footer-detail {
  height: calc(100% - 80%);
}

.bor-image {
  width: 370px;
  height: 450px;
  border: 4px solid;
  border-radius: 10px;
}
</style>
