import { http_request } from "../../configs/http-host";
import { http_mongo } from "../../configs/http-mongo";

const state = {
  user: [],
  tokenAccount: {},
  isExistUserId: false,
  deleteAccount: "",
};

const getters = {};

const actions = {
  async postTokenByUserID({ commit }, { id, providerId }) {
    await http_request
      .post("login/v1/create-token/" + id)
      .then((response) => {
        localStorage.setItem("userId", response.data.data.userId);
        localStorage.setItem("accessToken", response.data.data.accessToken);
        localStorage.setItem("refreshToken", response.data.data.refreshToken);
        localStorage.setItem("providerId", providerId);

        commit("setTokenAccount", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  async checkExistUserId({ commit }, userId) {
    await http_request
      .get(`login/v1/check-exist?userId=${userId}`)
      .then((response) => {
        commit("setExistUserId", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  async deleteAccountUser({ commit }, data) {
    await http_mongo
      .delete(`/api/v1/users/delete`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("tokenId")}` },
      })
      .then((response) => {
        commit("setDeleteAccountUser", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

const mutations = {
  setExistUserId(state, data) {
    state.isExistUserId = data;
  },
  /**
   * Set giá trị cho tokenAccount
   * @param {*} state
   * @param {*} token: userId, accessToken, refreshToken
   */
  setTokenAccount(state, token) {
    state.tokenAccount = token;
  },

  setDeleteAccountUser(state, data) {
    state.deleteAccount = data;
  },
};

export default {
  state,

  getters,

  actions,

  mutations,
};
