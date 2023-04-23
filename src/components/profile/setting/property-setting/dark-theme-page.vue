<template>
  <div class="w-full flex items-center mt-6">
    <div class="w-full form-set-list">
      <div class="w-full flex items-center">
        <div class="w-full style-bg-common">
          <div class="w-full">
            <div class="w-full form-set-item flex justify-between items-center">
              <div class="bh-item-title">Dark theme</div>
              <div>
                <el-switch
                  v-model="valueTheme"
                  active-color="#FB5D65"
                  inactive-color="#5F6A86"
                  @change="onChangeTheme"
                >
                </el-switch>
              </div>
            </div>
            <div class="bh-describe">Choose the theme you like most</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dark-theme-page",

  data() {
    return {
      valueTheme: true,
    };
  },

  computed: {
    themeValue() {
      return this.$store.state.commonModule.themeLayout;
    },
  },

  methods: {
    onChangeTheme() {
      debugger;
      if (this.valueTheme) {
        document.documentElement.setAttribute("theme", "dark");
        localStorage.setItem("theme", "dark");
        return (this.themeValue = "dark");
      } else {
        document.documentElement.setAttribute("theme", "light");
        localStorage.setItem("theme", "light");

        return (this.themeValue = "light");
      }
    },
  },

  mounted() {
    const themeValue = localStorage.getItem("theme");

    if (themeValue === "dark") {
      this.valueTheme = true;
    } else {
      this.valueTheme = false;
    }
  },
};
</script>

<style lang="css"></style>
