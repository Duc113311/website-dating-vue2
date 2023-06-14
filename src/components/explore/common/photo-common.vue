<template>
  <div
    class="w-full h-full relative bg-verified-success"
    v-bind:class="{ 'reverse-layout': isArabic }"
    :style="`background-image:url(${title.url})`"
  >
    <div class="w-full h-full p-5">
      <div class="w-full header-detail-item flex justify-center items-center">
        <div class="w-full flex items-center">
          <div class="">
            <BhBack @onBackComponent="onBackVerified()"></BhBack>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center body-detail-tow relative mb-10">
        <div class="w-full absolute bottom-0 text-center">
          <div class="padding-title">{{ title.title }}</div>
          <div class="padding-describe">{{ title.describe }}</div>
        </div>
      </div>

      <div class="footer-detail">
        <BhJoin @onNextBlindOption="onNextLetFriendOption()"></BhJoin>
        <BhNothank @onHideMayBeLater="onHideMayBeLater"></BhNothank>
      </div>
    </div>
  </div>
</template>

<script>
import BhNothank from "../../bh-element-ui/button/bh-nothank";
import BhJoin from "../../bh-element-ui/button/bh-join";
import BhBack from "../../bh-element-ui/button/bh-back";
import { mapActions } from "vuex";
export default {
  components: {
    BhNothank,
    BhJoin,
    BhBack,
  },
  name: "photo-common",

  data() {
    return {};
  },

  computed: {
    isArabic() {
      return this.$i18n.locale === "ar"; // Điều chỉnh 'ar' cho ngôn ngữ Ả Rập
    },
    title() {
      const name = this.$route.params.screamName;
      switch (name) {
        case "letBeFriend":
          return {
            title: this.$t("let's_be_friend"),
            describe: this.$t("find_someone_that_wants_to_be_friends"),
            url: require("@/assets/image-dating/bg_let_be_friend.png"),
          };
        case "coffeeDate":
          return {
            title: this.$t("coffee_date"),
            describe: this.$t("find_someone_to_get_coffee_with"),
            url: require("@/assets/image-dating/bg_coffe_date.png"),
          };
        case "lookingLove":
          return {
            title: this.$t("looking_for_love"),
            describe: "Find someone that also looking for love as you",
            url: require("@/assets/image-dating/bg_looking_for_love.png"),
          };
        case "traveling":
          return {
            title: "Like traveling",
            describe: "Find someone who is also looking to travel like you",
            url: require("@/assets/image-dating/thich_du_lich.webp"),
          };
        case "loveMakeUp":
          return {
            title: "Love beautiful makeup",
            describe: "Find someone who is also looking to makeup like you",
            url: require("@/assets/image-dating/thich_lam_dep.webp"),
          };
        case "music":
          return {
            title: "Love music",
            describe: "Find someone who is also looking for music like you",
            url: require("@/assets/image-dating/thich_nghe_nhac.webp"),
          };
        case "sport":
          return {
            title: "Love sports",
            describe: "Find someone who is also looking for sports like you",
            url: require("@/assets/image-dating/thich_the_thao.webp"),
          };
        case "drink":
          return {
            title: "Like to drink",
            describe: "Find someone who is also looking for a drink like you",
            url: require("@/assets/image-dating/thich_di_nhau.webp"),
          };
        default:
          return "";
      }
    },
  },

  methods: {
    ...mapActions(["putJoinTopicExplore"]),
    onBackVerified() {
      this.$router.go(-1);
    },

    onHideMayBeLater() {
      this.$router.go(-1);
    },
    //

    async onNextLetFriendOption() {
      const name = this.$route.params.screamName;
      const topicId = this.$route.params.topicId;
      await this.putJoinTopicExplore(topicId);
      this.$router.push({
        path: `/common-friend/${name}/${topicId}`,
      });
    },
  },

  mounted() {},
};
</script>

<style lang="css">
.bg-verified-success {
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
