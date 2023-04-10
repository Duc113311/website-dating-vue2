<template>
  <div class="w-full h-full">
    <BlindPage
      v-if="!isShowBlind"
      @onNextBlindOption="onNextBlindOption"
    ></BlindPage>
    <BlindOption v-if="isShowBlind"></BlindOption>
  </div>
</template>

<script>
import BlindOption from "../../../components/explore/blind-date/blind-option";
import BlindPage from "../../../components/explore/blind-date/blind-page";
export default {
  components: {
    BlindOption,
    BlindPage,
  },

  name: "blind-date",

  data() {
    return {
      isShowBlind: false,
    };
  },

  methods: {
    onNextBlindOption(val) {
      debugger;
      this.isShowBlind = val;
    },
  },
};
</script>
