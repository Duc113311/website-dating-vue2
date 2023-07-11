<template>
  <div class="w-full flex items-center">
    <div class="w-full mb-5">
      <div class="w-full flex bh-title p-3 items-center">
        <div>{{ $t("control_profile").toUpperCase() }}</div>
        <div class="ml-3 mr-3">
          <div
            class="style-package-update cursor-pointer"
            @click="onClickShowPackages('silver')"
          >
            {{ $t("sliver_package") }}
          </div>
        </div>
      </div>
      <div class="w-full flex items-center bg-default style-bg-common">
        <div class="w-full">
          <div class="flex justify-between w-full border-bottom pt-2 pb-3">
            <div class="bh-item-title">{{ $t("don't_show_my_age") }}</div>
            <div>
              <el-switch
                v-model="showValueAge"
                active-color="#FB5D65"
                inactive-color="#5F6A86"
                @change="onChangeValueAge()"
              >
              </el-switch>
            </div>
          </div>

          <div class="flex justify-between w-full pt-3 pb-2">
            <div class="bh-item-title">{{ $t("don't_show_my_distance") }}</div>
            <div>
              <el-switch
                v-model="showDistance"
                active-color="#FB5D65"
                inactive-color="#5F6A86"
                @change="onChangeValueDistance()"
              >
              </el-switch>
            </div>
          </div>
        </div>
      </div>
    </div>
    <PopupGold
      v-if="isShowPackage"
      :nameGoldPackage="nameGoldPackage"
      @onClickHidePackage="onHidePackage"
    ></PopupGold>
  </div>
</template>

<script>
import PopupGold from "../../../packages/default/popup-gold";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: { PopupGold },
  name: "control-page",

  data() {
    return {
      nameGoldPackage: "",
      isShowPackage: false,
    };
  },

  computed: {
    ...mapGetters({
      nameShowAge: "showAge",
      nameShowDistance: "showDistance",
    }),
    showValueAge: {
      get() {
        const age = this.nameShowAge;

        return age;
      },
      set(newName) {
        return newName;
      },
    },

    // Show Distance
    showDistance: {
      get() {
        const age = this.nameShowDistance;

        return age;
      },
      set(newName) {
        return newName;
      },
    },
  },

  methods: {
    ...mapMutations(["setShowDistance", "setShowAge"]),
    onChangeValueDistance() {
      const distance =
        this.$store.state.userModule.user_profile.profiles.showDistance;
      if (distance) {
        this.setShowDistance(false);
      } else {
        this.setShowDistance(true);
      }
    },

    onChangeValueAge() {
      const age = this.$store.state.userModule.user_profile.profiles.showAge;
      if (age) {
        this.setShowAge(false);
      } else {
        this.setShowAge(true);
      }
    },

    onClickShowPackages(val) {
      this.isShowPackage = true;
      this.nameGoldPackage = val;
    },

    onHidePackage(val) {
      this.isShowPackage = val;
    },
  },
};
</script>
<style lang="css"></style>
