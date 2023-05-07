<template>
  <div
    class="w-full h-full relative bg-color-detail bg-color-default title-default"
  >
    <div class="detail-page w-full h-full relative">
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
        <div class="w-full bg-border-bottom padding-text-user pl-2 pr-2">
          <div class="flex bh-margin-title">
            <div class="title-user">
              {{ this.userParam.fullname
              }}<span>, {{ bindingAge(this.userParam.dob) }}</span>
            </div>
            <img src="@/assets/icon/ic_infor.svg" width="30" alt="" />
          </div>
          <div class="describe-user bh-margin-description" v-if="aboutValue">
            {{ userParam.profiles.about }}
          </div>
          <div class="flex bh-margin-description">
            <img src="@/assets/icon/ic_location.svg" alt="" />
            <span>{{ bindingDistance(this.userParam?.location) }} km away</span>
          </div>
        </div>
        <!-- About me -->
        <div
          class="w-full bg-border-bottom padding-text-user pl-2 pr-2"
          v-if="aboutValue"
        >
          <div class="title title-description describe-text">About me</div>
          <div class="text-description">
            {{ userParam.profiles.about }}
          </div>

          <div
            class="w-full bh-margin-description"
            v-if="userParam.profiles.orientationSexuals.length !== 0"
          >
            <div
              class="item-option border-default cursor-pointer"
              v-for="(item, index) in sexualsValue"
              :key="index"
            >
              {{ item }}
            </div>
          </div>
        </div>
        <!-- Interests -->

        <div
          class="w-full bg-border-bottom padding-text-user pl-2 pr-2"
          v-if="userParam.profiles.interests.length !== 0"
        >
          <div class="title pl-2 title-description describe-text">
            Interests
          </div>

          <div class="w-full bh-margin-description">
            <div
              class="item-option border-default cursor-pointer"
              v-for="(item, index) in interestValue"
              :key="index"
            >
              {{ item }}
            </div>
          </div>
        </div>

        <!-- My Anthem -->
        <div class="w-full padding-text-user bg-border-bottom pl-2 pr-2">
          <div class="title title-description describe-text">My Anthem</div>

          <div class="w-full bh-margin-description pt-2">
            <div class="w-full flex justify-between items-center">
              <div class="text-description">
                <div>All Too Well (Taylor's Version)</div>
                <div>Taylor Swift</div>
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
            <i class="fa-regular fa-share-from-square"></i>
            <div class="title-click-ic ml-2">
              SHARE {{ this.userParam.fullname }} PROFILE
            </div>
          </div>
          <div class="flex justify-center title-description describe-text">
            See what a friend thinks
          </div>
        </div>
        <!-- Report -->
        <div
          @click="onClickReport"
          class="flex h-12 w-full justify-center bg-border-bottom items-center cursor-pointer"
        >
          <img src="@/assets/icon/ic_report.svg" width="25" alt="" srcset="" />
          <div class="title-click-ic ml-2">
            REPORT {{ this.userParam.fullname }}
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
          src="@/assets/icon/bt_super_like.svg"
          class="w-20"
          @click="onActionDecide('super')"
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
import functionValidate from "../../../middleware/validate.js";
export default {
  name: "detail-profile",

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
    };
  },

  computed: {
    aboutValue() {
      const lengthAbout =
        this.$store.state.userModule.userProfileDetail.profiles.about;
      debugger;
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
        this.$store.state.userModule.userProfileDetail.profiles.interests;

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
        this.$store.state.userModule.userProfileDetail.profiles
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
      debugger;
      return this.$store.state.userModule.userProfileDetail;
    },
  },

  methods: {
    ...mapMutations(["setUrlNameAvatarUser", "setLeftRightAvatar"]),
    ...mapActions(["getListReasonReportUser"]),
    onActionDecide(val) {
      this.$emit("onActionDecide", val);
    },

    onClickReport() {
      this.$router.push({ path: `/report/${this.userParam._id}` });
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
</style>
