<template>
  <div class="w-full mb-6">
    <div class="w-full flex justify-center items-center">
      <div class="w-full">
        <div class="w-full style-switch flex justify-between bg-default">
          <div class="name bh-item-title title-item">{{ $t("global") }}</div>

          <div>
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
          {{ $t("you_can_meet_people_nearby_and_from_around_the_world") }}
        </div>
      </div>
    </div>

    <div v-show="valueGlobal" class="w-full form-set-list bg-default">
      <div class="w-full bh-title title-item form-set-item">
        {{ $t("preferred_languages") }}
      </div>
      <div class="w-full">
        <div v-if="languageChecked.length !== 0">
          <div
            v-for="(item, index) in languageChecked"
            :key="index"
            @click="onClickPreferredLanguage(item)"
            class="w-full flex items-center justify-between form-set-item bd-input title-input-item bh-item-title"
          >
            <div>
              {{ item }}
            </div>
            <div class="cursor-pointer">
              <i
                class="fa-solid bh-chevron-right cursor-pointer fa-chevron-right"
              ></i>
            </div>
          </div>
        </div>
        <div v-else>{{ $t("no_data") }}</div>
        <div>
          <div
            class="bh-text-location form-set-item w-full cursor-pointer"
            @click="onClickAddLanguage"
          >
            {{ $t("add_language") }}
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
      languageSingle:
        this.$store.state.commonModule.listLifeStyleSingle.languages,
    };
  },

  computed: {
    ...mapGetters({
      nameGlobal: "showGlobal",
    }),

    languageChecked() {
      const language =
        this.$store.state.userModule.user_profile.settings.global.languages;

      let resultData = [];
      for (let index = 0; index < language.length; index++) {
        const element = language[index];

        const findData = this.languageSingle.find((x) => x.code === element);
        if (findData) {
          resultData.push(findData.value);
        }
      }
      return resultData;
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
      const global =
        this.$store.state.userModule.user_profile.settings.global.isEnabled;
      if (global) {
        this.setShowGlobal({
          isEnabled: false,
          languages: [],
        });
      } else {
        this.setShowGlobal({
          isEnabled: true,
          languages: this.$store.state.userModule.listLanguageGlobal,
        });
      }
    },

    onClickAddLanguage() {
      this.isShowLanguages = true;
    },

    onClickSaveLanguage(val) {
      this.isShowLanguages = val;
    },

    onClickPreferredLanguage(val) {
      console.log(val);
      this.$router.push({ path: "/global-language" }).catch(() => {});
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
