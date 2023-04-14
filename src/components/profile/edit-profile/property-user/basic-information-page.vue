<template>
  <div class="w-full flex justify-center items-center">
    <div class="w-full relative">
      <div class="w-full flex justify-between p-3 bh-title">
        <div class="">LIFE STYLE</div>
        <div v-if="completeLifeStyle">+22%</div>
      </div>

      <div class="w-full bg-life">
        <div class="w-full item-life">
          <div class="w-6/12 bh-item-title">Zodiac</div>
          <div class="flex w-6/12 justify-end">
            <div class="flex">
              <div class="bh-describe whitespace-nowrap mr-3 overflow-hidden">
                {{ zodiacParam }}
              </div>
              <div class="cursor-pointer" @click="onShowBasicInformation">
                <i
                  class="fa-solid bh-chevron-right cursor-pointer fa-chevron-right"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full item-life">
          <div class="w-6/12 bh-item-title">Future family</div>
          <div class="flex w-6/12 justify-end">
            <div class="flex">
              <div class="bh-describe whitespace-nowrap mr-3 overflow-hidden">
                {{ familyParam }}
              </div>
              <div class="cursor-pointer">
                <i
                  class="fa-solid bh-chevron-right cursor-pointer fa-chevron-right"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full item-life">
          <div class="w-6/12 bh-item-title">Education</div>
          <div class="flex w-6/12 justify-end">
            <div class="flex">
              <div class="bh-describe whitespace-nowrap mr-3 overflow-hidden">
                {{ educationParam }}
              </div>
              <div class="cursor-pointer">
                <i
                  class="fa-solid bh-chevron-right cursor-pointer fa-chevron-right"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full item-life">
          <div class="w-6/12 bh-item-title">Vaccine for COVID</div>
          <div class="flex w-6/12 justify-end">
            <div class="flex">
              <div class="bh-describe whitespace-nowrap mr-3 overflow-hidden">
                {{ vaccineParam }}
              </div>
              <div class="cursor-pointer">
                <i
                  class="fa-solid bh-chevron-right cursor-pointer fa-chevron-right"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full item-life">
          <div class="w-6/12 bh-item-title">Personality Type</div>
          <div class="flex w-6/12 justify-end">
            <div class="flex">
              <div class="bh-describe whitespace-nowrap mr-3 overflow-hidden">
                {{ personalityParam }}
              </div>
              <div class="cursor-pointer">
                <i
                  class="fa-solid bh-chevron-right cursor-pointer fa-chevron-right"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full item-life">
          <div class="w-6/12 bh-item-title">Communication Style</div>
          <div class="flex w-6/12 justify-end">
            <div class="flex">
              <div class="bh-describe whitespace-nowrap mr-3 overflow-hidden">
                {{ communicationParam }}
              </div>
              <div class="cursor-pointer">
                <i
                  class="fa-solid bh-chevron-right cursor-pointer fa-chevron-right"
                ></i>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full item-life-end">
          <div class="w-6/12 bh-item-title">Love Languages</div>
          <div class="flex w-6/12 justify-end">
            <div class="flex">
              <div class="bh-describe whitespace-nowrap mr-3 overflow-hidden">
                {{ loveLanguageParam }}
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
      if ((this.zodiacParam || this.familyParam) !== "Trống") {
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
      const petsFreeData = this.$store.state.userModule.basicInformation.pet;

      return petsFreeData ? petsFreeData : this.nameDefault;
    },

    educationParam() {
      const educationData =
        this.$store.state.userModule.basicInformation.education;

      return educationData ? educationData : this.nameDefault;
    },

    personalityParam() {
      debugger;
      const personalityData =
        this.$store.state.userModule.basicInformation.personality;

      return personalityData ? personalityData : this.nameDefault;
    },

    vaccineParam() {
      const vaccineData = this.$store.state.userModule.basicInformation.vaccine;

      return vaccineData ? vaccineData : this.nameDefault;
    },

    communicationParam() {
      const communicationData =
        this.$store.state.userModule.basicInformation.communication;

      return communicationData ? communicationData : this.nameDefault;
    },

    loveLanguageParam() {
      const loveLanguageData =
        this.$store.state.userModule.basicInformation.loveLanguage;

      return loveLanguageData ? loveLanguageData : this.nameDefault;
    },
  },

  methods: {
    /**
     * Sự kiện show thoong tin cơ bản
     */
    onShowBasicInformation() {
      //
    },
  },
};
</script>

<style lang="css"></style>
