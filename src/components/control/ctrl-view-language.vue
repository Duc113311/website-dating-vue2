<template>
  <div class="w-full flex items-center mt-6">
    <div class="w-full form-set-list bg-default">
      <div class="w-full flex items-center">
        <div class="w-full">
          <div class="w-full">
            <div
              @click="onShowChoseLanguage"
              class="w-full form-set-item flex justify-between items-center"
            >
              <div class="bh-item-title w-6/12">{{ $t("language") }}</div>
              <div class="flex w-6/12 justify-end items-center cursor-pointer">
                <div class="bh-describe mr-2 ml-2">{{ bingLanguage }}</div>
                <div class="cursor-pointer">
                  <bh-chevron></bh-chevron>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BhChevron from "@/components/bh-element-ui/button/bh-chevron.vue";
export default {
  components: { BhChevron },
  name: "ctrl-view-language",

  data() {
    return {
      isShowLanguage: false,
    };
  },

  computed: {
    bingLanguage() {
      return this.$store.state.commonModule.languageTranslateValue;
    },
  },

  methods: {
    onShowChoseLanguage() {
      this.isShowLanguage = true;
    },

    onClickSaveLanguage(val) {
      this.isShowLanguage = val;
    },
  },

  mounted() {},
};
</script>

<style lang="css"></style>
