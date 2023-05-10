<template>
  <div class="w-full h-full relative title-default">
    <div class="w-full h-full z-10">
      <div class="flex w-full items-center header-detail border-bottom p-8">
        <div class="">
          <BhBack @onBackComponent="onClickBack"></BhBack>
        </div>
        <div class="w-5/6">
          <div
            class="flex header-page justify-center content-center items-center text-red-400 title-logo"
          >
            <img
              src="@/assets/icon/ic_icon_app.svg"
              class="size-hight mr-3"
              alt=""
            />
            <span class="text-2xl font-semibold">heartlink</span>
          </div>
        </div>
      </div>

      <div class="body-detail w-full height-scroll overflow-scroll p-3">
        <!-- Avatar -->
        <div class="bg-image-detail h-detail-admin relative">
          <div class="avatar w-full h-full relative">
            <div
              v-show="isActiveImag"
              class="avatar-detail z-8"
              :style="{
                'background-image': `url(${bindingInforUser.profiles.avatars[0]})`,
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
                v-for="(data, index) in bindingInforUser.profiles.avatars"
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
            <div class="title-user">
              {{ bindingInforUser.fullname
              }}<span>, {{ bindingAge(bindingInforUser.dob) }}</span>
            </div>
            <img
              v-if="colorBt"
              src="@/assets/icon/ic_infor_dark.svg"
              width="30"
              alt=""
            />
            <img
              v-else
              src="@/assets/icon/ic_infor_light.svg"
              width="30"
              alt=""
            />
          </div>

          <div class="flex w-full items-center">
            <i class="fa-solid fa-book-open bh-chevron-right text-xl"></i>
            <div class="ml-3 padding-describe-option">
              {{
                bindingInforUser.profiles.school
                  ? bindingInforUser.profiles.school
                  : "Information of technology"
              }}
            </div>
          </div>

          <div class="flex w-full items-center">
            <i class="fa-solid fa-user-graduate bh-chevron-right text-xl"></i>
            <div class="ml-4 padding-describe-option">
              {{ bindingEducation(bindingInforUser.profiles.education) }}
            </div>
          </div>

          <div class="flex w-full items-center">
            <i class="fa-solid fa-house bh-chevron-right text-xl"></i>
            <div class="ml-3 padding-describe-option">
              {{
                bindingInforUser.profiles.address
                  ? bindingInforUser.profiles.address
                  : "Lives in Hanoi"
              }}
            </div>
          </div>

          <div class="flex w-full items-center">
            <i class="fa-solid fa-icons fa-fw bh-chevron-right text-xl"></i>
            <div class="ml-3 padding-describe-option">
              {{ stringToUpperCase(bindingInforUser.profiles.gender) }}
            </div>
          </div>
        </div>
        <!-- About me -->
        <div
          class="w-full bg-border-bottom padding-text-user pl-2 pr-2"
          v-if="aboutValue"
        >
          <div class="title title-description describe-text">About me</div>
          <div class="text-description">
            {{ bindingInforUser?.profiles?.about }}
          </div>

          <div
            class="w-full bh-margin-description"
            v-if="bindingInforUser.profiles.orientationSexuals.length !== 0"
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
        <!-- interest -->
        <div
          class="w-full bg-border-bottom padding-text-user pl-2 pr-2"
          v-if="bindingInforUser.profiles.interests.length !== 0"
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
    };
  },

  computed: {
    colorBt() {
      return this.$store.state.commonModule.statusLayout;
    },
    bindingInforUser() {
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

    nextImageLeft() {
      const valueImg = this.bindingInforUser.profiles.avatars;

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
      const valueImg = this.bindingInforUser.profiles.avatars;

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
  height: 12%;
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
