<template>
  <div class="w-full h-full show-error absolute z-50">
    <div class="v-modal-bg cursor-pointer"></div>
    <div class="w-full absolute top-64 left-0 flex justify-center items-center">
      <div
        class="bg-button-clear relative rounded-lg w-96 title-default bg-color-default"
      >
        <div class="p-5 text-center">
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
            <div class="w-full padding-describe">
              <p>
                Hãy giúp chúng tôi bảo vệ cộng đồng Tinder bằng cách chứng minh
                bạn sử dụng ảnh chính chủ. Bạn chỉ cần quay một video selfie.
                Nếu video selfie của bạn khớp với ảnh trong hồ sơ, bạn sẽ được
                xác minh!
              </p>
            </div>
          </div>
          <div v-if="screamName === 2">
            <div class="padding-describe-or">Cách thức hoạt động</div>
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
                      Công nghệ nhận diện khuôn mặt của chúng tôi so sánh khuôn
                      mặt bạn trong video selfie với ảnh trong hồ sơ của bạn.
                      Chúng tôi sẽ giữ hai ảnh chụp màn hình từ video selfie của
                      bạn trong thời gian tài khoản của bạn còn tồn tại để kiểm
                      tra và quản lý tính năng Xác Minh Ảnh của mình. Chúng tôi
                      cũng sẽ giữ kết quả của quy trình (ví dụ như đã Xác Minh
                      Ảnh hay chưa).
                    </p>
                  </div>
                </div>
              </slide>

              <slide>
                <div class="mt-3 h-60">
                  <div class="w-full padding-describe">
                    <p>
                      Chúng tôi sẽ giữ thông tin nhận diện khuôn mặt cơ bản của
                      bạn hay còn gọi là &quot;khuôn mẫu&quot; sau khi hoàn
                      thành quy trình Xác Minh Ảnh (thường hoàn thành trong vòng
                      24 giờ). Chúng tôi không lưu giữ video selfie của bạn.
                    </p>
                    <a href="#">Tìm hiểu thêm về cơ chế hoạt động</a>
                  </div>
                </div>
              </slide>
            </carousel>
          </div>

          <div
            class="flex justify-center items-center w-full mt-8 h-form-like-footer"
          >
            <div class="w-full grid gap-3">
              <div
                class="button-active cursor-pointer rounded-xl p-3 text-center justify-center flex"
              >
                Tiếp tục
              </div>
              <div
                class="cursor-pointer button-default rounded-xl p-3 text-center justify-center flex"
              >
                Có lẽ để sau đi
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

export default {
  name: "dialog-verified",

  component: {
    Carousel,
    Slide,
  },
  data() {
    return {
      screamName: 2,
      isColor: "#7E7E7E",
      isColorActive: "rgb(223 204 204)",
    };
  },

  computed: {},
  methods: {},
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
</style>
