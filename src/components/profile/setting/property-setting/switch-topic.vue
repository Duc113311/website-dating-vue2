<template>
  <div class="w-full flex items-center mt-6">
    <div class="w-full">
      <div class="w-full flex items-center form-set-list bg-default">
        <div class="w-full">
          <div class="flex justify-between w-full">
            <div class="w-full">
              <div
                class="form-set-item bh-item-title title-item flex justify-between items-center"
              >
                <div class="">{{ $t("show_me_top_picks") }}</div>
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
              <div class="form-set-item bh-describe w-full">
                {{
                  $t(
                    "turning_this_on_will_allow_you_to_be_shown_as_a_featured_top_pick_to_other_users_near_you"
                  )
                }}
              </div>
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
  name: "switch-topic",

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

<style></style>
