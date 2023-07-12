<template>
  <div
    class="text-xl w-full h-10 flex items-center justify-between cursor-pointer"
  >
    <div
      @click="onClickBack()"
      class="cursor-pointer"
      v-bind:class="{ 'chevron-left': isArabic }"
    >
      <div v-if="routerExplore">
        <img src="@/assets/icon/ic_back_dark.svg" width="24" alt="" />
      </div>
      <div v-else>
        <img
          src="@/assets/icon/ic_back_dark.svg"
          width="24"
          alt=""
          v-if="colorBt"
        />
        <img src="@/assets/icon/ic_back_light.svg" width="24" alt="" v-else />
      </div>
    </div>
    <div class="font-skip" v-show="isShowSkipParam" @click="onClickSkip()">
      {{ $t("skip") }}
    </div>
  </div>
</template>

<script>
export default {
  name: "bt-back",

  props: ["isShowSkip"],
  data() {
    return {};
  },

  computed: {
    isShowSkipParam() {
      return this.isShowSkip;
    },
    isArabic() {
      return this.$i18n.locale === "ar"; // Điều chỉnh 'ar' cho ngôn ngữ Ả Rập
    },
    colorBt() {
      return this.$store.state.commonModule.statusLayout;
    },

    routerExplore() {
      const nameRouter = this.$route.name;
      if (
        nameRouter === "photo-explore-page" ||
        nameRouter === "users-explore-page"
      ) {
        return true;
      }
      return false;
    },
  },

  methods: {
    /**
     * Quay lại trang trước
     */
    onClickBack() {
      this.$emit("onBackComponent", true);
    },

    onClickSkip() {
      this.$emit("onClickSkip", true);
    },
  },

  mounted() {
    debugger;
  },
};
</script>

<style lang="css">
.size-icon {
  font-size: 28px;
}

.font-skip {
  color: #f85e68;
  font-size: 22px;
  font-weight: 600;
}
</style>
