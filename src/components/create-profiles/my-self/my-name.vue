<template>
  <div ref="myName">
    <div class="mt-10">
      <div class="padding-title">My name is</div>
    </div>
    <div>
      <input
        class="your-name padding-input mb-3"
        v-model="txtFirstName"
        placeholder="Your name"
        @keydown="onChangeFirstName"
      />
      <span class="padding-describe"
        >This is how it will appear in HeartLink, and you will not able to
        change it</span
      >
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "my-name",

  setup() {
    return {};
  },

  data() {
    return {
      txtFirstName: "",
    };
  },

  computed: {},

  methods: {
    ...mapMutations(["setFirstName"]),
    onChangeFirstName() {
      if (this.txtFirstName !== "") {
        this.setFirstName(this.txtFirstName);
        this.$emit("onStatusActive", true);
      } else {
        this.$emit("onStatusActive", false);
      }
    },
  },

  mounted() {
    this.txtFirstName = this.$store.state.userModule.user_profile?.fullname;

    this.$emit("onShowName", { showCheckbox: false });
    this.$emit("onShowSkips", false);
    console.log(this.txtFirstName);
    if (this.txtFirstName) {
      this.$emit("onStatusActive", true);
    } else {
      this.$emit("onStatusActive", false);
    }
  },
};
</script>

<style lang="css">
.el-input__wrapper {
}
.your-name .el-input__inner {
  --el-input-inner-height: 45px !important;
  font-size: larger !important;
  padding: 10px;
}

.your-name:focus {
  outline: 0;
  border: non;
}
</style>
