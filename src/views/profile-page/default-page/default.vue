<template>
  <div class="w-full h-full relative">
    <div class="height-setting p-3">
      <!-- package -->

      <slider-gold></slider-gold>

      <!-- avatar -->
      <div
        class="flex h-64 justify-center items-center"
        v-bind:class="{ 'reverse-layout': isArabic }"
      >
        <div class="w-full h-full">
          <div class="w-full h-full image-profiles">
            <div>
              <el-progress
                type="dashboard"
                :percentage="percentageIncrease"
                :color="colors"
                :text-inside="true"
                :stroke-width="4"
              >
              </el-progress>
              <div class="flex justify-center relative complete-image">
                <div
                  class="image-avatar"
                  id="image-avatar"
                  @click="onClickShowDetail()"
                ></div>

                <div class="absolute bottom-0 complete-percent">
                  {{ percentageIncrease + "%" }} {{ $t("complete") }}
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center text-2xl title-default mt-3">
            <div class="flex justify-center items-center">
              <div v-truncate="20" class="" :title="nameUser">
                {{ nameUser }}
              </div>
              , {{ ageUser }}
              <img
                src="@/assets/icon/ic_verified_enable.svg"
                width="30"
                class="cursor-pointer"
                @click="onClickVerified"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- Option chose -->
      <div
        v-bind:class="{ 'reverse-layout': isArabic }"
        class="w-full option-setting flex items-center title-default cursor-pointer"
      >
        <div class="item-setting">
          <div
            class="flex justify-center hover-item cursor-pointer"
            @click="onClickSettingDetail()"
          >
            <img
              v-if="colorBt"
              src="@/assets/icon/bt_settings_dark.svg"
              width="100"
              alt=""
            />
            <img
              v-else
              src="@/assets/icon/bt_settings_light.svg"
              width="100"
              alt=""
            />
          </div>
          <div class="mt-2 text-base describe-text">{{ $t("settings") }}</div>
        </div>
        <div class="item-setting mt-24">
          <div
            class="flex justify-center hover-item cursor-pointer"
            @click="onEditProfile()"
          >
            <img
              v-if="colorBt"
              src="@/assets/icon/bt_edit_profile_dark.svg"
              width="100"
              alt=""
            />
            <img
              v-else
              src="@/assets/icon/bt_edit_profile_light.svg"
              width="100"
              alt=""
            />
          </div>
          <div class="mt-2 text-base describe-text">
            {{ $t("edit_profile").toUpperCase() }}
          </div>
        </div>
        <el-tooltip content="Coming soon" placement="top">
          <div class="item-setting">
            <div class="flex justify-center hover-item cursor-pointer">
              <img
                v-if="colorBt"
                src="@/assets/icon/bt_safety_dark.svg"
                width="100"
              />
              <img v-else src="@/assets/icon/bt_safety_light.svg" width="100" />
            </div>
            <div class="mt-2 text-base describe-text">{{ $t("safety") }}</div>
          </div>
        </el-tooltip>
      </div>
    </div>
    <DialogVerified
      @onChangeCancel="onChangeCancel"
      v-show="isShowFormVerified"
    ></DialogVerified>
    <div class="w-full">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import DialogVerified from "../../../components/verified/dialog-verified";
import Footer from "../../../components/layout/footer-home/footer";
import functionValidate from "../../../middleware/validate.js";

// import FormPackages from "../../assets/packages/form-packages";
import SliderGold from "@/components/packages/common/slider-gold.vue";
import { mapActions, mapMutations } from "vuex";

// :style="`background-image:url(${avatarUser})`"
export default {
  components: {
    DialogVerified,
    Footer,
    SliderGold,
  },
  name: "default-page",

  data() {
    return {
      colors: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#f56c6c", percentage: 80 },
        { color: "#f56c6c", percentage: 100 },
      ],

      isShowFormVerified: false,
      // percentage: 80,
      percentageIncrease: 0,
      isShowErrorCamera: false,
    };
  },
  directives: {
    truncate: {
      inserted: function (el, binding) {
        debugger;
        const text = el.innerText;
        const maxLength = binding.value;

        if (text.length > maxLength) {
          el.style.overflow = "hidden";
          el.style.textOverflow = "ellipsis";
          el.style.whiteSpace = "nowrap";
          el.style.width = "200px";
        }
      },
    },
  },
  computed: {
    isArabic() {
      return this.$i18n.locale === "ar"; // Điều chỉnh 'ar' cho ngôn ngữ Ả Rập
    },
    colorBt() {
      return this.$store.state.commonModule.statusLayout;
    },

    percentage() {
      return this.$store.state.userModule.completeUser;
    },
    nameUser() {
      return this.$store.state.userModule.user_profile.fullname;
    },
    avatarUser() {
      debugger;
      return this.$store.state.userModule.user_profile.profiles.avatars[0];
    },

    ageUser() {
      const dob = this.$store.state.userModule.user_profile.dob;
      return this.bindingAge(dob);
    },
  },

  methods: {
    ...mapMutations(["setCompleteUser"]),
    ...mapActions([
      "getDetailProfileByAuthorization",
      "getListLifeStyleCommons",
      "getListInformationBasic",
      "getListLifeStyleStatic",
    ]),
    handleSlideClick(dataset) {
      console.log(dataset.index, dataset.name);
    },

    bindingAge(val) {
      const dataAge = functionValidate.calculatAge(val);
      return dataAge;
    },

    // Show Setting
    onClickSettingDetail() {
      this.$router.push({ path: "/test-setting" });
    },

    // Show Edit
    onEditProfile() {
      this.$router.push({ path: "/test-edit" }).catch(() => {});
    },

    onClickShowDetail() {
      this.$router.push({ path: "/admin" });
    },

    onClickVerified() {
      debugger;
      this.isShowFormVerified = true;
    },

    onChangeCancel(val) {
      this.isShowFormVerified = val;
    },
  },

  created() {},

  async mounted() {
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
      if (lengthAvatar <= 7) {
        completeAvatar = completeAvatar + (lengthAvatar - 1) * 5;
      } else {
        completeAvatar = completeAvatar + (7 - 1) * 5;
      }
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
    await this.setCompleteUser(totalComplete);

    var i = 1;
    var interval = setInterval(() => {
      if (i > parseInt(this.percentage) - 2) {
        clearInterval(interval);
        var interval0 = setInterval(() => {
          if (i > parseInt(this.percentage)) {
            clearInterval(interval0);
            return;
          }
          this.percentageIncrease = i;
          i++;
        }, 200);
        return;
      }
      this.percentageIncrease = i;
      i++;
    }, 20);

    const url = this.$store.state.userModule.user_profile.profiles.avatars[0];
    const img = document.getElementById("image-avatar");
    let bg = "url('" + url + "')";
    img.style.backgroundImage = bg;
    await this.getListLifeStyleCommons();
    await this.getListInformationBasic();
    await this.getListLifeStyleStatic();
    await this.getDetailProfileByAuthorization();
  },
};
</script>

<style lang="css">
.setting-pages {
  background-color: #382e41;
}

.height-setting {
  height: 90%;
}

.gold-package {
  border-radius: 10px;
  height: 27%;
}
.image-profiles {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.border-avatar {
  width: 260px;
  height: 260px;
  overflow: hidden;
  padding: 10px;
  border: 5px solid #fa5c60;
  display: flex;
  justify-content: center;
  border-radius: 144px;
}

.option-setting {
  height: calc(100% - 70%);
  justify-content: center;
  align-items: center;
  text-align: center;
}

.image-avatar {
  background-position: center;
  background-size: cover;
  width: 184px;
  height: 184px;
  border-radius: 140px;
}

.complete-percent {
  width: 70%;
  text-align: center;
  padding: 10px;
  background-color: #fa5c60;
  border-radius: 10px;
  color: #ffffff;
}

.gold-package {
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
}

.gold-package::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}

.dash-packages {
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.VueCarousel-pagination {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

.border-package {
  width: 100%;
  height: 200px;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
}

.VueCarousel-dot {
  padding: 5px !important;
  width: 8px !important;
  height: 8px !important;
}

/**/
.el-progress-circle {
  height: 250px !important;
  width: 225px !important;
}
.el-progress {
  position: absolute !important;
}
.complete-image {
  padding: 20px;
}
</style>
