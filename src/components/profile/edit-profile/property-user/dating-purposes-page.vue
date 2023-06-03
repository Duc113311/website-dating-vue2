<template>
  <div class="w-full">
    <div class="w-full flex justify-between p-3 bh-title">
      <div class="">{{ $t("dating_purposes") }}</div>
      <div v-if="completePurposes">+4%</div>
    </div>

    <div class="w-full bg-life flex bg-default justify-between items-center">
      <div class="w-6/12 bh-item-title flex items-center">
        <div class="flex items-center">
          <img
            class="mr-2"
            src="@/assets/icon/ic_tinder/ic_purpose.png"
            width="25"
          />{{ $t("i'm_looking_for") }}
        </div>
      </div>
      <div
        class="flex w-6/12 justify-end items-center"
        @click="onShowPurposes()"
      >
        <div
          class="bh-describe w-full whitespace-nowrap mr-3 ml-3 overflow-hidden"
        >
          <div
            class="flex justify-end w-full"
            v-if="Object.keys(purposesParam).length === 0"
          >
            {{ nameDefault }}
          </div>
          <div
            v-if="Object.keys(purposesParam).length !== 0"
            class="w-full flex items-center justify-end"
          >
            <img :src="purposesParam.url" alt="" width="30" />
            <span
              class="whitespace-nowrap text-ellipsis overflow-hidden ml-2"
              >{{ purposesParam.value }}</span
            >
          </div>
        </div>
        <div class="cursor-pointer">
          <BhChevron></BhChevron>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BhChevron from "../../../bh-element-ui/button/bh-chevron";
export default {
  components: { BhChevron },
  name: "dating-purposes-page",
  data() {
    return {
      nameDefault: this.$t("empty"),
    };
  },

  computed: {
    /**
     * Binding data purposes
     */
    purposesParam() {
      const datingPurposesData =
        this.$store.state.userModule.lifeStyleSingle.datingPurpose;

      return datingPurposesData;
    },

    /**
     * Binding complete Purposes
     */
    completePurposes() {
      if (Object.keys(this.purposesParam).length === 0) {
        return true;
      }
      return false;
    },
  },

  methods: {
    /**
     * Action chọn mục đích hẹn hò
     */
    onShowPurposes() {
      // Xử lý sự kiện
      this.$emit("onShowFormPurposes", true);
    },
  },
};
</script>

<style lang="css"></style>
