import { http_mongo } from "../../configs/http-mongo";
import { http_ai } from "../../configs/http-ai";

const state = {
  isShowMyProfile: true,
  isNotShowProfie: true,
  listScreamShowMes: [],

  statusImageVerify: false,

  isVerified: true,
  valueNotDating: "", // Value not dating people
  valueDinnerGreat: "", // Value dinner great

  listLifeStyleSingle: {}, // Lấy danh sách chung đơn lẻ
  listInformationBasic: {}, // Lấy danh sách các thông tin cơ bản
  listLifeStyleStatic: {}, // Lấy danh sách phong cách sống
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
   * Xét giá trị danh sách riêng lẻ
   * @param {*} state
   * @param {*} data
   */
  setListLifeStyleSingle(state, data) {
    state.listLifeStyleSingle = data;
  },

  /**
   * Xét giá trị danh sách thông tin cơ bản
   * @param {*} state
   * @param {*} data
   */
  setListInformationBasic(state, data) {
    state.listInformationBasic = data;
  },

  /**
   * Xét giá trị danh sách phong cách sống
   * @param {*} state
   * @param {*} data
   */
  setListLifeStyleStatic(state, data) {
    state.listLifeStyleStatic = data;
  },

  setVerifyImageRegister(state, value) {
    debugger;
    console.log(value);
    state.statusImageVerify = value;
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
   * Lấy danh sách các danh mục setting đơn lẻ: ngôn ngữ, interest,...
   * @param {*} param0
   */
  async getListLifeStyleCommons({ commit }) {
    await http_mongo
      .get(`api/v1/statics/commons`)
      .then((response) => {
        commit("setListLifeStyleSingle", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  /**
   * Lấy danh sách các danh mục update profile:thông tin cơ bản
   * @param {*} param0
   */
  async getListInformationBasic({ commit }) {
    await http_mongo
      .get(`api/v1/statics/basics`)
      .then((response) => {
        commit("setListInformationBasic", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  /**
   * Lấy danh sách các danh mục update profile: phong cách sống
   * @param {*} param0
   */
  async getListLifeStyleStatic({ commit }) {
    await http_mongo
      .get(`api/v1/statics/life-styles`)
      .then((response) => {
        commit("setListLifeStyleStatic", response.data.data);
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
