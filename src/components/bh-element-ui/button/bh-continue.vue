<template>
  <div class="w-full flex justify-center pd-button items-center pb-8 h-full">
    <div class="w-button">
      <div
        v-show="isShowProfile"
        class="flex items-center w-full justify-center p-3"
      >
        <div class="flex justify-center items-center">
          <div
            :class="isShowMy ? 'not-show' : 'showed'"
            class="cursor-pointer"
            @click="onClickChosse(true)"
          >
            <div class="flex justify-center bg-checked">
              <i class="fa-solid fa-circle-check w-6 h-6"></i>
            </div>
          </div>
          <div
            :class="isNotShowMy ? 'showed' : 'not-show'"
            @click="onClickChosse(false)"
            class="cursor-pointer"
          >
            <div class="flex justify-center">
              <i class="fa-regular fa-circle w-6 h-6"></i>
            </div>
          </div>
        </div>
        <div class="ml-3 text-show-my">
          {{ $t("show_{nameScream}_on_my_profile", { nameScream: showName }) }}
        </div>
      </div>
      <button
        v-loading="isShowLoading"
        @click="onClickContinues"
        v-bind:class="[isActiveContinue ? 'button-active' : isDefaultTheme]"
        class="btContinueCode button-default cursor-pointer w-full padding-button overflow-hidden"
        :disabled="!isActiveContinue"
        ref="continue"
      >
        {{ $t("continue") }}
        <span v-show="isScreamInterestShow"
          >({{ isShowNumberInterests }}/5)</span
        >
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "bt-continue",
  props: ["isLoading", "isActives", "statusProfile", "isScreamInterest"],
  data() {
    return {
      isNumber: 0,
    };
  },

  computed: {
    isScreamInterestShow() {
      return this.isScreamInterest === 4;
    },
    isDefaultTheme() {
      const theme = localStorage.getItem("user-theme");

      if (theme === "light-theme") {
        return "light-theme-button";
      } else {
        return "dark-theme-button ";
      }
    },

    isShowNumberInterests() {
      return this.$store.state.userModule.user_profile?.profiles.interests
        .length
        ? this.$store.state.userModule.user_profile?.profiles.interests.length
        : 0;
    },

    isShowMy() {
      return this.$store.state.commonModule.isShowMyProfile;
    },

    isNotShowMy() {
      return this.$store.state.commonModule.isNotShowProfie;
    },

    isShowLoading() {
      return this.isLoading;
    },
    isActiveContinue() {
      return this.isActives ? this.isActives : false;
    },

    isShowProfile() {
      return this.statusProfile?.showCheckbox
        ? this.statusProfile.showCheckbox
        : "";
    },

    showName() {
      return this.statusProfile?.showName ? this.statusProfile.showName : "";
    },
  },

  methods: {
    ...mapMutations(["setShowProfileCreate"]),
    /**
     * Sự kiện click để tiếp tục
     */
    onClickContinues() {
      this.$emit("onChangeContinue", true);
    },

    onClickChosse(val) {
      console.log(val);
      if (val === true) {
        this.setShowProfileCreate({
          isShowProfile: true,
          isNotShowProfile: true,
        });
        this.$emit("onActionShowMe", false);
      } else {
        this.setShowProfileCreate({
          isShowProfile: false,
          isNotShowProfile: false,
        });
        this.$emit("onActionShowMe", true);
      }
    },
  },

  mounted() {},
};
</script>

<style lang="css">
.color-button {
  border-radius: 10px !important;
  padding: 14px 20px !important;
  cursor: pointer;
}

.active-button {
  background-color: #fd5d65;
}

.el-button.is-loading:before {
  background-color: rgba(0, 0, 0, 0) !important;
}

.not-show {
  display: none;
}

.showed {
  display: block;
}

.el-loading-mask {
  background-color: rgb(255 255 255 / 86%);
}

.el-loading-spinner {
  margin-top: -15px !important;
  display: flex;
  justify-content: center;
  height: 100%;
}

.el-loading-spinner .circular {
  width: 30px !important;
  height: 30px !important;
}
</style>
