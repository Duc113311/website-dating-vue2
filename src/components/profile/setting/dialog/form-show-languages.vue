<template>
  <div class="w-full h-full">
    <div class="v-modal-bg w-full h-full" @click="onChangeCancel()"></div>
    <div class="w-full absolute top-28 flex justify-center p-5">
      <div
        class="rounded-lg items-center bg-default title-default w-full w-form-common overflow-hidden relative p-5 cursor-pointer"
      >
        <div class="w-full h-dialog-title justify-between flex items-center">
          <div class="title-packages">{{ $t("language") }}</div>
        </div>

        <div class="w-full h-dialog-body height-scroll overflow-scroll">
          <div class="w-full items-center grid">
            <div
              v-for="(item, index) in languageParam"
              :key="index"
              :id="`language_` + item.code"
              class="w-full pt-2 pb-2 border-bottom"
              @click="onChoseLanguages(item.code)"
            >
              <div class="text-base">{{ item.value }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "form-show-languages",

  data() {
    return {};
  },

  computed: {
    languageParam() {
      return [
        {
          code: "vi",
          value: "Vietnamese",
        },
        {
          code: "en",
          value: "English",
        },
        {
          code: "ar",
          value: "Arabic",
        },
        {
          code: "ca",
          value: "Catalan",
        },
        {
          code: "zh-rCN",
          value: "Chinese",
        },
        {
          code: "zh-rTW",
          value: "Taiwanese",
        },
        {
          code: "hr",
          value: "Croatian",
        },
        {
          code: "da",
          value: "Danish",
        },
        {
          code: "nl",
          value: "Dutch",
        },
        {
          code: "en-rGB",
          value: "English (UK)",
        },
        {
          code: "fi",
          value: "Finnish",
        },
        {
          code: "fr",
          value: "French",
        },
        {
          code: "de",
          value: "German",
        },
        {
          code: "el",
          value: "Greek",
        },
        {
          code: "hi",
          value: "Hindi",
        },
        {
          code: "hu",
          value: "Hungarian",
        },
        {
          code: "id",
          value: "Indonesian",
        },
        {
          code: "it",
          value: "Italian",
        },
        {
          code: "ja",
          value: "Japanese",
        },
        {
          code: "ko",
          value: "Korean",
        },
        {
          code: "ms",
          value: "Malay",
        },
        {
          code: "nb",
          value: "Norwegian Bokmal",
        },
        {
          code: "pl",
          value: "Polish",
        },
        {
          code: "pt",
          value: "Portuguese",
        },
        {
          code: "ro",
          value: "Romanian",
        },
        {
          code: "ru",
          value: "Russian",
        },
        {
          code: "sk",
          value: "Slovak",
        },
        {
          code: "es",
          value: "Spanish",
        },
        {
          code: "sv",
          value: "Swedish",
        },
        {
          code: "th",
          value: "Thai",
        },
        {
          code: "tr",
          value: "Turkish",
        },
        {
          code: "uk",
          value: "Ukrainian",
        },
      ];
    },
  },

  methods: {
    ...mapMutations(["setLanguageTranslate"]),
    onChangeCancel() {
      this.$emit("onClickSaveLanguage", false);
    },

    onChangeSaveInterest() {
      this.$emit("onClickSaveLanguage", false);
    },

    onChoseLanguages(val) {
      debugger;
      this.$i18n.locale = val;
      this.setLanguageTranslate(val);
      localStorage.setItem("language", val);

      // this.$emit("onClickSaveLanguage", false);
    },
  },
};
</script>
<style lang="css">
.list-interest {
  height: calc(100% - 28%);
}

.h-dialog-title {
  height: 10%;
}
.h-dialog-body {
  height: calc(100% - 10%);
}

.w-form-common {
  height: 40rem;
}
.bg-active {
  border: 1.5px solid #f65a62 !important;
  color: #f65a62;
}
.el-input-group__append {
  background: none !important;
  width: 30px;
  border: none !important;
  padding: 0 !important;
  border-radius: 0 !important;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-right: 10px;
}
</style>
