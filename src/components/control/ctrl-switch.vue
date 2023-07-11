<template>
  <div class="w-full">
    <div class="w-full flex justify-center items-center">
      <div class="w-full">
        <div class="w-full flex justify-between">
          <div class="name bh-item-title title-item">{{ $t("global") }}</div>

          <div>
            <el-switch
              v-model="valueGlobal"
              active-color="#FB5D65"
              inactive-color="#5F6A86"
              @change="onChangeGlobal()"
            >
            </el-switch>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "ctrl-switch",

  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      nameGlobal: "showGlobal",
    }),

    valueGlobal: {
      get() {
        const global = this.nameGlobal;

        return global;
      },
      set(newName) {
        return newName;
      },
    },
  },

  mounted() {},

  methods: {
    ...mapMutations(["setShowGlobal"]),

    onChangeGlobal() {
      const global =
        this.$store.state.userModule.user_profile.settings.global.isEnabled;
      if (global) {
        this.setShowGlobal({
          isEnabled: false,
          languages: [],
        });
      } else {
        this.setShowGlobal({
          isEnabled: true,
          languages: this.$store.state.userModule.listLanguageGlobal,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
