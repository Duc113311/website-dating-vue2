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
                <div class="">Show me Top picks</div>
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
                Turning this on will allow you to be shown as a featured Top
                Pick to other users near you
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
        debugger;
        return newName;
      },
    },
  },

  methods: {
    ...mapMutations(["setShowTopPicks"]),
    onChangeShowTopPicks() {
      const topPicks =
        this.$store.state.userModule.user_profile.settings.showMePersonLikeMe;
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
