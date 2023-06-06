<template>
  <div class="flex justify-center w-full items-center">
    <div class="w-button">
      <button
        class="btAgree cursor-pointer w-full padding-button button-active"
        @click="onClickIAgree()"
      >
        {{ bingToUpperString($t("i_agree")) }}
      </button>
    </div>
  </div>
</template>

<script>
import functionValidate from "../../../middleware/validate.js";
export default {
  name: "bt-agree",

  data() {
    return {};
  },

  computed: {
    isDefaultTheme() {
      const theme = localStorage.getItem("user-theme");

      if (theme === "light-theme") {
        return "light-theme-button";
      } else {
        return "dark-theme-button ";
      }
    },
  },

  methods: {
    bingToUpperString(val) {
      const stringName = functionValidate.toUpperCaseString(val);
      return stringName;
    },
    /**
     * Click show dialog
     */
    onClickIAgree() {
      this.$router.push({
        path: "create-user",
      });
    },
  },
};
</script>

<style lang="css">
.color-bt:hover {
  background-color: #fd5d65 !important;
}
.btAgree {
  cursor: pointer;
  background-color: #fd5d65 !important;
}

.btAgree:hover {
  background-color: #fd5d65 !important;
}
</style>
