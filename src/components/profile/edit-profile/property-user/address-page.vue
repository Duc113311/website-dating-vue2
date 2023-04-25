<template>
  <div class="w-full flex items-center">
    <div class="w-full">
      <div class="w-full flex justify-between bh-title p-3">
        <div>LIVING IN</div>
        <div v-if="nameAddress.length === 0">+4%</div>
      </div>
      <div class="w-full">
        <el-input
          placeholder="Add city"
          v-model="nameAddress"
          @input="onChangeAddress"
        ></el-input>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "address-page",

  data() {
    return {
      nameAddress: this.$store.state.userModule.user_profile?.profiles.address
        ? this.$store.state.userModule.user_profile?.profiles.address
        : "",
    };
  },

  methods: {
    ...mapMutations(["setAddressLocation"]),
    /**
     *
     */
    onChangeAddress() {
      this.setAddressLocation(this.nameAddress);
    },
  },
};
</script>
