import { http_request } from "../../configs/http-host";
import { http_mongo } from "../../configs/http-mongo";

const state = {
  nopeUser: {},
  backUser: {},
  likeForUser: {},
  statusMatch: false,

  isMatched: false, // Matchs

  isSupperLike: {
    isMatched: false,
    superLikeRemaining: 0,
    isFreeRuntime: false,
  },

  isLike: {
    isMatched: false,
    likeRemaining: 0,
    isFreeRuntime: true,
  },
  isBoost: {
    _id: "",
    customer: "",
    startTime: "",
    endTime: "",
    duration: 0,
    boostRemaining: 0,
    isFreeRuntime: true,
  },
  isBackUser: false,

  userMatchData: {},
};

const getters = {};

const mutations = {
  /**
   * Set giá trị cho Nope user
   * @param {*} state
   * @param {*} data
   */
  setNopeUserId(state, data) {
    state.nopeUser = data;
  },

  /**
   * Set giá trị cho Come back
   * @param {*} state
   * @param {*} data
   */
  setComeBackUserId(state, data) {
    state.backUser = data;
  },

  /**
   * Set giá trị cho like user
   * @param {*} state
   * @param {*} data
   */
  setLikeUserId(state, data) {
    state.likeForUser = data;

    if (data.isShowMatch) {
      state.statusMatch = data.isShowMatch;
    }
  },

  setStatusLikeUser(state, data) {
    state.statusMatch = data;
  },

  // Mongo

  setPostNopeUser(state, value) {
    state.isMatched = value.isMatched;
  },

  setPostLikeUser(state, value) {
    debugger;
    state.isLike = { ...state.isLike, ...value };
  },

  setPostBackUser(state, value) {
    if (value === 200) {
      state.isBackUser = true;
    } else {
      state.isBackUser = false;
    }
  },

  setPostSupperLikeUser(state, value) {
    state.isSupperLike = { ...state.isSupperLike, ...value };
  },

  setPostBoostUser(state, value) {
    state.isBoost = { ...state.isBoost, ...value };
  },

  setDataUserMatch(state, value) {
    state.userMatchData = value;
  },
};

const actions = {
  /**
   * API Nope
   * @param {*} param
   * @param {*} data : userId của người dùng
   */
  async patchNopeUserId({ commit }, data) {
    await http_request
      .patch(`home/v1/nope/${data.userId}`, data.objectCustomer)
      .then((response) => {
        commit("setNopeUserId", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  /**
   * Back user
   * @param {*} param0
   * @param {*} data
   */
  async patchComeBackUserId({ commit }, data) {
    await http_request
      .patch(`home/v1/come-back/${data.userId}`)
      .then((response) => {
        commit("setComeBackUserId", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  /**
   * API post like userId A to UserId B
   * @param {*} param0
   * @param {*} param1
   */
  async postLikeUserId({ commit }, data) {
    await http_request
      .post(`home/v1/likes/${data.userId}`, data.objectCustomer)
      .then((response) => {
        debugger;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  // Mongo
  /**
   * Nope user
   * @param {*} param0
   * @param {*} data
   */
  async postNopeUser({ commit }, data) {
    await http_mongo
      .post(`/api/v1/nope`, data)
      .then((response) => {
        commit("setPostNopeUser", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  /**
   * Like user
   * @param {*} param0
   * @param {*} data
   */
  async postLikeUser({ commit }, data) {
    await http_mongo
      .post(`/api/v1/like`, data)
      .then((response) => {
        debugger;
        commit("setPostLikeUser", response.data.data);
      })
      .catch((error) => {
        debugger;
        commit("setPostLikeUser", {
          isMatched: false,
          likeRemaining: 0,
          isFreeRuntime: false,
        });
        console.log(error);
      });
  },

  /**
   * Back user
   * @param {*} param0
   * @param {*} data
   */
  async postBackUser({ commit }, data) {
    await http_mongo
      .post(`/api/v1/back`, data)
      .then((response) => {
        commit("setPostBackUser", response.status);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  /**
   * Supper like
   * @param {*} param0
   * @param {*} data
   */
  async postSupperLikeUser({ commit }, data) {
    await http_mongo
      .post(`/api/v1/superLike`, data)
      .then((response) => {
        commit("setPostSupperLikeUser", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  /**
   * Boost user
   * @param {*} param0
   * @param {*} data
   */
  async postBoostUser({ commit }, data) {
    await http_mongo
      .post(`/api/v1/boost`, data)
      .then((response) => {
        commit("setPostBoostUser", response.data.data);
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
