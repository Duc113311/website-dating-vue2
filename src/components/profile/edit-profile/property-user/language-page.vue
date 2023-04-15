<template>
  <div class="w-full flex items-center">
    <div class="w-full">
      <div class="w-full flex justify-between bh-title p-3">
        <div>I know language</div>
        <div v-if="completeLanguage">+3%</div>
      </div>
      <div class="w-full bg-life flex justify-between items-center">
        <div class="w-6/12 bh-item-title flex items-center">
          <i class="fa-solid fa-language"></i>
          <div class="ml-2">{{ nameLanguage }}</div>
        </div>
        <div class="flex w-6/12 justify-end">
          <div class="cursor-pointer" @click="onShowPurposes()">
            <i
              class="fa-solid bh-chevron-right cursor-pointer fa-chevron-right"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "language-page",
  data() {
    return {
      nameDefault: "Thêm ngôn ngữ",
    };
  },

  computed: {
    /**
     * Binding ngôn ngữ
     */
    nameLanguage() {
      debugger;
      const languagesData =
        this.$store.state.userModule.user_profile?.profiles?.language;

      return languagesData ? languagesData : this.nameDefault;
    },

    /**
     * Ẩn hiện complete
     */
    completeLanguage() {
      if (this.nameLanguage !== "Thêm ngôn ngữ") {
        return false;
      }
      return true;
    },
  },

  methods: {
    /**
     * Xử lý sự kiện show language
     */
    onShowPopupLanguage() {
      //
    },
  },
};
</script>

<style lang="css"></style>
