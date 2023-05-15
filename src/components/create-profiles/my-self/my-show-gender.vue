<template>
  <div>
    <div class="mt-3">
      <h2 class="padding-title">Show me gender</h2>
    </div>
    <div class="w-full mt-4">
      <div
        class="grid w-full"
        v-for="(item, index) in showGendersData"
        :key="index"
      >
        <button
          class="padding-input-option option-default"
          :ref="index"
          :id="item.code"
          @click="onShowMeGender(item.code)"
        >
          {{ item.value }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "my-show-gender",
  setup() {
    return;
  },
  data() {
    return {
      showMeGender: 3,
    };
  },
  computed: {
    showGendersData() {
      const showGender = [
        {
          code: "women",
          value: "Women",
        },
        {
          code: "man",
          value: "Man",
        },
        {
          code: "everyone",
          value: "everyone",
        },
      ];

      return this.$store.state.commonModule.listLifeStyleRegister?.genderFilters
        .length !== 0
        ? this.$store.state.commonModule.listLifeStyleRegister?.genderFilters
        : showGender;
    },
  },
  methods: {
    ...mapMutations(["setShowGender", "setShowProfileCreate"]),
    onShowMeGender(val) {
      this.showMeGender = val;
      this.setShowGender(this.showMeGender);

      localStorage.setItem("showMeGender", val);
      const documentParam = document.getElementsByClassName(
        "padding-input-option"
      );

      for (let index = 0; index < documentParam.length; index++) {
        const element = documentParam[index];

        if (val === element.id) {
          element.classList.add("option-active");
        } else {
          element.classList.remove("option-active");
        }
      }

      this.$emit("onStatusActive", true);
    },
  },

  mounted() {
    this.showMeGender =
      this.$store.state.userModule.user_profile.settings.genderFilters;
    this.setShowProfileCreate({
      isShowProfile: true,
      isNotShowProfile: true,
    });
    this.$emit("onShowSkips", false);
    this.$emit("onShowName", { showCheckbox: false, showName: "" });
    const documentParam = document.getElementsByClassName(
      "padding-input-option"
    );

    const showMeGenderList =
      this.$store.state.commonModule.listLifeStyleRegister?.genderFilters;
    if (this.showMeGender) {
      for (let index = 0; index < showMeGenderList.length; index++) {
        const element = showMeGenderList[index];

        if (element.code === this.showMeGender) {
          documentParam[this.showMeGender].classList.add("option-active");
          this.$emit("onStatusActive", true);
        }
      }
    } else {
      this.$emit("onStatusActive", false);
    }
  },
};
</script>

<style lang="css">
.el-button + .el-button {
  margin-left: 0px !important;
}

.active-border {
  border: 1.5px solid #ee646a;
  color: #ee646a;
}
</style>
