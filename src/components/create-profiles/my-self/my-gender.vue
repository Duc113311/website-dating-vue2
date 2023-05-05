<template>
  <div>
    <div class="mt-3">
      <h2 class="padding-title">I am a</h2>
    </div>
    <div class="grid w-full" v-for="(item, index) in gendersData" :key="index">
      <button
        class="padding-input-option bg-default"
        :ref="index"
        :id="item.code"
        @click="onShowGender(item.code)"
      >
        {{ item.value }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  name: "my-gender",
  setup() {
    return;
  },
  data() {
    return {
      isActiveButton: false,
    };
  },
  props: ["isScream"],
  computed: {
    /**
     * Lấy gender từ state để show datad
     */
    gendersData() {
      const gender = [
        {
          code: "women",
          value: "Women",
        },
        {
          code: "man",
          value: "Man",
        },
        {
          code: "other",
          value: "Other",
        },
      ];
      return this.$store.state.commonModule.listLifeStyleRegister?.genders
        .length !== 0
        ? this.$store.state.commonModule.listLifeStyleRegister?.genders
        : gender;
    },
  },
  methods: {
    ...mapActions(["getListDataInterests", "getListDataSexuals"]),

    ...mapMutations(["setGender", "setShowProfileCreate"]),

    onShowGender(val) {
      console.log(val);

      this.genders = val;
      this.setGender(this.genders);

      const documentParam = document.getElementsByClassName(
        "padding-input-option"
      );

      for (let index = 0; index < documentParam.length; index++) {
        const element = documentParam[index];

        if (val === element.id) {
          element.classList.add("active-border");
        } else {
          element.classList.remove("active-border");
        }
      }

      this.$emit("onStatusActive", true);
    },
  },

  async created() {
    await this.getListDataSexuals({
      entityName: "sexuals",
      entityId: "en",
    });

    await this.getListDataInterests({
      entityName: "interests",
      entityId: "en",
    });
  },

  mounted() {
    this.genders = this.$store.state.userModule.user_profile.profiles.gender;
    const screamShow = this.$store.state.commonModule.listScreamShowMes;
    console.log(screamShow);

    const dataNew = screamShow.find((x) => x.scream === this.isScream);
    console.log(dataNew);

    if (dataNew) {
      if (dataNew.status) {
        this.setShowProfileCreate({
          isShowProfile: false,
          isNotShowProfile: false,
        });
      } else {
        this.setShowProfileCreate({
          isShowProfile: true,
          isNotShowProfile: true,
        });
      }
    }
    this.$emit("onShowName", { showCheckbox: true, showName: "gender" });
    this.$emit("onShowSkips", false);
    const documentParam = document.getElementsByClassName(
      "padding-input-option"
    );

    const genderList =
      this.$store.state.commonModule.listLifeStyleRegister?.genders;
    if (this.genders) {
      for (let index = 0; index < genderList.length; index++) {
        const element = genderList[index];

        if (element.code === this.genders) {
          documentParam[this.genders].classList.add("active-border");
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
