<template>
  <div class="w-full h-full">
    <div class="w-full h-full flex justify-center items-center">
      <div class="text-center w-image grid gap-4">
        <div
          class="w-full flex justify-center p-3 rounded-lg bg-image-crop bg-default"
        >
          <label
            class="w-full flex items-center justify-center"
            for="upload_image"
          >
            <input
              type="file"
              id="upload_image"
              ref="fileInput"
              @change="onClickImage"
              hidden
            />
            <div class="image w-1/3 text-left">
              <img src="../../../../assets/icon/ic_capture.svg" />
            </div>
            <div class="w-2/3 text-left padding-text-option">
              {{ $t("upload_photo") }}
            </div>
          </label>
        </div>
        <el-tooltip content="Coming soon" placement="top">
          <div
            class="w-full flex justify-center p-3 rounded-lg bg-image-crop bg-default"
          >
            <label class="w-full flex items-center justify-center">
              <!-- <input type="file" ref="fileInput" hidden /> -->
              <div class="image w-1/3 text-left">
                <img src="../../../../assets/icon/ic_loop.svg" />
              </div>
              <div class="w-2/3 text-left padding-text-option">
                {{ $t("upload_loop") }}
              </div>
            </label>
          </div>
        </el-tooltip>
        <el-tooltip content="Coming soon" placement="top">
          <div
            class="w-full flex justify-center p-3 rounded-lg bg-image-crop bg-default"
          >
            <label class="w-full flex items-center justify-center">
              <!-- <input type="file" ref="fileInput" hidden /> -->
              <div class="image w-1/3 text-left">
                <img src="../../../../assets/icon/ic_photos.svg" />
              </div>
              <div class="w-2/3 text-left padding-text-option">
                {{ $t("capture_from_camera") }}
              </div>
            </label>
          </div>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "chose-image",

  data() {
    return {};
  },

  methods: {
    onClickImage(event) {
      this.$emit("onChangeImageCrop", event);
    },
  },
};
</script>
<style lang="css">
.w-image {
  width: 370px;
}

.bg-image-crop {
  border-radius: 10px;
}
</style>
