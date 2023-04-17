<template>
  <div class="w-full">
    <div class="w-full flex justify-between p-3 bh-title">
      <div class="">DATING PURPOSES</div>
      <div v-if="completePurposes">+22%</div>
    </div>

    <div class="w-full bg-life flex justify-between items-center">
      <div class="w-6/12 bh-item-title flex items-center">
        <div class="ml-2">I'm looking for</div>
      </div>
      <div class="flex w-6/12 justify-end">
        <div class="bh-describe whitespace-nowrap mr-3 overflow-hidden">
          {{ purposesParam }}
        </div>
        <div class="cursor-pointer" @click="onShowPurposes()">
          <i
            class="fa-solid bh-chevron-right cursor-pointer fa-chevron-right"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dating-purposes-page",
  data() {
    return {
      nameDefault: "Trống",
    };
  },

  computed: {
    /**
     * Binding data purposes
     */
    purposesParam() {
      const datingPurposesData =
        this.$store.state.userModule.user_profile?.profiles?.datingPurposes;

      return datingPurposesData ? datingPurposesData : this.nameDefault;
    },

    /**
     * Binding complete Purposes
     */
    completePurposes() {
      if (this.purposesParam !== "Trống") {
        return false;
      }
      return true;
    },
  },

  methods: {
    /**
     * Action chọn mục đích hẹn hò
     */
    onShowPurposes() {
      // Xử lý sự kiện
    },
  },
};
</script>

<style lang="css"></style>
