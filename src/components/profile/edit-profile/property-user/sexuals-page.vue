<template>
  <div class="w-full flex items-center">
    <div class="w-full">
      <div class="w-full flex justify-between bh-title p-3">
        <div>{{ $t("sexual_orientation").toUpperCase() }}</div>
      </div>
      <div class="w-full flex style-form bg-default">
        <div
          class="flex justify-between w-full cursor-pointer"
          @click="onShowPopupSexuals()"
        >
          <div class="bh-item-title style-inter-setting relative">
            <div class="w-full flex justify-center items-center">
              <div
                class="w-full text-ellipsis whitespace-nowrap"
                v-if="listDataSexual.length !== 0"
              >
                <span
                  :id="index"
                  class="mr-3 mb-3 border-interest border-default"
                  v-for="(item, index) in listDataSexual"
                  :key="index"
                >
                  {{ item }}
                </span>
              </div>
              <div
                class="w-full title-default whitespace-nowrap mr-3 overflow-hidden"
                v-if="listDataSexual.length === 0"
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
import BhChevron from "@/components/bh-element-ui/button/bh-chevron.vue";
export default {
  components: { BhChevron },
  name: "sexuals-page",
  data() {
    return {
      nameDefault: this.$t("add_sexual"),
    };
  },

  computed: {
    /**
     * binding data interest
     */
    listDataSexual() {
      const results = [];
      const sexualData =
        this.$store.state.userModule.user_profile?.profiles.orientationSexuals;
      const sexualDatas =
        this.$store.state.commonModule.listLifeStyleSingle?.sexuals;
      for (let index = 0; index < sexualData.length; index++) {
        const element = sexualData[index];

        const findData = sexualDatas.find((x) => x.code === element);

        if (findData) {
          results.push(findData.value);
        }
      }
      return results;
    },
  },

  methods: {
    /**
     * Xử lý show popup interest
     */
    onShowPopupSexuals() {
      this.$router.push({ path: "/sexual-page" });
      // this.isShowInterest = true;
    },
  },
};
</script>
<style lang="css"></style>
