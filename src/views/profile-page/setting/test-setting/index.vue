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
      titleLogout: "Bạn chắc chắn muốn đăng xuất?",
      describeLogout:
        "Những người dùng tương thích sẽ tiếp tục thấy bạn ở địa điểm được xác định sau cùng.",

      titleDelete: "Ẩn tài khoản của tôi",
      describeDelete:
        "Nếu bạn muốn giữ tài khoản nhưng không hiển thị cho người khác, bạn có thể chọn ẩn tài khoản. Bạn có thể tắt tính năng này trong mục cài đặt.",
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

    onHidePopupLogout(val) {},

    onActionApplyLogout(val) {},

    onHidePopupDelete(val) {},

    async onActionApplyDelete(val) {
      await this.deleteAccountUser();
      localStorage.removeItem("oAuth2Id");
      localStorage.removeItem("tokenId");
      this.$router.push({ path: "/" });
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

    async onActionApplyQuestion(val) {
      debugger;
      await signOut(auth)
        .then(() => {
          const firstName = "";
          this.setFirstName(firstName);
          this.isShowDialogLogout = false;

          // Sign-out successful.
          localStorage.removeItem("oAuth2Id");
        })
        .catch((error) => {
          // An error happened.
        });
      this.$router.replace({ name: "login-page" }).catch(() => {});
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
