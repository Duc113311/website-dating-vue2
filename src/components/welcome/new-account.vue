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
              <div class="padding-title">Welcome to HeartLink</div>
              <span class="padding-describe">
                Please follow our rules to have more fun and build a great
                community together
              </span>
            </div>
          </div>
          <div class="mt-8 mb-6">
            <div class="flex mt-3 w-full">
              <div class="mr-4">
                <img src="@/assets/icon/ic_hand.svg" class="ic_hands" alt="" />
              </div>
              <div class="w-3/4">
                <div class="padding-text-option">Be Yourself</div>
                <span class="decoration-solid describe-text"
                  >Make sure your photos, age and bio true to who you are</span
                >
              </div>
            </div>
            <div class="flex mt-3 w-full">
              <div class="mr-4">
                <img src="@/assets/icon/ic_hand.svg" class="ic_hands" alt="" />
              </div>
              <div class="w-3/4">
                <div class="padding-text-option">Stay Safe</div>
                <span class="decoration-solid describe-text"
                  >Don't be too quick to give out personal information.
                  <span class="underline">Date Safety guidelines</span></span
                >
              </div>
            </div>
            <div class="flex mt-3 w-full">
              <div class="mr-4">
                <img src="@/assets/icon/ic_hand.svg" class="ic_hands" alt="" />
              </div>
              <div class="w-3/4">
                <div class="padding-text-option">Play It Cool</div>
                <span class="decoration-solid describe-text"
                  >Respect others and treat them as you would like to be
                  treated</span
                >
              </div>
            </div>
            <div class="flex mt-3 w-full">
              <div class="mr-4">
                <img src="@/assets/icon/ic_hand.svg" class="ic_hands" alt="" />
              </div>
              <div class="w-3/4">
                <div class="padding-text-option">Be Proactive</div>
                <span class="decoration-solid describe-text"
                  >Always report bad behavior</span
                >
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
