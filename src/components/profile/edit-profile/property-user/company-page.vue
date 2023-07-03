<template>
  <div class="w-full flex items-center">
    <div class="w-full">
      <div class="w-full flex justify-between bh-title p-3">
        <div>{{ $t("company") }}</div>
        <div v-if="nameCompany.length === 0">+4%</div>
      </div>
      <div class="w-full">
        <el-input
          :placeholder="placeholderCompany"
          v-model="nameCompany"
          @input="onChangeCompany"
        ></el-input>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "company-page",

  data() {
    return {
      placeholderCompany: this.$t("add_company"),
      nameCompany: this.$store.state.userModule.user_profile?.profiles.company
        ? this.$store.state.userModule.user_profile?.profiles.company
        : "",
    };
  },

  computed: {},

  methods: {
    ...mapMutations(["setCompany"]),
    /**
     * Bắt sự kiện khi đã nhập xong
     */
    onChangeCompany() {
      var substring = this.nameCompany.substring(0, 100);
      this.setCompany(substring);
    },
  },
};
</script>

<style lang="css"></style>
