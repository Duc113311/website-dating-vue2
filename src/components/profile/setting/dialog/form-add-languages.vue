<template>
  <div class="w-full h-full">
    <div class="v-modal-bg w-full h-full" @click="onChangeCancel()"></div>
    <div class="w-full absolute top-28 flex justify-center p-5">
      <div
        class="rounded-lg items-center bg-default title-default w-full w-form-common overflow-hidden relative p-5 cursor-pointer"
      >
        <div class="w-full h-dialog-title justify-between flex items-center">
          <div @click="onChangeCancel()">
            <i class="fa-solid fa-xmark size-icon-default"></i>
          </div>
          <div class="title-packages">Add language</div>
          <div @click="onChangeSaveInterest()">
            <i class="fa-solid fa-check size-icon-default type-language"></i>
          </div>
        </div>

        <div class="w-full h-dialog-body height-scroll overflow-scroll">
          <div class="w-full items-center grid gap-2">
            <div
              v-for="(item, index) in languageParam"
              :key="index"
              :id="`language_` + item.code"
              class="w-full pt-2 pb-2 bor-top-bottom"
              @click="onChoseLanguages(item)"
            >
              <div class="text-lg">{{ item.value }}</div>
              <div class="text-base">Tiếng {{ item.value }}</div>
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
  name: "form-add-languages",

  data() {
    return {};
  },

  computed: {
    languageParam() {
      return this.$store.state.commonModule.listLifeStyleSingle.languages;
    },
  },

  methods: {
    ...mapMutations(["setValueLanguage"]),
    onChangeCancel() {
      this.$emit("onClickSaveLanguage", false);
    },

    onChangeSaveInterest() {
      this.$emit("onClickSaveLanguage", false);
    },

    onChoseLanguages(val) {
      this.setValueLanguage(val);
      this.$emit("onClickSaveLanguage", false);
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
