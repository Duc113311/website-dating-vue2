<template>
  <div class="w-full h-full">
    <div class="w-full h-full flex items-center title-default">
      <!-- nav -->
      <div class="h-full w-navbar">
        <NavbarPage></NavbarPage>
      </div>
      <div class="h-full w-body">
        <BodyPage></BodyPage>
      </div>
      <!-- body -->
    </div>
  </div>
</template>

<script>
import BodyPage from "./body-default/body-page";
import NavbarPage from "./navbar/navbar-page";
export default {
  components: {
    BodyPage,
    NavbarPage,
  },
  name: "screen-size-page",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.w-navbar {
  min-width: 325px;
  flex-basis: 25%;
  flex-shrink: 0;
  flex-grow: 0;
  max-width: 375px;
  background-color: #ffffff;
}

.w-body {
  min-width: calc(100% - 325px);
  max-width: fit-content;
}
</style>
