<template>
  <div class="w-full flex items-center">
    <div class="w-full">
      <div class="w-full flex justify-between bh-title p-3">
        <div>{{ $t("my_top_spotify_artists") }}</div>
      </div>
      <div class="w-full flex style-form-single bg-default">
        <div class="">
          <img src="@/assets/icon/ic_spotify.svg" width="30" alt="" srcset="" />
        </div>
        <div class="flex justify-between w-full">
          <div class="pl-5 bh-item-title">{{ $t("connect_spotify") }}</div>
          <div>
            <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "spotify-page",
  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="css"></style>
