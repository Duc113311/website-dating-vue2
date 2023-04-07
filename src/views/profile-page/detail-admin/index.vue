<template>
  <div class="home-page w-full h-full relative p-5">
    <div class="w-full h-full z-10">
      <div class="flex w-full items-center header-detail">
        <div class="">
          <BhBack @onBackComponent="onClickBack"></BhBack>
        </div>
        <div class="w-5/6">
          <Header></Header>
        </div>
      </div>

      <div class="body-detail w-full height-scroll overflow-scroll">
        <!-- Avatar -->
        <div class="bg-image-detail h-2/4">
          <div class="avatar w-full h-full relative">
            <div
              v-show="isActiveImag"
              class="avatar-url z-8"
              :style="{
                'background-image': `url(${bindingInforUser.profiles.avatars[0]})`,
              }"
            />
            <div
              v-show="!isActiveImag"
              class="pic z-8 ss"
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
          <div
            class="icon-close-infor cursor-pointer absolute right-4"
            @click="onClickHideProfile()"
          >
            <img src="@/assets/icon/bt_close_infor.svg" class="w-16" />
          </div>
        </div>
        <!-- Information -->
        <div class="w-full">
          <div class="flex w-full items-center">
            <p class="padding-title">
              {{ bindingInforUser.fullname }},
              {{ bindingAge(bindingInforUser.dob) }}
            </p>
            <img src="@/assets/icon/ic_infor.svg" width="30" alt="" />
          </div>

          <div class="flex w-full items-center">
            <i class="fa-sharp fa-solid fa-book-open"></i>
            <div class="ml-3 padding-describe-option">
              {{ bindingInforUser.profiles.jobTitle }}
            </div>
          </div>

          <div class="flex w-full items-center">
            <i class="fa-solid fa-user-graduate"></i>
            <div class="ml-3 padding-describe-option">
              {{ bindingInforUser.profiles.education }}
            </div>
          </div>

          <div class="flex w-full items-center">
            <i class="fa-solid fa-house"></i>
            <div class="ml-3 padding-describe-option">
              {{ bindingInforUser.profiles.address }}
            </div>
          </div>

          <div class="flex w-full items-center">
            <i class="fa-sharp fa-solid fa-user"></i>
            <div class="ml-3 padding-describe-option">
              {{ bindingInforUser.profiles.gender }}
            </div>
          </div>

          <div class="flex w-full items-center">
            <i class="fa-sharp fa-solid fa-location-dot"></i>
            <div class="ml-3 padding-describe-option">
              {{ bindingDistance(bindingInforUser.location) }} km away
            </div>
          </div>
        </div>
        <!-- About me -->

        <div class="p-2">
          <div class="title title-description">About me</div>
          <div class="text-description">
            {{ bindingInforUser?.profiles?.about }}
          </div>

          <div class="w-full bh-margin-description">
            <div
              class="item-option cursor-pointer"
              v-for="item in bindingSexuals"
              :key="item"
            >
              {{ item }}
            </div>
          </div>
        </div>
        <BhHorizontalLine></BhHorizontalLine>
        <div class="p-2">
          <div class="title title-description">Interests</div>

          <div class="w-full bh-margin-description">
            <div
              class="item-option"
              v-for="item in bindingInterest"
              :key="item"
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
import Header from "../../../components/layout/header-home/header";
import BhHorizontalLine from "../../../components/bh-element-ui/input/bh-horizontal-line";
import functionValidate from "../../../middleware/validate.js";

export default {
  components: {
    BhBack,
    Footer,
    Header,
    BhHorizontalLine,
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
    bindingInforUser() {
      return this.$store.state.userModule.user_profile;
    },

    bindingSexuals() {
      const resultData = [];
      const indexData =
        this.$store.state.userModule.user_profile.profiles.orientationSexuals;

      const sexuals = this.$store.state.commonModule.listLifeStyle.sexuals;
      for (let index = 0; index < indexData.length; index++) {
        const element = indexData[index];
        const findIndex = sexuals.find((x) => x.code === element);
        debugger;
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

      const interests = this.$store.state.commonModule.listLifeStyle.interests;
      for (let index = 0; index < indexData.length; index++) {
        const element = indexData[index];
        const findIndex = interests.find((x) => x.code === element);
        debugger;
        if (findIndex) {
          resultData.push(findIndex.value);
        }
      }
      return resultData;
    },
  },

  methods: {
    onClickBack() {
      this.$router.go(-1);
    },
    bindingAge(val) {
      const dataAge = functionValidate.calculatAge(val);
      return dataAge;
    },

    nextImageLeft() {
      const avatar = this.$store.state.userModule.user_profile.profiles.avatars;
      document
        .getElementById(`avatar_` + this.imageActive)
        .classList.remove("active-image");
      if (this.imageActive !== 0) {
        this.imageActive = this.imageActive - 1;
        if (this.imageActive <= avatar.length) {
          this.imageData = avatar[this.imageActive];
        }
        document
          .getElementById(`avatar_` + parseInt(this.imageActive))
          .classList.add("active-image");
        this.isActiveImag = false;
      }
    },

    nextImageRight() {
      debugger;
      const avatar = this.$store.state.userModule.user_profile.profiles.avatars;
      document
        .getElementById(`avatar_` + this.imageActive)
        .classList.remove("active-image");
      this.imageActive = this.imageActive + 1;
      if (this.imageActive <= avatar.length) {
        this.imageData = avatar[this.imageActive];
      }

      document
        .getElementById(`avatar_` + parseInt(this.imageActive))
        .classList.add("active-image");
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

.body-detail {
  height: calc(100% - 20%);
}

.active-image {
  background-color: white !important;
}

.no-active {
  background-color: #ffffff8f;
}
</style>
