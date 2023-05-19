import Vue from "vue";
import VueI18n from "vue-i18n";
import vnValue from "../locales/vn.json";
import enValue from "../locales/en.json";

Vue.use(VueI18n);

const messages = {
  en: enValue,
  vi: vnValue,
};
const storedLanguage = localStorage.getItem("language");

const i18n = new VueI18n({
  locale: storedLanguage || "en", // Ngôn ngữ mặc định
  messages,
});

export default i18n;
