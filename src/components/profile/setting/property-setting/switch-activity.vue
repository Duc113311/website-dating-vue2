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
                <div class="">{{ $t("activity_status") }}</div>
                <div>
                  <el-switch
                    v-model="valueActivityStatus"
                    active-color="#FB5D65"
                    inactive-color="#5F6A86"
                    @change="onChangeActivityStatus()"
                  >
                  </el-switch>
                </div>
              </div>
              <div class="form-set-item bh-describe w-full">
                {{
                  $t(
                    "allow_other_members_to_see_if_you_were_recently_active_within_the_last_24h_on_heartLink._if_you_have_turned_this_off,_they_will_not_be_able_to_see_your_recently_active_status"
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
  name: "switch-activity",

  data() {
    return {};
  },

  computed: {
    ...mapGetters({ nameActivityStatus: "showActivityStatus" }),
    // Activity Status
    valueActivityStatus: {
      get() {
        const activityStatus = this.nameActivityStatus;

        return activityStatus;
      },
      set(newName) {
        return newName;
      },
    },
  },

  methods: {
    ...mapMutations(["setActivityStatus"]),
    onChangeActivityStatus() {
      const activityStatus =
        this.$store.state.userModule.user_profile.settings.showActiveStatus;
      if (activityStatus) {
        this.setActivityStatus(false);
      } else {
        this.setActivityStatus(true);
      }
    },
  },
};
</script>

<style></style>
