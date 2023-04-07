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
    ...mapActions(["getDetailProfileByAuthorization", "getListLifeStyle"]),
  },

  async created() {
    await this.getListLifeStyle();
    debugger;
    await this.getDetailProfileByAuthorization();
  },
};
</script>
<style lang="css"></style>
