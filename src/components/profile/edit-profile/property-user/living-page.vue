<template>
  <div class="w-full flex items-center">
    <div class="w-full">
      <div class="w-full flex justify-between bh-title p-3">
        <div>LIVING IN</div>
        <div v-if="nameLiving.length === 0">+4%</div>
      </div>
      <div class="w-full">
        <el-input
          placeholder="Add city"
          v-model="nameLiving"
          @change="onChangeLiving()"
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
      nameLiving: this.$store.state.userModule.user_profile?.profiles?.address
        ? this.$store.state.userModule.user_profile?.profiles?.address
        : "",
    };
  },

  computed: {
    valueLiving: {
      get() {
        const living =
          this.$store.state.userModule.user_profile?.profiles?.address;
        return living ? living : this.nameLiving;
      },
      // setter
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        this.nameLiving = newValue;
      },
    },
  },

  methods: {
    ...mapMutations(["onChangeLiving"]),
    /**
     *
     */
    onChangeLiving() {
      this.setAddress(this.valueLiving);
    },
  },
};
</script>

<style lang="css"></style>
