<template>
  <div class="w-full flex items-center mt-6">
    <div class="w-full form-set-list bg-default">
      <div class="w-full title-item form-set-item bh-title">
        <div>{{ $t("show_me") }}</div>
      </div>
      <div class="w-full flex items-center bh-item-title">
        <div class="w-full">
          <div
            class="flex justify-between w-full form-set-item border-bottom"
            @click="onChangeAutoPlayVideo('no')"
          >
            <div class="bh-item-title">{{ $t("only_wi-fi_only") }}</div>
            <div v-if="valueAutoPlayVideo === 'no'">
              <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
            </div>
          </div>

          <div
            class="flex justify-between w-full form-set-item border-bottom"
            @click="onChangeAutoPlayVideo('wifi')"
          >
            <div class="bh-item-title">
              {{ $t("on_wi-fi_and_mobile_data") }}
            </div>
            <div v-if="valueAutoPlayVideo === 'wifi'">
              <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
            </div>
          </div>

          <div
            class="flex justify-between w-full form-set-item"
            @click="onChangeAutoPlayVideo('always')"
          >
            <div class="bh-item-title">{{ $t("never_auto_play_videos") }}</div>
            <div v-if="valueAutoPlayVideo === 'always'">
              <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "ctrl-radio-wifi",

  data() {
    return {};
  },

  computed: {
    valueAutoPlayVideo() {
      const autoPlayVideo =
        this.$store.state.userModule.user_profile?.settings.autoPlayVideo;

      return autoPlayVideo;
    },
    // Auto play video
  },

  methods: {
    ...mapMutations(["setAutoPlayVideo"]),
    onChangeAutoPlayVideo(val) {
      this.setAutoPlayVideo(val);
    },
  },
};
</script>

<style css scoped></style>

<style></style>
