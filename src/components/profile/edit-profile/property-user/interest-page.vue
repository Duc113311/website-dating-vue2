<template>
  <div class="w-full flex items-center">
    <div class="w-full">
      <div class="w-full flex justify-between bh-title p-3">
        <div>{{ $t("interest") }}</div>
        <div v-if="listDataInterests.length === 0">+15%</div>
      </div>
      <div class="w-full flex style-form bg-default">
        <div class="flex justify-between w-full" @click="onShowPopupInterest()">
          <div class="bh-item-title style-inter-setting relative ml-3 mr-3">
            <div class="w-full flex justify-center items-center">
              <div
                class="w-full text-ellipsis whitespace-nowrap"
                v-if="listDataInterests.length !== 0"
              >
                <span
                  :id="index"
                  class="mr-3 mb-3 border-interest border-default"
                  v-for="(item, index) in listDataInterests"
                  :key="index"
                >
                  {{ item }}
                </span>
              </div>
              <div
                class="w-full title-default whitespace-nowrap mr-3 overflow-hidden"
                v-if="listDataInterests.length === 0"
              >
                {{ nameDefault }}
              </div>
            </div>
            <div
              class="bg-shadow-right absolute h-full w-full"
              id="shadow-r"
            ></div>
          </div>
          <div class="flex items-center justify-end">
            <BhChevron></BhChevron>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BhChevron from "../../../bh-element-ui/button/bh-chevron";
export default {
  components: { BhChevron },
  name: "interest-page",
  data() {
    return {
      nameDefault: "Add interests",
    };
  },

  computed: {
    /**
     * binding data interest
     */
    listDataInterests() {
      const interestData =
        this.$store.state.userModule.lifeStyleSingle.interests;
      return interestData ? interestData : [];
    },

    isArabic() {
      debugger;
      return this.$i18n.locale === "ar"; // Điều chỉnh 'ar' cho ngôn ngữ Ả Rập
    },
  },

  methods: {
    /**
     * Xử lý show popup interest
     */
    onShowPopupInterest() {
      // this.isShowInterest = true;
      this.$emit("onShowPopupInterest", true);
    },
  },

  mounted() {
    if (this.$i18n.locale === "ar") {
      document.getElementById("shadow-r").classList.remove("bg-shadow-right");
      document.getElementById("shadow-r").classList.add("bg-shadow-left");
    } else {
      document.getElementById("shadow-r").classList.remove("bg-shadow-left");
      document.getElementById("shadow-r").classList.add("bg-shadow-right");
    }
  },
};
</script>
<style lang="css"></style>
