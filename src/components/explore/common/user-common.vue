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
            :codeColor="colorBinding.color"
            :urlImage="colorBinding.url"
          ></LoadDefault>
        </div>
        <div class="w-full h-full" v-if="!isShowLoadDing">
          <ViewSwipe
            ref="myViewSwipe"
            @onShowDetailUser="onShowDetailUser"
            @onShowPackage="onShowPackage"
            @onShowFormLikeYou="onShowFormLikeYou"
            :listUserFilter="listCardGroups"
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

    <!-- Hiển thị form chat khi cả 2 user match -->
    <div
      v-show="isShowFormMatch"
      class="w-full h-full match-like z-20 absolute top-0 left-0"
    >
      <FormLikeToo @onHideLikeYou="onHideLikeYou"></FormLikeToo>
    </div>
    <div
      v-if="isSendSuccess"
      class="w-full h-full send-supper-like absolute top-0 left-0 z-20"
    >
      <FormSendSupperLike></FormSendSupperLike>
    </div>

    <div class="w-full h-full" v-if="isShowPackage">
      <PopupGold
        ref="packageDefault"
        @onClickHidePackage="onClickHidePackage"
      ></PopupGold>
    </div>
  </div>
</template>

<script>
import LoadDefault from "../../layout/loading/load-default";
import BhBack from "../../bh-element-ui/button/bh-back";
import ViewSwipe from "../../home/swipe-tinder/view-swipe";
import DetailProfile from "../../home/view/detail-profile";
import { mapActions } from "vuex";
import FormLikeToo from "@/components/home/match-like/form-like-too.vue";
import FormSendSupperLike from "@/components/home/send-supper-like/form-send-supper-like.vue";
import PopupGold from "@/components/packages/default/popup-gold.vue";
export default {
  components: {
    LoadDefault,
    BhBack,
    DetailProfile,
    ViewSwipe,
    FormLikeToo,
    FormSendSupperLike,
    PopupGold,
  },
  name: "user-common",
  data() {
    return {
      isShowLoadDing: true,
      isShowDetail: false,
      users: [],
      isShowFormMatch: false,
      isSendSuccess: false,
      isShowPackage: false,
    };
  },

  computed: {
    colorBinding() {
      const name = this.$route.params.screamName;

      switch (name) {
        case "letBeFriend":
          return {
            title: "Let's be friend",
            bgColor: "linear-gradient(#74d880, #d64a57)",
            color: "#C6B69F",
            url: "http://localhost:6060/img/bg_let_be_friend.c2e165c1.png",
          };
        case "coffeeDate":
          return {
            title: "Looking for love",
            bgColor: "linear-gradient(#FF6762, #FF9466)",
            color: "#C6B69F",
            url: "http://localhost:6060/img/bg_coffe_date.7ae3e2ed.png",
          };
        case "lookingLove":
          return {
            title: "Coffee Date",
            bgColor: "linear-gradient(#5E2F73, #F39A7A)",
            color: "#E6A3A5",
            url: "http://localhost:6060/img/bg_looking_for_love.0d344d24.png",
          };
        case "loveMakeUp":
          return {
            title: "Love beautiful makeup",
            bgColor: "linear-gradient(#FEC894, #503C2A)",
            color: "#C0966E",
            url: "http://localhost:6060/img/thich_lam_dep.fb0ea8ca.webp",
          };
        case "traveling":
          return {
            title: "Like traveling",
            bgColor: "linear-gradient(#BDB3AF, #66361C)",
            color: "#A8958B",
            url: "http://localhost:6060/img/thich_du_lich.aeabdc3b.webp",
          };
        case "music":
          return {
            title: "Love music",
            bgColor: "linear-gradient(#5F2F97, #B88299)",
            color: "#8D5A98",
            url: "http://localhost:6060/img/thich_nghe_nhac.dfbfa4d5.webp",
          };
        case "sport":
          return {
            title: "Love sports",
            bgColor: "linear-gradient(rgb(3 3 3), rgb(128 76 157))",
            color: "#8D5A98",
            url: "http://localhost:6060/img/thich_the_thao.92c99a75.webp",
          };
        case "drink":
          return {
            title: "Like to drink",
            bgColor: "linear-gradient(#E3A47A, #C54C28)",
            color: "#DA8A61",
            url: "http://localhost:6060/img/thich_di_nhau.164f7530.webp",
          };
        default:
          return "";
      }
    },

    listCardGroups: {
      get() {
        debugger;
        return this.$store.state.homeModule.listCardGroups
          ? this.$store.state.homeModule.listCardGroups
          : this.users;
      },
      set(newData) {
        this.users = newData;
      },
    },
  },

  methods: {
    ...mapActions(["getListCardGroupExplores"]),
    onShowDetailUser(val) {
      this.isShowDetail = val;
    },
    onClickHidePackage(val) {
      this.isShowPackage = val;
    },
    onShowPackage(val) {
      this.isShowPackage = val;
    },
    onHidePopupSendSuperLike(val) {
      this.isSendSuccess = val;
    },
    onHideLikeYou(val) {
      this.isShowFormMatch = val;
    },
    onShowFormLikeYou(val) {
      this.isShowFormMatch = val;
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

  async created() {
    debugger;
    const topicId = this.$route.params.topicId;
    await this.getListCardGroupExplores(topicId);
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
  background: linear-gradient(#74d880, #d64a57);
}

.body-scream-tow {
  height: calc(100% - 10%);
}
</style>
