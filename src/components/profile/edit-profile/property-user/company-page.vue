<template>
  <div class="w-full flex items-center">
    <div class="w-full">
      <div class="w-full flex justify-between bh-title p-3">
        <div>COMPANY</div>
        <div v-if="nameCompany.length === 0">+4%</div>
      </div>
      <div class="w-full">
        <el-input
          placeholder="Add job title"
          v-model="nameCompany"
          @change="onChangeCompany"
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
      nameCompany: this.$store.state.userModule.user_profile?.profiles?.company,
    };
  },

  computed: {
    valueCompany: {
      get() {
        const company =
          this.$store.state.userModule.user_profile?.profiles?.company;
        debugger;
        return company ? company : this.nameCompany;
      },
      // setter
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        this.nameCompany = newValue;
      },
    },
  },

  methods: {
    ...mapMutations(["setCompany"]),
    /**
     * Bắt sự kiện khi đã nhập xong
     */
    onChangeCompany() {
      this.setCompany(this.valueCompany);
    },
  },
};
</script>

<style lang="css"></style>
