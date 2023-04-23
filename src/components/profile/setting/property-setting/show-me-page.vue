<template>
  <div class="w-full mt-6">
    <div class="w-full form-set-list">
      <div class="w-full flex justify-between bh-title form-set-item">
        <div>SHOW ME</div>
      </div>
      <div class="w-full flex items-center">
        <div class="w-full style-bg-common">
          <div
            class="flex justify-between w-full bd-input items-center"
            @click="onChangeGenderShowMe(`men`)"
          >
            <div class="bh-item-title form-set-item">Men</div>
            <div v-if="showMeGender === `men`">
              <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
            </div>
          </div>

          <div
            class="flex justify-between w-full bd-input items-center"
            @click="onChangeGenderShowMe(`women`)"
          >
            <div class="bh-item-title form-set-item">Women</div>
            <div v-if="showMeGender === `women`">
              <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
            </div>
          </div>

          <div
            class="flex justify-between w-full items-center"
            @click="onChangeGenderShowMe(`all`)"
          >
            <div class="bh-item-title form-set-item">Everyone</div>
            <div v-if="showMeGender === `all`">
              <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full p-3 bh-describe">
      We use these preferences to find matches. Some match suggestions may not
      fall within your desired parameters
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
      const genderShowMe =
        this.$store.state.userModule.user_profile?.settings.genderFilter;
      debugger;
      return genderShowMe;
    },
  },

  methods: {
    ...mapMutations(["setShowGender"]),
    onChangeGenderShowMe(val) {
      debugger;
      console.log(val);
      this.setShowGender(val);
    },
  },
};
</script>

<style css scoped></style>
