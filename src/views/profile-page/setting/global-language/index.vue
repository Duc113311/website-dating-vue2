<template>
  <div class="w-full h-full relative title-default">
    <div class="w-full h-full">
      <!-- Header -->
      <div
        class="w-full header-detail flex justify-center items-center border-bottom"
      >
        <div class="w-full flex justify-center items-center pl-2 pr-2">
          <div class="flex">
            <BhBack @onBackComponent="onBackSettingPhone()"></BhBack>
          </div>
          <div class="text-center w-header text-xl">Preferred language</div>
        </div>
      </div>

      <!-- Body -->
      <div
        class="body-detail height-scroll overflow-scroll w-full pl-5 pr-5 mt-4"
      >
        <div class="w-full">
          <div class="bh-item-title title-item pl-1">Language</div>
          <div class="w-full h-search mt-2 bg-default form-set-list">
            <div class="w-full">
              <div v-if="languageChecked.length !== 0">
                <div
                  v-for="(item, index) in languageChecked"
                  :key="index"
                  class="w-full border-bottom flex items-center justify-between form-set-item title-input-item bh-item-title"
                >
                  <div>
                    {{ item.value }}
                  </div>
                  <div class="cursor-pointer" @click="onDeleteLanguage(item)">
                    <span>Xóa</span>
                  </div>
                </div>
              </div>
              <div v-else>Not data</div>
              <div>
                <div
                  class="bh-text-location form-set-item w-full cursor-pointer"
                  @click="onClickAddLanguage"
                >
                  Add language...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="w-full h-full absolute top-0 left-0 bg z-50"
        v-if="isShowLanguages"
      >
        <FormAddLanguages
          @onClickSaveLanguage="onClickSaveLanguage"
        ></FormAddLanguages>
      </div>

      <div class="w-full">
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import FormAddLanguages from "../../../../components/profile/setting/dialog/form-add-languages";
import BhBack from "../../../../components/bh-element-ui/button/bh-back";

import Footer from "../../../../components/layout/footer-home/footer";
import { mapMutations } from "vuex";

export default {
  components: {
    FormAddLanguages,
    BhBack,
    Footer,
  },
  name: "global-language-page",
  data() {
    return {
      isShowLanguages: false,
      languageSingle:
        this.$store.state.commonModule.listLifeStyleSingle.languages,
    };
  },

  computed: {
    languageChecked() {
      const language =
        this.$store.state.userModule.user_profile.settings.global.languages;

      let resultData = [];
      for (let index = 0; index < language.length; index++) {
        const element = language[index];

        const findData = this.languageSingle.find((x) => x.code === element);
        if (findData) {
          resultData.push(findData);
        }
      }
      return resultData;
    },
  },

  methods: {
    ...mapMutations(["setShowGlobal", "setValueLanguage"]),

    onBackSettingPhone() {
      this.$router.go(-1);
    },

    onClickAddLanguage() {
      this.isShowLanguages = true;
    },

    onClickSaveLanguage(val) {
      this.isShowLanguages = val;
    },
    /**
     * Delete item language
     * @param {*} val
     */
    onDeleteLanguage(val) {
      const objectLanguage = {
        language: val,
        action: false,
      };
      this.setValueLanguage(objectLanguage);
    },
  },
};
</script>

<style lang="css">
.w-header {
  width: 90%;
}
</style>
