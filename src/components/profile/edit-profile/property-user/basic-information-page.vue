<template>
  <div class="w-full flex justify-center items-center">
    <div class="w-full relative">
      <div class="w-full flex justify-between p-3 bh-title">
        <div class="">BASIC INFORMATION</div>
        <div v-if="completeLifeStyle">+4%</div>
      </div>

      <div class="w-full bg-life bg-default title-default">
        <div class="w-full item-life bd-input">
          <div class="w-6/12 bh-item-title flex items-center">
            <img
              class="mr-2"
              src="@/assets/icon/ic_tinder/astrological_sign@2x.png"
              width="25"
            />Zodiac
          </div>
          <div class="flex w-6/12 justify-end">
            <div class="flex">
              <div class="bh-describe whitespace-nowrap mr-3 overflow-hidden">
                {{ zodiacParam }}
              </div>
              <div class="cursor-pointer" @click="onShowBasicInformation()">
                <i
                  class="fa-solid bh-chevron-right cursor-pointer fa-chevron-right"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full item-life bd-input">
          <div class="w-6/12 bh-item-title flex items-center">
            <img
              class="mr-2"
              src="@/assets/icon/ic_tinder/family@1x.png"
              width="25"
            />Future family
          </div>
          <div class="flex w-6/12 justify-end">
            <div class="flex">
              <div class="bh-describe whitespace-nowrap mr-3 overflow-hidden">
                {{ familyParam }}
              </div>
              <div class="cursor-pointer" @click="onShowBasicInformation()">
                <i
                  class="fa-solid bh-chevron-right cursor-pointer fa-chevron-right"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full item-life bd-input">
          <div class="w-6/12 bh-item-title flex items-center">
            <img
              class="mr-2"
              src="@/assets/icon/ic_tinder/education@1x.png"
              width="25"
            />Education
          </div>
          <div class="flex w-6/12 justify-end">
            <div class="flex">
              <div class="bh-describe whitespace-nowrap mr-3 overflow-hidden">
                {{ educationParam }}
              </div>
              <div class="cursor-pointer" @click="onShowBasicInformation()">
                <i
                  class="fa-solid bh-chevron-right cursor-pointer fa-chevron-right"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full item-life bd-input">
          <div class="w-6/12 bh-item-title flex items-center">
            <img
              class="mr-2"
              src="@/assets/icon/ic_tinder/covid_comfort@1x.png"
              width="25"
            />Vaccine for COVID
          </div>
          <div class="flex w-6/12 justify-end">
            <div class="flex">
              <div class="bh-describe whitespace-nowrap mr-3 overflow-hidden">
                {{ vaccineParam }}
              </div>
              <div class="cursor-pointer" @click="onShowBasicInformation()">
                <i
                  class="fa-solid bh-chevron-right cursor-pointer fa-chevron-right"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full item-life bd-input">
          <div class="w-6/12 bh-item-title flex items-center">
            <img
              class="mr-2"
              src="@/assets/icon/ic_tinder/kietinhcach@2x.png"
              width="25"
            />Personality Type
          </div>
          <div class="flex w-6/12 justify-end">
            <div class="flex">
              <div class="bh-describe whitespace-nowrap mr-3 overflow-hidden">
                {{ personalityParam }}
              </div>
              <div class="cursor-pointer" @click="onShowBasicInformation()">
                <i
                  class="fa-solid bh-chevron-right cursor-pointer fa-chevron-right"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full item-life bd-input">
          <div class="w-6/12 bh-item-title flex items-center">
            <img
              class="mr-2"
              src="@/assets/icon/ic_tinder/communication_style@2x.png"
              width="25"
            />Communication Style
          </div>
          <div class="flex w-6/12 justify-end">
            <div class="flex">
              <div class="bh-describe whitespace-nowrap mr-3 overflow-hidden">
                {{ communicationParam }}
              </div>
              <div class="cursor-pointer" @click="onShowBasicInformation()">
                <i
                  class="fa-solid bh-chevron-right cursor-pointer fa-chevron-right"
                ></i>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full item-life bd-input-end">
          <div class="w-6/12 bh-item-title flex items-center">
            <img
              class="mr-2"
              src="@/assets/icon/ic_tinder/love_language@1x.png"
              width="25"
            />Love Languages
          </div>
          <div class="flex w-6/12 justify-end">
            <div class="flex">
              <div class="bh-describe whitespace-nowrap mr-3 overflow-hidden">
                {{ loveLanguageParam }}
              </div>
              <div class="cursor-pointer" @click="onShowBasicInformation()">
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
  name: "basic-information-page",

  data() {
    return {
      nameDefault: "Trống",
    };
  },

  computed: {
    /**
     * Binding complete
     */
    completeLifeStyle() {
      if (
        (this.zodiacParam ||
          this.loveLanguageParam ||
          this.communicationParam ||
          this.vaccineParam ||
          this.personalityParam ||
          this.familyParam ||
          this.educationParam ||
          this.educationParam) !== "Trống"
      ) {
        this.setCompleteBasicInformation(false);
        return false;
      }

      return true;
    },

    /**
     * Binding zodiac
     */
    zodiacParam() {
      const zodiacData = this.$store.state.userModule.basicInformation.zodiac;
      debugger;
      return zodiacData ? zodiacData : this.nameDefault;
    },

    familyParam() {
      const petsFreeData =
        this.$store.state.userModule.basicInformation.familyFlan;
      debugger;

      return petsFreeData ? petsFreeData : this.nameDefault;
    },

    educationParam() {
      const educationData =
        this.$store.state.userModule.basicInformation.education;
      debugger;

      return educationData ? educationData : this.nameDefault;
    },

    personalityParam() {
      const personalityData =
        this.$store.state.userModule.basicInformation.personality;
      debugger;

      return personalityData ? personalityData : this.nameDefault;
    },

    vaccineParam() {
      const vaccineData =
        this.$store.state.userModule.basicInformation.covidVaccine;
      debugger;

      return vaccineData ? vaccineData : this.nameDefault;
    },

    communicationParam() {
      const communicationData =
        this.$store.state.userModule.basicInformation.communicationType;
      debugger;

      return communicationData ? communicationData : this.nameDefault;
    },

    loveLanguageParam() {
      const loveLanguageData =
        this.$store.state.userModule.basicInformation.loveStyle;
      debugger;

      return loveLanguageData ? loveLanguageData : this.nameDefault;
    },
  },

  methods: {
    ...mapMutations(["setCompleteBasicInformation"]),
    /**
     * Sự kiện show thoong tin cơ bản
     */
    onShowBasicInformation() {
      //
      this.$emit("onShowFormBasicInformation", true);
    },
  },
};
</script>

<style lang="css"></style>
