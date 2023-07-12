<template>
  <div class="phone-number mt-5">
    <h2 class="padding-title">{{ $t("my_number_is") }}</h2>
    <div class="w-full mt-3 mb-3">
      <div class="w-full">
        <el-input
          id="phone"
          type="number"
          pattern="[0-9.]+"
          class="txt-phone phone-number-txt w-full rounded-lg bg-default"
          :placeholder="$t(`phone_number`)"
          name="phone"
          v-model="valuePhoneNumber"
          @change="onClickInput"
          @input="onInputNumber"
        />
      </div>
      <div class="error-text justify-center flex text-red-600 w-full mt-2">
        {{ this.txtCodeError }}
      </div>
    </div>

    <div class="padding-describe">
      <span>{{
        $t(
          "when_you_tap_'continue',_heartLink_will_send_a_text_with_verification_code._message_and_data_rates_mate_apply."
        )
      }}</span>
      <span>
        {{ $t("the_verified_phone_number_can_be_used_to_log_in.") }}
      </span>
      <br />
      <el-tooltip content="Coming soon" placement="top">
        <a href="#" class="decoration-solid underline">{{
          $t("learn_what_happens_when_your_number_changes.")
        }}</a>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
import intlTelInput from "intl-tel-input";
import $ from "jquery";
export default {
  name: "my-number",

  data() {
    return {
      txtCodeError: "",

      valueIntlTel: {},
      valuePhoneNumber: "",
    };
  },

  computed: {
    backgroundColor() {
      const theme = localStorage.getItem("user-theme");

      if (theme === "light-theme") {
        return "#EDF0F7";
      } else {
        return "#495063";
      }
    },
  },

  methods: {
    //#region Common function

    /**
     * Validate phone number
     * @param {*} val
     */
    onValidatePhoneNumber(val) {
      var vnf_regex = /^((\+84|0)[3|5|7|8|9])+([0-9]{8})$/g;
      var usf_regex = /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/;
      var auf_regex = /^(\+?61|0)[7-9]\d{8}$/;

      if (val !== "") {
        if (vnf_regex.test(val)) {
          this.txtCodeError = "";

          this.$emit("validateRequirePhone", {
            statusActive: true,
            valueIntlTel: this.valueIntlTel,
            valuePhoneNumber: this.valuePhoneNumber,
          });
        } else if (usf_regex.test(val)) {
          this.txtCodeError = "";

          this.$emit("validateRequirePhone", {
            statusActive: true,
            valueIntlTel: this.valueIntlTel,
            valuePhoneNumber: this.valuePhoneNumber,
          });
        } else if (auf_regex.test(val)) {
          this.txtCodeError = "";

          this.$emit("validateRequirePhone", {
            statusActive: true,
            valueIntlTel: this.valueIntlTel,
            valuePhoneNumber: this.valuePhoneNumber,
          });
        } else {
          this.txtCodeError = this.$t("please_enter_a_valid_phone_number");
          this.$emit("validateRequirePhone", { statusActive: false });

          // Số điện thoại của bạn không đúng định dạng!
        }
      } else {
        this.txtCodeError = this.$t("you_are_not_enter_the_phone_number");
        this.$emit("validateRequirePhone", { statusActive: false });
      }
    },
    //#endregion

    //#region Action
    /**
     * Sự kiện khi click input
     */
    onClickInput() {
      const mobile = document.getElementById("phone").value;
      if (mobile != "") {
        this.onValidatePhoneNumber(mobile);
      } else {
        this.txtCodeError = this.$t("you_are_not_enter_the_phone_number");
      }
    },

    onInputNumber() {
      const mobile = document.getElementById("phone").value;
      if (mobile != "") {
        this.onValidatePhoneNumber(mobile);
      } else {
        this.txtCodeError = this.$t("you_are_not_enter_the_phone_number");
      }
    },
    //#endregion
  },

  mounted() {
    var input = document.querySelector("#phone");
    this.valueIntlTel = intlTelInput(input, {
      separateDialCode: true,
      initialCountry: "vn",
      preferredCountries: ["us", "gb", "de"],
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
      formatOnDisplay: true,
    });

    input.focus();
  },
};
</script>

<style lang="css">
.txt-phone {
  padding-bottom: 10px;
  padding-top: 10px;
  font-size: 18px;
}

.iti--allow-dropdown {
  width: 100% !important;
}
.iti__flag-container {
  padding: 10px !important;
}
.iti__country-list::-webkit-scrollbar {
  display: none !important;
}

.iti__country-list {
  width: 445px !important;
  border: none !important;
  background-color: #4e576b !important;
}
#phone {
  padding-left: 94px !important;
  padding-right: 58px;
}

.iti--separate-dial-code .iti__selected-flag {
  background-color: unset !important;
}

.iti__arrow--up {
  border-bottom: 4px solid #000000 !important;
}

.iti__arrow {
  border-top: 4px solid #000000 !important;
}
</style>
