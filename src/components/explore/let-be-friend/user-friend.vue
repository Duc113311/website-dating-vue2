<template>
  <div
    class="w-full h-full p-2 bg-color-verified"
    :style="`background:${colorBinding.bgColor}`"
  >
    <div class="w-full header-detail flex justify-center items-center p-3">
      <div class="w-full flex justify-center items-center">
        <div class="">
          <BhBack @onBackComponent="onBackVerified()"></BhBack>
        </div>
        <div class="ml-28 w-3/4 title-print flex items-center">
          <div>{{ colorBinding.title }}</div>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center body-scream-tow items-center">
      <div class="w-full h-full" v-if="!isShowDetail">
        <div
          class="w-full h-full flex justify-center items-center"
          v-if="isShowLoadDing"
        >
          <LoadDefault
            :codeColor="color"
            :urlImage="colorBinding.url"
          ></LoadDefault>
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
      color: "#C6B69F",
      url: "http://localhost:6060/img/thich_di_nhau.164f7530.webp",
      isShowLoadDing: true,
      isShowDetail: false,
    };
  },

  computed: {
    colorBinding() {
      const name = this.$route.query.name;

      switch (name) {
        case "letBeFriend":
          return {
            title: "Let's be friend",
            bgColor: "linear-gradient(#74d880, #d64a57)",
            url: require("@/assets/image-dating/bg_let_be_friend.png"),
          };
        case "coffeeDate":
          return {
            title: "Looking for love",
            bgColor: "linear-gradient(#FF6762, #FF9466)",
            url: require("@/assets/image-dating/bg_coffe_date.png"),
          };
        case "lookingLove":
          return {
            title: "Coffee Date",
            bgColor: "linear-gradient(#5E2F73, #F39A7A)",
            url: "http://localhost:6060/img/bg_looking_for_love.0d344d24.png",
          };
        case "loveMakeUp":
          return {
            title: "Love beautiful makeup",
            bgColor: "linear-gradient(#FEC894, #503C2A)",
            url: "http://localhost:6060/img/thich_lam_dep.fb0ea8ca.webp",
          };
        case "traveling":
          return {
            title: "Like traveling",
            bgColor: "linear-gradient(#BDB3AF, #66361C)",
            url: "http://localhost:6060/img/thich_du_lich.aeabdc3b.webp",
          };
        case "music":
          return {
            title: "Love music",
            bgColor: "linear-gradient(#5F2F97, #B88299)",
            url: "http://localhost:6060/img/thich_nghe_nhac.dfbfa4d5.webp",
          };
        case "sport":
          return {
            title: "Love sports",
            bgColor: "linear-gradient(#010004, #1C022B)",
            url: "http://localhost:6060/img/thich_the_thao.92c99a75.webp",
          };
        case "drink":
          return {
            title: "Like to drink",
            bgColor: "linear-gradient(#E3A47A, #C54C28)",
            url: "http://localhost:6060/img/thich_di_nhau.164f7530.webp",
          };
        default:
          return "";
      }
    },
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
    // setTimeout(() => {
    //   this.isShowLoadDing = false;
    // }, 4000);
  },
};
</script>

<style lang="css">
.bg-color-verified {
  background: linear-gradient(#74d880, #d64a57);
}

.body-scream-tow {
  height: calc(100% - 10%);
}
</style>
