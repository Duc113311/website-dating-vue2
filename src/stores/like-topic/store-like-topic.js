import { http_mongo } from "../../configs/http-mongo";

const state = {
  listLikeForYous: [],
};

const getters = {};

const mutations = {
  setListDataLikedForYou(state, data) {
    state.listLikeForYous = data;
  },
};

const actions = {
  async getListDataLikedForYou({ commit }, data) {
    await http_mongo
      .get(
        `api/v1/list-action-you?pageSize=${data.pageSize}&currentPage=${data.currentPage}&action=${data.action}`
      )
      .then((response) => {
        commit("setListDataLikedForYou", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
export default {
  state,

  getters,

  actions,

  mutations,
};
