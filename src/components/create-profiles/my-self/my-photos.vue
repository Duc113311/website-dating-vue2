<template>
  <div class="h-full height-scroll overflow-scroll">
    <div v-show="!isTitle" class="mt-3">
      <div class="padding-title">{{ $t("my_photos_are") }}</div>
      <span class="padding-describe describe-text">{{
        $t("add_at_least_2_photos_to_continue")
      }}</span>
    </div>

    <!-- Image -->
    <div class="">
      <div class="grid grid-cols-3 gap-4 p-3">
        <div
          class="h-image-detail"
          v-for="fileList in fileListValue"
          :key="fileList.id"
        >
          <div class="dash-bor border-image bg-default relative cursor-pointer">
            <div class="wrapper">
              <div class="file-upload">
                <input
                  type="file"
                  @change="toggleUpload($event, fileList)"
                  accept="image/*"
                />
                <img src="@/assets/icon/ic_add_photo.svg" width="35" alt="" />
              </div>

              <div
                class="img-close z-20"
                @click="removeUpload(fileList.id)"
                v-bind:id="'close' + fileList.id"
              >
                <img
                  src="../../../assets/icon/ic_delete_photo.svg"
                  width="43"
                />
              </div>
              <div class="img-edit z-20" v-bind:id="'edit' + fileList.id">
                <input
                  type="file"
                  @change="toggleUpload($event, fileList)"
                  accept="image/*"
                />
                <img
                  src="../../../assets/icon/bt_edit_profile.svg"
                  width="50"
                />
              </div>
            </div>
            <div
              class="img-avatar overflow-hidden top-0 left-0"
              v-bind:id="'avatar' + fileList.id"
              :target="fileList.id"
            >
              <div
                src=""
                alt=""
                width="100"
                height="100"
                srcset=""
                class="my-avatar"
                v-bind:id="fileList.id"
              />
              <div
                v-bind:id="'loadId' + fileList.id"
                class="el-loading-mask"
                style="display: none; overflow: hidden"
              >
                <div
                  class="el-loading-spinner flex justify-center h-full w-full"
                >
                  <svg viewBox="25 25 50 50" class="circular">
                    <circle
                      cx="50"
                      cy="50"
                      r="20"
                      fill="none"
                      class="path"
                    ></circle></svg
                  ><!---->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <bh-error
      v-if="isShowErrorVerify"
      @onHidePopupPackage="onHidePopupPackage"
    ></bh-error>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import { getStorages } from "@/configs/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import bhError from "@/components/bh-element-ui/notification/bh-error.vue";
export default {
  components: { bhError },
  name: "my-photos",
  data() {
    return {
      fileListValue: [
        {
          id: 0,
          url: "image1",
        },
        {
          id: 1,
          url: "image2",
        },
        {
          id: 2,
          url: "image3",
        },
        {
          id: 3,
          url: "image4",
        },
        {
          id: 4,
          url: "image5",
        },
        {
          id: 5,
          url: "image6",
        },
        {
          id: 6,
          url: "image7",
        },
        {
          id: 7,
          url: "image8",
        },
        {
          id: 8,
          url: "image9",
        },
      ],
      showUpload: true,
      file: "",
      dialogImageUrl: "",
      isShowImage: false,
      isShowErrorVerify: false,
    };
  },

  computed: {
    isTitle() {
      return this.isShowTitle ? this.isShowTitle : false;
    },

    isShowEdit() {
      if (this.$route.name !== "create-profile") {
        const imgLength = this.$store.state.userModule.avatarChecked;

        if (imgLength.length === 1) {
          return true;
        }
      }
      return false;
    },
  },

  props: ["isShowTitle"],
  methods: {
    ...mapMutations(["setPhotos"]),
    ...mapActions(["verifyImageRegister"]),

    onHidePopupPackage(value) {
      this.isShowErrorVerify = value;
    },
    async toggleUpload(event, data) {
      debugger;
      const image = event.target.files[0];

      const fileType = image.type;
      debugger;
      if (!fileType.startsWith("image/")) {
        this.$notify.error({
          title: "Error Image",
          message: "Please select only photos",
        });
        event.target.value = ""; // Xóa giá trị của input file
      } else {
        const idUrl = data.id;
        const loading = await document.getElementById("loadId" + idUrl);
        const avatar = document.getElementById("avatar" + idUrl);
        avatar.style.display = "block";
        loading.style.display = "block";
        // const reader = new FileReader();
        // reader.readAsDataURL(image);
        // reader.onload = (e) => {
        //   console.log(e);
        //   console.log(this.dialogImageUrl);
        // };
        this.isShowImage = true;

        const storage = getStorages();
        const storageRef = ref(storage, "dating/" + image.name);
        await uploadBytes(storageRef, image).then((snapshot) => {
          console.log("Uploaded a blob or file!");
          console.log(snapshot);
        });

        debugger;
        // img.setAttribute("src", url);

        const formData = new FormData();

        await getDownloadURL(storageRef, image)
          .then(async (url) => {
            this.dialogImageUrl = url;

            formData.append("imagebase64", this.dialogImageUrl);
            await this.verifyImageRegister(formData);

            const statusImageVerify =
              this.$store.state.commonModule.statusImageVerify;
            const close = document.getElementById("close" + idUrl);
            if (statusImageVerify) {
              const dataImage = {
                id: idUrl,
                url: url,
                type: this.$route.name,
              };

              this.setPhotos(dataImage);
              debugger;
              // Or inserted into an <img> element
              const img = document.getElementById(idUrl);

              let bg = "url('" + url + "')";

              img.style.backgroundImage = bg;
              if (this.$store.state.userModule.avatarChecked.length <= 1) {
                if (this.$route.name !== "create-profile") {
                  close.style.display = "block";
                } else {
                  close.style.display = "none";
                }
              } else {
                close.style.display = "block";
              }

              if (this.$store.state.userModule.avatarChecked.length === 2) {
                const edit = document.getElementById(
                  "edit" + this.$store.state.userModule.avatarChecked[0].id
                );
                const closes = document.getElementById(
                  "close" + this.$store.state.userModule.avatarChecked[0].id
                );
                edit.style.display = "none";
                closes.style.display = "block";
              }

              debugger;
              setTimeout(() => {
                loading.style.display = "none";
              }, 1000);
            } else {
              setTimeout(() => {
                loading.style.display = "none";
              }, 1000);
              avatar.style.display = "none";
              // this.isShowErrorVerify = true;
              this.$notify.error({
                title: "Error Image",
                message: "Your photo is not suitable",
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });

        // Check
        const imageNumber = this.$store.state.userModule.avatarChecked.length;
        if (imageNumber < 2) {
          this.$emit("onStatusActive", false);
        } else {
          this.$emit("onStatusActive", true);
        }
      }
      console.log(data);
    },

    removeUpload(val) {
      debugger;
      const imagedLength = this.$store.state.userModule.avatarChecked;
      const img = document.getElementById(val);
      const avatar = document.getElementById("avatar" + val);
      const close = document.getElementById("close" + val);

      const dataImage = {
        id: val,
      };
      this.setPhotos(dataImage);
      img.style.backgroundImage = "";
      avatar.style.display = "none";
      close.style.display = "none";
      debugger;
      if (this.$route.name !== "create-profile") {
        if (imagedLength.length === 1) {
          const indexImg = imagedLength[0].id;
          const edit = document.getElementById("edit" + indexImg);
          const close = document.getElementById("close" + indexImg);
          edit.style.display = "block";
          close.style.display = "none";
        }
      }
    },
  },
  mounted() {
    if (this.$route.query.scream !== "edit-profile") {
      const image = this.$store.state.userModule.avatarChecked;
      this.$emit("onShowSkips", false);
      for (let index = 0; index < image.length; index++) {
        const element = image[index];
        const img = document.getElementById(element.id);
        const avatar = document.getElementById("avatar" + element.id);
        const close = document.getElementById("close" + element.id);
        // img.setAttribute("src", url);
        setTimeout(() => {
          this.loading = false;
        }, 1000);
        let bg = "url('" + element.url + "')";

        img.style.backgroundImage = bg;
        avatar.style.display = "block";
        close.style.display = "block";
        if (this.$route.name !== "create-profile") {
          if (image.length === 1) {
            const indexImg = image[0].id;
            const edit = document.getElementById("edit" + indexImg);
            const close = document.getElementById("close" + indexImg);
            edit.style.display = "block";
            close.style.display = "none";
          }
        }
      }

      if (image.length < 2) {
        this.$emit("onStatusActive", false);
      } else {
        this.$emit("onStatusActive", true);
      }
    } else {
      const image =
        this.$store.state.userModule.detailProfile?.profiles?.avatars;
      for (let index = 0; index < image.length; index++) {
        const element = image[index];
        const img = document.getElementById(parseInt(index));
        const avatar = document.getElementById("avatar" + parseInt(index));
        const close = document.getElementById("close" + parseInt(index));
        // img.setAttribute("src", url);
        setTimeout(() => {
          this.loading = false;
        }, 1000);
        let bg = "url('" + element + "')";

        img.style.backgroundImage = bg;
        avatar.style.display = "block";
        close.style.display = "block";
      }
    }
  },
};
</script>

<style lang="css">
.avatar-uploader {
  width: 110px;
  height: 140px;
  border: 1px solid #b8b3c0;
  display: flex;
  justify-content: center;
  padding: 7px;
  background-color: white;
  border-radius: 10px;
}
.avatar-uploader .el-upload {
  border: 2px dashed rgb(167, 70, 70);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
  width: 100%;
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #fd5d65;
  width: 178px;
  height: 178px;
  text-align: center;
}

.icon-plus {
  font-size: 15px;
  background-color: #fd5d65;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper .file-upload {
  height: 170px;
  width: 200px;
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-size: 100% 200%;
  transition: all 1s;
  color: #ffffff;
  font-size: 100px;
  border: 2px dashed #fe5966;
}
input[type="file"] {
  height: 177px;
  width: 113px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
}

.img-avatar {
  height: 100%;
  width: 100%;
  border-radius: 10px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-size: 100% 200%;
  transition: all 1s;
  color: #ffffff;
  font-size: 100px;
  display: none;
}

.img-close {
  width: 36px;
  position: absolute;
  top: -14px;
  overflow: hidden;
  right: -14px;
  display: none;
}

.show-theme {
  display: none;
}
.hide-theme {
  display: block;
}
.my-avatar {
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.el-loading-spinner {
  top: 0 !important;
  margin-top: 0 !important;
  width: 100% !important;
  text-align: center !important;
  position: absolute !important;
}

.dash-bor {
  padding: 5px;
}

.el-loading-spinner .circular {
  height: 100% !important;
}

.img-edit {
  position: absolute;
  bottom: -9px;
  overflow: hidden;
  right: -14px;
  display: none;
}
</style>
