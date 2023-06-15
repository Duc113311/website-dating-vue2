<template>
  <div
    v-bind:class="{ 'reverse-layout': isArabic }"
    class="w-full bottom-0 right-0 border-top footer-body flex justify-center bg-color-default content-center text-center cursor-pointer"
  >
    <div @click="onClickHome()">
      <i class="fa-solid fa-heart icon-color"></i>
    </div>
    <div @click="onClickExplore()">
      <i class="fa-solid fa-magnifying-glass icon-color"></i>
    </div>
    <div @click="onClickLikeTopic()">
      <i class="fa-solid fa-hand-holding-heart icon-color"></i>
    </div>
    <div @click="onClickMessage()">
      <i class="fa-solid fa-message icon-color"></i>
    </div>
    <div @click="onClickProfile()">
      <i class="fa-solid fa-user icon-color"></i>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  name: "footer-page",

  setup() {
    return;
  },

  data() {
    return {};
  },

  computed: {
    isActiveFooter() {
      return true;
    },
    isArabic() {
      return this.$i18n.locale === "ar"; // Điều chỉnh 'ar' cho ngôn ngữ Ả Rập
    },
  },

  methods: {
    ...mapMutations(["setCompleteUser"]),

    ...mapActions(["updateProfileUser"]),
    async onSaveEditProfile() {
      let completeAvatar = 3;
      let completeAbout = 0;
      let completeInterest = 0;
      let completeDatingPurpose = 0;
      let completeLanguages = 0;
      let completeLifeStyle = 0;
      let completeBasicInformation = 0;
      let completeJobTitle = 0;
      let completeCompany = 0;
      let completeSchool = 0;
      let completeAddress = 0;
      let totalComplete = 0;
      const user_profile = this.$store.state.userModule.user_profile.profiles;
      const lengthAvatar = user_profile.avatars.length; // ảnh
      if (lengthAvatar === 1) {
        completeAvatar = parseInt(3);
      } else {
        completeAvatar = completeAvatar + (lengthAvatar - 1) * 5;
      }
      const lengthAbout = user_profile.about;
      if (lengthAbout !== null) {
        if (lengthAbout.length !== 0) {
          completeAbout = 20;
        }
      }

      const lengthInterests = user_profile.interests.length;
      if (lengthInterests !== 0) {
        completeInterest = 15;
      }
      const lengthDatingPurpose = user_profile.datingPurpose.length;
      if (lengthDatingPurpose !== 0) {
        completeDatingPurpose = 4;
      }
      const lengthLanguage = user_profile.languages.length;
      if (lengthLanguage !== 0) {
        completeLanguages = 4;
      }
      // Basic information
      if (
        (user_profile.zodiac.length ||
          user_profile.familyFlan.length ||
          user_profile.education.length ||
          user_profile.covidVaccine.length ||
          user_profile.personality.length ||
          user_profile.communicationType.length ||
          user_profile.loveStyle.length) !== 0
      ) {
        completeBasicInformation = 4;
      }
      // life of style
      if (
        (user_profile.pet.length ||
          user_profile.drinking.length ||
          user_profile.smoking.length ||
          user_profile.workout.length ||
          user_profile.dietaryPreference.length ||
          user_profile.socialMedia.length ||
          user_profile.sleepingHabit.length) !== 0
      ) {
        completeLifeStyle = 4;
      }
      const lengthJobTitle = user_profile.jobTitle;
      if (lengthJobTitle !== null) {
        if (lengthJobTitle.length !== 0) {
          completeJobTitle = 4;
        }
      }

      const lengthCompany = user_profile.company;

      if (lengthCompany !== null) {
        if (lengthCompany.length !== 0) {
          completeCompany = 4;
        }
      }

      const lengthSchool = user_profile.school;
      if (lengthSchool !== null) {
        if (lengthSchool.length !== 0) {
          completeSchool = 4;
        }
      }

      const lengthAddress = user_profile.address;
      if (lengthAddress !== null) {
        if (lengthAddress.length !== 0) {
          completeAddress = 4;
        }
      }

      totalComplete =
        totalComplete +
        ((completeAvatar +
          completeAbout +
          completeInterest +
          completeDatingPurpose +
          completeLanguages +
          completeLifeStyle +
          completeBasicInformation +
          completeJobTitle +
          completeCompany +
          completeAddress +
          completeSchool) *
          100) /
          100;
      this.setCompleteUser(totalComplete);
      await this.updateProfileUser(user_profile);
    },
    onClickHome() {
      debugger;
      if (this.$store.state.commonModule.actionEditProfile) {
        this.onSaveEditProfile();
      }

      this.$router.push({ path: "/home" }).catch(() => {});
    },

    onClickExplore() {
      if (this.$store.state.commonModule.actionEditProfile) {
        this.onSaveEditProfile();
      }
      this.$router.push({ path: "/explore" }).catch(() => {});
    },

    onClickLikeTopic() {
      if (this.$store.state.commonModule.actionEditProfile) {
        this.onSaveEditProfile();
      }
      this.$router
        .push({
          path: "/like-topic",
        })
        .catch(() => {});
    },

    onClickMessage() {
      if (this.$store.state.commonModule.actionEditProfile) {
        this.onSaveEditProfile();
      }
      this.$router.push({ path: "/message" }).catch(() => {});
    },

    onClickProfile() {
      if (this.$store.state.commonModule.actionEditProfile) {
        this.onSaveEditProfile();
      }
      this.$router.push({ path: "/profile" }).catch(() => {});
    },
  },

  mounted() {
    if (this.$route.name === "home-default-page") {
      document
        .getElementsByClassName("fa-heart")[0]
        .classList.add("icon-active");
    }
    if (this.$route.name === "category-page-topic") {
      document
        .getElementsByClassName("fa-magnifying-glass")[0]
        .classList.add("icon-active");
    }
    if (this.$route.name === "you-like-action") {
      document
        .getElementsByClassName("fa-hand-holding-heart")[0]
        .classList.add("icon-active");
    }
    if (this.$route.name === "dashboard-chat") {
      document
        .getElementsByClassName("fa-message")[0]
        .classList.add("icon-active");
    }
    if (
      this.$route.name === "default-page" ||
      this.$route.name === "setting" ||
      this.$route.name === "edit-profile" ||
      this.$route.name === "test-edit-page" ||
      this.$route.name === "test-setting-page" ||
      this.$route.name === "detail-admin"
    ) {
      document
        .getElementsByClassName("fa-user")[0]
        .classList.add("icon-active");
    }
  },
};
</script>

<style lang="css">
.footer-body {
  height: calc(100% - 90%);
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
  position: absolute;
  bottom: 0;
}
.icon-color {
  color: #5f6a86;
}
.icon-color:hover {
  opacity: 0.8;
}
.icon-active {
  color: #fd5d65;
}
</style>
