<template>
  <div class="w-full h-full relative p-5" v-loading="loading">
    <!--  -->
    <div class="w-full h-full" v-if="isShowCrop">
      <div class="w-full header-edit flex justify-center items-center">
        <div class="w-full flex justify-center items-center">
          <div class="w-1/4">
            <BhBack @onBackComponent="onBackMedia()"></BhBack>
          </div>
          <div class="ml-20 w-3/4 text-xl text-white">Create New</div>
        </div>
      </div>

      <div class="w-full body-crop-tow">
        <ChoseImage @onChangeImageCrop="onChangeImageCrop"></ChoseImage>
      </div>
    </div>

    <div class="w-full h-full" v-if="!isShowCrop">
      <div class="w-full header-edit flex justify-center items-center">
        <div class="w-full flex justify-center items-center">
          <div class="w-1/4">
            <BhBack></BhBack>
          </div>
          <div class="text-center w-3/4 title-detail-explore">Photo</div>
          <div
            class="w-1/4 text-right title-click cursor-pointer"
            @click="onClickSaveImageCrop"
          >
            Done
          </div>
        </div>
      </div>
      <div class="w-full body-crop-tow">
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

  methods: {
    /**
     * Save image crop
     */
    async onClickSaveImageCrop() {
      debugger;
      this.loading = true;

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
      debugger;
      this.selectedFile.push(URL.createObjectURL(file));
      this.selectedFile.push(file.name);
      this.isShowCrop = false;
      this.$refs.fileInput.value = "";
    },

    onBackMedia() {
      debugger;
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
