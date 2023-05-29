<template>
  <div class="w-full h-full relative title-default" v-loading="loading">
    <!--  -->
    <div class="w-full h-full" v-if="isShowCrop">
      <div
        class="flex w-full items-center header-edit border-bottom p-4"
        v-bind:class="{ 'reverse-layout': isArabic }"
      >
        <div class="">
          <BhBack @onBackComponent="onBackMedia"></BhBack>
        </div>
        <div class="w-full">
          <div
            class="flex header-page justify-center content-center items-center text-red-400 title-logo"
          >
            <span class="text-2xl font-semibold mr-1">{{
              $t("create_new")
            }}</span>
          </div>
        </div>
      </div>

      <div class="w-full body-crop-tow">
        <ChoseImage @onChangeImageCrop="onChangeImageCrop"></ChoseImage>
      </div>
    </div>

    <div class="w-full h-full" v-if="!isShowCrop">
      <div
        class="w-full header-edit border-bottom flex justify-center items-center"
      >
        <div class="w-full flex justify-center items-center p-5">
          <div class="w-1/4">
            <BhBack></BhBack>
          </div>
          <div class="text-center w-3/4 title-detail-explore">
            {{ $t("photo") }}
          </div>
          <div
            class="w-1/4 text-right title-click cursor-pointer"
            @click="onClickSaveImageCrop"
          >
            {{ $t("done") }}
          </div>
        </div>
      </div>
      <div class="w-full body-crop-tow p-5">
        <CropImage ref="cropImages" :selectedFile="selectedFile"></CropImage>
      </div>
    </div>
  </div>
</template>

<script>
import CropImage from "../../../../components/profile/edit-profile/crop-media/crop-image";
import ChoseImage from "../../../../components/profile/edit-profile/crop-media/chose-image";
import BhBack from "../../../../components/bh-element-ui/button/bh-back";
export default {
  components: {
    CropImage,
    ChoseImage,
    BhBack,
  },
  name: "media-user-crop",

  data() {
    return {
      isShowCrop: true,
      show_loop: false,
      selectedFile: [],
      loading: false,
    };
  },

  computed: {
    isArabic() {
      debugger;
      return this.$i18n.locale === "ar"; // Điều chỉnh 'ar' cho ngôn ngữ Ả Rập
    },
  },

  methods: {
    /**
     * Save image crop
     */
    async onClickSaveImageCrop() {
      this.loading = true;
      debugger;
      await this.$refs.cropImages.getCropData();
      await setTimeout(() => {
        this.loading = false;
        this.$router.push({
          path: "/test-edit",
          query: {
            scream: "edit-profile",
          },
        });
      }, 2000);
    },

    /**
     *
     * @param {*} val
     */
    onChangeImageCrop(val) {
      const file = val.target.files[0];
      //kiểm tra có phải file ảnh hay không
      if (file.type.indexOf("image/") === -1) {
        alert("Please select an image file");
        this.$refs.fileInput.value = "";
        return;
      }

      this.selectedFile.push(URL.createObjectURL(file));
      this.selectedFile.push(file.name);
      this.isShowCrop = false;
      this.$refs.fileInput.value = "";
    },

    onBackMedia() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="css">
.body-crop-tow {
  height: calc(100% - 10%);
}
</style>
