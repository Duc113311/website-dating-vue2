<template>
  <div class="w-full h-full">
    <!-- Image -->
    <div class="w-full">
      <my-photos :isShowTitle="true"></my-photos>
    </div>
    <!-- mô tả -->

    <div
      class="flex justify-center text-center w-full mt-4 mb-4 description-no-padding"
    >
      Add video, pic or logo toget 4% closer to completing your profile and you
      may even get more likes
    </div>
    <!-- Button add media -->
    <div class="w-full mb-4">
      <BhMedia></BhMedia>
    </div>
    <!-- Smart photo -->
    <SmartPhoto></SmartPhoto>
    <!-- About -->
    <about-page></about-page>
    <!-- Mục đích hẹn hò -->
    <dating-purposes-page></dating-purposes-page>
    <!-- Ngôn ngữ tôi biết -->
    <language-page></language-page>
    <!-- Thông tin cơ bản -->
    <basic-information-page></basic-information-page>
    <!-- Phong cách sống -->
    <style-of-life></style-of-life>
    <!-- Chức danh -->
    <job-title-page></job-title-page>
    <!-- Công ty -->
    <company-page></company-page>
    <!-- trường học -->
    <school-page></school-page>
    <!-- Đang sống tại -->
    <living-page></living-page>
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
  </div>
</template>

<script>
import GenderPage from "./property-user/gender-page";
import SpotifyPage from "./property-user/spotify-page";
import MyAnthemPage from "./property-user/my-anthem-page";
import InstagramPage from "./property-user/instagram-page";
import SmartPhoto from "./property-user/smart-photo-page";
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
import LivingPage from "./property-user/living-page.vue";
import SexualsPage from "./property-user/sexuals-page.vue";
import ControlPage from "./property-user/control-page.vue";
export default {
  components: {
    GenderPage,
    SpotifyPage,
    MyAnthemPage,
    InstagramPage,
    SmartPhoto,
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
    LivingPage,
    SexualsPage,
    ControlPage,
  },
  name: "from-update",

  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="css"></style>
