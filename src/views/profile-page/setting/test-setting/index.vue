<template>
  <div class="w-full h-full relative" v-loading="loading">
    <div
      class="w-full h-full title-default"
      v-bind:class="{ 'reverse-layout': isArabic }"
    >
      <!-- Back -->
      <div
        class="w-full header-edit flex justify-center items-center p-4 border-bottom"
      >
        <div class="w-full flex items-center">
          <div class="">
            <BhBack @onBackComponent="onBackEditProfile"></BhBack>
            <!-- <BhBack @onBackComponent="onBackEditProfile"></BhBack> -->
          </div>
          <div class="w-full text-xl text-center text-red-400 font-semibold">
            {{ $t("settings") }}
          </div>
        </div>
      </div>

      <div class="form-edit overflow-scroll w-full p-4">
        <FromSetting
          @onDialogLogout="onQuestionLogout"
          @onDialogDelete="onQuestionDelete"
        ></FromSetting>
        <!--  -->
      </div>

      <!-- Form question -->
      <BhQuestion
        @onHidePopupPackage="onHidePopupLogout"
        @onActionApplyQuestion="onActionApplyLogout"
        :titleQuestion="titleLogout"
        :describeQuestion="describeLogout"
        v-show="isShowDialogLogout"
      ></BhQuestion>

      <BhQuestion
        @onHidePopupPackage="onHidePopupDelete"
        @onActionApplyQuestion="onActionApplyDelete"
        :titleQuestion="titleDelete"
        :describeQuestion="describeDelete"
        v-show="isShowDialogDelete"
      >
      </BhQuestion>
      <!-- <Footer></Footer> -->
    </div>
  </div>
</template>

<script>
import { auth, signOut } from "../../../../configs/firebase";

import BhQuestion from "../../../../components/bh-element-ui/notification/bh-question";
// import Footer from "../../../../components/layout/footer-home/footer";
import BhBack from "../../../../components/bh-element-ui/button/bh-back";
import FromSetting from "../../../../components/profile/setting/from-setting";
import functionValidate from "@/middleware/validate";
import { mapActions, mapMutations } from "vuex";
export default {
  components: {
    BhQuestion,
    // Footer,
    BhBack,
    FromSetting,
  },
  name: "test-setting-page",

  data() {
    return {
      loading: false,
      isShowDialogLogout: false,
      isShowDialogDelete: false,
      titleLogout: this.toUpperCaseString(
        this.$t("are_you_sure_you_want_to_sign_out?")
      ),
      describeLogout: this.$t(
        "compatible_users_will_continue_to_see_you_in_the_last_identified_location."
      ),

      titleDelete: this.$t("delete_my_account"),
      describeDelete: this.$t(
        "if_you_want_to_keep_the_account_but_not_visible_to_others,_you_can_choose_to_hide_the_account._you_can_disable_this_feature_in_the_settings."
      ),
    };
  },

  computed: {
    isArabic() {
      return this.$i18n.locale === "ar"; // Điều chỉnh 'ar' cho ngôn ngữ Ả Rập
    },
  },

  methods: {
    ...mapMutations(["setFirstName"]),
    ...mapActions(["updateSettingUser", "deleteAccountUser"]),
    async onBackEditProfile() {
      this.loading = true;

      const setting = this.$store.state.userModule.user_profile.settings;
      await this.updateSettingUser(setting);

      await setTimeout(() => {
        this.loading = false;
        this.$router.go(-1);
      }, 2000);
    },

    toUpperCaseString(value) {
      return functionValidate.toUpperCaseString(value);
    },

    onHidePopupLogout() {
      this.isShowDialogLogout = false;
    },

    onHidePopupDelete() {
      this.isShowDialogDelete = false;
    },

    async onActionApplyDelete(val) {
      this.isShowDialogDelete = false;
      this.loading = true;
      const firstName = "";
      this.setFirstName(firstName);
      await this.deleteAccountUser();
      localStorage.removeItem("oAuth2Id");
      localStorage.removeItem("tokenId");
      setTimeout(() => {
        this.loading = false;

        this.$router.push({ path: "/" });
      }, 1000);
    },

    onQuestionLogout(val) {
      this.isShowDialogLogout = val;
    },

    onQuestionDelete(val) {
      this.isShowDialogDelete = val;
    },

    onHidePopupPackage(val) {
      this.isShowDialogLogout = val;
    },

    async onActionApplyLogout(val) {
      debugger;
      this.isShowDialogLogout = false;
      this.loading = true;
      await signOut(auth)
        .then(() => {
          const firstName = "";
          this.setFirstName(firstName);

          // Sign-out successful.
          localStorage.removeItem("oAuth2Id");
          localStorage.removeItem("tokenId");
        })
        .catch((error) => {
          console.log("error", error);
          // An error happened.
        });
      setTimeout(() => {
        this.loading = false;
        this.$router.replace({ name: "login-page" }).catch(() => {});
      }, 1000);
    },
  },
};
</script>

<style lang="css">
.bg-theme {
  background-color: #242a38;
}

.header-edit {
  height: 10%;
}
.form-edit {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  overflow-y: scroll; /* Add the ability to scroll */
  height: calc(100% - 10%);
}

.form-edit::-webkit-scrollbar {
  display: none;
}
</style>
