<template>
  <div class="w-full h-full title-default">
    <div class="w-full h-full">
      <BhBack @onBackComponent="onBackComponent"></BhBack>
      <div class="h-email">
        <MyEmail @onShowWelcome="onShowWelcome"></MyEmail>
      </div>
    </div>
    <NewAccount v-show="isShowWelcome"></NewAccount>
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
      titleQuestion: "Are you sure?",
      describeQuestion:
        "You will exit this sign-up process and all your information will be deleted?",
    };
  },

  methods: {
    onShowWelcome(val) {
      this.isShowWelcome = val;
    },

    onHidePopupPackage(val) {
      this.isShowFormQuestion = val;
    },
    async onActionApplyQuestion(val) {
      await signOut(auth)
        .then(() => {
          debugger;
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
      debugger;
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
