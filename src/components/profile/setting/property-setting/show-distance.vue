<template>
  <div class="w-full">
    <div class="w-full">
      <div class="w-full flex justify-between bh-title">
        <div class="w-full bh-item-title title-size">App Setiings</div>
      </div>
      <div class="w-full form-set-list">
        <div class="w-full flex justify-between form-set-item">
          <div class="bh-title">SHOW DISTANCE IN</div>
          <div class="bh-describe">km.</div>
        </div>

        <div
          class="w-full flex justify-center items-center form-set-item gap-6"
        >
          <div
            v-for="(item, index) in listDistance"
            :key="index"
            :id="`location_` + item"
            class="style-distance no-active-distance"
            @click="onChangeDistanceLocation(item)"
          >
            {{ item.charAt(0).toUpperCase() + item.slice(1) + "." }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "show-distance",

  data() {
    return {
      listDistance: ["km", "mi"],
    };
  },

  methods: {
    onChangeDistanceLocation() {
      debugger;
    },
  },
};
</script>

<style></style>
