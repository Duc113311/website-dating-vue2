<template>
  <div class="number-code mt-5">
    <h2 class="padding-title">My code is</h2>
    <div class="flex items-center">
      <div class="padding-describe">Please enter Code sent to</div>
      <span class="ml-3">{{ this.renderPhoneNumber }}</span>
    </div>
    <div class="text-code flex justify-center mt-8 mb-8">
      <div>
        <input
          type="number"
          class="digit-box one-code bg-default text-center"
          v-for="(number, index) in digits"
          :id="number"
          :key="index"
          :ref="`input` + number"
          v-model="renderCodeOTP[number]"
          @keyup="onNextOn(number, index)"
          :autofocus="index === 0"
          step="1"
          maxlength="1"
        />
      </div>
    </div>

    <BhInvalid v-if="renderErrorCode"></BhInvalid>
    <div class="mt-10 padding-describe dark-theme-describe justify-center flex">
      <a class="cursor-pointer bt-render" href="#" @click="onPhoneNumber()"
        >Resend code</a
      >
    </div>
  </div>
</template>

<script>
import BhInvalid from "../../bh-element-ui/error/bh-invalid";
export default {
  components: {
    BhInvalid,
  },
  name: "my-code",
  setup() {},

  data() {
    return {
      digitCount: 4,
      digits: [1, 2, 3, 4, 5, 6],
      number: "",
      numberData: [],
    };
  },

  props: ["txtPhoneNumber", "valueText", "txtErrorCode", "sentCodeId"],

  computed: {
    renderPhoneNumber() {
      return this.txtPhoneNumber;
    },

    renderErrorCode() {
      return this.txtErrorCode;
    },

    renderCodeOTP() {
      debugger;

      return [
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
      ];
    },
  },

  methods: {
    isNumberKey(event) {
      debugger;
      var charCode = event.which ? event.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
      }
      return true;
    },
    /**
     * Render gửi lại mã OTP
     */
    onPhoneNumber() {
      this.$emit("onRenderCodeOTP", this.txtPhoneNumber);
    },

    onCheckOTP() {
      this.$emit("validateRequireCode", true);
    },

    moveToNext(event, refName) {
      debugger;
      if (event.target.value.length === 1) {
        this.$refs[refName].focus();
      }
    },

    onNextOn(key, index) {
      console.log(key);
      debugger;
      const indexData = document.getElementById(key);
      let valueData = indexData.value;
      if (valueData !== "") {
        if (valueData.length === 1) {
          const nextBling = this.digits.length;
          if (index < this.numberData.length) {
            this.numberData[index] = indexData.value.toString();
          } else {
            this.numberData.push(indexData.value.toString());
          }
          if (this.numberData.length < 6) {
            const keyNext = key + 1;
            const refKey = this.$refs[`input` + keyNext];
            const value = indexData.value.toString().slice(0, 1);
            indexData.value = value.replace(/[^0-9]/g, "");
            refKey[0].focus();
          } else {
            const filterData = this.numberData.filter((x) => x === "");
            console.log(filterData);
            if (filterData.length === 0) {
              this.valueCode = this.numberData.toString().split(",").join("");
              if (this.valueCode !== "") {
                debugger;
                this.$emit("validateRequireCode", {
                  statusActive: true,
                  codeOTP: this.valueCode,
                  codeOld: this.numberData,
                });
              }
            }
          }
        } else {
          const value = indexData.value.toString().slice(0, 1);
          indexData.value = value.replace(/[^0-9]/g, "");
        }
      } else {
        this.numberData[index] = indexData.value;

        const refKey = this.$refs[`input` + key];
        refKey[0].focus();
        this.valueCode = this.numberData.toString().split(",").join("");
        this.$emit("validateRequireCode", {
          statusActive: false,
          codeOTP: this.valueCode,
        });
      }
    },
  },

  created() {},

  mounted() {
    debugger;
  },
};
</script>

<style lang="css">
.one-code {
  width: 48px;
  border-radius: 4px;
  font-size: 1.5rem;
  font-weight: 700;
  height: 48px;
  touch-action: manipulation;
  padding-left: 8px;
  padding-right: 8px;
  vertical-align: middle;
  margin-right: 5px;
}

.bt-render:hover {
  color: #fd5d65;
}

.text-color {
  color: #737b91;
}
</style>
