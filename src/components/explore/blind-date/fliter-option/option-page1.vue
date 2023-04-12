<template>
  <div class="w-full bg-option text-center">
    <div class="padding-describe mt-5 mb-5">
      Tôi không thể hẹn hò với người:
    </div>

    <div
      class="w-full mb-1 flex justify-center items-center h-border-item cursor-pointer"
      v-for="(item, index) in listNotDating"
      :key="index"
    >
      <div class="w-full">
        <input
          :id="item.code"
          type="radio"
          name="dating"
          :value="item.code"
          v-model="valueNotDatingBinding"
        />
        <div
          @click="onClickChose(item.code)"
          :for="index"
          class="label-radio bor-item w-full"
        >
          {{ item.value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "option-page",

  data() {
    return {
      listNotDating: [
        {
          code: "smoker",
          value: "Người hút thuốc",
        },
        {
          code: "notLove",
          value: "Không phải người yêu",
        },
        {
          code: "noRomance",
          value: "Không có tính lãng mạn",
        },
        {
          code: "loveNovel",
          value: "Yêu thích tiểu thuyết",
        },
      ],
    };
  },

  computed: {
    valueNotDatingBinding() {
      return this.$store.state.commonModule.valueNotDating;
    },
  },

  methods: {
    ...mapMutations(["setValueNotDating"]),
    onClickChose(val) {
      debugger;
      console.log(val);
      this.setValueNotDating(val);
      debugger;
      setTimeout(() => this.$emit("update", "so2"), 500);
    },
  },

  mounted() {},
};
</script>

<style lang="css"></style>
