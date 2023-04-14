<template>
  <div class="w-full flex items-center">
    <div class="w-full">
      <div class="w-full flex justify-between bh-title p-3">
        <div>I know language</div>
        <div v-if="completeLanguage">+3%</div>
      </div>
      <div class="w-full flex style-form">
        <div>
          <i class="fa-solid fa-language"></i>
        </div>
        <div class="flex justify-between w-full p-5">
          <div class="bh-item-title">{{ nameLanguage }}</div>
          <div @click="onShowPopupLanguage()">
            <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
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
      nameDefault: "Thêm ngon ngữ",
    };
  },

  computed: {
    /**
     * Binding ngôn ngữ
     */
    nameLanguage() {
      const languagesData =
        this.$store.state.userModule.user_profile?.profiles?.languages;

      return languagesData ? languagesData : this.nameDefault;
    },

    /**
     * Ẩn hiện complete
     */
    completeLanguage() {
      if (this.nameLanguage !== this.nameDefault) {
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
