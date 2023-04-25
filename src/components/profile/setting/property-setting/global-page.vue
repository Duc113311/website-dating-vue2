<template>
  <div class="w-full">
    <div class="w-full flex justify-center items-center">
      <div class="w-full">
        <div
          class="w-full style-switch form-set-input flex justify-between bg-default"
        >
          <div class="name bh-item-title title-item">Global</div>

          <div class="mr-1">
            <el-switch
              v-model="valueGlobal"
              active-color="#FB5D65"
              inactive-color="#5F6A86"
              @change="onChangeGlobal()"
            >
            </el-switch>
          </div>
        </div>
        <div class="w-full p-3 bh-describe">
          You can meet people nearby and from around the world
        </div>
      </div>
    </div>

    <div v-show="valueGlobal" class="w-full form-set-list">
      <div class="w-full bh-title title-item form-set-item">
        PREFERRED LANGUAGES
      </div>
      <div class="w-full">
        <div>
          <div
            v-for="(item, index) in languageChecked"
            :key="index"
            class="w-full form-set-item bd-input title-input-item bh-item-title"
          >
            {{ item }}
          </div>
        </div>
        <div>
          <div
            :disabled="isDisabled"
            class="bh-text-location form-set-item w-full cursor-pointer"
            @click="onClickAddLanguage"
          >
            Add language...
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
  </div>
</template>

<script>
import FormAddLanguages from "../dialog/form-add-languages";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: { FormAddLanguages },
  name: "global-page",

  data() {
    return {
      isShowLanguages: false,
      isDisabled: false,
    };
  },

  computed: {
    ...mapGetters({
      nameGlobal: "showGlobal",
    }),

    languageChecked() {
      const language = this.$store.state.userModule.languageChecked;

      return language;
    },

    valueGlobal: {
      get() {
        const global = this.nameGlobal;

        return global;
      },
      set(newName) {
        return newName;
      },
    },
  },

  methods: {
    ...mapMutations(["setShowGlobal"]),

    onChangeGlobal() {
      const global = this.$store.state.userModule.user_profile.settings.global;
      if (global) {
        this.setShowGlobal(false);
      } else {
        this.setShowGlobal(true);
      }
    },

    onClickAddLanguage() {
      this.isShowLanguages = true;
    },

    onChangeCancel() {},

    onChangeSaveInterest() {},

    onClickSaveLanguage(val) {
      const language = this.$store.state.userModule.languageChecked;
      if (language.length >= 5) {
        this.isDisabled = true;
      }
      this.isShowLanguages = val;
    },
  },
};
</script>

<style lang="scss">
.item-language {
  border-top: 1px solid;
  border-bottom: 1px solid;
}
</style>
