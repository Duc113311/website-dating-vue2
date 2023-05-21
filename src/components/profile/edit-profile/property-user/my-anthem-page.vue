<template>
  <div class="w-full flex items-center">
    <div class="w-full">
      <div class="w-full flex justify-between bh-title p-3">
        <div>{{ $t("my_anthem") }}</div>
      </div>
      <div class="w-full flex style-form-single bg-default">
        <div class="flex justify-between w-full">
          <div class="bh-item-title">{{ $t("connect_anthem") }}</div>
          <div class="">
            <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-anthem-page",

  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="css"></style>
