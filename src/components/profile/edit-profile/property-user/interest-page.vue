<template>
  <div class="w-full flex items-center">
    <div class="w-full">
      <div class="w-full flex justify-between bh-title p-3">
        <div>INTEREST</div>
        <div v-if="listDataInterests.length === 0">+3%</div>
      </div>
      <div class="w-full flex style-form">
        <div class="flex justify-between w-full">
          <div class="bh-item-title style-inter-setting relative">
            <div class="w-full flex justify-center items-center">
              <div class="w-full text-ellipsis whitespace-nowrap">
                <span
                  :id="index"
                  class="mr-3 mb-3 text-white border-interest"
                  v-for="(item, index) in listDataInterests"
                  :key="index"
                >
                  {{ item }}
                </span>
              </div>
            </div>
            <div class="bg-interest absolute h-full w-full"></div>
          </div>
          <div class="mr-5 flex items-center" @click="onShowPopupInterest()">
            <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
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
    return {};
  },

  computed: {
    /**
     * binding data interest
     */
    listDataInterests() {
      const interestData =
        this.$store.state.userModule.user_profile?.profiles.interests;
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
