<template>
  <div class="w-full h-full relative p-5" v-loading="loading">
    <div class="w-full h-full title-default">
      <!-- Back -->
      <div
        class="w-full header-edit flex justify-center items-center title-default"
      >
        <div class="w-full flex justify-center items-center">
          <div class="w-1/4">
            <bh-back @onBackComponent="onBackEditProfile"></bh-back>
            <!-- <BhBack @onBackComponent="onBackEditProfile"></BhBack> -->
          </div>
          <div class="ml-20 w-3/4 text-xl">Edit Profile</div>
        </div>
      </div>
      <div class="form-edit overflow-scroll w-full">
        <from-update></from-update>
      </div>

      <div class="w-full">
        <Footer></Footer>
        <!-- <Footer></Footer> -->
      </div>
    </div>
  </div>
</template>

<script>
import fromUpdate from "@/components/profile/edit-profile/from-update.vue";
import BhBack from "@/components/bh-element-ui/button/bh-back.vue";
import Footer from "@/components/layout/footer-home/footer.vue";
import { mapActions, mapMutations } from "vuex";
export default {
  components: { fromUpdate, BhBack, Footer },
  name: "test-edit-page",
  data() {
    return {
      loading: false,
    };
  },

  methods: {
    ...mapMutations(["setCompleteUser"]),

    ...mapActions(["updateProfileUser"]),
    async onBackEditProfile() {
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
      const lengthAbout = user_profile.about.length;
      if (lengthAbout !== 0) {
        completeAbout = 20;
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
      const lengthJobTitle = user_profile.jobTitle.length;
      if (lengthJobTitle !== 0) {
        completeJobTitle = 4;
      }
      const lengthCompany = user_profile.company.length;

      if (lengthCompany !== 0) {
        completeCompany = 4;
      }

      const lengthSchool = user_profile.school.length;

      if (lengthSchool !== 0) {
        completeSchool = 4;
      }

      const lengthAddress = user_profile.address.length;

      if (lengthAddress !== 0) {
        completeAddress = 4;
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
        this.$router.push({ path: "/profile" });
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

.style-switch {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
}

.el-textarea__inner {
  min-height: 140px !important;
  height: 134px !important;
  border-radius: 10px !important;
  font-size: 17px !important;
  padding: 10px !important;
  color: #ffffff !important;
}

.bg-life {
  border-radius: 10px;
  padding: 10px;
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
  padding: 10px !important;
  font-size: 15px !important;
  height: 50px !important;
}

.style-form {
  height: 50px;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
}

.style-bg-common {
  align-items: center;
  padding: 10px;
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
