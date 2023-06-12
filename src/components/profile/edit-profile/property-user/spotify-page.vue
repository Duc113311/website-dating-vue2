<template>
  <div class="w-full flex items-center">
    <div class="w-full">
      <div class="w-full flex justify-between bh-title p-3">
        <div>{{ $t("my_top_spotify_artists").toUpperCase() }}</div>
      </div>
      <div class="w-full flex style-form-single bg-default cursor-pointer">
        <div class="">
          <img src="@/assets/icon/ic_spotify.svg" width="30" alt="" srcset="" />
        </div>
        <div class="flex justify-between w-full">
          <div class="bh-item-title ml-3 mr-3">
            {{ $t("connect_spotify") }}
          </div>
          <div>
            <BhChevron></BhChevron>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BhChevron from "../../../bh-element-ui/button/bh-chevron";
export default {
  components: { BhChevron },
  name: "spotify-page",
  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="css"></style>
