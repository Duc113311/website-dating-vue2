<template>
  <div class="w-full h-full">
    <div class="w-full h-full flex justify-center items-center">
      <div class="text-center w-image grid gap-4">
        <div class="w-full flex justify-center p-3 rounded-lg bg-image-crop">
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
              <i class="fa-solid fa-image text-5xl text-slate-500"></i>
            </div>
            <div class="w-2/3 text-left padding-text-option">Upload Photo</div>
          </label>
        </div>
        <div class="w-full flex justify-center p-3 rounded-lg bg-image-crop">
          <label
            class="w-full flex items-center justify-center"
            for="upload_image"
          >
            <input type="file" id="upload_image" ref="fileInput" hidden />
            <div class="image w-1/3 text-left">
              <i class="fa-solid fa-camera text-5xl text-slate-500"></i>
            </div>
            <div class="w-2/3 text-left padding-text-option">Upload Loop</div>
          </label>
        </div>
        <div class="w-full flex justify-center p-3 rounded-lg bg-image-crop">
          <label
            class="w-full flex items-center justify-center"
            for="upload_image"
          >
            <input type="file" id="upload_image" ref="fileInput" hidden />
            <div class="image w-1/3 text-left">
              <i class="fa-solid fa-camera text-5xl text-slate-500"></i>
            </div>
            <div class="w-2/3 text-left padding-text-option">
              Capture from Camera
            </div>
          </label>
        </div>
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
      debugger;

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
  background-color: #495063;
  border-radius: 10px;
}
</style>
