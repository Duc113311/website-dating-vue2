<template>
  <div class="w-full h-full show-error absolute z-50">
    <div class="v-modal-bg cursor-pointer"></div>
    <div class="w-full absolute top-64 left-0 flex justify-center items-center">
      <div
        class="bg-button-clear relative rounded-lg w-96 title-default bg-color-dialog"
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
              <div class="padding-describe-or">{{ $t("please_verify") }}</div>
              <div class="w-full padding-describe mt-5">
                <p>
                  {{
                    $t(
                      "help_us_protect_the_tinder_community_by_proving_you're_using_an_original_photo._you_just_need_to_record_a_selfie_video._if_your_selfie_video_matches_your_profile_photo,_you'll_be_verified!"
                    )
                  }}
                </p>
              </div>
            </div>
            <div v-if="screamName === 2">
              <div class="padding-describe-or">{{ $t("how_it_works") }}</div>
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
                          {{
                            $t(
                              "our_face_recognition_technology_compares_your_face_in_selfie_videos_with_photos_in_your_profile._we'll_keep_two_screenshots_from_your_selfie_video_for_as_long_as_your_account_is_live_to_test_and_manage_your_photo_verification_feature._we_will_also_keep_the_results_of_the_process_(e.g._photo_verified_or_not)."
                            )
                          }}
                        </p>
                      </div>
                    </div>
                  </slide>

                  <slide data-index="1">
                    <div class="mt-3 h-60">
                      <div class="w-full padding-describe">
                        <p>
                          {{
                            $t(
                              "our_face_recognition_technology_compares_your_face_in_selfie_videos_with_photos_in_your_profile._we'll_keep_two_screenshots_from_your_selfie_video_for_as_long_as_your_account_is_live_to_test_and_manage_your_photo_verification_feature._we_will_also_keep_the_results_of_the_process_(e.g._photo_verified_or_not)."
                            )
                          }}
                        </p>
                        <a href="#">{{
                          $t("Tìm hiểu thêm về cách nó hoạt động")
                        }}</a>
                      </div>
                    </div>
                  </slide>
                </carousel>
              </div>
            </div>
            <div class="mt-3" v-if="screamName === 3">
              <div class="padding-describe-or">
                {{ $t("before_you_continue...") }}
              </div>
              <div class="w-full padding-describe mt-5">
                <div>
                  <div class="w-full flex items-center">
                    <img src="../../assets/icon/ic_checked.svg" alt="" />
                    <div class="ml-2 font-bold">
                      {{ $t("prepare_the_space") }}
                    </div>
                  </div>
                  <div class="pl-10 pr-10">
                    <ul class="text-left">
                      <li>{{ $t("choose_a_place_with_enough_light") }}</li>
                      <li>{{ $t("increase_screen_brightness") }}</li>
                      <li>{{ $t("avoid_glare_and_backlit") }}</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div class="w-full flex items-center">
                    <img src="../../assets//icon/ic_checked.svg" alt="" />
                    <div class="ml-2 font-bold">
                      {{ $t("prepare_the_pose") }}
                    </div>
                  </div>
                  <div class="pl-10 pr-10">
                    <ul class="text-left">
                      <li>{{ $t("looking_directly_at_the_camera") }}</li>
                      <li>
                        {{ $t("remove_hats,_sunglasses,_and_face_coverings") }}
                      </li>
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
              <div class="padding-describe-or">{{ $t("oh!") }}</div>
              <div class="w-full padding-describe mt-5">
                <p>
                  {{ $t("we_cannot_record_your_video._please_try_again.") }}
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
                {{ $t("continue") }}
              </div>
              <div
                v-if="!isShowErrorVideo"
                @click="onClickRetry"
                class="button-active cursor-pointer rounded-xl p-3 text-center justify-center flex"
              >
                {{ $t("continue") }}
              </div>
              <div
                @click="onClickCancel"
                class="cursor-pointer button-default rounded-xl p-3 text-center justify-center flex"
              >
                {{ $t("maybe_later") }}
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
