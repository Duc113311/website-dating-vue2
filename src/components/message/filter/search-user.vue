<template>
  <div class="w-full pt-6 pl-6 pr-6 h-full">
    <div v-if="resultSearch.length !== 0" class="w-full h-full">
      <div
        class="item-avatar w-full flex items-center text-center mr-6 mb-6"
        v-for="(item, index) in resultSearch"
        :key="index"
      >
        <div
          class="image-detail-avatars relative"
          :style="{
            'background-image': `url(${item.profiles.avatars[0]})`,
          }"
        >
          <div class="absolute bottom-0 right-0.5" v-if="item.onlineNow">
            <BhActivateLike></BhActivateLike>
          </div>
        </div>
        <div class="mt-3 ml-3 flex items-center">
          <div>{{ item.fullname }}</div>
          <img
            v-if="item.verifyStatus"
            src="../../../assets/icon//ic_verified_enable.svg"
          />
        </div>
      </div>
    </div>
    <div v-if="resultSearch.length === 0" class="h-full w-full">
      <div class="flex justify-center items-center h-full w-full">
        <div>
          <img src="../../../assets/icon/art_meet_people.svg" alt="" />
          <div class="w-full text-center">No user</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BhActivateLike from "../../bh-element-ui/button/bh-activateLike";
// import BhBack from "../../bh-element-ui/button/bh-back";
export default {
  components: {
    BhActivateLike,
    // BhBack,
  },
  name: "search-user",

  props: ["listSearched"],

  data() {
    return {
      nameSearch: "",
    };
  },

  computed: {
    resultSearch() {
      debugger;
      return this.listSearched;
    },
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.back-ground {
  background-color: #495063;
}

.image-detail-avatars {
  background-position: center;
  background-size: cover;
  border-radius: 53px;
  width: 55px;
  height: 55px;
}
</style>
