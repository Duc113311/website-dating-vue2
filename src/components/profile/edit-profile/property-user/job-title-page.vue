<template>
  <div class="w-full flex items-center">
    <div class="w-full">
      <div class="w-full flex justify-between bh-title p-3">
        <div>{{ $t("job_title") }}</div>
        <div v-if="nameJobTitle.length === 0">+4%</div>
      </div>
      <div class="w-full">
        <el-input
          :placeholder="placeholderJobTitle"
          v-model="nameJobTitle"
          @input="onChangeJobTitle"
        ></el-input>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "job-title-page",

  data() {
    return {
      placeholderJobTitle: this.$t("add_job_title"),
      nameJobTitle: this.$store.state.userModule.user_profile?.profiles.jobTitle
        ? this.$store.state.userModule.user_profile?.profiles.jobTitle
        : "",
    };
  },

  computed: {},

  methods: {
    ...mapMutations(["setJobTitle"]),
    /**
     * Bắt sự kiện khi đã nhập xong
     */
    onChangeJobTitle() {
      this.setJobTitle(this.nameJobTitle);
    },
  },
};
</script>

<style lang="css"></style>
