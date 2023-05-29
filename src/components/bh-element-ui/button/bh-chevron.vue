<template>
  <i
    class="fa-solid bh-chevron-right cursor-pointer fa-chevron-right"
    v-bind:class="{ 'chevron-left': isArabic }"
  ></i>
</template>

<script>
export default {
  name: "bh-chevron",
  data() {
    return {};
  },

  computed: {
    isArabic() {
      debugger;
      return this.$i18n.locale === "ar"; // Điều chỉnh 'ar' cho ngôn ngữ Ả Rập
    },
  },
};
</script>

<style lang="css"></style>
