import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    hello_name: "Languages",
    welcome: "Welcome to my app.",
  },
  vi: {
    hello_name: "Ngôn ngữ",
    welcome: "Chào mừng bạn đến với ứng dụng của tôi.",
  },
};
const storedLanguage = localStorage.getItem("language");

const i18n = new VueI18n({
  locale: storedLanguage || "en", // Ngôn ngữ mặc định
  messages,
});

export default i18n;
