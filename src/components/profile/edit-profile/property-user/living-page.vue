<template>
  <div class="w-full flex items-center">
    <div class="w-full">
      <div class="w-full flex justify-between bh-title p-3">
        <div>{{ $t("living_in") }}s</div>
        <div v-if="nameLiving.length === 0">+4%</div>
      </div>
      <div class="w-full">
        <el-input
          :placeholder="placeholderLiving"
          v-model="nameLiving"
          @input="onChangeLiving()"
        ></el-input>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "living-page",

  data() {
    return {
      placeholderLiving: this.$t("add_living"),
      nameLiving: this.$store.state.userModule.user_profile?.profiles.address,
    };
  },

  methods: {
    ...mapMutations(["setAddress"]),
    /**
     *
     */
    onChangeLiving() {
      this.setAddress(this.nameLiving);
    },
  },
};
</script>

<style lang="css"></style>
