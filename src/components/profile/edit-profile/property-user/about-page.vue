<template>
  <div class="w-full flex justify-center items-center">
    <div class="w-full">
      <div class="w-full flex justify-between p-3 bh-title">
        <div>{{ $t("about_me") }}</div>
        <div v-if="nameAbout.length === 0">+20%</div>
      </div>
      <div>
        <el-input
          type="textarea"
          :rows="2"
          :placeholder="$t('about_me_-_maximize_500_words')"
          v-model="nameAbout"
          @input="onChangeSaveAbout"
          maxlength="500"
        >
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "about-page",

  data() {
    return {
      nameAbout: this.$store.state.userModule.user_profile.profiles.about
        ? this.$store.state.userModule.user_profile.profiles.about
        : "",
    };
  },

  methods: {
    ...mapMutations(["setAbout"]),

    /**
     * Gán giá trị cuối cùng valueAbout cho user_profile
     */
    onChangeSaveAbout() {
      debugger;
      var substring = this.nameAbout.substring(0, 500);
      this.setAbout(substring);
    },
  },
};
</script>

<style></style>
