<template>
  <div class="w-full h-full relative bg-theme p-5">
    <div class="w-full h-full">
      <!-- Header -->
      <div class="w-full header-detail flex justify-center items-center">
        <div class="w-full flex justify-center items-center">
          <div class="w-1/4">
            <BhBack @onBackComponent="onBackSettingPhone()"></BhBack>
          </div>
          <div class="ml-14 w-3/4 text-xl text-white">Sexual orientation</div>
        </div>
      </div>

      <!-- Body -->
      <div class="body-detail height-scroll overflow-scroll w-full">
        <div
          class="flex items-center w-full justify-between p-3 form-set-input"
        >
          <div class="flex justify-center items-center">
            Show my sexual orientation on profile
          </div>
          <div class="ml-3 text-show-my">
            <el-switch
              v-model="showValueSexual"
              active-color="#FB5D65"
              inactive-color="#5F6A86"
              @change="onChangeValueSexual()"
            >
            </el-switch>
          </div>
        </div>

        <div class="w-full mt-4">
          <div class="bh-item-title pl-2 title-item">Select to 3</div>
          <div class="grid select-sexual mt-1 gap-1">
            <div
              v-for="(el, index) in listDataSexuals"
              :key="el.code + index"
              class="padding-check-option dark-theme-check not-border"
              :id="el.code"
              @click="onClickChose(false, el.code)"
            >
              <div class="flex content-center items-center">
                <div class="flex justify-center items-center">
                  <div class="check-active not-check" :id="'check' + el.code">
                    <div class="bg-white flex justify-center bg-checked">
                      <i class="fa-solid fa-circle-check w-6 h-6"></i>
                    </div>
                  </div>
                  <div
                    class="not-check-active checkeds"
                    :id="'not-check' + el.code"
                  >
                    <div class="flex justify-center">
                      <i class="fa-regular fa-circle w-6 h-6"></i>
                    </div>
                  </div>
                </div>
                <!-- <input
                    class="w-6 h-6 mr-5 sexual"
                    type="checkbox"
                    :id="index"
                    value="Straight"
                    @click="checkFluency(index)"
                  /> -->
                <label class="text-base ml-3" for="html">{{ el.value }}</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full">
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import BhBack from "../../../../components/bh-element-ui/button/bh-back";
import Footer from "../../../../components/layout/footer-home/footer";
export default {
  components: {
    BhBack,
    Footer,
  },
  name: "sexuals-page",
  data() {
    return {
      nameTitle: "Update my phone number",
      showName: "sexual",
    };
  },

  computed: {
    ...mapGetters({
      nameShowSexual: "showSexual",
    }),

    showValueSexual: {
      get() {
        const age = this.nameShowSexual;

        return age;
      },
      set(newName) {
        return newName;
      },
    },

    listDataSexuals() {
      return this.$store.state.commonModule.listLifeStyleSingle.sexuals;
    },
  },

  methods: {
    ...mapMutations(["setSexuals", "setShowSexual"]),
    onBackSettingPhone() {
      this.$router.go(-1);
    },

    onClickChosse(val) {
      debugger;
      console.log(val);
    },

    onClickChose(val, indexValue) {
      debugger;
      const listDarks = document.getElementsByClassName("dark-theme-check");
      const checkActive = document.getElementsByClassName("check-active");
      const notCheckActive =
        document.getElementsByClassName("not-check-active");

      this.setSexuals(indexValue);
      debugger;
      const sexualsData =
        this.$store.state.userModule.user_profile.profiles.orientationSexuals;
      const lengthSexual = sexualsData.length;

      const findIndex = sexualsData.findIndex((x) => x === indexValue);
      if (lengthSexual <= 3) {
        if (findIndex !== -1) {
          listDarks[indexValue].classList.add("border-active");
          checkActive["check" + indexValue].classList.add("checkeds");
          notCheckActive["not-check" + indexValue].classList.add("not-check");
          listDarks[indexValue].classList.remove("not-border");
          checkActive["check" + indexValue].classList.remove("not-check");
          notCheckActive["not-check" + indexValue].classList.remove("checkeds");
        } else {
          listDarks[indexValue].classList.remove("border-active");
          checkActive["check" + indexValue].classList.remove("checkeds");
          notCheckActive["not-check" + indexValue].classList.remove(
            "not-check"
          );
          listDarks[indexValue].classList.add("not-border");
          checkActive["check" + indexValue].classList.add("not-check");
          notCheckActive["not-check" + indexValue].classList.add("checkeds");
        }
      }

      if (lengthSexual === 3) {
        this.$emit("onStatusActive", true);
      } else {
        this.$emit("onStatusActive", false);
      }
    },

    onChangeValueSexual() {
      const sexual =
        this.$store.state.userModule.user_profile.profiles.showSexual;
      if (sexual) {
        this.setShowSexual(false);
      } else {
        this.setShowSexual(true);
      }
    },
  },
  mounted() {
    const listDarks = document.getElementsByClassName("dark-theme-check");
    const checkActive = document.getElementsByClassName("check-active");
    const notCheckActive = document.getElementsByClassName("not-check-active");

    const lengthSexual =
      this.$store.state.userModule.user_profile.profiles.orientationSexuals
        .length;
    const dataSexuals =
      this.$store.state.userModule.user_profile.profiles.orientationSexuals;
    for (let index = 0; index < dataSexuals.length; index++) {
      const element = dataSexuals[index];
      listDarks[element].classList.add("border-active");
      checkActive["check" + element].classList.add("checkeds");
      notCheckActive["not-check" + element].classList.add("not-check");
      listDarks[element].classList.remove("not-border");
      checkActive["check" + element].classList.remove("not-check");
      notCheckActive["not-check" + element].classList.remove("checkeds");
    }
    if (lengthSexual < 3) {
      this.$emit("onStatusActive", false);
    } else {
      this.$emit("onStatusActive", true);
    }
  },
};
</script>

<style lang="css">
.not-show {
  display: none;
}

.showed {
  display: block;
}
</style>
