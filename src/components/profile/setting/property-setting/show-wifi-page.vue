<template>
  <div class="w-full flex items-center mt-6">
    <div class="w-full form-set-list">
      <div class="w-full title-item form-set-item bh-title">
        <div>SHOW ME</div>
      </div>
      <div class="w-full flex items-center bh-item-title">
        <div class="w-full style-bg-common">
          <div
            class="flex justify-between w-full form-set-item bd-input"
            @click="onChangeAutoPlayVideo('no')"
          >
            <div class="bh-item-title">Only Wi-fi Only</div>
            <div v-if="valueAutoPlayVideo === `no`">
              <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
            </div>
          </div>

          <div
            class="flex justify-between w-full form-set-item bd-input"
            @click="onChangeAutoPlayVideo('wifi')"
          >
            <div class="bh-item-title">On Wi-fi and mobile data</div>
            <div v-if="valueAutoPlayVideo === `wifi`">
              <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
            </div>
          </div>

          <div
            class="flex justify-between w-full form-set-item"
            @click="onChangeAutoPlayVideo('always')"
          >
            <div class="bh-item-title">Never autoplay videos</div>
            <div v-if="valueAutoPlayVideo === `always`">
              <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "show-wifi-page",

  data() {
    return {
      valueAutoPlayVideo: "",
    };
  },

  methods: {
    onChangeAutoPlayVideo() {},
  },
};
</script>

<style css scoped></style>

<style></style>
