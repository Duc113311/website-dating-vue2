<template>
  <div class="w-full h-full bg-slate-400">
    <div class="body-detail height-scroll overflow-scroll w-full">
      <SliderGold></SliderGold>
    </div>
  </div>
</template>

<script>
import SliderGold from "../../packages/common/slider-gold";
export default {
  components: { SliderGold },
  name: "from-setting-page",
  data() {
    return {};
  },

  methods: {},

  mounted() {
    debugger;
  },
};
</script>
