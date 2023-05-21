<template>
  <div class="w-full flex justify-center items-center">
    <div class="w-full relative">
      <div class="w-full flex justify-between p-3 bh-title">
        <div class="">{{ $t("life_style") }}</div>
        <div v-if="completeLifeStyle">+4%</div>
      </div>

      <div class="w-full bg-life bg-default cursor-pointer">
        <div
          class="w-full item-life border-bottom"
          @click="onShowFormLife('scroll_1')"
        >
          <div class="w-6/12 bh-item-title flex items-center">
            <img
              class="mr-2"
              src="@/assets/icon/ic_tinder/pets@1x.png"
              width="25"
            />{{ $t("pets_free") }}
          </div>
          <div class="flex w-6/12 justify-end">
            <div class="flex">
              <div class="bh-describe whitespace-nowrap mr-3 overflow-hidden">
                {{ petParam }}
              </div>
              <div class="cursor-pointer">
                <i
                  class="fa-solid bh-chevron-right cursor-pointer fa-chevron-right"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div
          class="w-full item-life border-bottom"
          @click="onShowFormLife('scroll_2')"
        >
          <div class="w-6/12 bh-item-title flex items-center">
            <img
              class="mr-2"
              src="@/assets/icon/ic_tinder/drink_of_choice@1x.png"
              width="25"
            />{{ $t("drink_beer") }}
          </div>
          <div class="flex w-6/12 justify-end">
            <div class="flex">
              <div class="bh-describe whitespace-nowrap mr-3 overflow-hidden">
                {{ drinkingParam }}
              </div>
              <div class="cursor-pointer">
                <i
                  class="fa-solid bh-chevron-right cursor-pointer fa-chevron-right"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div
          class="w-full item-life border-bottom"
          @click="onShowFormLife('scroll_3')"
        >
          <div class="w-6/12 bh-item-title flex items-center">
            <img
              class="mr-2"
              src="@/assets/icon/ic_tinder/smoking@1x.png"
              width="25"
            />{{ $t("are_you_a_smoker") }}
          </div>
          <div class="flex w-6/12 justify-end">
            <div class="flex">
              <div class="bh-describe whitespace-nowrap mr-3 overflow-hidden">
                {{ smokingParam }}
              </div>
              <div class="cursor-pointer">
                <i
                  class="fa-solid bh-chevron-right cursor-pointer fa-chevron-right"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div
          class="w-full item-life border-bottom"
          @click="onShowFormLife('scroll_4')"
        >
          <div class="w-6/12 bh-item-title flex items-center">
            <img
              class="mr-2"
              src="@/assets/icon/ic_tinder/workout@2x.png"
              width="25"
            />{{ $t("practice") }}
          </div>
          <div class="flex w-6/12 justify-end">
            <div class="flex">
              <div class="bh-describe whitespace-nowrap mr-3 overflow-hidden">
                {{ workoutParam }}
              </div>
              <div class="cursor-pointer">
                <i
                  class="fa-solid bh-chevron-right cursor-pointer fa-chevron-right"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div
          class="w-full item-life border-bottom"
          @click="onShowFormLife('scroll_5')"
        >
          <div class="w-6/12 bh-item-title flex items-center">
            <img
              class="mr-2"
              src="@/assets/icon/ic_tinder/appetite@1x.png"
              width="25"
            />{{ $t("diet") }}
          </div>
          <div class="flex w-6/12 justify-end">
            <div class="flex">
              <div class="bh-describe whitespace-nowrap mr-3 overflow-hidden">
                {{ dietaryPreferenceParam }}
              </div>
              <div class="cursor-pointer">
                <i
                  class="fa-solid bh-chevron-right cursor-pointer fa-chevron-right"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div
          class="w-full item-life border-bottom"
          @click="onShowFormLife('scroll_6')"
        >
          <div class="w-6/12 bh-item-title flex items-center">
            <img
              class="mr-2"
              src="@/assets/icon/ic_tinder/social_media@1x.png"
              width="25"
            />{{ $t("social_media") }}
          </div>
          <div class="flex w-6/12 justify-end">
            <div class="flex">
              <div class="bh-describe whitespace-nowrap mr-3 overflow-hidden">
                {{ socialMediaParam }}
              </div>
              <div class="cursor-pointer">
                <i
                  class="fa-solid bh-chevron-right cursor-pointer fa-chevron-right"
                ></i>
              </div>
            </div>
          </div>
        </div>

        <div
          class="w-full item-life bd-input-end"
          @click="onShowFormLife('scroll_7')"
        >
          <div class="w-6/12 bh-item-title flex items-center">
            <img
              class="mr-2"
              src="@/assets/icon/ic_tinder/sleeping_habits@1x.png"
              width="25"
            />{{ $t("sleeping_habits") }}
          </div>
          <div class="flex w-6/12 justify-end">
            <div class="flex">
              <div class="bh-describe whitespace-nowrap mr-3 overflow-hidden">
                {{ sleepingHabitParam }}
              </div>
              <div class="cursor-pointer">
                <i
                  class="fa-solid bh-chevron-right cursor-pointer fa-chevron-right"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "style-of-life",

  data() {
    return {
      nameDefault: this.$t("empty"),
    };
  },

  computed: {
    /**
     * Binding complete
     */
    completeLifeStyle() {
      if (
        (this.petParam ||
          this.sleepingHabitParam ||
          this.socialMediaParam ||
          this.workoutParam ||
          this.dietaryPreferenceParam ||
          this.smokingParam ||
          this.drinkingParam) !== "Trống"
      ) {
        this.setCompleteLifeStyle(false);
        return false;
      }

      return true;
    },

    /**
     * Binding zodiac
     */
    petParam() {
      const petData = this.$store.state.userModule.styleOfLife.pet;

      return petData ? petData : this.nameDefault;
    },

    drinkingParam() {
      const drinkBeerData = this.$store.state.userModule.styleOfLife.drinking;

      return drinkBeerData ? drinkBeerData : this.nameDefault;
    },

    smokingParam() {
      const smokerData = this.$store.state.userModule.styleOfLife.smoking;

      return smokerData ? smokerData : this.nameDefault;
    },

    dietaryPreferenceParam() {
      const dietData =
        this.$store.state.userModule.styleOfLife.dietaryPreference;

      return dietData ? dietData : this.nameDefault;
    },

    workoutParam() {
      const practiceData = this.$store.state.userModule.styleOfLife.workout;

      return practiceData ? practiceData : this.nameDefault;
    },

    socialMediaParam() {
      const socialMediaData =
        this.$store.state.userModule.styleOfLife.socialMedia;

      return socialMediaData ? socialMediaData : this.nameDefault;
    },

    sleepingHabitParam() {
      const sleepData = this.$store.state.userModule.styleOfLife.sleepingHabit;

      return sleepData ? sleepData : this.nameDefault;
    },
  },

  methods: {
    ...mapMutations(["setCompleteLifeStyle"]),
    onShowFormLife(val) {
      //
      this.$emit("onShowFormLifeStyle", {
        isShowForm: true,
        valueScroll: val,
      });
    },
  },
};
</script>

<style lang="css"></style>
