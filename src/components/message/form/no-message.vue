<template>
  <div class="w-full h-full">
    <div class="items-center text-center w-full">
      <div>You matched with Trinh</div>
      <div>3 dáy ago</div>

      <div class="image-user"></div>
      <div>Know when Trinh has read your message</div>

      <div>
        <button class="">Get read receipts "seen"</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "no-message",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.image-user {
  background-image: url("../../../assets//image-dating//7-15831080159232071706060.webp");
  background-position: center;
  background-size: cover;
  border-radius: 53px;
  width: 50px;
  height: 50px;
}
</style>
