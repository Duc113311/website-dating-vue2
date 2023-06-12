<template>
  <div class="w-full flex items-center">
    <div class="w-full">
      <div class="w-full flex justify-between bh-title p-3">
        <div>{{ $t("my_anthem") }}</div>
      </div>
      <div class="w-full flex style-form-single bg-default cursor-pointer">
        <div class="flex justify-between w-full">
          <div class="bh-item-title">{{ $t("choose_an_anthem") }}</div>
          <div class="">
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
  name: "my-anthem-page",

  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="css"></style>
