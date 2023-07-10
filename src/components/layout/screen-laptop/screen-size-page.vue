<template>
  <div class="w-full h-full">
    <div class="w-full h-full flex items-center">
      <!-- nav -->
      <div class="h-full w-navbar bg-slate-100">
        <NavbarPage></NavbarPage>
      </div>
      <div class="h-full w-body bg-orange-400"></div>
      <!-- body -->
    </div>
  </div>
</template>

<script>
import NavbarPage from "./navbar/navbar-page";
export default {
  components: { NavbarPage },
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
}

.w-body {
}
</style>
