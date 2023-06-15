import { http_mongo } from "../../configs/http-mongo";
import { http_ai } from "../../configs/http-ai";

const state = {
  isShowMyProfile: true,
  isNotShowProfie: true,

  isShowMyProfileVerified: false,
  isNotShowProfileVerified: false,
  listScreamShowMes: [],

  statusImageVerify: false,

  isVerified: true,
  valueNotDating: "", // Value not dating people
  valueDinnerGreat: "", // Value dinner great
  nameSchools: [],
  listLifeStyleRegister: [],
  listLifeStyleSingle: {}, // Lấy danh sách chung đơn lẻ
  listInformationBasic: {}, // Lấy danh sách các thông tin cơ bản
  listLifeStyleStatic: {}, // Lấy danh sách phong cách sống

  themeLayout: "light",
  statusLayout: false,

  listInterestFilter: [],

  languageTranslate: "en",
  languageTranslateValue: "EngLish",

  languageParam: [
    {
      code: "vi",
      value: "Vietnamese",
    },
    {
      code: "en",
      value: "English",
    },
    {
      code: "ar",
      value: "Arabic",
    },
    {
      code: "ca",
      value: "Catalan",
    },
    {
      code: "zh-rCN",
      value: "Chinese",
    },
    {
      code: "zh-rTW",
      value: "Taiwanese",
    },
    {
      code: "hr",
      value: "Croatian",
    },
    {
      code: "da",
      value: "Danish",
    },
    {
      code: "nl",
      value: "Dutch",
    },
    {
      code: "en-rGB",
      value: "English (UK)",
    },
    {
      code: "fi",
      value: "Finnish",
    },
    {
      code: "fr",
      value: "French",
    },
    {
      code: "de",
      value: "German",
    },
    {
      code: "el",
      value: "Greek",
    },
    {
      code: "hi",
      value: "Hindi",
    },
    {
      code: "hu",
      value: "Hungarian",
    },
    {
      code: "id",
      value: "Indonesian",
    },
    {
      code: "it",
      value: "Italian",
    },
    {
      code: "ja",
      value: "Japanese",
    },
    {
      code: "ko",
      value: "Korean",
    },
    {
      code: "ms",
      value: "Malay",
    },
    {
      code: "nb",
      value: "Norwegian Bokmal",
    },
    {
      code: "pl",
      value: "Polish",
    },
    {
      code: "pt",
      value: "Portuguese",
    },
    {
      code: "ro",
      value: "Romanian",
    },
    {
      code: "ru",
      value: "Russian",
    },
    {
      code: "sk",
      value: "Slovak",
    },
    {
      code: "es",
      value: "Spanish",
    },
    {
      code: "sv",
      value: "Swedish",
    },
    {
      code: "th",
      value: "Thai",
    },
    {
      code: "tr",
      value: "Turkish",
    },
    {
      code: "uk",
      value: "Ukrainian",
    },
  ],

  isShowInputMes: true,
  isHideConfirm: false,
  actionEditProfile: false,
};

const getters = {
  themeLayoutValue: (state) => {
    return state.statusLayout;
  },
};

const mutations = {
  setThemeLayout(state, value) {
    state.themeLayout = value.nameTheme;
    state.statusLayout = value.statusTheme;
  },

  setShowInputMes(state, value) {
    state.isShowInputMes = value;
  },

  setLogActionEditProfile(state, value) {
    debugger;
    state.actionEditProfile = value;
  },

  setHideConfirm(state, value) {
    state.isHideConfirm = value;
  },

  setLanguageTranslate(state, value) {
    state.languageTranslate = value;

    const findData = state.languageParam.find((x) => x.code === value);
    if (findData) {
      state.languageTranslateValue = findData.value;
    }
  },

  setListInterestFilter(state, data) {
    state.listInterestFilter = data;
  },
  /**
   * Xet giá trị hiển th
   * @param {*} state
   * @param {*} data
   */
  setShowProfileCreate(state, data) {
    state.isNotShowProfie = data.isNotShowProfile;
    state.isShowMyProfile = data.isShowProfile;
  },

  setShowProfileVerified(state, data) {
    state.isShowMyProfileVerified = data.isShowProfile;
    state.isNotShowProfileVerified = data.isNotShowProfile;
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
  setListLifeStyle(state, value) {
    state.listLifeStyleRegister = value;
  },
  /**
   * Xét giá trị danh sách riêng lẻ
   * @param {*} state
   * @param {*} data
   */
  setListLifeStyleSingle(state, data) {
    state.listLifeStyleSingle = data;
    for (let index = 0; index < data.schools.length; index++) {
      const element = data.schools[index];
      state.nameSchools.push({
        value: element,
        id: element,
      });
    }
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
const language = state.languageTranslate; // Lấy giá trị ngôn ngữ từ localStorage

const actions = {
  /**
   * Lấy danh sách life style khi đăng ký : gender-sexual-interest-showMeGender
   * @param {*} param0
   */
  async getListLifeStyleForRegister({ commit }) {
    await http_mongo
      .get(`api/v1/guest/statics`)
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
      .get(`api/v1/statics/commons`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("tokenId")}`,
        },
      })
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
      .get(`api/v1/statics/basics`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("tokenId")}` },
      })
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
      .get(`api/v1/statics/life-styles`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("tokenId")}` },
      })
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
    await http_ai
      .post(`nhananh`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        commit("setVerifyImageRegister", response.data.data);
      })
      .catch((error) => {
        console.log("Lỗi", error);
        commit("setVerifyImageRegister", true);
      });
  },
};
export default {
  state,

  getters,

  actions,

  mutations,
};
