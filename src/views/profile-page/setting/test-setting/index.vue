<template>
  <div class="w-full h-full relative p-5" v-loading="loading">
    <div
      class="w-full h-full title-default"
      v-bind:class="{ 'reverse-layout': isArabic }"
    >
      <!-- Back -->
      <div class="w-full header-edit flex justify-center items-center">
        <div class="w-full flex items-center">
          <div class="">
            <BhBack @onBackComponent="onBackEditProfile"></BhBack>
            <!-- <BhBack @onBackComponent="onBackEditProfile"></BhBack> -->
          </div>
          <div class="w-full text-xl text-center">{{ $t("settings") }}</div>
        </div>
      </div>

      <div class="form-edit overflow-scroll w-full">
        <FromSetting></FromSetting>
        <!--  -->
      </div>

      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from "../../../../components/layout/footer-home/footer";
import BhBack from "../../../../components/bh-element-ui/button/bh-back";
import FromSetting from "../../../../components/profile/setting/from-setting";
import { mapActions } from "vuex";
export default {
  components: {
    Footer,
    BhBack,
    FromSetting,
  },
  name: "test-setting-page",

  data() {
    return {
      loading: false,
    };
  },

  computed: {
    isArabic() {
      return this.$i18n.locale === "ar"; // Điều chỉnh 'ar' cho ngôn ngữ Ả Rập
    },
  },

  methods: {
    ...mapActions(["updateSettingUser"]),
    async onBackEditProfile() {
      this.loading = true;

      const setting = this.$store.state.userModule.user_profile.settings;
      await this.updateSettingUser(setting);

      await setTimeout(() => {
        this.loading = false;
        this.$router.go(-1);
      }, 2000);
    },
  },
};
</script>

<style lang="css">
.bg-theme {
  background-color: #242a38;
}

.header-edit {
  height: 8%;
}
.form-edit {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  overflow-y: scroll; /* Add the ability to scroll */
  height: 84%;
}

.form-edit::-webkit-scrollbar {
  display: none;
}
</style>
