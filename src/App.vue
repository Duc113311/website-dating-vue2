<template>
  <div id="app">
    <div
      class="tracking-wide layout-web w-full h-full absolute flex justify-center items-center"
    >
      <div
        v-if="screamValue === 1"
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

      <!-- <ScreenSizePage
        :class="`theme-${themeValue}`"
        v-if="screamValue === 0"
      ></ScreenSizePage> -->

      <div v-if="screamValue === 2">
        <ScreenSize></ScreenSize>
      </div>
    </div>
  </div>
</template>

<script>
// import ScreenSizePage from "./components/layout/screen-laptop/screen-size-page";
import ScreenSize from "./components/layout/error-screen/screen-size";
import LoadApp from "./components/layout/loading/load-app";
import { mapActions, mapMutations } from "vuex";
import { smallScreen } from "../src/enum/type/deviceType.js";
export default {
  components: {
    ScreenSize,
    LoadApp,
    // ScreenSizePage,
  },
  name: "app-view",

  data() {
    return {
      screamValue: 1,

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
    ...mapActions(["loginAppByAuthId"]),
    ...mapMutations(["setLocation", "setThemeLayout", "setLanguageTranslate"]),
    async showPosition(position) {
      if (position.coords) {
        localStorage.setItem("latitude", position.coords.latitude);
        localStorage.setItem("longitude", position.coords.longitude);
      }
    },

    handleResize() {
      debugger;
      if (
        768 <= parseInt(window.innerWidth) &&
        parseInt(window.innerWidth) <= 2560 &&
        parseInt(window.innerHeight) >= 600
      ) {
        this.screamValue = smallScreen.screenPhone;
      } else if (
        parseInt(window.innerWidth) <= 900 &&
        parseInt(window.innerHeight) >= 600
      ) {
        this.screamValue = smallScreen.screenPhone;
      } else {
        this.screamValue = smallScreen.screenDefault;
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  async created() {
    const language = localStorage.getItem("language");
    if (language) {
      this.$i18n.locale = language;
      await this.setLanguageTranslate(language);
    } else {
      const languageDefault = "en";
      this.$i18n.locale = languageDefault;
      await this.setLanguageTranslate(languageDefault);
    }
    debugger;
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
        const control = localStorage.control;
        if (control === "show") {
          this.$router.push({ path: "/control" }).catch(() => {});
        } else {
          this.$router.push({ path: "/home" }).catch(() => {});
        }
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
    window.addEventListener("resize", this.handleResize);
    const themeValue = localStorage.getItem("theme");
    if (themeValue) {
      if (themeValue === "dark") {
        document.documentElement.setAttribute("theme", "dark");
        this.setThemeLayout({ nameTheme: "dark", statusTheme: true });
      } else {
        document.documentElement.setAttribute("theme", "light");
        this.setThemeLayout({ nameTheme: "light", statusTheme: false });
      }
    } else {
      this.setThemeLayout({ nameTheme: "light", statusTheme: false });

      document.documentElement.setAttribute("theme", "light");
    }
  },
};
</script>
<style lang="scss">
@import "@/assets/css/common.scss";
@import "@/assets/css/txt-common.scss";
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
