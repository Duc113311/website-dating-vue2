<template>
  <div class="flex justify-center w-full pl-10 pr-10 items-center mt-1">
    <button
      class="color-bt-cancel cursor-pointer w-full padding-button overflow-hidden"
      @click="onClickNoThanks()"
    >
      {{ $t("no_thanks") }}
    </button>
  </div>
</template>

<script>
export default {
  name: "bh-nothank",

  props: ["nameTitle"],

  data() {
    return {};
  },

  computed: {
    renderName() {
      return this.nameTitle;
    },
  },

  methods: {
    onClickNoThanks() {
      this.$emit("onHideMayBeLater", false);
    },
  },
};
</script>

<style lang="css">
.color-bt-cancel:hover {
  background-color: rgb(18, 15, 29);
}
</style>
