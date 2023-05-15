<template>
  <div class="phone-number mt-5">
    <h2 class="padding-title">My number is</h2>
    <div class="w-full mt-3 mb-3">
      <div class="w-full">
        <el-input
          id="phone"
          type="number"
          pattern="[0-9.]+"
          class="txt-phone phone-number-txt w-full rounded-lg bg-default"
          placeholder="Phone number"
          name="phone"
          v-model="valCodeQR"
          @change="onClickInput"
          @input="onInputNumber"
        />
      </div>
      <div class="error-text justify-center flex text-red-600 w-full mt-2">
        {{ this.txtCodeError }}
      </div>
    </div>

    <div class="padding-describe">
      <span
        >When you tap "Continue", Heartlink will send a text with verificatrion
        code. Message and data rates maty apply.</span
      >
      <span> The verifed phone number can be used to log in. </span>
      <a href="http://" class="decoration-solid underline"
        >Learn what happens when your number changes</a
      >
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
      valCodeQR: "",
      txtCodeError: "",
    };
  },

  computed: {
    isDarkTheme() {
      const theme = localStorage.getItem("user-theme");

      if (theme === "light-theme") {
        return false;
      } else {
        return true;
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
      var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
      if (val !== "") {
        if (vnf_regex.test(val) == false) {
          this.txtCodeError = "Please enter a valid phone number";
          this.$emit("validateRequirePhone", { statusActive: false });

          // Số điện thoại của bạn không đúng định dạng!
        } else {
          this.txtCodeError = "";
          debugger;
          this.$emit("validateRequirePhone", { statusActive: true });
        }
      } else {
        this.txtCodeError = "You are not enter the phone number";
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
        this.txtCodeError = "You are not enter the phone number";
      }
    },

    onInputNumber() {
      const mobile = document.getElementById("phone").value;
      if (mobile != "") {
        this.onValidatePhoneNumber(mobile);
      } else {
        this.txtCodeError = "You are not enter the phone number";
      }
    },
    //#endregion
  },

  mounted() {
    debugger;
    var input = document.querySelector("#phone");
    this.valCodeQR = intlTelInput(input, {
      separateDialCode: true, // Hiển thị mã điện thoại quốc gia riêng rẽ
      initialCountry: "vn", // Đặt quốc gia mặc định là Việt Nam
      preferredCountries: ["vn"], // Sử dụng Việt Nam là quốc gia ưu tiên
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js", // Đường dẫn đến tệp utils.js
    });
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
  background-color: #eef1f8 !important;
}
</style>
