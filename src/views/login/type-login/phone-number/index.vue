<template>
  <div class="w-full h-full user-profile title-default z-20 grid">
    <div>
      <BhBack @onBackComponent="onBackComponent"></BhBack>
      <!-- Số điện thoại -->
      <MyNumber
        v-if="screenNumber === 0"
        @validateRequirePhone="validateRequire"
      ></MyNumber>
      <!-- Nhập mã OTP -->
      <div v-else>
        <MyCode
          :txtPhoneNumber="txtPhoneNumber"
          :sentCodeId="sentCodeId"
          :txtErrorCode="txtErrorCode"
          @validateRequireCode="validateRequire"
          @onRenderCodeOTP="onRenderCodeOTP"
        >
        </MyCode>
      </div>
    </div>
    <!--  -->
    <BhContinue
      :isActives="isStatusRequire"
      @onChangeContinue="onChangeContinue"
      :isLoading="isLoadings"
    ></BhContinue>
  </div>
</template>

<script>
import MyCode from "@/components/form-login/phone-number/my-code.vue";
import BhBack from "@/components/bh-element-ui/button/bh-back.vue";
import BhContinue from "@/components/bh-element-ui/button/bh-continue.vue";
import intlTelInput from "intl-tel-input";
import MyNumber from "@/components/form-login/phone-number/my-number";
import { mapActions, mapMutations } from "vuex";

import {
  auth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  PhoneAuthProvider,
  signInWithCredential,
} from "../../../../configs/firebase.js";
export default {
  name: "phone-number",
  components: {
    MyCode,
    BhBack,
    BhContinue,
    MyNumber,
  },

  data() {
    return {
      valCodeQR: "",
      screenNumber: 0,
      isStatusRequire: false,
      isLoadings: false,
      isScream: false,
      txtErrorCode: false,
      codeOTP: "",
      isHide: false,
      sentCodeId: "", // Mã sendCodeId firebase gửi về
      valueIntlTel: {},
      valuePhoneNumber: "",
    };
  },

  methods: {
    ...mapActions([
      "postTokenByUserID",
      "checkExistUserId",
      "loginAppByAuthId",
    ]),

    ...mapMutations(["setOAuth2Id"]),

    ...mapMutations(["setTokenAccount"]),
    validateRequire(value) {
      this.isStatusRequire = value.statusActive;
      this.codeOTP = value.codeOTP;
      this.valuePhoneNumber = value.valueIntlTel;
      this.valueIntlTel = value.valuePhoneNumber;
    },

    setuprecaptcha() {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: function () {
            console.log("recature resolved");
          },
        },
        auth
      );
    },

    onBackComponent(value) {
      if (value) {
        if (this.screenNumber === 0) {
          this.$router.push({ path: "/" });
        } else {
          this.screenNumber = this.screenNumber - 1;
        }
      }
    },

    async onRenderCodeOTP() {
      this.txtErrorCode = false;
      debugger;
      this.isStatusRequire = false;
      document.getElementById("1").focus();
      const phoneNumber = this.valuePhoneNumber.getNumber();
      const appVerifier = window.recaptchaVerifier;
      await this.setuprecaptcha();
      await signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          this.sentCodeId = confirmationResult.verificationId;

          console.log(this.sentCodeId);
        })
        .catch((error) => {
          this.sendCodeError = "You select bad domain";
          console.log(error, this.sendCodeError);
          // ...
        });
    },

    /**
     *
     */
    async onChangeContinue(value) {
      console.log(value);

      this.isLoadings = true;
      this.isStatusRequire = true;
      this.isHide = true;
      if (this.screenNumber === 0) {
        const mobile = document.getElementById("phone").value;
        console.log(mobile);
        const result = true;
        // const textCode = this.renderCountryCode();
        // console.log("Mã vung", textCode);
        debugger;
        const phoneNumber = this.valuePhoneNumber.getNumber();

        this.txtPhoneNumber = phoneNumber;
        console.log(this.txtPhoneNumber);
        if (result) {
          if (phoneNumber) {
            await this.setuprecaptcha();
            // const recaptchaContainer = document.getElementById("recaptcha-container");
            const appVerifier = window.recaptchaVerifier;
            await signInWithPhoneNumber(auth, phoneNumber, appVerifier)
              .then((confirmationResult) => {
                this.sentCodeId = confirmationResult.verificationId;

                console.log(this.sentCodeId);
              })
              .catch((error) => {
                this.sendCodeError = "You select bad domain";
                console.log(error, this.sendCodeError);
                // ...
              });
          }
        }
        setTimeout(() => {
          this.isStatusRequire = false;
          this.isLoadings = false;
          this.screenNumber = this.screenNumber + 1;
        }, 2000);
      } else if (this.screenNumber === 1) {
        if (this.sentCodeId !== "") {
          // this.$emit("onShowEmailUser", true);

          await this.singWithPhone(this.sentCodeId);
        } else {
          setTimeout(() => {
            this.txtErrorCode = true;
            this.isLoadings = false;
          }, 2000);
        }
      }
    },

    setTokenId() {
      const tokenIdParam = this.$store.state.mongoModule.tokenId;
      return tokenIdParam;
    },

    /**
     * Xác thực mã codeId & OTP
     * @param {*} sentCodeId
     */
    singWithPhone(sentCodeId) {
      const credential = PhoneAuthProvider.credential(sentCodeId, this.codeOTP);
      signInWithCredential(auth, credential)
        .then(async (result) => {
          const userID = result.user.uid;
          debugger;
          // Xét giá trị cho OAuth
          await this.setOAuth2Id(userID);

          await this.loginAppByAuthId({
            oAuth2Id: userID,
          });

          const tokenIdParam = await this.setTokenId();
          debugger;
          // Tồn tại account
          if (tokenIdParam) {
            this.$router.push({ path: "/home" });
          } else {
            // Không tồn tại account
            this.$router.push({ path: "/email" });
          }
        })
        .catch((error) => {
          console.log(error);
          this.txtErrorCode = true;
          setTimeout(() => {
            this.isLoadings = false;
          }, 2000);
        });
    },

    renderCountryCode() {
      var input = document.querySelector("#phone");

      this.valCodeQR = intlTelInput(input, {
        separateDialCode: true, // Hiển thị mã điện thoại quốc gia riêng rẽ
        initialCountry: "vn",
        preferredCountries: ["us", "gb", "de"],
        utilsScript:
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js", // Đường dẫn đến tệp utils.js
      });

      return this.valCodeQR;
    },
  },

  mounted() {
    // var input = document.querySelector("#phone");
    // this.valueIntlTel = intlTelInput(input, {
    //   initialCountry: "auto",
    //   geoIpLookup: function (callback) {
    //     $.get("https://ipinfo.io", function () {}, "jsonp").always(function (
    //       resp
    //     ) {
    //       var countryCode = resp && resp.country ? resp.country : "vn";
    //       callback(countryCode);
    //     });
    //   },
    // });
    //
    // input.focus();
  },
};
</script>
<style lang="css">
.text-color {
  color: #737b91;
}
.user-profile {
  grid-template-rows: 8fr 1fr;
}

.show-form {
  display: none;
}
</style>
