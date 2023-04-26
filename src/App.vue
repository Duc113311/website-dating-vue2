<template>
  <div id="app">
    <div
      class="tracking-wide layout-web w-full h-full absolute flex justify-center items-center"
    >
      <div
        class="layout-detail overflow-hidden relative"
        :class="`theme-${themeValue}`"
      >
        <div
          v-show="isShowIconApp"
          class="absolute z-40 img-app items-center flex w-full h-full justify-center"
        >
          <LoadApp
            :urlImage="icUrlApp"
            :codeColor="colorApp"
            :bgColor="bgColorApp"
          ></LoadApp>
        </div>

        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import LoadApp from "./components/layout/loading/load-app";
import { mapActions, mapMutations } from "vuex";
export default {
  components: {
    LoadApp,
  },
  name: "app-view",

  data() {
    return {
      isShowIconApp: true, // icon Loading

      icUrlApp: require("@/assets/icon/ic_icon_app.svg"),
      colorApp: "#FF828A",
      bgColorApp: "linear-gradient(#FE4E58,#FD757F)",
    };
  },

  computed: {
    /**
     * Đổi theme
     */
    themeValue() {
      return this.$store.state.commonModule.themeLayout;
    },
  },

  methods: {
    ...mapActions([
      "loginAppByAuthId",
      "getListLifeStyleStatic",
      "getListInformationBasic",
      "getListLifeStyleCommons",
    ]),
    ...mapMutations(["setLocation", "setThemeLayout"]),
    async showPosition(position) {
      if (position.coords) {
        localStorage.setItem("latitude", position.coords.latitude);
        localStorage.setItem("longitude", position.coords.longitude);
      }
    },
  },

  async created() {
    // Set time out show loading
    setTimeout(() => {
      this.isShowIconApp = false;
    }, 1000);
    // Lấy location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    }
    const oAuth2Id = localStorage.getItem("oAuth2Id");
    // Nếu tồn tại oAuth2Id in localStorage
    if (oAuth2Id) {
      await this.loginAppByAuthId({
        oAuth2Id: oAuth2Id,
      });
      // Check tokenId
      const tokenId = this.$store.state.mongoModule.tokenId;
      if (tokenId) {
        // Login success
        this.$router.push({ path: "/home" });
      } else {
        // Login false : account not exist
        this.$router.push({ name: "login-page" }).catch(() => {});
      }
    } else {
      // Login false : account not exist
      this.$router.push({ name: "login-page" }).catch(() => {});
    }
  },

  mounted() {
    const themeValue = localStorage.getItem("theme");
    if (themeValue) {
      this.setThemeLayout(themeValue);

      if (themeValue === "dark") {
        document.documentElement.setAttribute("theme", "dark");
      } else {
        document.documentElement.setAttribute("theme", "light");
      }
    } else {
      this.setThemeLayout("light");

      document.documentElement.setAttribute("theme", "light");
    }

    this.getListLifeStyleCommons();
    this.getListInformationBasic();
    this.getListLifeStyleStatic();
  },
};
</script>
<style lang="scss">
@import "@/assets/css/common.css";
@import "@/assets/css/txt-common.css";
@import "@/assets/css/color-text.css";
@import "@/assets/css/color-bg.css";

@import "@/assets/css/dark-them.scss";
@import "@/assets/css/light-theme.scss";
@import "@/assets/css/reponsive-scream.css";

@import "@/assets/css/bh-animations.css";
.img-app {
  opacity: 1;
}
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");

body {
  font-family: "Roboto", sans-serif;
  letter-spacing: 1.5px;

  position: fixed;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Roboto", sans-serif;
  position: fixed;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>
