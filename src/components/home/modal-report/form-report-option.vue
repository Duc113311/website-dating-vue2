<template>
  <div class="absolute w-full h-full top-0 left-0">
    <div class="v-modal-bg" @click="onHideModal"></div>
    <div
      class="w-full absolute bottom-0 bg-color-default left-0 form-report title-default"
    >
      <div class="w-header-checked flex items-center">
        <div class="pl-5 font-describe">Please choose a reason</div>
      </div>
      <div class="w-full overflow-scroll height-scroll pl-5 pr-5 pb-5">
        <div class="grid select-sexual mt-6 gap-4">
          <div
            v-for="(el, index) in listReasons"
            :key="el.code + index"
            class="dark-theme-check not-border"
            :id="el.code"
            @click="onClickChose(false, el.code)"
          >
            <div class="flex content-center items-center justify-between">
              <label class="text-base" for="html">{{ el.value }}</label>
              <div class="flex justify-center items-center">
                <div class="check-active not-check" :id="'check' + el.code">
                  <div class="flex justify-center bg-checked">
                    <i class="fa-solid fa-circle-check w-8 h-8"></i>
                  </div>
                </div>
                <div
                  class="not-check-active checkeds"
                  :id="'not-check' + el.code"
                >
                  <div class="flex justify-center">
                    <i class="fa-regular fa-circle w-8 h-8"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "form-report-option",

  props: ["listNameReport", "screamForm"],
  data() {
    return {};
  },

  computed: {
    listReasons() {
      debugger;
      return this.listNameReport;
    },
  },

  methods: {
    ...mapMutations(["setReasonReport", "setNameDetailsReport"]),
    onHideModal() {
      this.$emit("onHideReport", false);
    },
    onClickChose(status, indexValue) {
      debugger;
      const checkActive = document.getElementsByClassName("check-active");
      const notCheckActive =
        document.getElementsByClassName("not-check-active");
      for (let index = 0; index < this.listReasons.length; index++) {
        const element = this.listReasons[index];
        if (element.code === indexValue) {
          checkActive["check" + indexValue].classList.add("checkeds");
          notCheckActive["not-check" + indexValue].classList.add("not-check");
          checkActive["check" + indexValue].classList.remove("not-check");
          notCheckActive["not-check" + indexValue].classList.remove("checkeds");
          debugger;
          if (this.screamForm === 1) {
            this.setReasonReport(element);
            this.$emit("onStatusActive", true);
          }
          if (this.screamForm === 2) {
            this.setNameDetailsReport(element);
            this.$emit("onStatusActive", true);
          }
          this.$emit("onHideReport", false);
        } else {
          checkActive["check" + element.code].classList.remove("checkeds");
          notCheckActive["not-check" + element.code].classList.remove(
            "not-check"
          );
          checkActive["check" + element.code].classList.add("not-check");
          notCheckActive["not-check" + element.code].classList.add("checkeds");
        }
      }
    },
  },

  mounted() {
    debugger;
    const checkActive = document.getElementsByClassName("check-active");
    const notCheckActive = document.getElementsByClassName("not-check-active");
    const nameValue = this.$store.state.homeModule;
    debugger;
    if (this.screamForm === 1) {
      if (Object.keys(nameValue.valueReason).length !== 0) {
        checkActive["check" + nameValue.valueReason.code].classList.add(
          "checkeds"
        );
        notCheckActive["not-check" + nameValue.valueReason.code].classList.add(
          "not-check"
        );
        checkActive["check" + nameValue.valueReason.code].classList.remove(
          "not-check"
        );
        notCheckActive[
          "not-check" + nameValue.valueReason.code
        ].classList.remove("checkeds");
        this.$emit("onStatusActive", true);
      } else {
        this.$emit("onStatusActive", false);
      }
    }

    if (this.screamForm === 2) {
      if (Object.keys(nameValue.valueDetail).length !== 0) {
        checkActive["check" + nameValue.valueDetail.code].classList.add(
          "checkeds"
        );
        notCheckActive["not-check" + nameValue.valueDetail.code].classList.add(
          "not-check"
        );
        checkActive["check" + nameValue.valueDetail.code].classList.remove(
          "not-check"
        );
        notCheckActive[
          "not-check" + nameValue.valueDetail.code
        ].classList.remove("checkeds");
        this.$emit("onStatusActive", true);
      } else {
        this.$emit("onStatusActive", false);
      }
    }
  },
};
</script>
<style lang="scss"></style>
