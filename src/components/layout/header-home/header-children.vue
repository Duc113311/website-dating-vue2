<template>
  <div class="w-full header-children flex justify-center items-center">
    <div class="w-full flex justify-center items-center">
      <div class="w-1/4">
        <BhBack @onBackComponent="onBackComponent"></BhBack>
      </div>
      <div class="ml-20 w-3/4 text-xl">Edit Profile</div>
    </div>
  </div>
</template>

<script>
import BhBack from "../../bh-element-ui/button/bh-back";
export default {
  components: { BhBack },
  name: "header-children-page",
  data() {
    return {};
  },

  methods: {
    /**
     * Back header
     */
    onBackComponent() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="css"></style>
