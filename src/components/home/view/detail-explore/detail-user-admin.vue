<template>
  <div
    class="w-full h-full relative bg-color-detail pt-2 bg-color-default title-default"
    v-bind:class="{ 'reverse-layout': isArabic }"
  >
    <div class="detail-page w-full h-full relative">
      <div class="bg-image-detail h-4/6 pl-2 pr-2">
        <div class="avatar w-full h-full relative border-image">
          <div
            v-if="isActiveImag"
            class="avatar-url z-8"
            :style="{
              'background-image': `url(${this.userParam?.profiles?.avatars[0]})`,
            }"
          />
          <div
            v-if="!isActiveImag"
            class="pic z-8"
            :style="{
              'background-image': `url(${idImage}
            )`,
            }"
          />
          <div
            v-if="this.userParam?.profiles?.avatars.length > 1"
            class="flex w-full justify-center absolute top-0 content-center p-0.5 border-solid mt-3"
          >
            <button
              v-for="(data, index) in this.userParam?.profiles?.avatars"
              :key="data"
              :id="`avatar_${index}`"
              class="bt-img imageAvatar p-0.5 rounded-lg mr-0.5 no-active"
              @click="onClickNextImage(data)"
            ></button>
          </div>
          <div class="w-full flex bg-opacity absolute top-0 opacity-0 h-full">
            <div class="w-2/4 bg-slate-500" @click="nextImageLeft()"></div>
            <div class="w-2/4 bg-orange-200" @click="nextImageRight()"></div>
          </div>
          <div
            class="icon-close-infor cursor-pointer absolute"
            v-bind:class="[isShowLeft ? 'left-4' : 'right-4']"
            @click="onClickHideProfile()"
          >
            <img src="@/assets/icon/bt_close_infor.svg" class="w-16" />
          </div>
        </div>
      </div>
      <div class="h-2/6 w-full pl-2 pr-2">
        <div class="w-full bg-border-bottom padding-text-user">
          <div class="w-full pl-2 pr-2">
            <div class="flex bh-margin-title">
              <div class="">
                <span class="title-user">{{ this.userParam.fullname }},</span>
                <span
                  class="text-age"
                  v-if="this.userParam.profiles.showAge === true"
                  >&nbsp;{{ bindingAge(this.userParam.dob) }}</span
                >
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
                {{
                  $t(`live_at_{nameAddress}`, {
                    nameAddress: this.userParam.profiles.address,
                  })
                }}
              </div>
            </div>

            <div
              class="flex w-full items-center"
              v-if="this.userParam.profiles.showGender === true"
            >
              <img src="@/assets/icon/ic_gender.svg" alt="" srcset="" />
              <div class="ml-3 padding-describe-option">
                {{ bingGenderLanguage(this.userParam.profiles.gender) }}
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
                    numberKilometers: bindingDistance(
                      this.userParam?.distanceKm
                    ),
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
          <div class="title title-description describe-text pl-2">
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
              {{
                $t(`share_{nameUser}_profile`, {
                  nameUser: this.userParam.fullname,
                })
              }}
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
            {{ $t(`report_{nameUser}`, { nameUser: this.userParam.fullname }) }}
          </div>
        </div>
        <div class="h-2/4"></div>
      </div>
    </div>

    <div
      class="w-full h-24 flex justify-center items-center absolute bottom-8 cursor-pointer"
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
          class="w-super"
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
export default {
  name: "detail-user-admin",

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

  mounted() {},

  methods: {},
};
</script>

<style lang="css" scoped></style>
