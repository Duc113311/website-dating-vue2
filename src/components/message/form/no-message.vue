<template>
  <div class="w-full h-full">
    <div class="items-center text-center w-full">
      <div>You matched with Trinh</div>
      <div>3 dáy ago</div>

      <div class="flex w-full items-centers justify-center">
        <div
          class="image-user"
          :style="`background-image:url(${urlName})`"
        ></div>
      </div>
      <div>Know when Trinh has read your message</div>

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
.image-user {
  background-position: center;
  background-size: cover;
  border-radius: 53px;
  width: 50px;
  height: 50px;
}
</style>
