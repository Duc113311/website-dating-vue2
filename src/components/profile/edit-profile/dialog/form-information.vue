<template>
  <div class="w-full h-full">
    <div class="v-modal-bg w-full h-full"></div>
    <div
      class="w-full h-full flex justify-center items-center absolute top-0 left-0"
    >
      <div class="rounded-lg items-center w-form-life relative p-5">
        <div class="w-full justify-between flex items-center h-title-close">
          <div @click="onChangeCancel()">
            <i class="fa-solid fa-xmark size-icon-default"></i>
          </div>
          <div @click="onChangeSaveLife()">
            <i class="fa-solid fa-check size-icon-default type-basic"></i>
          </div>
        </div>
        <div class="w-full flex justify-center items-center h-form-data">
          <div class="w-full items-center h-full height-scroll overflow-scroll">
            <!-- Title -->
            <div class="w-full">
              <div class="title-dialog">Basic information</div>
              <div
                class="describe-dialog"
                v-bind:class="[
                  isDarkTheme ? 'dark-theme-describe' : 'dark-theme-describe',
                ]"
              >
                Add more info so people can see your amazing pictures
              </div>
            </div>
            <!-- Cung hoàng đạo -->
            <div class="w-full">
              <div class="w-full flex items-center">
                <div class="name-option-dialog flex items-center">
                  <img
                    class="mr-2"
                    src="@/assets/icon/ic_tinder/astrological_sign@2x.png"
                    width="30"
                  />
                  What is your zodiac sign?
                </div>
              </div>
              <div class="bor-bottom">
                <button
                  v-for="(item, index) in listZodiacParams"
                  :key="index"
                  :id="`zodiac_` + item.code"
                  class="style-option-click zodiac"
                  @click="onChoseZodiac(item)"
                >
                  {{ item.value }}
                </button>
              </div>
            </div>

            <!-- Trình độ học vấn -->
            <div class="w-full">
              <div class="w-full flex items-center">
                <div class="name-option-dialog flex items-center">
                  <img
                    class="mr-2"
                    src="@/assets/icon/ic_tinder/education@1x.png"
                    width="30"
                  />Your education level?
                </div>
              </div>
              <div class="bor-bottom">
                <button
                  v-for="(item, index) in listEducationParams"
                  :key="index"
                  :id="`education_` + item.code"
                  class="style-option-click education"
                  @click="onChoseEducation(item)"
                >
                  {{ item.value }}
                </button>
              </div>
            </div>
            <!-- Phong cách  -->
            <div class="w-full">
              <div class="w-full flex items-center">
                <div class="name-option-dialog flex items-center">
                  <img
                    class="mr-2"
                    src="@/assets/icon/ic_tinder/family@1x.png"
                    width="30"
                  />
                  Do you want to have children?
                </div>
              </div>
              <div class="bor-bottom">
                <button
                  v-for="(item, index) in listFamilyPlansParams"
                  :key="index"
                  :id="`familyFlan_` + item.code"
                  class="style-option-click familyFlan"
                  @click="onChoseFamilyPlan(item)"
                >
                  {{ item.value }}
                </button>
              </div>
            </div>
            <!-- Trạng thái hôn nhân -->
            <div class="w-full">
              <div class="w-full flex items-center">
                <div class="name-option-dialog flex items-center">
                  <img
                    class="mr-2"
                    src="@/assets/icon/ic_tinder/covid_comfort@1x.png"
                    width="30"
                  />
                  Have you been vaccinated yet?
                </div>
              </div>
              <div class="bor-bottom">
                <button
                  v-for="(item, index) in listCovidVaccinesParam"
                  :key="index"
                  :id="`covidVaccine_` + item.code"
                  class="style-option-click covidVaccine"
                  @click="onChoseCovidVaccines(item)"
                >
                  {{ item.value }}
                </button>
              </div>
            </div>
            <!-- Tính cách -->
            <div class="w-full">
              <div class="w-full flex items-center">
                <div class="name-option-dialog flex items-center">
                  <img
                    class="mr-2"
                    src="@/assets/icon/ic_tinder/kietinhcach@2x.png"
                    width="30"
                  />
                  What is your personality type?
                </div>
              </div>
              <div class="bor-bottom">
                <button
                  v-for="(item, index) in listPersonalitiesParams"
                  :key="index"
                  :id="`personality_` + item.code"
                  class="style-option-click personality"
                  @click="onChosePersonality(item)"
                >
                  {{ item.value }}
                </button>
              </div>
            </div>

            <div class="w-full">
              <div class="w-full flex items-center">
                <div class="name-option-dialog flex items-center">
                  <img
                    class="mr-2"
                    src="@/assets/icon/ic_tinder/communication_style@2x.png"
                    width="30"
                  />
                  What is your communication style?
                </div>
              </div>
              <div class="bor-bottom">
                <button
                  v-for="(item, index) in listCommunicationStylesParams"
                  :key="index"
                  :id="`communicationType_` + item.code"
                  class="style-option-click communicationType"
                  @click="onChoseCommunication(item)"
                >
                  {{ item.value }}
                </button>
              </div>
            </div>

            <div class="w-full">
              <div class="w-full flex items-center">
                <div class="name-option-dialog flex items-center">
                  <img
                    class="mr-2"
                    src="@/assets/icon/ic_tinder/love_language@1x.png"
                    width="30"
                  />
                  When love, what do you like to receive?
                </div>
              </div>
              <div class="bor-bottom-not">
                <button
                  v-for="(item, index) in listLoveStylesParams"
                  :key="index"
                  :id="`loveStyle_` + item.code"
                  class="style-option-click loveStyle"
                  @click="onChoseLoveStyles(item)"
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
  name: "form-information",

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

      zodiacsValue: null,
      educationsValue: null,
      familyPlansValue: null,
      covidVaccinesValue: null,
      personalitiesValue: null,
      communicationStylesValue: null,
      loveStylesValue: null,
    };
  },

  computed: {
    isDarkTheme() {
      const theme = localStorage.getItem("user-theme");

      if (theme === "light-theme") {
        return false;
      } else {
        return true;
      }
    },

    listZodiacParams() {
      return this.$store.state.commonModule.listInformationBasic.zodiacs;
    },
    listEducationParams() {
      return this.$store.state.commonModule.listInformationBasic.educations;
    },
    listFamilyPlansParams() {
      return this.$store.state.commonModule.listInformationBasic.familyPlans;
    },
    listCovidVaccinesParam() {
      return this.$store.state.commonModule.listInformationBasic.covidVaccines;
    },
    listPersonalitiesParams() {
      return this.$store.state.commonModule.listInformationBasic.personalities;
    },
    listCommunicationStylesParams() {
      return this.$store.state.commonModule.listInformationBasic
        .communicationStyles;
    },
    listLoveStylesParams() {
      return this.$store.state.commonModule.listInformationBasic.loveStyles;
    },
  },

  methods: {
    ...mapMutations([
      "setLifeStyle",
      "setZodiac",
      "setEducation",
      "setCovidVaccines",
      "setFamilyPlan",
      "setPersonality",
      "setCommunication",
      "setLoveStyles",
    ]),
    onChoseZodiac(val) {
      debugger;
      const documentZodiacs = document.getElementsByClassName("zodiac");
      for (let index = 0; index < documentZodiacs.length; index++) {
        const element = documentZodiacs[index];
        if ("zodiac_" + val.code === element.id) {
          this.zodiacsValue = val;
          element.classList.add("bg-active");
          document.getElementsByClassName("type-basic")[0].style.color =
            "#f65a62";
        } else {
          element.classList.remove("bg-active");
        }
      }
    },
    onChoseEducation(val) {
      const documentZodiacs = document.getElementsByClassName("education");
      for (let index = 0; index < documentZodiacs.length; index++) {
        const element = documentZodiacs[index];
        if ("education_" + val.code === element.id) {
          this.educationsValue = val;
          element.classList.add("bg-active");
          document.getElementsByClassName("type-basic")[0].style.color =
            "#f65a62";
        } else {
          element.classList.remove("bg-active");
        }
      }
    },
    onChoseCovidVaccines(val) {
      const documentZodiacs = document.getElementsByClassName("covidVaccine");
      for (let index = 0; index < documentZodiacs.length; index++) {
        const element = documentZodiacs[index];
        if ("covidVaccine_" + val.code === element.id) {
          this.covidVaccinesValue = val;
          element.classList.add("bg-active");
          document.getElementsByClassName("type-basic")[0].style.color =
            "#f65a62";
        } else {
          element.classList.remove("bg-active");
        }
      }
    },
    onChoseFamilyPlan(val) {
      const documentZodiacs = document.getElementsByClassName("familyFlan");
      for (let index = 0; index < documentZodiacs.length; index++) {
        const element = documentZodiacs[index];
        if ("familyFlan_" + val.code === element.id) {
          this.familyPlansValue = val;
          element.classList.add("bg-active");
          document.getElementsByClassName("type-basic")[0].style.color =
            "#f65a62";
        } else {
          element.classList.remove("bg-active");
        }
      }
    },
    onChosePersonality(val) {
      const documentZodiacs = document.getElementsByClassName("personality");
      for (let index = 0; index < documentZodiacs.length; index++) {
        const element = documentZodiacs[index];
        if ("personality_" + val.code === element.id) {
          this.personalitiesValue = val;
          element.classList.add("bg-active");
          document.getElementsByClassName("type-basic")[0].style.color =
            "#f65a62";
        } else {
          element.classList.remove("bg-active");
        }
      }
    },
    onChoseCommunication(val) {
      const documentZodiacs =
        document.getElementsByClassName("communicationType");
      for (let index = 0; index < documentZodiacs.length; index++) {
        const element = documentZodiacs[index];
        if ("communicationType_" + val.code === element.id) {
          this.communicationStylesValue = val;
          element.classList.add("bg-active");
          document.getElementsByClassName("type-basic")[0].style.color =
            "#f65a62";
        } else {
          element.classList.remove("bg-active");
        }
      }
    },
    onChoseLoveStyles(val) {
      const documentZodiacs = document.getElementsByClassName("loveStyle");
      for (let index = 0; index < documentZodiacs.length; index++) {
        const element = documentZodiacs[index];
        if ("loveStyle_" + val.code === element.id) {
          this.loveStylesValue = val;
          element.classList.add("bg-active");
          document.getElementsByClassName("type-basic")[0].style.color =
            "#f65a62";
        } else {
          element.classList.remove("bg-active");
        }
      }
    },

    onChangeCancel() {
      debugger;

      if (this.zodiacsValue) {
        document
          .getElementById("zodiac_" + this.zodiacsValue.code)
          .classList.remove("bg-active");
      }
      if (this.familyPlansValue) {
        document
          .getElementById("familyFlan_" + this.familyPlansValue.code)
          .classList.remove("bg-active");
      }
      if (this.educationsValue) {
        document
          .getElementById("education_" + this.educationsValue.code)
          .classList.remove("bg-active");
      }
      if (this.personalitiesValue) {
        document
          .getElementById("personality_" + this.personalitiesValue.code)
          .classList.remove("bg-active");
      }
      if (this.covidVaccinesValue) {
        document
          .getElementById("covidVaccine_" + this.covidVaccinesValue.code)
          .classList.remove("bg-active");
      }
      if (this.communicationStylesValue) {
        document
          .getElementById(
            "communicationType_" + this.communicationStylesValue.code
          )
          .classList.remove("bg-active");
      }
      if (this.loveStylesValue) {
        document
          .getElementById("loveStyle_" + this.loveStylesValue.code)
          .classList.remove("bg-active");
      }
      (this.zodiacsValue = null),
        (this.educationsValue = null),
        (this.familyPlansValue = null),
        (this.covidVaccinesValue = null),
        (this.personalitiesValue = null),
        (this.communicationStylesValue = null),
        (this.loveStylesValue = null),
        this.$emit("onClickCancelInformation", false);
    },

    onChangeSaveLife() {
      debugger;
      if (this.zodiacsValue !== null) {
        this.setZodiac(this.zodiacsValue);
      }
      if (this.educationsValue !== null) {
        this.setEducation(this.educationsValue);
      }
      if (this.covidVaccinesValue !== null) {
        this.setCovidVaccines(this.covidVaccinesValue);
      }
      if (this.familyPlansValue !== null) {
        this.setFamilyPlan(this.familyPlansValue);
      }
      if (this.personalitiesValue !== null) {
        this.setPersonality(this.personalitiesValue);
      }
      if (this.communicationStylesValue !== null) {
        this.setCommunication(this.communicationStylesValue);
      }
      if (this.loveStylesValue !== null) {
        this.setLoveStyles(this.loveStylesValue);
      }

      this.$emit("onClickSaveInformation", false);
    },
  },

  mounted() {
    debugger;
    const profileBasic = this.$store.state.userModule.user_profile.profiles;
    if (
      (profileBasic.zodiac ||
        profileBasic.familyFlan ||
        profileBasic.education ||
        profileBasic.personality ||
        profileBasic.covidVaccine ||
        profileBasic.communicationType ||
        profileBasic.loveStyle) !== ""
    ) {
      debugger;
      document.getElementsByClassName("type-basic")[0].style.color = "#f65a62";
    }
    if (profileBasic.zodiac) {
      document
        .getElementById("zodiac_" + profileBasic.zodiac)
        .classList.add("bg-active");
    }
    if (profileBasic.familyFlan) {
      document
        .getElementById("familyFlan_" + profileBasic.familyFlan)
        .classList.add("bg-active");
    }
    if (profileBasic.education) {
      document
        .getElementById("education_" + profileBasic.education)
        .classList.add("bg-active");
    }
    if (profileBasic.personality) {
      document
        .getElementById("personality_" + profileBasic.personality)
        .classList.add("bg-active");
    }
    if (profileBasic.covidVaccine) {
      document
        .getElementById("covidVaccine_" + profileBasic.covidVaccine)
        .classList.add("bg-active");
    }
    if (profileBasic.communicationType) {
      document
        .getElementById("communicationType_" + profileBasic.communicationType)
        .classList.add("bg-active");
    }
    if (profileBasic.loveStyle) {
      document
        .getElementById("loveStyle_" + profileBasic.loveStyle)
        .classList.add("bg-active");
    }
  },
};
</script>

<style lang="css">
.bg-active {
  border: 1.4px solid #f65a62 !important;
  color: #f65a62;
}

.name-option-dialog img {
  filter: invert(90%) sepia(20%) saturate(200%) hue-rotate(80deg);
}
</style>
