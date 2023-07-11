<template>
  <div class="w-full">
    <div class="w-full flex justify-center items-center">
      <div class="w-full">
        <div class="w-full flex justify-between">
          <div class="name bh-item-title title-item">
            {{ $t("show_me_top_picks") }}
          </div>

          <div>
            <el-switch
              v-model="valueShowTopPicks"
              active-color="#FB5D65"
              inactive-color="#5F6A86"
              @change="onChangeShowTopPicks()"
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
  name: "ctrl-switch-top-pick",

  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      nameShowTopPicks: "showTopPick",
    }),

    // Show me Top picks
    valueShowTopPicks: {
      get() {
        const showTopPicks = this.nameShowTopPicks;

        return showTopPicks;
      },
      set(newName) {
        return newName;
      },
    },
  },

  mounted() {},

  methods: {
    ...mapMutations(["setShowTopPicks"]),
    onChangeShowTopPicks() {
      const topPicks =
        this.$store.state.userModule.user_profile.settings.toppicksDiscoverable;
      if (topPicks) {
        this.setShowTopPicks(false);
      } else {
        this.setShowTopPicks(true);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
