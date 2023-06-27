<template>
  <div class="w-full h-full show-error absolute z-50">
    <div class="v-modal-bg cursor-pointer"></div>
    <div class="w-full absolute top-64 left-0 flex justify-center items-center">
      <div
        class="bg-button-clear relative rounded-lg w-96 title-default bg-color-default"
      >
        <div class="p-5 text-center">
          <div v-if="isShowErrorVideo">
            <div class="w-full padding-title">
              <div class="w-full flex justify-center items-center">
                <img
                  src="@/assets/icon/ic_verified_enable.svg"
                  width="50"
                  alt=""
                />
              </div>
            </div>
            <div class="mt-3" v-if="screamName === 1">
              <div class="padding-describe-or">Hãy xác minh</div>
              <div class="w-full padding-describe mt-5">
                <p>
                  Hãy giúp chúng tôi bảo vệ cộng đồng Tinder bằng cách chứng
                  minh bạn sử dụng ảnh chính chủ. Bạn chỉ cần quay một video
                  selfie. Nếu video selfie của bạn khớp với ảnh trong hồ sơ, bạn
                  sẽ được xác minh!
                </p>
              </div>
            </div>
            <div v-if="screamName === 2">
              <div class="padding-describe-or">Cách thức hoạt động</div>
              <div class="mt-5">
                <carousel
                  :per-page="1"
                  :mouse-drag="true"
                  :autoplay="true"
                  :paginationActiveColor="isColorActive"
                  :paginationColor="isColor"
                >
                  <slide data-index="0" data-name="MySlideName">
                    <div class="mt-3 h-60">
                      <div class="w-full padding-describe">
                        <p>
                          Công nghệ nhận diện khuôn mặt của chúng tôi so sánh
                          khuôn mặt bạn trong video selfie với ảnh trong hồ sơ
                          của bạn. Chúng tôi sẽ giữ hai ảnh chụp màn hình từ
                          video selfie của bạn trong thời gian tài khoản của bạn
                          còn tồn tại để kiểm tra và quản lý tính năng Xác Minh
                          Ảnh của mình. Chúng tôi cũng sẽ giữ kết quả của quy
                          trình (ví dụ như đã Xác Minh Ảnh hay chưa).
                        </p>
                      </div>
                    </div>
                  </slide>

                  <slide data-index="1">
                    <div class="mt-3 h-60">
                      <div class="w-full padding-describe">
                        <p>
                          Chúng tôi sẽ giữ thông tin nhận diện khuôn mặt cơ bản
                          của bạn hay còn gọi là &quot;khuôn mẫu&quot; sau khi
                          hoàn thành quy trình Xác Minh Ảnh (thường hoàn thành
                          trong vòng 24 giờ). Chúng tôi không lưu giữ video
                          selfie của bạn.
                        </p>
                        <a href="#">Tìm hiểu thêm về cơ chế hoạt động</a>
                      </div>
                    </div>
                  </slide>
                </carousel>
              </div>
            </div>
            <div class="mt-3" v-if="screamName === 3">
              <div class="padding-describe-or">Trước khi bạn tiếp tục...</div>
              <div class="w-full padding-describe mt-5">
                <div>
                  <div class="w-full flex items-center">
                    <img src="../../assets/icon/ic_checked.svg" alt="" />
                    <div class="ml-2 font-bold">Chuẩn bị không gian</div>
                  </div>
                  <div class="pl-10 pr-10">
                    <ul class="text-left">
                      <li>Chọn nơi có đủ ánh sáng</li>
                      <li>Tăng độ sáng màn hình</li>
                      <li>Tránh bị lóa và ngược sáng</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div class="w-full flex items-center">
                    <img src="../../assets//icon/ic_checked.svg" alt="" />
                    <div class="ml-2 font-bold">Chuẩn bị tư thế</div>
                  </div>
                  <div class="pl-10 pr-10">
                    <ul class="text-left">
                      <li>Nhìn trực diện vào máy ảnh</li>
                      <li>Bỏ mũ, kính râm và các vật che mặt</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="!isShowErrorVideo">
            <div class="w-full padding-title">
              <div class="w-full flex justify-center items-center">
                <img
                  src="../../assets//icon//ic_report_red.svg"
                  width="50"
                  alt=""
                />
              </div>
            </div>
            <div class="mt-3" v-loading="isShowLoading">
              <div class="padding-describe-or">Ối!</div>
              <div class="w-full padding-describe mt-5">
                <p>
                  Chúng tôi không thể ghi hình video của bạn. Vui lòng thử lại.
                </p>
              </div>
            </div>
          </div>

          <div
            class="flex justify-center items-center w-full mt-8 h-form-like-footer"
          >
            <div class="w-full grid gap-3">
              <div
                v-if="isShowErrorVideo"
                @click="onClickContinue"
                class="button-active cursor-pointer rounded-xl p-3 text-center justify-center flex"
              >
                Tiếp tục
              </div>
              <div
                v-if="!isShowErrorVideo"
                @click="onClickRetry"
                class="button-active cursor-pointer rounded-xl p-3 text-center justify-center flex"
              >
                Thử lại
              </div>
              <div
                @click="onClickCancel"
                class="cursor-pointer button-default rounded-xl p-3 text-center justify-center flex"
              >
                Có lẽ đi sau
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import functionValidate from "@/middleware/validate";
export default {
  name: "dialog-verified",

  component: {
    Carousel,
    Slide,
  },
  data() {
    return {
      screamName: 1,
      screamDetail: 0,
      isColor: "#7E7E7E",
      isColorActive: "rgb(223 204 204)",
      isShowErrorVideo: true,
      isShowLoading: false,
    };
  },

  computed: {},
  methods: {
    async onClickContinue() {
      debugger;
      if (this.screamName < 3) {
        this.screamName = this.screamName + 1;
      } else {
        debugger;
        const deviceType = await functionValidate.checkDeviceType();
        if (deviceType === this.$enumName.deviceType.devicePC) {
          debugger;
          this.isShowErrorVideo = false;
        } else {
          window.location.href = "http://127.0.0.1:5500/index.html";
        }
      }
    },

    onClickCancel() {
      debugger;
      this.$emit("onChangeCancel", false);
    },

    onClickRetry() {
      this.isShowLoading = true;
      this.$nextTick(() => {
        this.isShowLoading = false;
        this.isShowErrorVideo = false; // Hiển thị phần tử lại
      });
    },
  },
};
</script>

<style lang="css">
@keyframes zoomIn {
  from {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
}
.show-error {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-name: zoomIn;
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}

ul {
  list-style: disc !important;
}
</style>
