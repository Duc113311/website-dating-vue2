<template>
  <div class="w-full h-full title-default">
    <!-- Image -->
    <div class="w-full">
      <my-photos :isShowTitle="true"></my-photos>
    </div>
    <!-- mô tả -->

    <div
      class="flex justify-center text-center w-full mt-4 mb-4 description-no-padding"
    >
      {{
        $t(
          "add_video,_pic_or_logo_toget_4%_closer_to_completing_your_profile_and_you_may_even_get_more_likes"
        )
      }}
    </div>
    <!-- Button add media -->
    <div class="w-full mb-4">
      <BhMedia></BhMedia>
    </div>
    <!-- Smart photo -->
    <!-- <SmartPhoto></SmartPhoto> -->
    <!-- About -->
    <about-page></about-page>
    <!-- interest -->
    <interest-page @onShowPopupInterest="onShowPopupInterest"></interest-page>
    <!--  -->
    <dating-purposes-page
      @onShowFormPurposes="onShowFormPurposes"
    ></dating-purposes-page>
    <!-- Ngôn ngữ tôi biết -->
    <language-page @onShowPopupLanguage="onShowPopupLanguage"></language-page>
    <!-- Thông tin cơ bản -->
    <basic-information-page
      @onShowFormBasicInformation="onShowFormBasicInformation"
    ></basic-information-page>
    <!-- Phong cách sống -->
    <style-of-life @onShowFormLifeStyle="onShowFormLifeStyle"></style-of-life>
    <!-- Chức danh -->
    <job-title-page></job-title-page>
    <!-- Công ty -->
    <company-page></company-page>
    <!-- trường học -->
    <school-page></school-page>
    <address-page></address-page>
    <!-- Instagram -->
    <InstagramPage></InstagramPage>
    <!-- Bài hát -->
    <MyAnthemPage></MyAnthemPage>
    <!-- Spotify -->
    <SpotifyPage></SpotifyPage>
    <!-- Giới tính -->
    <GenderPage></GenderPage>
    <!-- Khuynh hướng tình dục -->
    <sexuals-page></sexuals-page>
    <!-- Control -->
    <control-page></control-page>

    <!-- Sở thích -->
    <div v-if="isShowInterest" class="w-full h-full absolute top-0 left-0 z-30">
      <FormInterest
        @onClickSaveInterest="onClickSaveInterest"
        @onClickHideInterest="onClickHideInterest"
      ></FormInterest>
    </div>
    <!-- Dating purposes -->
    <div class="w-full h-full absolute top-0 left-0 z-30" v-if="isShowPurposes">
      <FormPurposes @onHidePurposes="onHidePurposes"></FormPurposes>
    </div>
    <!-- Language -->
    <div class="w-full h-full absolute top-0 left-0 z-30" v-if="isShowLanguage">
      <FormLanguages @onHideLanguages="onHideLanguages"></FormLanguages>
    </div>
    <!-- thông tin cơ bản -->
    <div
      class="w-full h-full absolute top-0 left-0 z-30"
      v-if="isShowBasicInformation"
    >
      <FormInformation
        @onClickCancelInformation="onClickCancelInformation"
        @onClickSaveInformation="onClickSaveInformation"
        :valueScroll="valueScrollForm"
      ></FormInformation>
    </div>

    <div
      class="w-full h-full absolute top-0 left-0 z-30"
      v-if="isShowLifeStyle"
    >
      <FormLifeStyle
        @onClickSaveLife="onClickSaveLife"
        @onClickCancelLife="onClickCancelLife"
        :valueScroll="valueScrollForm"
      ></FormLifeStyle>
    </div>
  </div>
</template>

<script>
import FormInterest from "./dialog/form-interest";
import FormLifeStyle from "./dialog/form-life-style";
import FormInformation from "./dialog/form-information";
import FormLanguages from "./dialog/form-languages";
import FormPurposes from "./dialog/form-purposes";
import GenderPage from "./property-user/gender-page";
import SpotifyPage from "./property-user/spotify-page";
import MyAnthemPage from "./property-user/my-anthem-page";
import InstagramPage from "./property-user/instagram-page";
// import SmartPhoto from "./property-user/smart-photo-page";
import BhMedia from "../../bh-element-ui/button/bh-media";
import myPhotos from "@/components/create-profiles/my-self/my-photos.vue";
import AboutPage from "./property-user/about-page.vue";
import DatingPurposesPage from "./property-user/dating-purposes-page.vue";
import LanguagePage from "./property-user/language-page.vue";
import BasicInformationPage from "./property-user/basic-information-page.vue";
import StyleOfLife from "./property-user/style-of-life.vue";
import JobTitlePage from "./property-user/job-title-page.vue";
import CompanyPage from "./property-user/company-page.vue";
import SchoolPage from "./property-user/school-page.vue";
import SexualsPage from "./property-user/sexuals-page.vue";
import ControlPage from "./property-user/control-page.vue";
import InterestPage from "./property-user/interest-page.vue";
import AddressPage from "./property-user/address-page.vue";
export default {
  components: {
    FormInterest,
    FormLifeStyle,
    FormInformation,
    FormLanguages,
    FormPurposes,
    GenderPage,
    SpotifyPage,
    MyAnthemPage,
    InstagramPage,
    BhMedia,
    myPhotos,
    AboutPage,
    DatingPurposesPage,
    LanguagePage,
    BasicInformationPage,
    StyleOfLife,
    JobTitlePage,
    CompanyPage,
    SchoolPage,
    SexualsPage,
    ControlPage,
    InterestPage,
    AddressPage,
  },
  name: "from-update",

  data() {
    return {
      isShowInterest: false,
      isShowPurposes: false,
      isShowLanguage: false,
      isShowBasicInformation: false,
      isShowLifeStyle: false,
      valueScrollForm: "scroll_1",
    };
  },

  methods: {
    /**
     * Hiển thị form interest
     * @param {*} val
     */
    onShowPopupInterest(val) {
      this.isShowInterest = val;
    },
    /**
     *Hiển thị from purposes
     * @param {*} val
     */
    onShowFormPurposes(val) {
      this.isShowPurposes = val;
    },
    /**
     * Hiển thị form languages
     * @param {*} val
     */
    onShowPopupLanguage(val) {
      this.isShowLanguage = val;
    },
    /**
     * Hiển thị form basic information
     * @param {*} val
     */
    onShowFormBasicInformation(val) {
      this.isShowBasicInformation = val.isShowForm;
      this.valueScrollForm = val.valueScroll;
    },

    /**
     * Hiển thị form life style
     * @param {*} val
     */
    onShowFormLifeStyle(val) {
      this.isShowLifeStyle = val.isShowForm;
      this.valueScrollForm = val.valueScroll;
    },
    /**
     * Save interest
     * @param {*} val
     */
    onClickSaveInterest(val) {
      this.isShowInterest = val;
    },
    // Action dialog basic information
    onClickCancelInformation(val) {
      this.isShowBasicInformation = val;
    },
    onClickSaveInformation(val) {
      this.isShowBasicInformation = val;
    },

    // Action dialog life of style
    onClickCancelLife(val) {
      this.isShowLifeStyle = val;
    },
    onClickSaveLife(val) {
      this.isShowLifeStyle = val;
    },

    /**
     * Ẩn form interests
     * @param {*} val
     */
    onClickHideInterest(val) {
      this.isShowInterest = val;
    },
    /**
     * Ẩn form purposes
     * @param {*} val
     */
    onHidePurposes(val) {
      this.isShowPurposes = val;
    },
    /**
     * Ẩn form languages
     * @param {*} val
     */
    onHideLanguages(val) {
      this.isShowLanguage = val;
    },
  },
};
</script>

<style lang="css"></style>
