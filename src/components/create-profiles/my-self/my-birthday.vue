<template>
  <div>
    <div class="mt-3">
      <div class="padding-title">My birthday is</div>
    </div>
    <div>
      <el-input
        class="your-name padding-input mb-3 bg-default"
        ref="input_focus"
        v-model="birthday"
        type="date"
        placeholder="dd/mm/yyyy"
        min="1977-01-01"
        max="2030-01-01"
        @input="onChangeInput"
        @blur="onChangeInput"
      />
      <span class="padding-describe">Your age will be public</span>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "my-birthday",
  setup() {
    return;
  },
  data() {
    return {
      birthday: "",
    };
  },
  computed: {},
  methods: {
    ...mapMutations(["setBirthday"]),

    onChangeInput() {
      if (this.birthday !== "") {
        this.setBirthday(this.birthday);
        this.$emit("onStatusActive", true);
      } else {
        this.$emit("onStatusActive", false);
      }
    },
  },

  mounted() {
    this.birthday = this.$store.state.userModule.user_profile.dob;
    this.$emit("onShowName", { showCheckbox: false });
    this.$emit("onShowSkips", false);
    if (this.birthday) {
      this.$emit("onStatusActive", true);
    } else {
      this.$emit("onStatusActive", false);
    }

    this.$refs.input_focus.$refs.input.focus();
  },
};
</script>

<style lang="css">
.birthdate .el-input__inner {
  --el-input-inner-height: 45px !important;
  font-size: larger !important;
  padding: 10px;
}
</style>
