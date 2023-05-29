<template>
  <div class="w-full flex justify-center items-center">
    <div class="w-full relative">
      <div class="w-full flex justify-between p-3 bh-title">
        <div class="">{{ $t("basic_information") }}</div>
        <div v-if="completeLifeStyle">+4%</div>
      </div>

      <div class="w-full bg-life bg-default title-default cursor-pointer">
        <div
          class="w-full item-life border-bottom"
          @click="onShowBasicInformation('scroll_1')"
        >
          <div class="w-6/12 bh-item-title flex items-center">
            <img
              class="mr-2 ml-2"
              src="@/assets/icon/ic_tinder/astrological_sign@2x.png"
              width="25"
            />{{ $t("zodiac") }}
          </div>
          <div class="flex w-6/12 justify-end">
            <div class="flex">
              <div
                class="bh-describe whitespace-nowrap ml-3 mr-3 overflow-hidden"
              >
                {{ zodiacParam }}
              </div>
              <div class="cursor-pointer">
                <BhChevron></BhChevron>
              </div>
            </div>
          </div>
        </div>
        <div
          class="w-full item-life border-bottom"
          @click="onShowBasicInformation('scroll_2')"
        >
          <div class="w-6/12 bh-item-title flex items-center">
            <img
              class="mr-2 ml-2"
              src="@/assets/icon/ic_tinder/family@1x.png"
              width="25"
            />{{ $t("future_family") }}
          </div>
          <div class="flex w-6/12 justify-end">
            <div class="flex">
              <div
                class="bh-describe whitespace-nowrap ml-3 mr-3 overflow-hidden"
              >
                {{ familyParam }}
              </div>
              <div class="cursor-pointer">
                <BhChevron></BhChevron>
              </div>
            </div>
          </div>
        </div>
        <div
          class="w-full item-life border-bottom"
          @click="onShowBasicInformation('scroll_3')"
        >
          <div class="w-6/12 bh-item-title flex items-center">
            <img
              class="mr-2 ml-2"
              src="@/assets/icon/ic_tinder/education@1x.png"
              width="25"
            />{{ $t("education") }}
          </div>
          <div class="flex w-6/12 justify-end">
            <div class="flex">
              <div
                class="bh-describe whitespace-nowrap ml-3 mr-3 overflow-hidden"
              >
                {{ educationParam }}
              </div>
              <div class="cursor-pointer">
                <BhChevron></BhChevron>
              </div>
            </div>
          </div>
        </div>
        <div
          class="w-full item-life border-bottom"
          @click="onShowBasicInformation('scroll_4')"
        >
          <div class="w-6/12 bh-item-title flex items-center">
            <img
              class="mr-2 ml-2"
              src="@/assets/icon/ic_tinder/covid_comfort@1x.png"
              width="25"
            />{{ $t("vaccine_for_covid") }}
          </div>
          <div class="flex w-6/12 justify-end">
            <div class="flex">
              <div
                class="bh-describe whitespace-nowrap ml-3 mr-3 overflow-hidden"
              >
                {{ vaccineParam }}
              </div>
              <div class="cursor-pointer">
                <BhChevron></BhChevron>
              </div>
            </div>
          </div>
        </div>
        <div
          class="w-full item-life border-bottom"
          @click="onShowBasicInformation('scroll_5')"
        >
          <div class="w-6/12 bh-item-title flex items-center">
            <img
              class="mr-2 ml-2"
              src="@/assets/icon/ic_tinder/kietinhcach@2x.png"
              width="25"
            />{{ $t("personality_type") }}
          </div>
          <div class="flex w-6/12 justify-end">
            <div class="flex">
              <div
                class="bh-describe whitespace-nowrap ml-3 mr-3 overflow-hidden"
              >
                {{ personalityParam }}
              </div>
              <div class="cursor-pointer">
                <BhChevron></BhChevron>
              </div>
            </div>
          </div>
        </div>
        <div
          class="w-full item-life border-bottom"
          @click="onShowBasicInformation('scroll_6')"
        >
          <div class="w-6/12 bh-item-title flex items-center">
            <img
              class="mr-2 ml-2"
              src="@/assets/icon/ic_tinder/communication_style@2x.png"
              width="25"
            />{{ $t("communication_style") }}
          </div>
          <div class="flex w-6/12 justify-end">
            <div class="flex">
              <div
                class="bh-describe whitespace-nowrap ml-3 mr-3 overflow-hidden"
              >
                {{ communicationParam }}
              </div>
              <div class="cursor-pointer">
                <BhChevron></BhChevron>
              </div>
            </div>
          </div>
        </div>

        <div
          class="w-full item-life bd-input-end"
          @click="onShowBasicInformation('scroll_7')"
        >
          <div class="w-6/12 bh-item-title flex items-center">
            <img
              class="mr-2 ml-2"
              src="@/assets/icon/ic_tinder/love_language@1x.png"
              width="25"
            />{{ $t("love_languages") }}
          </div>
          <div class="flex w-6/12 justify-end">
            <div class="flex">
              <div
                class="bh-describe whitespace-nowrap ml-3 mr-3 overflow-hidden"
              >
                {{ loveLanguageParam }}
              </div>
              <div class="cursor-pointer">
                <!-- <i
                  class="fa-solid bh-chevron-right cursor-pointer fa-chevron-right"
                ></i> -->
                <BhChevron></BhChevron>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BhChevron from "../../../bh-element-ui/button/bh-chevron";
import { mapMutations } from "vuex";
export default {
  components: { BhChevron },
  name: "basic-information-page",

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

      return zodiacData ? zodiacData : this.nameDefault;
    },

    familyParam() {
      const petsFreeData =
        this.$store.state.userModule.basicInformation.familyFlan;

      return petsFreeData ? petsFreeData : this.nameDefault;
    },

    educationParam() {
      const educationData =
        this.$store.state.userModule.basicInformation.education;

      return educationData ? educationData : this.nameDefault;
    },

    personalityParam() {
      const personalityData =
        this.$store.state.userModule.basicInformation.personality;

      return personalityData ? personalityData : this.nameDefault;
    },

    vaccineParam() {
      const vaccineData =
        this.$store.state.userModule.basicInformation.covidVaccine;

      return vaccineData ? vaccineData : this.nameDefault;
    },

    communicationParam() {
      const communicationData =
        this.$store.state.userModule.basicInformation.communicationType;

      return communicationData ? communicationData : this.nameDefault;
    },

    loveLanguageParam() {
      const loveLanguageData =
        this.$store.state.userModule.basicInformation.loveStyle;

      return loveLanguageData ? loveLanguageData : this.nameDefault;
    },
  },

  methods: {
    ...mapMutations(["setCompleteBasicInformation"]),
    /**
     * Sự kiện show thông tin cơ bản
     */
    onShowBasicInformation(val) {
      //
      this.$emit("onShowFormBasicInformation", {
        isShowForm: true,
        valueScroll: val,
      });
    },
  },
};
</script>

<style lang="css"></style>
