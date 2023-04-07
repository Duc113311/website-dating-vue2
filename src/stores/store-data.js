import Vue from "vue";
import Vuex from "vuex";

import loginModule from "./login/store-login";
import userModule from "./user-profile/store-user";
import commonModule from "./common/store-common";

import likeTopicModule from "./like-topic/store-like-topic";
import messageModule from "./message/store-message";
import homeModule from "./home/store-home";

import mongoModule from "./mongo/store-mongo";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},

  mutations: {},

  actions: {},

  modules: {
    loginModule,
    userModule,
    commonModule,
    likeTopicModule,
    messageModule,
    homeModule,
    mongoModule,
  },
});
