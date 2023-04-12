import { http_mongo } from "../../configs/http-mongo";
import { http_ai } from "../../configs/http-ai";

const state = {
  isShowMyProfile: true,
  isNotShowProfie: true,
  listScreamShowMes: [],

  listLifeStyle: {},
  statusImageVerify: false,

  isVerified: true,
  valueNotDating: "", // Value not dating people
  valueDinnerGreat: "", // Value dinner great
};

const getters = {};

const mutations = {
  /**
   * Xet giá trị hiển th
   * @param {*} state
   * @param {*} data
   */
  setShowProfileCreate(state, data) {
    state.isNotShowProfie = data.isNotShowProfile;
    state.isShowMyProfile = data.isShowProfile;
  },

  setActionShowMe(state, data) {
    const index = state.listScreamShowMes.findIndex(
      (x) => x.scream === data.scream
    );

    if (index !== -1) {
      state.listScreamShowMes = state.listScreamShowMes.map((x) =>
        x.scream === data.scream ? data : x
      );
    } else {
      state.listScreamShowMes.push(data);
    }
  },

  /**
   * Xét giá trị cho life style khi đăng ký
   * @param {*} state
   * @param {*} data
   */
  setListLifeStyle(state, data) {
    state.listLifeStyle = data;
  },

  setVerifyImageRegister(state, value) {
    debugger;
    console.log(value);
    state.statusImageVerify = false;
  },

  /**
   * Xét giá trị tôi không thể hẹn hò
   * @param {*} state
   * @param {*} value
   */
  setValueNotDating(state, value) {
    state.valueNotDating = value;
  },

  /**
   * Xét giá trị bữa tối tuyệt vời
   * @param {*} state
   * @param {*} value
   */
  setValueDinnerGreat(state, value) {
    state.valueDinnerGreat = value;
  },
};

const actions = {
  /**
   * Lấy danh sách life style khi đăng ký : gender-sexual-interest-showMeGender
   * @param {*} param0
   */
  async getListLifeStyleForRegister({ commit }) {
    await http_mongo
      .get(`api/v1/guest/pre_selections`)
      .then((response) => {
        commit("setListLifeStyle", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  /**
   * Lấy danh sách life style khi đã đăng ký: màn update profile
   * @param {*} param0
   */
  async getListLifeStyle({ commit }) {
    await http_mongo
      .get(`api/v1/statics`)
      .then((response) => {
        commit("setListLifeStyle", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  /**
   * Verify Image
   * @param {*} param0
   * @param {*} param1
   */
  async verifyImageRegister({ commit }, formData) {
    debugger;
    await http_ai
      .post(`nhananh`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        debugger;
        commit("setVerifyImageRegister", response.data.data);
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
