<template>
  <div class="w-full flex items-center">
    <div class="w-full">
      <div class="w-full flex justify-between bh-title p-3">
        <div>{{ $t("i_know_languages").toUpperCase() }}</div>
        <div v-if="completeLanguage">+4%</div>
      </div>
      <div
        @click="onShowLanguage()"
        class="w-full bg-life bg-default flex justify-between items-center cursor-pointer"
      >
        <div class="w-6/12 bh-item-title flex items-center">
          <div class="flex items-center">
            <img src="@/assets/icon/ic_tinder/language@1x.png" width="25" />
            <span class="mr-2 ml-2">{{ $t("add_language") }}</span>
            <!-- <span v-for="(item, index) in nameLanguageParam" :key="index">{{
              item
            }}</span> -->
          </div>
        </div>
        <div class="flex w-6/12 justify-end">
          <div
            :title="convertArrayToString(nameLanguageParam)"
            class="bh-describe whitespace-nowrap text-ellipsis mr-3 overflow-hidden ml-3"
          >
            {{ convertArrayToString(nameLanguageParam) }}
          </div>
          <div class="cursor-pointer">
            <BhChevron></BhChevron>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BhChevron from "../../../bh-element-ui/button/bh-chevron";
export default {
  components: { BhChevron },
  name: "language-page",
  data() {
    return {
      nameDefault: this.$t("empty"),
    };
  },

  computed: {
    /**
     * Binding ngôn ngữ
     */

    nameLanguageParam() {
      const languagesData =
        this.$store.state.userModule.lifeStyleSingle.languages;

      return languagesData;
    },

    /**
     * Ẩn hiện complete
     */
    completeLanguage() {
      if (this.nameLanguageParam.length === 0) {
        return true;
      }
      return false;
    },
  },

  methods: {
    convertArrayToString(val) {
      console.log(val);
      let newString = "";

      // for (let index = 0; index < val.length; index++) {
      //   const element = val[index];
      //   newString = newString.toString() + element.toString() + ",";
      // }
      if (val.length !== 0) {
        newString = val.join(",\n");
        return newString;
      } else {
        return this.nameDefault;
      }
    },
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
