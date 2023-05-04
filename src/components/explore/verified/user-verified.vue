<template>
  <div class="w-full h-full p-2 bg-color-verified">
    <div class="w-full header-detail flex justify-center items-center p-3">
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
    <div class="w-full flex justify-center body-scream-tow items-center">
      <div class="w-full h-full" v-if="!isShowDetail">
        <div
          class="w-full h-full flex justify-center items-center"
          v-if="isShowLoadDing"
        >
          <LoadDefault :codeColor="color" :urlImage="url"></LoadDefault>
        </div>
        <div class="w-full h-full" v-if="!isShowLoadDing">
          <ViewSwipe
            ref="myViewSwipe"
            @onShowDetailUser="onShowDetailUser"
          ></ViewSwipe>
        </div>
      </div>
      <div class="w-full h-full" v-if="isShowDetail">
        <DetailProfile
          @onHideProfile="onHideProfile"
          @onActionDecide="onActionDecide"
        ></DetailProfile>
      </div>
    </div>
  </div>
</template>

<script>
import LoadDefault from "../../layout/loading/load-default";
import BhBack from "../../bh-element-ui/button/bh-back";
import ViewSwipe from "../../home/swipe-tinder/view-swipe";
import DetailProfile from "../../home/view/detail-profile";
export default {
  components: {
    LoadDefault,
    BhBack,
    DetailProfile,
    ViewSwipe,
  },
  name: "user-verified",
  data() {
    return {
      color: "#988bf9",
      url: require("@/assets/image-dating/bg_verified_photo.png"),
      isShowLoadDing: true,
      isShowDetail: false,
    };
  },

  methods: {
    onShowDetailUser(val) {
      this.isShowDetail = val;
    },

    onBackVerified() {
      this.$router.go(-1);
    },

    onHideProfile(val) {
      this.isShowDetail = val;
    },

    onActionDecide(val) {
      this.isShowDetail = false;

      this.$nextTick(() => {
        if (this.$refs.myViewSwipe) {
          this.$refs.myViewSwipe.decide(val);
        }
      });
    },
  },

  mounted() {
    setTimeout(() => {
      this.isShowLoadDing = false;
    }, 4000);
  },
};
</script>

<style lang="css">
.bg-color-verified {
  background: linear-gradient(#962bed, #0d7dfd);
}

.body-scream-tow {
  height: calc(100% - 10%);
}
</style>
