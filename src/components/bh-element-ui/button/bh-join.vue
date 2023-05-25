<template>
  <div class="flex justify-center w-full pl-10 pr-10 items-center">
    <button
      @click="onClickJoinNow"
      class="btContinueCode cursor-pointer w-full padding-button active-button overflow-hidden"
      ref="joinNow"
    >
      {{ $t("join_now") }}
    </button>
  </div>
</template>

<script>
export default {
  name: "join-now",
  data() {
    return {};
  },

  methods: {
    onClickJoinNow() {
      this.$emit("onNextBlindOption", true);
    },
  },
};
</script>

<style lang="css">
.color-bt {
  background-color: #fd5d65;
  height: 60px;
  border-radius: 12px !important;
  font-size: 22px !important;
}
</style>
