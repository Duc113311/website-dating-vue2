<template>
  <div class="login w-full h-full relative">
    <div
      class="flex justify-center w-full absolute z-10 h-full body-app overflow-hidden"
    >
      <div class="w-full image-background h-full">
        <div class="w-full h-full back-color">
          <div
            class="form-login justify-center flex content-center h-full items-center"
          >
            <div>
              <div>
                <div class="flex justify-center mb-8">
                  <img
                    src="@/assets/icon/app_icon_512x512.png"
                    width="100"
                    height="100"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="block text-center justify-center mt-3 text-white">
                  <div class="padding-title">{{ $t("warm_welcome") }}</div>
                  <div class="padding-text-option">
                    {{ $t("we_hope_you_have_a_sweet_time_here") }}
                  </div>
                </div>
              </div>
              <!-- Body -->
              <div class="mt-5 mb-5 justify-center flex p-10">
                <LoginBtn @onShowWelcome="onShowWelcome"></LoginBtn>
              </div>

              <div class="items-center content-center text-white ml-5 mr-5">
                <div>
                  <h2 class="text-lg mb-5 text-center">
                    {{ $t("trouble_logging_in?") }}
                  </h2>
                  <span class="text-lg text-trouble mt-2"
                    >{{
                      $t(
                        "by_clicking_'login',_you_agree_with_our_terms._learn_how_we_process_your_data_in_our"
                      )
                    }}
                    <a class="underline decoration-1" href="http://">{{
                      $t("privacy_policy")
                    }}</a>
                    {{ $t("and") }}
                    <a class="underline decoration-1" href="http://">{{
                      $t("cookies_policy")
                    }}</a></span
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="recapcha" id="recaptcha-container"></div>
        </div>
      </div>
    </div>

    <NewAccount
      v-show="isShowWelcome"
      @onShowQuestion="onShowQuestion"
    ></NewAccount>

    <BhQuestion
      @onHidePopupPackage="onHidePopupPackage"
      @onActionApplyQuestion="onActionApplyQuestion"
      :titleQuestion="titleQuestion"
      :describeQuestion="describeQuestion"
      v-show="isShowFormQuestion"
    ></BhQuestion>
  </div>
</template>

<script>
import { auth, signOut } from "../../configs/firebase";

import BhQuestion from "../../components/bh-element-ui/notification/bh-question";
import LoginBtn from "../../components/layout/btn-sign/login-btn";
import NewAccount from "../../components/welcome/new-account";
// import NavbarPage from "../../components/layout/navbar-login/navbar-page";
export default {
  components: {
    BhQuestion,
    LoginBtn,
    NewAccount,
    // NavbarPage,
  },
  name: "login-page",

  data() {
    return {
      isShowWelcome: false,
      isShowFormQuestion: false,
      titleQuestion: this.$t("are_you_sure?"),
      describeQuestion: this.$t(
        "you_will_exit_this_sign-up_process_and_all_your_information_will_be_deleted?"
      ),
    };
  },

  methods: {
    onShowWelcome(val) {
      this.isShowWelcome = val;
    },
    onShowQuestion(val) {
      debugger;
      this.isShowFormQuestion = val;
    },
    onCloseWelcome(val) {
      this.isShowWelcome = val;
    },

    onHidePopupPackage(val) {
      this.isShowFormQuestion = val;
    },

    async onActionApplyQuestion(val) {
      await signOut(auth)
        .then(() => {
          debugger;
          this.isShowFormQuestion = false;

          this.isShowWelcome = false;
          // Sign-out successful.
          localStorage.removeItem("oAuth2Id");
        })
        .catch((error) => {
          // An error happened.
        });
      this.$router.push({ path: "/" }).catch(() => {});
    },
  },
};
</script>

<style lang="css">
.image-background {
  background-image: url(@/assets/image-dating/bg_LoginApp.png);
  z-index: 99;
  padding-right: 0px !important;
  padding-left: 0px !important;
  background-size: cover;
  position: relative;
}

.recapcha {
  display: none;
  justify-content: end;
  margin-bottom: 15px;
}

.el-button + .el-button {
  margin-left: 0px !important;
}

#phone,
.btn {
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid #ccc;
}

.btn {
  color: #ffffff;
  background-color: #428bca;
  border-color: #357ebd;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  padding-left: 12px;
  padding-right: 12px;
}

.btn:hover {
  background-color: #3276b1;
  border-color: #285e8e;
}

.btn:active {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}

.alert {
  padding: 15px;
  margin-top: 10px;
  border: 1px solid transparent;
  border-radius: 4px;
}

.alert-info {
  border-color: #bce8f1;
  color: #31708f;
  background-color: #d9edf7;
}

.alert-error {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}

.dialog-phone {
  background-color: #332b3e !important;
}

.text-color {
  color: #6587a5;
}

.text-2xl {
  font-size: 1.8rem !important;
  font-weight: 600;
}
.el-button > span {
  font-size: 20px;
}

.bg-face {
  background-color: #0085fe;
}
.bg-phone {
  background-color: #fd5d65;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
}
/* màn hình điện thoại */

.text-trouble {
  color: #6e7995;
}
</style>
