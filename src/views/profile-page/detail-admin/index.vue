<template>
  <div class="w-full h-full relative title-default">
    <div class="w-full h-full z-10">
      <div class="flex w-full items-center header-detail border-bottom p-4">
        <div class="">
          <BhBack @onBackComponent="onClickBack"></BhBack>
        </div>
        <div class="w-full">
          <div
            class="flex header-page justify-center content-center items-center text-red-400 title-logo"
          >
            <img
              src="@/assets/icon/ic_icon_app.svg"
              class="size-hight mr-3"
              alt=""
            />
            <span class="text-2xl font-semibold">HeartLink</span>
          </div>
        </div>
      </div>

      <div
        class="body-detail w-full height-scroll overflow-scroll p-3"
        v-bind:class="{ 'reverse-layout': isArabic }"
      >
        <!-- Avatar -->
        <div class="bg-image-detail h-detail-admin relative">
          <div class="avatar w-full h-full relative">
            <div
              v-show="isActiveImag"
              class="avatar-detail z-8"
              :style="{
                'background-image': `url(${bingInformationUser.profiles.avatars[0]})`,
              }"
            />
            <div
              v-show="!isActiveImag"
              class="avatar-detail z-8"
              :style="{
                'background-image': `url(${imageData}
              )`,
              }"
            />
            <div
              class="flex w-full justify-center absolute top-0 content-center p-0.5 border-solid mt-3"
            >
              <button
                v-for="(data, index) in bingInformationUser.profiles.avatars"
                :key="data"
                :id="`avatar_${index}`"
                :class="index === 0 ? 'active-image' : 'no-active'"
                class="bt-img imageAvatar p-0.5 rounded-lg mr-0.5 no-active"
                @click="onClickNextImage(data)"
              ></button>
            </div>
            <div class="w-full flex bg-opacity absolute top-0 opacity-0 h-full">
              <div class="w-2/4 bg-slate-500" @click="nextImageLeft()"></div>
              <div class="w-2/4 bg-orange-200" @click="nextImageRight()"></div>
            </div>
          </div>
        </div>
        <!-- Information -->
        <div class="w-full pl-4 pr-4 bg-border-bottom padding-text-user">
          <div class="flex bh-margin-title">
            <div>
              <span class="title-user">{{ bingInformationUser.fullname }}</span>
              <span class="describe-user"
                >, {{ bindingAge(bingInformationUser.dob) }}</span
              >
            </div>
          </div>
          <div
            class="flex w-full items-center"
            v-if="this.bingInformationUser.verifyStatus === true"
          >
            <img src="@/assets/icon/ic_verified_enable.svg" alt="" />
            <div class="ml-3 padding-describe-option-none color-text-verified">
              {{ $t("verified") }}
            </div>
          </div>

          <div
            class="flex w-full items-center"
            v-if="bingInformationUser.profiles.school"
          >
            <img src="@/assets/icon/ic_major.svg" alt="" />
            <div class="ml-3 padding-describe-option-none">
              {{ bingInformationUser.profiles.school }}
            </div>
          </div>

          <div
            class="flex w-full items-center"
            v-if="bingInformationUser.profiles.education"
          >
            <img src="@/assets/icon/ic_university.svg" alt="" srcset="" />
            <div class="ml-3 padding-describe-option-none">
              {{ bindingEducation(bingInformationUser.profiles.education) }}
            </div>
          </div>

          <div
            class="flex w-full items-center"
            v-if="bingInformationUser.profiles.address"
          >
            <img src="@/assets/icon/ic_city_dark.svg" alt="" srcset="" />
            <div class="ml-3 padding-describe-option-none">
              {{ bingInformationUser.profiles.address }}
            </div>
          </div>

          <div class="flex w-full items-center">
            <img src="@/assets/icon/ic_gender.svg" alt="" srcset="" />
            <div class="ml-3 padding-describe-option-none">
              {{ stringToUpperCase(bingInformationUser.profiles.gender) }}
            </div>
          </div>
        </div>
        <!-- About me -->
        <div
          class="w-full bg-border-bottom padding-text-user pl-2 pr-2"
          v-if="aboutValue"
        >
          <div class="title title-description describe-text pl-2">
            {{ bingString($t("about_me")) }}
          </div>
          <div class="text-description">
            {{ bingInformationUser?.profiles?.about }}
          </div>

          <div
            class="w-full bh-margin-description"
            v-if="bingInformationUser.profiles.orientationSexuals.length !== 0"
          >
            <div
              class="item-option border-default"
              v-for="(item, index) in bindingSexuals"
              :key="index"
            >
              {{ item }}
            </div>
          </div>
        </div>
        <!-- Thông tin cơ bản -->

        <div
          class="w-full bg-border-bottom padding-text-user pl-2 pr-2"
          v-if="bingBasicInformation(bingInformationUser.profiles).length !== 0"
        >
          <div class="title pl-2 title-description describe-text">
            Basic information
          </div>

          <div class="w-full bh-margin-description">
            <div
              class="item-option border-default"
              v-for="(item, index) in bingBasicInformation(
                bingInformationUser.profiles
              )"
              :key="index"
            >
              <div class="flex items-center">
                <img class="pr-1 img_ic" :src="item.icDefault" alt="" />
                <span>{{ item.value }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Phong cách sống -->
        <div
          class="w-full bg-border-bottom padding-text-user pl-2 pr-2"
          v-if="bingLifeStyleStatic(bingInformationUser?.profiles).length !== 0"
        >
          <div class="title pl-2 title-description describe-text">
            Style of life
          </div>

          <div class="w-full bh-margin-description">
            <div
              class="item-option border-default"
              v-for="(item, index) in bingLifeStyleStatic(
                bingInformationUser?.profiles
              )"
              :key="index"
            >
              <div class="flex items-center">
                <img class="pr-1 img_ic" :src="item.icDefault" alt="" />
                <span>{{ item.value }}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- interest -->
        <div
          class="w-full bg-border-bottom padding-text-user pl-2 pr-2"
          v-if="bingInformationUser.profiles.interests.length !== 0"
        >
          <div class="title pl-2 title-description describe-text">
            Interests
          </div>

          <div class="w-full bh-margin-description">
            <div
              class="item-option border-default"
              v-for="(item, index) in bindingInterest"
              :key="index"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </div>
      <div class="w-full h-full">
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import BhBack from "../../../components/bh-element-ui/button/bh-back";
import Footer from "../../../components/layout/footer-home/footer";
import functionValidate from "../../../middleware/validate.js";
export default {
  components: {
    BhBack,
    Footer,
  },
  name: "detail-admin",

  data() {
    return {
      isActiveImag: true,

      avatars: [
        "https://firebasestorage.googleapis.com/v0/b/heartlink-dating-project.appspot.com/o/dating%2F03191146-4-anh-gai-xinh-toc-dai.jpeg?alt=media&token=39e512f0-66d4-4fdc-ba6e-23901a9dde7a",
        "https://firebasestorage.googleapis.com/v0/b/heartlink-dating-project.appspot.com/o/dating%2F20210627-vo-thuy-hang-6-835x1254.jpg?alt=media&token=9317e20d-2d81-4970-b6b5-d3872a7b4175",
        "https://firebasestorage.googleapis.com/v0/b/heartlink-dating-project.appspot.com/o/dating%2F8-co-gai-so-huu-voc-dang-dep-chuan-tung-centimet-bfa-5582331.jpg?alt=media&token=f9778a5c-32b1-447b-8a01-8f1add3e6ff5",
      ],

      idImage:
        "https://firebasestorage.googleapis.com/v0/b/heartlink-dating-project.appspot.com/o/dating%2F97989.BQFXN64128f2de44c4.resized.jpeg?alt=media&token=85179e3a-16f9-45ce-ae2d-725bcafd8a32",

      interests: [
        "dancing",
        "electronicMusic",
        "disabilityRights",
        "languageExchange",
        "drawing",
      ],
      about: "Sleeps late and replies late",
      orientationSexuals: ["pansexual", "straight", "queer"],
      imageActive: 0,
      imageData: "",

      icZodiac: require("@/assets/icon-profile/astrological_sign@.png"),
      icFamilyFlan: require("@/assets/icon-profile/kids@1x.png"),
      icLoveStyle: require("@/assets/icon-profile/love_language@1x.png"),
      icEducation: require("@/assets/icon-profile/education@1x.png"),
      icCovidVaccine: require("@/assets/icon-profile/covid_comfort@1x.png"),
      icPersonality: require("@/assets/icon-profile/mbti@1x.png"),
      icCommunicationType: require("@/assets/icon-profile/communication_style@1x.png"),
      icPet: require("@/assets/icon-profile/pets@1x.png"),
      icDrinking: require("@/assets/icon-profile/drink_of_choice@1x.png"),
      icSmoking: require("@/assets/icon-profile/smoking@1x.png"),
      icWorkout: require("@/assets/icon-profile/social_media@1x.png"),
      icDietaryPreference: require("@/assets/icon-profile/appetite@1x.png"),
      icSocialMedia: require("@/assets/icon-profile/social_media@1x.png"),
      icSleepingHabit: require("@/assets/icon-profile/sleeping_habits@1x.png"),
    };
  },

  computed: {
    colorBt() {
      return this.$store.state.commonModule.statusLayout;
    },
    bingInformationUser() {
      debugger;
      return this.$store.state.userModule.user_profile;
    },
    aboutValue() {
      const lengthAbout =
        this.$store.state.userModule.user_profile.profiles.about;
      debugger;
      if (lengthAbout) {
        if (lengthAbout.length !== 0) {
          return true;
        }
      }
      return false;
    },

    isArabic() {
      debugger;
      return this.$i18n.locale === "ar"; // Điều chỉnh 'ar' cho ngôn ngữ Ả Rập
    },
    bindingSexuals() {
      const resultData = [];
      const indexData =
        this.$store.state.userModule.user_profile.profiles.orientationSexuals;

      const sexuals =
        this.$store.state.commonModule.listLifeStyleSingle.sexuals;
      for (let index = 0; index < indexData.length; index++) {
        const element = indexData[index];
        const findIndex = sexuals.find((x) => x.code === element);

        if (findIndex) {
          resultData.push(findIndex.value);
        }
      }
      return resultData;
    },

    bindingInterest() {
      const resultData = [];
      const indexData =
        this.$store.state.userModule.user_profile.profiles.interests;

      const interests =
        this.$store.state.commonModule.listLifeStyleSingle.interests;
      for (let index = 0; index < indexData.length; index++) {
        const element = indexData[index];
        const findIndex = interests.find((x) => x.code === element);

        if (findIndex) {
          resultData.push(findIndex.value);
        }
      }
      return resultData;
    },

    listEducationParams() {
      debugger;
      return this.$store.state.commonModule.listInformationBasic.educations;
    },
  },

  methods: {
    bingBasicInformation(val) {
      const zodiacValue = val.zodiac;
      const familyFlanValue = val.familyFlan;
      const educationValue = val.education;
      const covidVaccineValue = val.covidVaccine;
      const personalityValue = val.personality;
      const communicationTypeValue = val.communicationType;
      const loveStyleValue = val.loveStyle;
      const informationBasic =
        this.$store.state.commonModule.listInformationBasic;
      let resultData = [];
      if (zodiacValue) {
        const findData = informationBasic.zodiacs.find(
          (x) => x.code === zodiacValue
        );
        if (findData) {
          resultData.push({
            icDefault: this.icZodiac,
            value: findData.value,
          });
        }
      }
      if (familyFlanValue) {
        const findData = informationBasic.familyPlans.find(
          (x) => x.code === familyFlanValue
        );
        if (findData) {
          resultData.push({
            icDefault: this.icFamilyFlan,
            value: findData.value,
          });
        }
      }
      if (educationValue) {
        const findData = informationBasic.educations.find(
          (x) => x.code === educationValue
        );
        if (findData) {
          resultData.push({
            icDefault: this.icEducation,
            value: findData.value,
          });
        }
      }
      if (covidVaccineValue) {
        const findData = informationBasic.covidVaccines.find(
          (x) => x.code === covidVaccineValue
        );
        if (findData) {
          resultData.push({
            icDefault: this.icCovidVaccine,
            value: findData.value,
          });
        }
      }
      if (personalityValue) {
        const findData = informationBasic.personalities.find(
          (x) => x.code === personalityValue
        );
        if (findData) {
          resultData.push({
            icDefault: this.icPersonality,
            value: findData.value,
          });
        }
      }
      if (communicationTypeValue) {
        const findData = informationBasic.communicationStyles.find(
          (x) => x.code === communicationTypeValue
        );
        if (findData) {
          resultData.push({
            icDefault: this.icCommunicationType,
            value: findData.value,
          });
        }
      }
      if (loveStyleValue) {
        const findData = informationBasic.loveStyles.find(
          (x) => x.code === loveStyleValue
        );
        if (findData) {
          resultData.push({
            icDefault: this.icLoveStyle,
            value: findData.value,
          });
        }
      }
      return resultData;
    },

    bingLifeStyleStatic(val) {
      const petValue = val.pet;
      const drinkingValue = val.drinking;
      const smokingValue = val.smoking;
      const workoutValue = val.workout;
      const dietaryPreferenceValue = val.dietaryPreference;
      const socialMediaValue = val.socialMedia;
      const sleepingHabitValue = val.sleepingHabit;
      const lifeStyleStatic =
        this.$store.state.commonModule.listLifeStyleStatic;
      let resultData = [];
      if (petValue) {
        const findData = lifeStyleStatic.pets.find((x) => x.code === petValue);
        if (findData) {
          resultData.push({
            icDefault: this.icPet,
            value: findData.value,
          });
        }
      }
      if (drinkingValue) {
        const findData = lifeStyleStatic.drinkings.find(
          (x) => x.code === drinkingValue
        );
        if (findData) {
          resultData.push({
            icDefault: this.icDrinking,
            value: findData.value,
          });
        }
      }
      if (smokingValue) {
        const findData = lifeStyleStatic.smokings.find(
          (x) => x.code === smokingValue
        );
        if (findData) {
          resultData.push({
            icDefault: this.icSmoking,
            value: findData.value,
          });
        }
      }
      if (workoutValue) {
        const findData = lifeStyleStatic.workouts.find(
          (x) => x.code === workoutValue
        );
        if (findData) {
          resultData.push({
            icDefault: this.icWorkout,
            value: findData.value,
          });
        }
      }
      if (dietaryPreferenceValue) {
        const findData = lifeStyleStatic.foodPreferences.find(
          (x) => x.code === dietaryPreferenceValue
        );
        if (findData) {
          resultData.push({
            icDefault: this.icDietaryPreference,
            value: findData.value,
          });
        }
      }
      if (socialMediaValue) {
        const findData = lifeStyleStatic.socials.find(
          (x) => x.code === socialMediaValue
        );
        if (findData) {
          resultData.push({
            icDefault: this.icSocialMedia,
            value: findData.value,
          });
        }
      }
      if (sleepingHabitValue) {
        const findData = lifeStyleStatic.sleepingStyles.find(
          (x) => x.code === sleepingHabitValue
        );
        if (findData) {
          resultData.push({
            icDefault: this.icSleepingHabit,
            value: findData.value,
          });
        }
      }
      return resultData;
    },
    bindingEducation(value) {
      const educations = this.listEducationParams;

      const resultData = educations.find((x) => x.code === value);

      if (resultData) {
        return resultData.value;
      }
    },
    stringToUpperCase(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    onClickBack() {
      this.$router.go(-1);
    },
    bindingAge(val) {
      const dataAge = functionValidate.calculatAge(val);
      return dataAge;
    },

    bingString(val) {
      const stringName = functionValidate.titleCase(val);
      return stringName;
    },

    nextImageLeft() {
      const valueImg = this.bingInformationUser.profiles.avatars;

      if (this.imageActive !== 0) {
        this.imageActive = this.imageActive - 1;

        if (this.imageActive < valueImg.length) {
          document
            .getElementById(`avatar_` + parseInt(this.imageActive + 1))
            .classList.remove("active-image");
          this.imageData = valueImg[this.imageActive];
          document
            .getElementById(`avatar_` + parseInt(this.imageActive))
            .classList.add("active-image");
        }

        this.isActiveImag = false;
      }
    },

    nextImageRight() {
      const valueImg = this.bingInformationUser.profiles.avatars;

      this.imageActive = this.imageActive + 1;

      if (this.imageActive < valueImg.length) {
        document
          .getElementById(`avatar_` + parseInt(this.imageActive - 1))
          .classList.remove("active-image");
        this.imageData = valueImg[this.imageActive];
        document
          .getElementById(`avatar_` + parseInt(this.imageActive))
          .classList.add("active-image");
      } else {
        this.imageActive = this.imageActive - 1;
      }

      this.isActiveImag = false;
    },
    bindingDistance(val) {
      const latAdmin = localStorage.latitude;
      const longAdmin = localStorage.longitude;
      const latUser = val.lat;

      const longUser = val.long;

      const dataDistance = functionValidate.convertDistance(
        latAdmin,
        longAdmin,
        latUser,
        longUser,
        "K"
      );
      if (parseInt(dataDistance.toFixed(0)) === 0) {
        return 1;
      } else {
        return parseInt(dataDistance.toFixed(0));
      }
    },
  },
};
</script>

<style lang="css">
.header-detail {
  height: 10%;
}

.active-image {
  background-color: white !important;
}
.avatar-detail {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
}
.no-active {
  background-color: #ffffff8f;
}

.icon-close-infor {
  bottom: -26px;
}

.h-detail-admin {
  height: 70%;
}
</style>
