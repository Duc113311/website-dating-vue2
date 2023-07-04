<template>
  <div ref="myName">
    <div class="mt-3">
      <div class="padding-title">{{ $t("my_name_is") }}</div>
    </div>
    <div class="mt-4">
      <el-input
        class="your-name digit-box padding-input bg-default"
        ref="input_focus"
        v-model="txtFirstName"
        :placeholder="$t('your_name')"
        @input="onChangeFirstName"
      />
      <div class="padding-describe mt-2 describe-text">
        {{
          $t(
            "this_is_how_it_will_appear_in_heartLink,_and_you_will_not_able_to_change_it"
          )
        }}
      </div>
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
        var substring = this.txtFirstName.substring(0, 50);
        this.setFirstName(substring);
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
    this.$refs.input_focus.$refs.input.focus();
  },
};
</script>

<style lang="css">
.your-name .el-input__inner {
  --el-input-inner-height: 45px !important;
  font-size: larger !important;
  padding: 10px;
}
</style>
