<template>
  <div class="w-full h-full">
    <!-- header -->
    <div
      class="w-full h-20 bg-slate-500 flex justify-between items-center pl-5 pr-5"
    >
      <div>
        <div class="nav-icon">
          <img src="../../../../assets/icon/ic_icon_app.svg" alt="" />
        </div>
      </div>
      <div class="flex justify-end gap-4">
        <div class="nav-icon">
          <img src="../../../../assets/icon/ic_explore_tab_light.svg" alt="" />
        </div>
        <div class="nav-icon">
          <img src="../../../../assets/icon/ic_safety (1) light.svg" alt="" />
        </div>
      </div>
    </div>

    <!-- Body -->

    <div class="w-full">
      <div>Discovery Settings</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar-page",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.nav-icon {
  width: 40px;
  height: 40px;
  border-radius: 30px;
  background-color: #24313d;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
