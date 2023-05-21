<template>
  <div class="w-full flex items-center mt-6">
    <div class="w-full form-set-list bg-default">
      <div class="w-full flex items-center">
        <div class="w-full">
          <div class="w-full">
            <div class="w-full form-set-item flex justify-between items-center">
              <div class="bh-item-title">{{ $t("dark_theme") }}</div>
              <div>
                <el-switch
                  v-model="themeValue"
                  active-color="#FB5D65"
                  inactive-color="#5F6A86"
                  @change="onChangeTheme()"
                >
                </el-switch>
              </div>
            </div>
            <div class="bh-describe">
              {{ $t("choose_the_theme_you_like_most") }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "dark-theme-page",

  data() {
    return {
      valueTheme: true,
    };
  },

  computed: {
    ...mapGetters({ nameLayoutValue: "themeLayoutValue" }),
    themeValue: {
      get() {
        const layoutValue = this.nameLayoutValue;

        return layoutValue;
      },
      set(newName) {
        return newName;
      },
    },
  },

  methods: {
    ...mapMutations(["setThemeLayout"]),
    onChangeTheme() {
      debugger;
      const layoutValue = this.$store.state.commonModule.statusLayout;
      if (!layoutValue) {
        document.documentElement.setAttribute("theme", "dark");
        localStorage.setItem("theme", "dark");
        this.setThemeLayout({
          nameTheme: "dark",
          statusTheme: true,
        });
      } else {
        document.documentElement.setAttribute("theme", "light");
        localStorage.setItem("theme", "light");

        this.setThemeLayout({
          nameTheme: "light",
          statusTheme: false,
        });
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
