<template>
  <div
    class="w-full h-full relative bg-color-detail pt-2 bg-color-default title-default"
  >
    <div
      class="detail-page w-full h-full relative"
      v-bind:class="{ 'reverse-layout': isArabic }"
    >
      <div class="bg-image-detail h-2/4 pl-2 pr-2">
        <div class="avatar w-full h-full relative border-image">
          <div
            v-show="isActiveImag"
            class="avatar-url z-8"
            :style="{
              'background-image': `url(${this.userParam?.profiles?.avatars[0]})`,
            }"
          />
          <div
            v-show="!isActiveImag"
            class="pic z-8"
            :style="{
              'background-image': `url(${idImage}
            )`,
            }"
          />
          <div
            class="flex w-full justify-center absolute top-0 content-center p-0.5 border-solid mt-3"
          >
            <button
              v-for="(data, index) in this.userParam?.profiles?.avatars"
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
          <div
            class="icon-close-infor cursor-pointer absolute right-4"
            @click="onClickHideProfile()"
          >
            <img src="@/assets/icon/bt_close_infor.svg" class="w-16" />
          </div>
        </div>
      </div>
      <div class="h-2/4 w-full pl-2 pr-2">
        <div class="w-full bg-border-bottom padding-text-user">
          <div class="w-full pl-2 pr-2">
            <div class="flex bh-margin-title">
              <div class="flex items-center">
                <div
                  class="title-user"
                  :class="[isNameLength ? `w-ellipsis` : `not-w-ellipsis`]"
                >
                  {{ this.userParam.fullname }}
                </div>
                <div
                  class="describe-user pt-2"
                  v-if="this.userParam.profiles.showAge === true"
                >
                  , {{ bindingAge(this.userParam.dob) }}
                </div>
              </div>
            </div>
            <div
              class="flex w-full items-center"
              v-if="this.userParam.verifyStatus === true"
            >
              <img src="@/assets/icon/ic_verified_enable.svg" alt="" />
              <div class="ml-3 padding-describe-option color-text-verified">
                {{ $t("verified") }}
              </div>
            </div>
            <div
              class="flex w-full items-center"
              v-if="this.userParam.profiles.school"
            >
              <img src="@/assets/icon/ic_major.svg" alt="" />
              <div class="ml-3 padding-describe-option">
                {{ this.userParam.profiles.school }}
              </div>
            </div>

            <div
              class="flex w-full items-center"
              v-if="this.userParam.profiles.education"
            >
              <img src="@/assets/icon/ic_university.svg" alt="" srcset="" />
              <div class="ml-3 padding-describe-option">
                {{ bindingEducation(this.userParam.profiles.education) }}
              </div>
            </div>

            <div
              class="flex w-full items-center"
              v-if="this.userParam.profiles.address"
            >
              <img src="@/assets/icon/ic_city_dark.svg" alt="" srcset="" />
              <div class="ml-3 padding-describe-option">
                {{ this.userParam.profiles.address }}
              </div>
            </div>

            <div
              class="flex w-full items-center"
              v-if="this.userParam.profiles.showGender === true"
            >
              <img src="@/assets/icon/ic_gender.svg" alt="" srcset="" />
              <div class="ml-3 padding-describe-option">
                {{ stringToUpperCase(this.userParam.profiles.gender) }}
              </div>
            </div>

            <div
              class="flex w-full items-center"
              v-if="this.userParam.profiles.showDistance === true"
            >
              <img src="@/assets/icon/ic_location_light.svg" alt="" />
              <div class="ml-3 padding-describe-option">
                {{
                  $t(`{numberKilometers}_{unit}_away`, {
                    numberKilometers: bindingDistance(this.userParam?.location),
                    unit: kilometer,
                  })
                }}
              </div>
            </div>
          </div>
        </div>
        <!-- About me -->
        <div
          class="w-full bg-border-bottom padding-text-user pl-2 pr-2"
          v-if="aboutValue"
        >
          <div class="title title-description describe-text">
            {{ stringName($t("about_me")) }}
          </div>
          <div class="text-description">
            {{ userParam.profiles.about }}
          </div>

          <div
            class="w-full bh-margin-description"
            v-if="
              userParam.profiles.orientationSexuals.length !== 0 &&
              userParam.profiles.showSexual === true
            "
          >
            <div
              class="item-option border-default"
              v-for="(item, index) in sexualsValue"
              :key="index"
            >
              {{ item }}
            </div>
          </div>
        </div>
        <!-- Thông tin cơ bản -->
        <div
          class="w-full bg-border-bottom padding-text-user pl-2 pr-2"
          v-if="bingBasicInformation(userParam.profiles).length !== 0"
        >
          <div class="title title-description describe-text">
            {{ stringName($t("basic_information")) }}
          </div>

          <div class="w-full bh-margin-description">
            <div
              class="item-option border-default"
              v-for="(item, index) in bingBasicInformation(userParam.profiles)"
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
          v-if="bingLifeStyleStatic(userParam.profiles).length !== 0"
        >
          <div class="title title-description describe-text">
            {{ $t("style_of_life") }}
          </div>

          <div class="w-full bh-margin-description">
            <div
              class="item-option border-default"
              v-for="(item, index) in bingLifeStyleStatic(userParam.profiles)"
              :key="index"
            >
              <div class="flex items-center">
                <img class="pr-1 img_ic" :src="item.icDefault" alt="" />
                <span>{{ item.value }}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- Interests -->
        <div
          class="w-full bg-border-bottom padding-text-user pl-2 pr-2"
          v-if="userParam.profiles.interests.length !== 0"
        >
          <div class="title title-description describe-text">
            {{ $t("interests") }}
          </div>

          <div class="w-full bh-margin-description">
            <div
              class="item-option border-default"
              v-for="(item, index) in interestValue"
              :key="index"
            >
              {{ item }}
            </div>
          </div>
        </div>

        <!-- My Anthem -->
        <div class="w-full padding-text-user bg-border-bottom pl-2 pr-2">
          <div class="title title-description describe-text">
            {{ stringName($t("my_anthem")) }}
          </div>

          <div class="w-full bh-margin-description pt-2">
            <div class="w-full flex justify-between items-center">
              <div class="text-description">
                <div>{{ $t("all_too_well_(taylor's_version)") }}</div>
                <div>{{ $t("taylor_swift") }}</div>
              </div>
              <div class="w-my-anthem">
                <img
                  src="@/assets/image-dating/7-15831080159232071706060.webp"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          class="items-center padding-text-user bg-border-bottom bh-margin-title"
        >
          <div class="flex justify-center items-center cursor-pointer">
            <div class="title-click-ic ml-2">
              <div class="flex justify-center items-center">
                <div>{{ $t("share") }}</div>
                &nbsp;
                <div
                  :class="[isNameLength ? `w-ellipsis` : `not-w-ellipsis`]"
                  :title="this.userParam.fullname"
                >
                  {{ this.userParam.fullname }}
                </div>
                &nbsp;
                <div>{{ $t("profile") }}</div>
              </div>
            </div>
          </div>
          <div class="flex justify-center title-description describe-text">
            {{ $t("see_what_a_friend_thinks") }}
          </div>
        </div>
        <!-- Report -->
        <div
          @click="onClickReport"
          class="flex h-12 w-full justify-center bg-border-bottom items-center cursor-pointer"
        >
          <img
            v-if="colorBt"
            src="@/assets/icon/ic_report_dark.svg"
            width="25"
            alt=""
            srcset=""
          />

          <img
            v-else
            src="@/assets/icon/ic_report_light.svg"
            width="25"
            alt=""
            srcset=""
          />
          <div class="title-click-ic ml-2">
            <div class="flex justify-center items-center">
              <div>{{ $t("report") }}</div>
              &nbsp;
              <div
                :class="[isNameLength ? `w-ellipsis` : `not-w-ellipsis`]"
                :title="this.userParam.fullname"
              >
                {{ this.userParam.fullname }}
              </div>
            </div>
          </div>
        </div>
        <div class="h-2/4"></div>
      </div>
    </div>

    <div
      class="w-full h-24 flex justify-center items-center absolute bottom-16 cursor-pointer"
    >
      <div>
        <img
          src="@/assets/icon/bt_nope.svg"
          class="w-20"
          @click="onActionDecide('nope')"
        />
      </div>

      <div>
        <img
          src="@/assets/icon/bt_like.svg"
          class="w-20"
          @click="onActionDecide('like')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import functionValidate from "../../../../middleware/validate.js";
export default {
  name: "detail-user-like-topic",

  data() {
    return {
      btUrlImage: [
        {
          id: 1,
          urlName: "ssd",
        },
        {
          id: 2,
          urlName: "ssd",
        },
        {
          id: 3,
          urlName: "ssd",
        },
        {
          id: 4,
          urlName: "ssd",
        },
        {
          id: 5,
          urlName: "ssd",
        },
        {
          id: 6,
          urlName: "ssd",
        },
        {
          id: 7,
          urlName: "ssd",
        },
        {
          id: 8,
          urlName: "ssd",
        },
        {
          id: 9,
          urlName: "ssd",
        },
      ],
      isActiveImag: true,

      sexuals: ["Gay", "Lesbian", "Demisexual", "Pansexual"],
      interests: ["Ice-scream", "Reading", "Cars", "Music", "Dogs"],

      idImage: "",
      imageActive: 0,
      listEducation:
        this.$store.state.commonModule.listInformationBasic.educations,
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
    isArabic() {
      return this.$i18n.locale === "ar"; // Điều chỉnh 'ar' cho ngôn ngữ Ả Rập
    },

    isNameLength() {
      debugger;
      const nameLength =
        this.$store.state.likeTopicModule.informationUserLike.fullname;

      return nameLength.length > 20 ? true : false;
    },
    kilometer() {
      return localStorage.getItem("unit") ? localStorage.getItem("unit") : "km";
    },
    colorBt() {
      return this.$store.state.commonModule.statusLayout;
    },
    aboutValue() {
      const lengthAbout =
        this.$store.state.likeTopicModule.informationUserLike.profiles.about;

      if (lengthAbout) {
        if (lengthAbout.length !== 0) {
          return true;
        }
      }
      return false;
    },

    interestValue() {
      let data = [];
      const listInterest =
        this.$store.state.commonModule.listLifeStyleSingle.interests;

      const listInterestItem =
        this.$store.state.likeTopicModule.informationUserLike.profiles
          .interests;

      for (let index = 0; index < listInterestItem.length; index++) {
        const element = listInterestItem[index];

        const findData = listInterest.find((x) => x.code === element);
        if (findData) {
          data.push(findData.value);
        }
      }

      return data;
    },

    sexualsValue() {
      let data = [];
      const listSexuals =
        this.$store.state.commonModule.listLifeStyleSingle.sexuals;

      const listSexualsItem =
        this.$store.state.likeTopicModule.informationUserLike.profiles
          .orientationSexuals;

      for (let index = 0; index < listSexualsItem.length; index++) {
        const element = listSexualsItem[index];

        const findData = listSexuals.find((x) => x.code === element);
        if (findData) {
          data.push(findData.value);
        }
      }

      return data;
    },
    userParam() {
      return this.$store.state.likeTopicModule.informationUserLike;
    },
  },

  methods: {
    ...mapMutations(["setUrlNameAvatarUser", "setLeftRightAvatar"]),
    ...mapActions(["getListReasonReportUser"]),
    onActionDecide(val) {
      this.$emit("onActionDecide", val);
    },

    stringToUpperCase(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },

    bindingEducation(value) {
      const educations = this.listEducation;

      const resultData = educations.find((x) => x.code === value);

      if (resultData) {
        return resultData.value;
      }
    },
    onClickReport() {
      this.$router.push({ path: `/report/${this.userParam._id}` });
    },

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
    stringName(value) {
      return functionValidate.titleCase(value);
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

    bindingDistance(val) {
      const latAdmin = localStorage.latitude;
      const longAdmin = localStorage.longitude;
      const latUser = val?.lat ? val?.lat : "21.0012507";

      const longUser = val?.long ? val?.long : "105.7938183";

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

    bindingAge(val) {
      const dataAge = functionValidate.calculatAge(val);
      return dataAge;
    },

    nextImageLeft() {
      const valueImg = this.userParam.profiles.avatars;

      if (this.imageActive !== 0) {
        this.imageActive = this.imageActive - 1;

        if (this.imageActive < valueImg.length) {
          document
            .getElementById(`avatar_` + parseInt(this.imageActive + 1))
            .classList.remove("active-image");
          this.idImage = valueImg[this.imageActive];
          document
            .getElementById(`avatar_` + parseInt(this.imageActive))
            .classList.add("active-image");
        }

        this.isActiveImag = false;
      }
    },

    nextImageRight() {
      const valueImg = this.userParam.profiles.avatars;

      this.imageActive = this.imageActive + 1;

      if (this.imageActive < valueImg.length) {
        document
          .getElementById(`avatar_` + parseInt(this.imageActive - 1))
          .classList.remove("active-image");
        this.idImage = valueImg[this.imageActive];
        document
          .getElementById(`avatar_` + parseInt(this.imageActive))
          .classList.add("active-image");
      } else {
        this.imageActive = this.imageActive - 1;
      }

      this.isActiveImag = false;
    },

    onClickSupperLike() {},

    onClickLike() {},

    onClickNextImage(val) {
      console.log(val);
      this.setUrlNameAvatarUser(val);
    },

    onClickHideProfile() {
      this.$emit("onHideProfile", false);
    },
  },

  async created() {
    await this.getListReasonReportUser();
  },
};
</script>

<style lang="css">
.bg-color-detail {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.detail-page {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  overflow-y: scroll; /* Add the ability to scroll */
}

.avatar-url {
  width: 100%;
  height: 100%;
  background-repeat: repeat;
  background-position: 0px -39px;
  background-size: cover;
  border-radius: 10px;
}

.detail-page::-webkit-scrollbar {
  display: none;
}

.mb-descript {
  border-top: 2px solid #353b4b;
}

.bt-like-count {
  top: 60%;
}

.number-like {
  padding: 10px 19px;
  font-size: 32px;
}

.active-image {
  background-color: white !important;
}

.no-active {
  background-color: #ffffff8f;
}

.icon-close-infor {
  bottom: -26px;
}

.w-my-anthem {
  width: 70px;
  height: 70px;
  border-radius: 10px;
  border: none;
  overflow: hidden;
}

.w-super {
  width: 4.5rem;
}

.w-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 340px;
}
</style>
