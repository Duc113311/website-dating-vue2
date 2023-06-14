<template>
  <div class="w-full mt-6">
    <div class="w-full form-set-list bg-default">
      <div
        class="w-full flex justify-between bh-title title-item form-set-item"
      >
        <div>{{ $t("show_me") }}</div>
      </div>
      <div class="w-full flex items-center">
        <div class="w-full">
          <div
            class="flex justify-between w-full items-center"
            v-for="(item, index) in listGenderFilter"
            :key="index"
            @click="onChangeGenderShowMe(item.code)"
          >
            <div class="bh-item-title form-set-item">{{ item.value }}</div>
            <div v-if="showMeGender === item.code">
              <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full p-3 bh-describe">
      {{
        $t(
          "we_use_these_preferences_to_find_matches._some_match_suggestions_may_not_fall_within_your_desired_parameters"
        )
      }}
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "show-me-page",

  data() {
    return {};
  },

  computed: {
    showMeGender() {
      const genderFilter =
        this.$store.state.userModule.user_profile?.settings.genderFilter;
      return genderFilter;
    },

    listGenderFilter() {
      return this.$store.state.commonModule.listLifeStyleSingle.genderFilters;
    },
  },

  methods: {
    ...mapMutations(["setShowGender"]),
    onChangeGenderShowMe(val) {
      console.log(val);
      this.setShowGender(val);
    },
  },
};
</script>

<style css scoped></style>
