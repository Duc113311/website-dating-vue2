<template>
  <div
    class="flex header-page border-bottom justify-center content-center items-center text-red-400 title-logo"
  >
    <div class="flex items-center cursor-pointer">
      <img src="@/assets/icon/ic_icon_app.svg" class="size-hight mr-3" alt="" />
      <span class="text-2xl font-semibold">HeartLink</span>
    </div>
    <div class="absolute right-0 mr-6" v-if="isShowSafetyParam">
      <img
        width="35"
        class="cursor-pointer"
        src="../../../assets//icon//ic_safety.svg"
        @click="onClickSafety()"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "header-page",

  props: ["isShowSafety"],
  setup() {
    return;
  },

  data() {
    return {};
  },

  computed: {
    isShowSafetyParam() {
      return this.isShowSafety;
    },
  },

  methods: {
    onClickSafety() {
      debugger;
      this.$emit("onChangeSafety", true);
    },
  },
};
</script>

<style lang="css">
.header-page {
  height: 10%;
}
</style>
