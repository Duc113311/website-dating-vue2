<template>
  <div class="w-full flex items-center">
    <div class="w-full">
      <div class="w-full flex bh-title p-3 items-center">
        <div>CONTROL PROFILE</div>
        <div class="ml-3">
          <div class="style-package">Sliver package</div>
        </div>
      </div>
      <div class="w-full flex items-center">
        <div class="w-full style-bg-common">
          <div class="flex justify-between w-full p-2">
            <div class="bh-item-title">Don't show my age</div>
            <div>
              <el-switch
                v-model="showValueAge"
                active-color="#FB5D65"
                inactive-color="#5F6A86"
                @change="onChangeValueAge()"
              >
              </el-switch>
            </div>
          </div>
          <div class="flex justify-center w-full items-center">
            <div class="br-bottom"></div>
          </div>
          <div class="flex justify-between w-full p-2">
            <div class="bh-item-title">Don't show my distance</div>
            <div>
              <el-switch
                v-model="showDistance"
                active-color="#FB5D65"
                inactive-color="#5F6A86"
                @change="onChangeValueDistance()"
              >
              </el-switch>
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
  name: "control-page",

  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      nameShowAge: "showAge",
      nameShowDistance: "showDistance",
    }),
    showValueAge: {
      get() {
        const age = this.nameShowAge;

        return age;
      },
      set(newName) {
        return newName;
      },
    },

    // Show Distance
    showDistance: {
      get() {
        const age = this.nameShowDistance;

        return age;
      },
      set(newName) {
        return newName;
      },
    },
  },

  methods: {
    ...mapMutations(["setShowDistance", "setShowAge"]),
    onChangeValueDistance() {
      debugger;
      const distance =
        this.$store.state.userModule.user_profile.profiles.showDistance;
      if (distance) {
        this.setShowDistance(false);
      } else {
        this.setShowDistance(true);
      }
    },

    onChangeValueAge() {
      debugger;
      const age = this.$store.state.userModule.user_profile.profiles.showAge;
      if (age) {
        this.setShowAge(false);
      } else {
        this.setShowAge(true);
      }
    },
  },
};
</script>
<style lang="css"></style>
