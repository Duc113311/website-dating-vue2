<template>
  <div class="w-full flex items-center">
    <div class="w-full">
      <div class="w-full flex justify-between bh-title p-3">
        <div>SEXUAL ORIENTATION</div>
        <div v-if="listDataSexual.length === 0">+3%</div>
      </div>
      <div class="w-full flex style-form">
        <div class="flex justify-between w-full">
          <div class="bh-item-title style-inter-setting relative">
            <div class="w-full flex justify-center items-center">
              <div class="w-full text-ellipsis whitespace-nowrap">
                <span
                  :id="index"
                  class="mr-3 mb-3 text-white border-interest"
                  v-for="(item, index) in listDataSexual"
                  :key="index"
                >
                  {{ item }}
                </span>
              </div>
            </div>
            <div class="bg-interest absolute h-full w-full"></div>
          </div>
          <div class="mr-5 flex items-center" @click="onShowPopupSexuals()">
            <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sexuals-page",
  data() {
    return {};
  },

  computed: {
    /**
     * binding data interest
     */
    listDataSexual() {
      const sexualData =
        this.$store.state.userModule.user_profile?.profiles.sexuals;
      return sexualData ? sexualData : [];
    },
  },

  methods: {
    /**
     * Xử lý show popup interest
     */
    onShowPopupSexuals() {
      // this.isShowInterest = true;
    },
  },
};
</script>
<style lang="css"></style>
