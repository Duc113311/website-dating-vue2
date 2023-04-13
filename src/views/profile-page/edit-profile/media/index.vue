<template>
  <div class="w-full h-full relative p-5">
    <!--  -->
    <div class="w-full h-full">
      <div class="w-full header-edit flex justify-center items-center">
        <div class="w-full flex justify-center items-center">
          <div class="w-1/4">
            <BhBack></BhBack>
          </div>
          <div class="ml-20 w-3/4 text-xl text-white">Create New</div>
        </div>
      </div>

      <div class="w-full body-crop-tow">
        <ChoseImage
          @onChangeImageCrop="onChangeImageCrop"
          v-if="isShowCrop"
        ></ChoseImage>
        <CropImage :selectedFile="selectedFile" v-if="!isShowCrop"></CropImage>
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
    };
  },

  methods: {
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
  },
};
</script>
<style lang="css">
.body-crop-tow {
  height: calc(100% - 10%);
}
</style>
