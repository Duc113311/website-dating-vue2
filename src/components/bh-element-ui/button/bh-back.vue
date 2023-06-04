<template>
  <div
    class="text-xl w-full h-10 flex items-center justify-between cursor-pointer"
  >
    <div @click="onClickBack()" class="cursor-pointer">
      <img
        src="@/assets/icon/ic_back_dark.svg"
        width="30"
        alt=""
        v-if="colorBt"
      />
      <img src="@/assets/icon/ic_back_light.svg" width="30" alt="" v-else />
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

    colorBt() {
      return this.$store.state.commonModule.statusLayout;
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
