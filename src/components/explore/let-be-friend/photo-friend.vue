<template>
  <div
    class="w-full h-full relative bg-verified-success"
    :style="`background-image:url(${title.url})`"
  >
    <div class="w-full h-full p-5">
      <div class="w-full header-detail flex justify-center items-center">
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
  name: "photo-friend",

  data() {
    return {};
  },

  computed: {
    title() {
      const name = this.$route.query.name;
      debugger;
      switch (name) {
        case "letBeFriend":
          return {
            title: "Let's be friend",
            describe: "Find someone that wants to be friends",
            url: "http://localhost:6060/img/bg_let_be_friend.c2e165c1.png",
          };
        case "coffeeDate":
          return {
            title: "Coffee Date",
            describe: "Find someone to get coffee with",
            url: "http://localhost:6060/img/bg_coffe_date.7ae3e2ed.png",
          };
        case "lookingLove":
          return {
            title: "Looking for love",
            describe: "Find someone that also looking for love as you",
            url: "http://localhost:6060/img/bg_looking_for_love.0d344d24.png",
          };
        case "traveling":
          return {
            title: "Like traveling",
            describe: "Find someone who is also looking to travel like you",
            url: "http://localhost:6060/img/thich_du_lich.aeabdc3b.webp",
          };
        case "loveMakeUp":
          return {
            title: "Love beautiful makeup",
            describe: "Find someone who is also looking to makeup like you",
            url: "http://localhost:6060/img/thich_lam_dep.fb0ea8ca.webp",
          };
        case "music":
          return {
            title: "Love music",
            describe: "Find someone who is also looking for music like you",
            url: "http://localhost:6060/img/thich_nghe_nhac.dfbfa4d5.webp",
          };
        case "sport":
          return {
            title: "Love sports",
            describe: "Find someone who is also looking for sports like you",
            url: "http://localhost:6060/img/thich_the_thao.92c99a75.webp",
          };
        case "drink":
          return {
            title: "Like to drink",
            describe: "Find someone who is also looking for a drink like you",
            url: "http://localhost:6060/img/thich_di_nhau.164f7530.webp",
          };
        default:
          return "";
      }
    },
  },

  methods: {
    onBackVerified() {
      this.$router.go(-1);
    },
    //

    onNextLetFriendOption() {
      const name = this.$route.query.name;
      this.$router.push({
        path: "/user-friend",
        query: {
          name: name,
        },
      });
    },
  },

  mounted() {
    debugger;
  },
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
