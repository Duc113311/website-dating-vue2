<template>
  <div class="w-full h-full">
    <div class="v-modal-bg w-full h-full" @click="onChangeCancel()"></div>
    <div class="w-full absolute top-28 flex justify-center p-5">
      <div
        class="rounded-lg bg-dialog-default title-default items-center w-full height-scroll w-form-common overflow-scroll relative p-5 cursor-pointer"
      >
        <div class="w-full justify-between flex items-center h-title-close">
          <div @click="onChangeCancel()">
            <i class="fa-solid fa-xmark size-icon-default"></i>
          </div>
          <div @click="onChangeSaveLife()">
            <i class="fa-solid fa-check size-icon-default type-life"></i>
          </div>
        </div>
        <div class="w-full flex justify-center items-center h-form-data">
          <div
            class="w-full items-center h-full height-scroll overflow-scroll"
            ref="scroll_1"
          >
            <!-- Title -->
            <div class="w-full" v-bind:class="{ 'scroll-header': scrolled }">
              <div class="title-dialog">{{ $t("style_of_life") }}</div>
              <div class="describe-dialog">
                {{
                  $t(
                    "more_lifestyle_information_to_show_everyone_your_best_photos."
                  )
                }}
              </div>
            </div>
            <!-- Cung hoàng đạo -->
            <div class="w-full">
              <div class="w-full flex items-center">
                <div class="name-option-dialog flex items-center">
                  <img
                    class="mr-2"
                    src="@/assets/icon/ic_tinder/pets@1x.png"
                    width="25"
                  />
                  {{ $t("do_you_have_pets") }}
                </div>
              </div>
              <div class="border-bottom">
                <button
                  v-for="(item, index) in listPetParams"
                  :key="index"
                  :id="`pet_` + item.code"
                  class="style-option-click border-default pet"
                  @click="onChosePet(item)"
                >
                  {{ item.value }}
                </button>
              </div>
            </div>

            <!-- Trình độ học vấn -->
            <div class="w-full">
              <div class="w-full flex items-center">
                <div
                  class="name-option-dialog flex items-center"
                  ref="scroll_2"
                >
                  <img
                    class="mr-2"
                    src="@/assets/icon/ic_tinder/drink_of_choice@1x.png"
                    width="25"
                  />
                  {{ $t("how_often_do_you_drink_alcohol?") }}
                </div>
              </div>
              <div class="border-bottom">
                <button
                  v-for="(item, index) in listDrinkingParams"
                  :key="index"
                  :id="`drinking_` + item.code"
                  class="style-option-click border-default drinking"
                  @click="onChoseDrinking(item)"
                >
                  {{ item.value }}
                </button>
              </div>
            </div>
            <!-- Phong cách  -->
            <div class="w-full">
              <div class="w-full flex items-center">
                <div
                  class="name-option-dialog flex items-center"
                  ref="scroll_3"
                >
                  <img
                    class="mr-2"
                    src="@/assets/icon/ic_tinder/smoking@1x.png"
                    width="25"
                  />
                  {{ $t("are_you_a_smoker?") }}
                </div>
              </div>
              <div class="border-bottom">
                <button
                  v-for="(item, index) in listSmokingParams"
                  :key="index"
                  :id="`smoking_` + item.code"
                  class="style-option-click border-default smoking"
                  @click="onChoseSmoking(item)"
                >
                  {{ item.value }}
                </button>
              </div>
            </div>
            <!-- Trạng thái hôn nhân -->
            <div class="w-full">
              <div class="w-full flex items-center">
                <div
                  class="name-option-dialog flex items-center"
                  ref="scroll_4"
                >
                  <img
                    class="mr-2"
                    src="@/assets/icon/ic_tinder/workout@2x.png"
                    width="25"
                  />{{ $t("do_you_exercise?") }}
                </div>
              </div>
              <div class="border-bottom">
                <button
                  v-for="(item, index) in listWorkoutParam"
                  :key="index"
                  :id="`workout_` + item.code"
                  class="style-option-click border-default workout"
                  @click="onChoseWorkout(item)"
                >
                  {{ item.value }}
                </button>
              </div>
            </div>
            <!-- Tính cách -->
            <div class="w-full">
              <div class="w-full flex items-center">
                <div
                  class="name-option-dialog flex items-center"
                  ref="scroll_5"
                >
                  <img
                    class="mr-2"
                    src="@/assets/icon/ic_tinder/appetite@1x.png"
                    width="25"
                  />{{ $t("do_you_follow_any_diet?") }}
                </div>
              </div>
              <div class="border-bottom">
                <button
                  v-for="(item, index) in listDietaryPreferenceParams"
                  :key="index"
                  :id="`dietaryPreference_` + item.code"
                  class="style-option-click border-default dietaryPreference"
                  @click="onChoseDietaryPreference(item)"
                >
                  {{ item.value }}
                </button>
              </div>
            </div>

            <div class="w-full">
              <div class="w-full flex items-center">
                <div
                  class="name-option-dialog flex items-center"
                  ref="scroll_6"
                >
                  <img
                    class="mr-2"
                    src="@/assets/icon/ic_tinder/social_media@1x.png"
                    width="25"
                  />
                  {{ $t("how_active_you_are_on_social_media?") }}
                </div>
              </div>
              <div class="border-bottom">
                <button
                  v-for="(item, index) in listSocialMediaParams"
                  :key="index"
                  :id="`socialMedia_` + item.code"
                  class="style-option-click border-default socialMedia"
                  @click="onChoseSocialMedia(item)"
                >
                  {{ item.value }}
                </button>
              </div>
            </div>

            <div class="w-full">
              <div class="w-full flex items-center">
                <div
                  class="name-option-dialog flex items-center"
                  ref="scroll_7"
                >
                  <img
                    class="mr-2"
                    src="@/assets/icon/ic_tinder/sleeping_habits@1x.png"
                    width="25"
                  />
                  {{ $t("how_are_your_sleeping_habits?") }}
                </div>
              </div>
              <div class="bor-bottom-not">
                <button
                  v-for="(item, index) in listSleepingHabitParams"
                  :key="index"
                  :id="`sleepingHabit_` + item.code"
                  class="style-option-click border-default sleepingHabit"
                  @click="onChoseSleepingHabit(item)"
                >
                  {{ item.value }}
                </button>
              </div>
            </div>

            <!-- Thích điều j -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "form-life-style",

  data() {
    return {
      listDatas: [
        "Virod",
        "Red",
        "Dog",
        "age",
        "Height School",
        "Height School",
        "reading",
        "Listing",
      ],

      petValue: null,
      drinkingValue: null,
      smokingValue: null,
      workoutValue: null,
      dietaryPreferenceValue: null,
      socialMediaValue: null,
      sleepingHabitValue: null,
      scrolled: false,
    };
  },

  props: ["valueScroll"],

  computed: {
    listPetParams() {
      return this.$store.state.commonModule.listLifeStyleStatic.pets;
    },
    listDrinkingParams() {
      return this.$store.state.commonModule.listLifeStyleStatic.drinkings;
    },
    listSmokingParams() {
      return this.$store.state.commonModule.listLifeStyleStatic.smokings;
    },
    listWorkoutParam() {
      return this.$store.state.commonModule.listLifeStyleStatic.workouts;
    },
    listDietaryPreferenceParams() {
      return this.$store.state.commonModule.listLifeStyleStatic.foodPreferences;
    },
    listSocialMediaParams() {
      return this.$store.state.commonModule.listLifeStyleStatic.socials;
    },
    listSleepingHabitParams() {
      return this.$store.state.commonModule.listLifeStyleStatic.sleepingStyles;
    },
  },

  methods: {
    ...mapMutations([
      "setPets",
      "setDrinking",
      "setWorkout",
      "setSmoking",
      "setDietaryPreference",
      "setSocialMedia",
      "setSleepingHabit",
    ]),
    onChosePet(val) {
      const documentZodiacs = document.getElementsByClassName("pet");
      for (let index = 0; index < documentZodiacs.length; index++) {
        const element = documentZodiacs[index];
        if (`pet_` + val.code === element.id) {
          this.petValue = val;
          element.classList.add("bg-active");
          document.getElementsByClassName("type-life")[0].style.color =
            "#f65a62";
        } else {
          element.classList.remove("bg-active");
        }
      }
    },

    onChoseDrinking(val) {
      const documentZodiacs = document.getElementsByClassName("drinking");
      for (let index = 0; index < documentZodiacs.length; index++) {
        const element = documentZodiacs[index];
        if (`drinking_` + val.code === element.id) {
          this.drinkingValue = val;
          element.classList.add("bg-active");
          document.getElementsByClassName("type-life")[0].style.color =
            "#f65a62";
        } else {
          element.classList.remove("bg-active");
        }
      }
    },

    onChoseWorkout(val) {
      const documentZodiacs = document.getElementsByClassName("workout");
      for (let index = 0; index < documentZodiacs.length; index++) {
        const element = documentZodiacs[index];
        if (`workout_` + val.code === element.id) {
          this.workoutValue = val;
          element.classList.add("bg-active");
          document.getElementsByClassName("type-life")[0].style.color =
            "#f65a62";
        } else {
          element.classList.remove("bg-active");
        }
      }
    },

    onChoseSmoking(val) {
      const documentZodiacs = document.getElementsByClassName("smoking");
      for (let index = 0; index < documentZodiacs.length; index++) {
        const element = documentZodiacs[index];
        if (`smoking_` + val.code === element.id) {
          this.smokingValue = val;
          element.classList.add("bg-active");
          document.getElementsByClassName("type-life")[0].style.color =
            "#f65a62";
        } else {
          element.classList.remove("bg-active");
        }
      }
    },

    onChoseDietaryPreference(val) {
      const documentZodiacs =
        document.getElementsByClassName("dietaryPreference");
      for (let index = 0; index < documentZodiacs.length; index++) {
        const element = documentZodiacs[index];
        if (`dietaryPreference_` + val.code === element.id) {
          this.dietaryPreferenceValue = val;
          element.classList.add("bg-active");
          document.getElementsByClassName("type-life")[0].style.color =
            "#f65a62";
        } else {
          element.classList.remove("bg-active");
        }
      }
    },
    onChoseSocialMedia(val) {
      const documentZodiacs = document.getElementsByClassName("socialMedia");
      for (let index = 0; index < documentZodiacs.length; index++) {
        const element = documentZodiacs[index];
        if (`socialMedia_` + val.code === element.id) {
          this.socialMediaValue = val;
          element.classList.add("bg-active");
          document.getElementsByClassName("type-life")[0].style.color =
            "#f65a62";
        } else {
          element.classList.remove("bg-active");
        }
      }
    },

    onChoseSleepingHabit(val) {
      const documentZodiacs = document.getElementsByClassName("sleepingHabit");
      for (let index = 0; index < documentZodiacs.length; index++) {
        const element = documentZodiacs[index];
        if (`sleepingHabit_` + val.code === element.id) {
          this.sleepingHabitValue = val;
          element.classList.add("bg-active");
          document.getElementsByClassName("type-life")[0].style.color =
            "#f65a62";
        } else {
          element.classList.remove("bg-active");
        }
      }
    },
    onChangeCancel() {
      if (this.petValue) {
        document
          .getElementById("pet_" + this.petValue.code)
          .classList.remove("bg-active");
      }
      if (this.drinkingValue) {
        document
          .getElementById("drinking_" + this.drinkingValue.code)
          .classList.remove("bg-active");
      }
      if (this.smokingValue) {
        document
          .getElementById("smoking_" + this.smokingValue.code)
          .classList.remove("bg-active");
      }
      if (this.workoutValue) {
        document
          .getElementById("workout_" + this.workoutValue.code)
          .classList.remove("bg-active");
      }
      if (this.dietaryPreferenceValue) {
        document
          .getElementById(
            "dietaryPreference_" + this.dietaryPreferenceValue.code
          )
          .classList.remove("bg-active");
      }
      if (this.socialMediaValue) {
        document
          .getElementById("socialMedia_" + this.socialMediaValue.code)
          .classList.remove("bg-active");
      }
      if (this.sleepingHabitValue) {
        document
          .getElementById("sleepingHabit_" + this.sleepingHabitValue.code)
          .classList.remove("bg-active");
      }

      (this.petValue = null),
        (this.drinkingValue = null),
        (this.smokingValue = null),
        (this.workoutValue = null),
        (this.dietaryPreferenceValue = null),
        (this.socialMediaValue = null),
        (this.sleepingHabitValue = null),
        this.$emit("onClickCancelLife", false);
    },

    onChangeSaveLife() {
      if (this.petValue !== null) {
        this.setPets(this.petValue);
      }
      if (this.drinkingValue !== null) {
        this.setDrinking(this.drinkingValue);
      }
      if (this.workoutValue !== null) {
        this.setWorkout(this.workoutValue);
      }
      if (this.smokingValue !== null) {
        this.setSmoking(this.smokingValue);
      }
      if (this.dietaryPreferenceValue !== null) {
        this.setDietaryPreference(this.dietaryPreferenceValue);
      }
      if (this.socialMediaValue !== null) {
        this.setSocialMedia(this.socialMediaValue);
      }
      if (this.sleepingHabitValue !== null) {
        this.setSleepingHabit(this.sleepingHabitValue);
      }
      this.$emit("onClickCancelLife", false);
    },
  },
  beforeDestroy() {},
  mounted() {
    this.$refs[this.valueScroll].scrollIntoView({ behavior: "smooth" });

    const profileBasic = this.$store.state.userModule.user_profile.profiles;

    if (
      profileBasic.pet ||
      profileBasic.drinking ||
      profileBasic.smoking ||
      profileBasic.workout ||
      profileBasic.dietaryPreference ||
      profileBasic.socialMedia ||
      profileBasic.sleepingHabit
    ) {
      document.getElementsByClassName("type-life")[0].style.color = "#f65a62";
    }
    if (profileBasic.pet) {
      document
        .getElementById("pet_" + profileBasic.pet)
        .classList.add("bg-active");
    }
    if (profileBasic.drinking) {
      document
        .getElementById("drinking_" + profileBasic.drinking)
        .classList.add("bg-active");
    }
    if (profileBasic.smoking) {
      document
        .getElementById("smoking_" + profileBasic.smoking)
        .classList.add("bg-active");
    }
    if (profileBasic.workout) {
      document
        .getElementById("workout_" + profileBasic.workout)
        .classList.add("bg-active");
    }
    if (profileBasic.dietaryPreference) {
      document
        .getElementById("dietaryPreference_" + profileBasic.dietaryPreference)
        .classList.add("bg-active");
    }
    if (profileBasic.socialMedia) {
      document
        .getElementById("socialMedia_" + profileBasic.socialMedia)
        .classList.add("bg-active");
    }
    if (profileBasic.sleepingHabit) {
      document
        .getElementById("sleepingHabit_" + profileBasic.sleepingHabit)
        .classList.add("bg-active");
    }
  },
};
</script>

<style lang="css">
.bg-active {
  border: 1.5px solid #f65a62 !important;
  color: #f65a62;
}
</style>
