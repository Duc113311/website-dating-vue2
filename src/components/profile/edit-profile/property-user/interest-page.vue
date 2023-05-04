<template>
  <div class="w-full flex items-center">
    <div class="w-full">
      <div class="w-full flex justify-between bh-title p-3">
        <div>INTEREST</div>
        <div v-if="listDataInterests.length === 0">+15%</div>
      </div>
      <div class="w-full flex style-form bg-default">
        <div class="flex justify-between w-full" @click="onShowPopupInterest()">
          <div class="bh-item-title style-inter-setting relative">
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
            <div class="bg-shadow-right absolute h-full w-full"></div>
          </div>
          <div class="mr-1 flex items-center">
            <i
              class="fa-solid fa-chevron-right bh-chevron-right icon-color-default"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
};
</script>
<style lang="css"></style>
