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
                <div class="bh-describe mr-2">English</div>
                <div class="cursor-pointer">
                  <i
                    class="fa-solid bh-chevron-right cursor-pointer fa-chevron-right"
                  ></i>
                </div>
              </div>
            </div>
            <div class="bh-describe">
              {{ $t("chose_the_language_you_want_to_display") }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-full h-full absolute top-0 left-0 bg z-50"
      v-if="isShowLanguage"
    >
      <FormShowLanguages
        @onClickSaveLanguage="onClickSaveLanguage"
      ></FormShowLanguages>
    </div>
  </div>
</template>

<script>
import FormShowLanguages from "../dialog/form-show-languages";
export default {
  components: { FormShowLanguages },
  name: "show-language",

  data() {
    return {
      isShowLanguage: false,
    };
  },

  computed: {},

  methods: {
    onShowChoseLanguage() {
      debugger;
      this.isShowLanguage = true;
    },

    onClickSaveLanguage(val) {
      debugger;
      this.isShowLanguage = val;
    },
  },

  mounted() {},
};
</script>

<style lang="css"></style>
