<template>
  <div class="w-full h-full">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "profile-page",

  data() {
    return {};
  },

  methods: {
    ...mapActions([
      "getListLifeStyleCommons",
      "getListInformationBasic",
      "getListLifeStyleStatic",
      "getDetailProfileByAuthorization",
    ]),
  },

  async created() {
    await this.getListLifeStyleCommons();
    await this.getListInformationBasic();
    await this.getListLifeStyleStatic();
    await this.getDetailProfileByAuthorization();
  },
};
</script>
<style lang="css"></style>
