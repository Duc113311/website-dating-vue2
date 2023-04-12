<template>
  <div class="w-full bg-option text-center">
    <div class="padding-describe mt-5 mb-5">Bữa tối tuyệt nhất là ở:</div>

    <div
      class="w-full mb-1 flex justify-center items-center h-border-item cursor-pointer"
      v-for="(item, index) in listDinnerGreat"
      :key="index"
    >
      <div class="w-full">
        <input
          :id="item.code"
          type="radio"
          name="dating"
          :value="item.code"
          v-model="valueDinnerGreatBinding"
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
  name: "option-page2",

  data() {
    return {
      listDinnerGreat: [
        {
          code: "restaurant",
          value: "Trong nhà hàng",
        },
        {
          code: "trayTV",
          value: "Trên khay và xem tivi",
        },
        {
          code: "noRomance",
          value: "Không có tính lãng mạn",
        },
        {
          code: "bed",
          value: "Trên giường",
        },
      ],
    };
  },
  computed: {
    valueDinnerGreatBinding() {
      return this.$store.state.commonModule.valueDinnerGreat;
    },
  },
  methods: {
    ...mapMutations(["setValueDinnerGreat"]),
    onClickChose(val) {
      debugger;
      console.log(val);
      this.setValueDinnerGreat(val);
      debugger;
      setTimeout(() => this.$emit("update", "so3"), 500);
    },
  },
};
</script>

<style lang="css"></style>
