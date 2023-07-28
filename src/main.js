import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "intl-tel-input/build/css/intlTelInput.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import VueCarousel from "vue-carousel";
import Vue2TouchEvents from "vue2-touch-events";
import VueCropper from "vue-cropperjs";
import i18n from "./middleware/i18n.js";
import "./enum/enumIndex";
import "./assets/scss/colors.scss";
import VueI18n from "vue-i18n";
/* import specific icons */

/* add icons to the library */

import store from "./stores/store-data";
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueCarousel);
Vue.use(Vue2TouchEvents);
Vue.use(VueCropper);
Vue.use(VueI18n);

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
