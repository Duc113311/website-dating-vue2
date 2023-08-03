<template>
  <div class="w-full h-body-mes flex justify-center items-center">
    <div class="items-center text-center w-full grid gap-2">
      <div class="flex justify-center">
        You matched with&nbsp;
        <div class="font-bold">Trinh</div>
      </div>

      <div class="title-color">3 day ago</div>

      <div class="flex w-full items-centers justify-center">
        <div
          class="image-user"
          :style="`background-image:url(${urlName})`"
        ></div>
      </div>
      <div class="flex justify-center">
        Know when&nbsp;
        <div class="font-bold">Trinh</div>
        &nbsp;has read your message
      </div>

      <div :style="{ '--orange-color-1': orangeColor }">
        <BhCommons :nameButton="nameButton"></BhCommons>
      </div>
    </div>
  </div>
</template>

<script>
import BhCommons from "../../bh-element-ui/button/bh-commons";
export default {
  components: { BhCommons },
  name: "no-message",

  data() {
    return {
      orangeColor: "var(--orange-color)",
      nameButton: `Get read receipts "seen"`,
      urlName: require("../../../assets/image-dating/7-15831080159232071706060.webp"),
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.h-body-mes {
  height: 82%;
}
.image-user {
  background-position: center;
  background-size: cover;
  border-radius: 53px;
  width: 70px;
  height: 70px;
}
</style>
