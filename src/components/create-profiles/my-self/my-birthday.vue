<template>
  <div>
    <div class="mt-3">
      <div class="padding-title">{{ $t("my_birthday_is") }}</div>
    </div>
    <div class="mt-4">
      <el-input
        class="your-name padding-input bg-default"
        ref="input_focus"
        v-model="birthday"
        type="date"
        placeholder="dd/mm/yyyy"
        min="1977-01-01"
        max="2030-01-01"
        @input="onChangeInput"
        @blur="onChangeInput"
      />
      <div class="w-full flex justify-center items-center mt-2 value-error">
        {{ textError }}
      </div>
      <div class="padding-describe mt-2 describe-text">
        {{ $t("your_age_will_be_public") }}
      </div>
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
      textError: "",
    };
  },
  computed: {},
  methods: {
    ...mapMutations(["setBirthday"]),

    onChangeInput() {
      if (this.birthday !== "") {
        const birthdayValue = this.validateDateOfBirth(this.birthday);

        if (birthdayValue) {
          this.textError = "";
          this.setBirthday(this.birthday);
          this.$emit("onStatusActive", true);
        } else {
          this.textError = this.$t("invalid_date_of_birth");
          this.$emit("onStatusActive", false);
        }
      }
    },

    validateDateOfBirth(dateString) {
      // Kiểm tra định dạng ngày tháng năm (YYYY-MM-DD)
      var regex = /^\d{4}-\d{2}-\d{2}$/;
      if (!regex.test(dateString)) {
        return false;
      }

      // Chuyển đổi thành đối tượng Date
      var dateObject = new Date(dateString);
      if (isNaN(dateObject.getTime())) {
        return false;
      }

      // Lấy ngày hiện tại
      var currentDate = new Date();

      // Kiểm tra năm sinh không lớn hơn ngày hiện tại
      if (dateObject > currentDate) {
        return false;
      }

      // Tính toán tuổi
      var age = currentDate.getFullYear() - dateObject.getFullYear();

      // Kiểm tra tuổi hợp lệ (từ 18 đến 70)
      if (age < 18 || age > 70) {
        return false;
      }

      // Ngày tháng năm sinh hợp lệ
      return true;
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
