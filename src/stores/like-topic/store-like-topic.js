import { http_mongo } from "../../configs/http-mongo";
import functionValidate from "../../middleware/validate.js";

const state = {
  listLikeForYous: [],
  listLikeYouAction: [],
};

const getters = {};

const mutations = {
  setListDataLikedForYou(state, data) {
    debugger;
    state.listLikeForYous = data.list_data;
  },

  setListDataLikeYouAction(state, data) {
    debugger;
    state.listLikeYouAction = data.list_data;
  },

  setListUserLikeFilter(state, data) {
    debugger;
    let userFilter = [];
    const ageMin = data.valueAge[0];
    const ageMax = data.valueAge[1];
    const photo = data.valuePhoto;
    const interests = data.valueInterests;
    // Filter age
    for (let index = 0; index < state.listLikeForYous.length; index++) {
      const element = state.listLikeForYous[index];

      const ageUser = functionValidate.calculatAge(element.dob);

      if (ageUser >= ageMin && ageMin <= ageMax) {
        state.userFilter.push(element);
      }

      const commonInterest = interests.filter((value) =>
        element.profiles.interests.includes(value)
      );

      if (commonInterest.length !== 0) {
        state.userFilter.push(element);
      }
    }

    // Filter photo
    const dataPhoto = state.listLikeForYous.find(
      (x) => x.profiles.avatars.length <= photo
    );
    if (dataPhoto) {
      state.userFilter.push(dataPhoto);
    }
    // Interest
  },
};

const actions = {
  async getListDataLikedForYou({ commit }, data) {
    await http_mongo
      .get(
        `api/v1/list-action-you?pageSize=${data.pageSize}&currentPage=${data.currentPage}&action=${data.action}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("tokenId")}`,
          },
        }
      )
      .then((response) => {
        commit("setListDataLikedForYou", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  async getListDataLikeYouAction({ commit }, data) {
    await http_mongo
      .get(
        `api/v1/list-you-action?pageSize=${data.pageSize}&currentPage=${data.currentPage}&action=${data.action}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("tokenId")}`,
          },
        }
      )
      .then((response) => {
        commit("setListDataLikeYouAction", response.data.data);
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
