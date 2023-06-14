<template>
  <div class="w-full h-full title-default">
    <div class="w-full h-full">
      <BhBack @onBackComponent="onBackComponent"></BhBack>
      <div class="h-email">
        <MyEmail @onShowWelcome="onShowWelcome"></MyEmail>
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
import { auth, signOut } from "../../../../configs/firebase";

import BhQuestion from "../../../../components/bh-element-ui/notification/bh-question";
import NewAccount from "../../../../components/welcome/new-account";
import MyEmail from "../../../../components/form-login/email/my-email";
import BhBack from "../../../../components/bh-element-ui/button/bh-back";
export default {
  components: {
    BhQuestion,
    NewAccount,
    MyEmail,
    BhBack,
  },
  name: "email-page",

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
      this.isShowFormQuestion = val;
    },

    onHidePopupPackage(val) {
      this.isShowFormQuestion = val;
    },
    async onActionApplyQuestion(val) {
      await signOut(auth)
        .then(() => {
          // Sign-out successful.
          localStorage.removeItem("oAuth2Id");
          localStorage.removeItem("tokenId");
        })
        .catch((error) => {
          // An error happened.
        });
      this.$router.push({ path: "/" }).catch(() => {});
    },
    /**
     * Show dialog khi thoát
     */
    onBackComponent() {
      this.isShowFormQuestion = true;
    },
  },
};
</script>

<style lang="css">
.h-email {
  height: calc(100% - 6%);
}
</style>
