import Vue from "vue";
import VueI18n from "vue-i18n";
import vnValue from "../locales/vn.json";
import enValue from "../locales/en.json";
import jaValue from "../locales/ja.json";
import koValue from "../locales/ko.json";
import arValue from "../locales/ar.json";
Vue.use(VueI18n);

const messages = {
  en: enValue,
  vi: vnValue,
  ja: jaValue,
  ko: koValue,
  ar: arValue,
};
const storedLanguage = localStorage.getItem("language");
const languageTranslate = "en";
const i18n = new VueI18n({
  locale: storedLanguage || languageTranslate, // Ngôn ngữ mặc định
  messages,
});

export default i18n;
