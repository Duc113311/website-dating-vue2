<template>
  <div class="w-full mt-6">
    <div class="w-full form-set-list bg-default">
      <div
        class="w-full flex justify-between bh-title title-item form-set-item"
      >
        <div>Show me</div>
      </div>
      <div class="w-full flex items-center">
        <div class="w-full">
          <div
            class="flex justify-between w-full border-bottom items-center"
            @click="onChangeGenderShowMe(`men`)"
          >
            <div class="bh-item-title form-set-item">Men</div>
            <div v-if="showMeGender === `men`">
              <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
            </div>
          </div>

          <div
            class="flex justify-between w-full border-bottom items-center"
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
      const genderFilter =
        this.$store.state.userModule.user_profile?.settings.genderFilter;
      return genderFilter;
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
