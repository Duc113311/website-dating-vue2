<template>
  <div class="w-full h-full relative" v-loading="loading">
    <div class="w-full h-full title-default">
      <!-- Back -->

      <div
        class="flex w-full items-center header-edit border-bottom p-4 justify-between"
        v-bind:class="{ 'reverse-layout': isArabic }"
      >
        <div class="">
          <BhBack @onBackComponent="onBackEditProfile"></BhBack>
        </div>
        <div class="">
          <div
            class="flex header-page justify-center content-center items-center text-red-400 title-logo"
          >
            <span class="text-age font-semibold">{{
              formatString($t("edit_profile"))
            }}</span>
          </div>
        </div>
        <div
          class="text-left mr-1 title-item font-semibold text-red-400 cursor-pointer"
          @click="onSaveEditProfile"
        >
          {{ this.$t("save") }}
        </div>
      </div>
      <div
        class="form-edit overflow-scroll w-full p-4"
        v-bind:class="{ 'reverse-layout': isArabic }"
      >
        <from-update></from-update>
      </div>

      <!-- <div class="w-full">
        <Footer></Footer>
      </div> -->
    </div>
  </div>
</template>

<script>
import fromUpdate from "@/components/profile/edit-profile/from-update.vue";
import BhBack from "@/components/bh-element-ui/button/bh-back.vue";
// import Footer from "@/components/layout/footer-home/footer.vue";
import functionValidate from "../../../../middleware/validate.js";
import { mapActions, mapMutations } from "vuex";
export default {
  components: { fromUpdate, BhBack },
  name: "test-edit-page",
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
    ...mapMutations(["setCompleteUser", "setLogActionEditProfile"]),

    ...mapActions(["updateProfileUser"]),
    async onBackEditProfile() {
      this.loading = true;

      debugger;
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

      await setTimeout(() => {
        this.loading = false;
        this.setLogActionEditProfile(false);
        this.$router.push({ path: "/profile" }).catch(() => {});
      }, 2000);
    },

    async onSaveEditProfile() {
      this.loading = true;

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

      await setTimeout(() => {
        this.loading = false;
        this.setLogActionEditProfile(false);

        // this.$router.push({ path: "/profile" }).catch(() => {});
      }, 2000);
    },

    formatString(value) {
      return functionValidate.titleCase(value);
    },
  },

  mounted() {
    debugger;
    this.setLogActionEditProfile(true);
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

.el-textarea__inner {
  min-height: 140px !important;
  height: 134px !important;
  border-radius: 10px !important;
  font-size: 17px !important;
  padding: 10px !important;
  color: #ffffff !important;
}

.item-life {
  display: flex;
  /* padding: 12px; */
  padding-bottom: 15px;
  padding-top: 15px;
}
.item-life-end {
  display: flex;
  /* padding: 12px; */
  padding-bottom: 15px;
  padding-top: 15px;
}

.el-input__inner {
  border-radius: 10px !important;
  padding: 15px !important;
  font-size: 15px !important;
}

.style-bg-common {
  align-items: center;
  padding: 15px;
  border-radius: 10px;
}

.style-package {
  padding: 5px;
  width: 138px;
  display: flex;
  justify-content: center;
  border: 1px solid #8fada5;
  border-radius: 4px;
  background-color: #8fada5;
  color: #ffffff;
}

.h-data-life::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.h-data-life {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.el-loading-spinner {
  display: flex;
  justify-content: center;
}

.style-inter-setting {
  width: 28rem;
  overflow: hidden;
  height: 50px;
  display: flex;
  align-items: center;
}
</style>
