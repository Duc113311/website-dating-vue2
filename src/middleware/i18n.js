import Vue from "vue";
import VueI18n from "vue-i18n";
import vnValue from "../locales/vi.json";
import enValue from "../locales/en.json";
import jaValue from "../locales/ja.json";
import koValue from "../locales/ko.json";
import arValue from "../locales/ar.json";
import caValue from "../locales/ca.json";
import daValue from "../locales/da.json";
import elValue from "../locales/el.json";
import enrGBValue from "../locales/en-rGB.json";
import esValue from "../locales/es.json";
import fiValue from "../locales/fi.json";
import frValue from "../locales/fr.json";
import hiValue from "../locales/hi.json";
import hrValue from "../locales/hr.json";
import huValue from "../locales/hu.json";
import idValue from "../locales/id.json";
import itValue from "../locales/it.json";
import msValue from "../locales/ms.json";
import nbValue from "../locales/nb.json";
import nlValue from "../locales/nl.json";
import plValue from "../locales/pl.json";
import ptValue from "../locales/pt.json";
import roValue from "../locales/ro.json";
import ruValue from "../locales/ru.json";
import skValue from "../locales/sk.json";
import thValue from "../locales/th.json";
import trValue from "../locales/tr.json";
import ukValue from "../locales/uk.json";
import zhrCNValue from "../locales/zh-rCN.json";
import zhrTWValue from "../locales/zh-rTW.json";
Vue.use(VueI18n);

const messages = {
  en: enValue,
  vi: vnValue,
  ja: jaValue,
  ko: koValue,
  ar: arValue,
  ca: caValue,
  da: daValue,
  "en-rGB": enrGBValue,
  el: elValue,
  es: esValue,
  fi: fiValue,
  fr: frValue,
  hi: hiValue,
  hr: hrValue,
  hu: huValue,
  id: idValue,
  it: itValue,
  ms: msValue,
  nb: nbValue,
  nl: nlValue,
  pl: plValue,
  pt: ptValue,
  ro: roValue,
  ru: ruValue,
  sk: skValue,
  th: thValue,
  tr: trValue,
  uk: ukValue,
  "zh-rCN": zhrCNValue,
  "zh-rTW": zhrTWValue,
};
const storedLanguage = localStorage.getItem("language");
const languageTranslate = "ar";
const i18n = new VueI18n({
  locale: storedLanguage || languageTranslate, // Ngôn ngữ mặc định
  messages,
});

export default i18n;
