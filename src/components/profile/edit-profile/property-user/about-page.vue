<template>
  <div class="w-full flex justify-center items-center">
    <div class="w-full">
      <div class="w-full flex justify-between p-3 bh-title">
        <div>ABOUT ME</div>
        <div v-if="nameAbout.length === 0">+20%</div>
      </div>
      <div>
        <el-input
          type="textarea"
          :rows="2"
          placeholder="About me - maximise 500 words"
          v-model="nameAbout"
          @input="onChangeSaveAbout"
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
      this.setAbout(this.nameAbout);
    },
  },
};
</script>

<style></style>
