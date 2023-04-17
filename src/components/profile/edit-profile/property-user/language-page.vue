<template>
  <div class="w-full flex items-center">
    <div class="w-full">
      <div class="w-full flex justify-between bh-title p-3">
        <div>I KNOW LANGUAGES</div>
        <div v-if="completeLanguage">+3%</div>
      </div>
      <div class="w-full bg-life flex justify-between items-center">
        <div class="w-6/12 bh-item-title flex items-center">
          <div class="ml-2">{{ nameLanguageParam }}</div>
        </div>
        <div class="flex w-6/12 justify-end">
          <div class="cursor-pointer" @click="onShowLanguage()">
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
      nameDefault: "Add language",
    };
  },

  computed: {
    /**
     * Binding ngôn ngữ
     */

    nameLanguageParam: {
      get() {
        const schoolData =
          this.$store.state.userModule.user_profile?.profiles?.school;
        debugger;
        return schoolData ? schoolData : this.nameDefault;
      },
      // setter
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        this.nameSchool = newValue;
      },
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
    onShowLanguage() {
      //
      this.$emit("onShowPopupLanguage", true);
    },
  },
};
</script>

<style lang="css"></style>
