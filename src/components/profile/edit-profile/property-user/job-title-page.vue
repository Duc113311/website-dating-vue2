<template>
  <div class="w-full flex items-center">
    <div class="w-full">
      <div class="w-full flex justify-between bh-title p-3">
        <div>JOB TITLE</div>
        <div v-if="nameJobTitle.length === 0">+4%</div>
      </div>
      <div class="w-full">
        <el-input
          placeholder="Add job title"
          v-model="nameJobTitle"
          @input="onInputJobTitle()"
          @change="onChangeJobTitle"
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
      nameJobTitle:
        this.$store.state.userModule.user_profile?.profiles?.jobTitle,
    };
  },

  computed: {
    valueJobTitle: {
      get() {
        const about =
          this.$store.state.userModule.user_profile?.profiles?.jobTitle;
        debugger;
        return about ? about : this.nameJobTitle;
      },
      // setter
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        this.nameJobTitle = newValue;
      },
    },
  },

  methods: {
    ...mapMutations(["setJobTitle"]),
    /**
     * Bắt sự kiện khi đã nhập xong
     */
    onChangeJobTitle() {
      this.setJobTitle(this.valueJobTitle);
    },
  },
};
</script>

<style lang="css"></style>
