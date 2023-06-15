<template>
  <div class="w-full">
    <div class="w-full flex justify-between p-3 bh-title">
      <div class="">{{ $t("dating_purposes").toUpperCase() }}</div>
      <div v-if="completePurposes">+4%</div>
    </div>

    <div class="w-full bg-life flex bg-default justify-between items-center">
      <div class="w-6/12 bh-item-title flex items-center">
        <div class="flex items-center">
          <img src="@/assets/icon/ic_tinder/ic_purpose.png" width="25" />
          <span class="mr-2 ml-2">{{ $t("i'm_looking_for") }}</span>
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
      listPurposes: [
        {
          code: "item_1",
          value: "Beloved",
          url: require("@/assets/icon_dialog/relationship_intent_cupid@1x.png"),
        },
        {
          code: "item_2",
          value: "You are dating for a long time",
          url: require("@/assets/icon_dialog/relationship_intent_heart_eyes@2x.png"),
        },
        {
          code: "item_3",
          value: "Anything possible",
          url: require("@/assets/icon_dialog/relationship_intent_clinking_glasses@1x.png"),
        },
        {
          code: "item_4",
          value: "Unbound relation",
          url: require("@/assets/icon_dialog/relationship_intent_tada@2x.png"),
        },
        {
          code: "item_5",
          value: "New friends",
          url: require("@/assets/icon_dialog/relationship_intent_wave@3x.png"),
        },
        {
          code: "item_6",
          value: "I'm not sure either",
          url: require("@/assets/icon_dialog/relationship_intent_thinking_face@2x.png"),
        },
      ],
    };
  },

  computed: {
    /**
     * Binding data purposes
     */
    purposesParam() {
      const datingPurposesData =
        this.$store.state.userModule.lifeStyleSingle.datingPurpose;
      debugger;
      const findData = this.listPurposes.find(
        (x) => x.code === datingPurposesData.code
      );

      if (findData) {
        datingPurposesData.url = findData.url;
      }
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
