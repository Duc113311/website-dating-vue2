<template>
  <div class="w-full h-full">
    <div class="text-center h-full w-full">
      <vue-cropper
        ref="cropper"
        :src="selectedFile[0]"
        :options="cropperOptions"
        :style="cropperStyle"
        :autoCropArea="0.8"
        :fixedRatio="false"
        :cropBoxMovable="true"
        :cropBoxResizable="true"
        :dragMode="'crop'"
        :viewMode="2"
        :background="false"
        :highlight="false"
        :zoomable="true"
        :zoomOnWheel="true"
        :zoomOnTouch="true"
      ></vue-cropper>
    </div>
  </div>
</template>

<script>
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";
import { mapMutations, mapActions } from "vuex";
import { getStorages } from "@/configs/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
export default {
  name: "crop-image",

  components: { VueCropper },
  props: ["selectedFile"],
  data() {
    return {
      imageSrc: "https://picsum.photos/800/600",
      cropperOptions: {
        aspectRatio: 16 / 9,
        dragMode: "crop",
      },
      cropperStyle: {
        height: "400px",
        width: "100%",
      },
      croppedImage: null,
    };
  },

  methods: {
    ...mapMutations(["setImageCrop"]),
    ...mapActions(["verifyImageRegister"]),
    async getCropData() {
      // const cropper = this.$refs.cropper.getCropper();
      // const data = cropper.getData();
      //
      // console.log(data);

      const canvas = this.$refs.cropper.getCroppedCanvas();
      await new Promise((resolve) => {
        canvas.toBlob(
          (blob) => {
            const file = new File([blob], this.selectedFile[1], {
              type: "image/jpeg",
            });
            this.croppedImage = file;
            resolve();
          },
          "image/jpeg",
          0.95
        );
      });

      if (this.croppedImage) {
        const storage = getStorages();
        const storageRef = ref(storage, "dating/" + this.croppedImage?.name);
        await uploadBytes(storageRef, this.croppedImage).then((snapshot) => {
          console.log("Uploaded a blob or file!");
          console.log(snapshot);
        });
        const formData = new FormData();
        await getDownloadURL(storageRef, this.croppedImage)
          .then(async (url) => {
            this.dialogImageUrl = url;

            formData.append("imagebase64", this.dialogImageUrl);
            await this.verifyImageRegister(formData);

            const statusImageVerify =
              this.$store.state.commonModule.statusImageVerify;

            if (statusImageVerify) {
              this.setImageCrop(url);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>
<style lang="css">
.img-cropper {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.crop {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
/* Thiết lập lại kích thước cho ảnh trong vue-cropper */
.crop img {
  width: 100%;
  height: auto;
}
.crop-image {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #242a38;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 5px 0;
}

.header h2 {
  margin-right: 10px;
  margin-left: 1rem;
}

.content {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
}

.actions {
  display: inline-block;
  padding: 3px 15px;
  background: #d5002f;
  color: white;
  text-decoration: none;
  border-radius: 20px;
  margin-right: 1rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.preview-area p {
  font-size: 1.25rem;
  margin: 0;
  margin-bottom: 1rem;
}

.preview {
  width: 100%;
  overflow: hidden;
}

.cropped-image img {
  max-width: 100%;
  height: 100%;
}
</style>
