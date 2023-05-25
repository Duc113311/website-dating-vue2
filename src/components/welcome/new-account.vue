<template>
  <div
    class="w-full h-full user-profile absolute top-0 left-0 z-40 welcome bg-color-default title-default"
  >
    <div class="w-full h-full">
      <div
        class="text-2xl w-full h-10 flex items-center"
        @click="onShowDialogQuit()"
      >
        <i class="fas fa-times"></i>
      </div>
      <div class="p-2 mt-10 overflow-scroll h-scroll-welcome height-scroll">
        <div class="mb-16">
          <div class="flex justify-center">
            <img
              src="@/assets/image-dating/app_icon_512x512.png"
              width="100"
              height="100"
              alt=""
              srcset=""
            />
          </div>
          <div class="flex text-center justify-center mt-3 w-full">
            <div class="w-5/6">
              <div class="padding-title">{{ $t("welcome_to_heartLink") }}</div>
              <span class="padding-describe">
                {{
                  $t(
                    "please_follow_our_rules_to_have_more_fun_and_build_a_great_community_together"
                  )
                }}
              </span>
            </div>
          </div>
          <div class="mt-8 mb-6">
            <div class="flex mt-3 w-full">
              <div class="mr-4">
                <img src="@/assets/icon/ic_hand.svg" class="ic_hands" alt="" />
              </div>
              <div class="w-3/4">
                <div class="padding-text-option">{{ $t("be_yourself") }}</div>
                <span class="decoration-solid describe-text">{{
                  $t("make_sure_your_photos,_age_and_bio_true_to_who_you_are")
                }}</span>
              </div>
            </div>
            <div class="flex mt-3 w-full">
              <div class="mr-4">
                <img src="@/assets/icon/ic_hand.svg" class="ic_hands" alt="" />
              </div>
              <div class="w-3/4">
                <div class="padding-text-option">{{ $t("stay_safe") }}</div>
                <span class="decoration-solid describe-text"
                  >{{
                    $t("don't_be_too_quick_to_give_out_personal_information.")
                  }}
                  <span class="underline">{{
                    $t("date_safety_guidelines")
                  }}</span></span
                >
              </div>
            </div>
            <div class="flex mt-3 w-full">
              <div class="mr-4">
                <img src="@/assets/icon/ic_hand.svg" class="ic_hands" alt="" />
              </div>
              <div class="w-3/4">
                <div class="padding-text-option">{{ $t("play_it_cool") }}</div>
                <span class="decoration-solid describe-text">{{
                  $t(
                    "respect_others_and_treat_them_as_you_would_like_to_be_treated"
                  )
                }}</span>
              </div>
            </div>
            <div class="flex mt-3 w-full">
              <div class="mr-4">
                <img src="@/assets/icon/ic_hand.svg" class="ic_hands" alt="" />
              </div>
              <div class="w-3/4">
                <div class="padding-text-option">{{ $t("be_proactive") }}</div>
                <span class="decoration-solid describe-text">{{
                  $t("always_report_bad_behavior")
                }}</span>
              </div>
            </div>
          </div>
        </div>
        <BhArge></BhArge>
      </div>
    </div>
  </div>
</template>

<script>
import BhArge from "../bh-element-ui/button/bh-arge";

export default {
  components: {
    BhArge,
  },
  name: "new-account",

  data() {
    return {
      centerDialogVisible: false,
    };
  },

  computed: {
    isDarkTheme() {
      const theme = localStorage.getItem("user-theme");

      if (theme === "light-theme") {
        return false;
      } else {
        return true;
      }
    },
  },

  methods: {
    onShowDialogQuit() {
      this.$emit("onShowQuestion", true);
    },
  },
};
</script>

<style lang="css">
.text-color {
  color: #737b91;
}

.h-scroll-welcome {
  height: calc(100% - 10%);
  overflow: scroll;
}

.ic_hands {
  width: 35px;
}
</style>
