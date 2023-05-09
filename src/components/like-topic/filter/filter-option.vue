<template>
  <div class="w-full h-full title-default flex justify-center">
    <div class="v-modal-bg w-full h-full" @click="onChangeCancel()"></div>
    <div class="absolute top-28 flex justify-center w-form-like">
      <div
        v-loading="loading"
        class="rounded-lg bg-dialog-default title-default items-center w-full w-form-common relative cursor-pointer"
      >
        <div
          v-if="!issShowFormInterest"
          class="h-form-like-body overflow-hidden height-scroll p-5"
        >
          <div class="padding-title w-full">Filter</div>

          <div class="w-full">
            <div class="w-full">
              <div class="flex justify-between items-center padding-describe">
                <div>Maximum distance</div>
                <div>{{ valueMaximum }}km+</div>
              </div>
              <div class="w-full">
                <el-slider v-model="valueMaximum"></el-slider>
              </div>
            </div>
            <div class="w-full">
              <div class="w-full flex justify-between">
                <div class="title-item form-set-item">Age range</div>
                <div class="bh-describe">
                  {{ showAgeMin }} - {{ showAgeMax }}
                </div>
              </div>
              <div class="w-full">
                <el-slider
                  v-model="valueAge"
                  range
                  :show-input-controls="true"
                  :max="50"
                >
                </el-slider>
              </div>
            </div>
            <div class="w-full">
              <div class="flex justify-between items-center padding-describe">
                <div>Maximum number of photos</div>
              </div>
              <div class="w-full">
                <div class="w-full flex justify-between">
                  <div>1</div>
                  <div>5</div>
                  <div>9</div>
                </div>
                <el-slider :step="5" :max="10" v-model="valuePhoto"></el-slider>
              </div>
            </div>
          </div>

          <div class="w-full">
            <div class="w-full padding-describe">Interests</div>

            <div class="w-full">
              <span v-for="(item, index) in listInterestValue" :key="index">
                <button
                  :id="index"
                  class="option-active mr-3 mb-3 p-2 oftion-interests"
                  :ref="item"
                  size="large"
                  @click="onActiveInterest(index, item)"
                >
                  {{ item }}
                </button>
              </span>
            </div>

            <div class="w-full underline" @click="onClickShowInterest">
              See all
            </div>
          </div>

          <div class="w-full">
            <div class="flex items-center w-full p-3">
              <div class="flex justify-center items-center">
                <div
                  :class="isShowMyVerified ? 'not-show' : 'showed'"
                  @click="onClickChoseVerified(true)"
                >
                  <div class="flex justify-center">
                    <i class="fa-regular fa-circle w-8 h-8"></i>
                  </div>
                </div>
                <div
                  :class="isNotShowMyVerified ? 'showed' : 'not-show'"
                  @click="onClickChoseVerified(false)"
                >
                  <div class="flex justify-center bg-checked">
                    <i class="fa-solid fa-circle-check w-8 h-8"></i>
                  </div>
                </div>
              </div>
              <div class="ml-3 text-lg">Profile with verified photo</div>
            </div>
            <div class="flex items-center w-full p-3">
              <div class="flex justify-center items-center">
                <div
                  :class="isShowMy ? 'not-show' : 'showed'"
                  @click="onClickChose(true)"
                >
                  <div class="flex justify-center bg-checked">
                    <i class="fa-solid fa-circle-check w-8 h-8"></i>
                  </div>
                </div>
                <div
                  :class="isNotShowMy ? 'showed' : 'not-show'"
                  @click="onClickChose(false)"
                >
                  <div class="flex justify-center">
                    <i class="fa-regular fa-circle w-8 h-8"></i>
                  </div>
                </div>
              </div>
              <div class="ml-3 text-lg">Profile has Bio</div>
            </div>
          </div>
        </div>
        <div
          v-if="issShowFormInterest"
          class="h-form-like-body overflow-scroll height-scroll p-5"
        >
          <FormInterestLike ref="f-interest"></FormInterestLike>
        </div>

        <div
          class="flex justify-center items-center w-full mt-3 h-form-like-footer"
        >
          <div
            @click="onActionCancel(false)"
            class="w-32 mr-5 cursor-pointer button-default rounded-xl p-3 text-center justify-center flex"
          >
            Clear
          </div>
          <div
            @click="onActionFilter(true)"
            class="w-32 ml-5 button-active cursor-pointer rounded-xl p-3 text-center justify-center flex"
          >
            Apply
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormInterestLike from "../form-interest-like";
import { mapMutations } from "vuex";
export default {
  components: { FormInterestLike },
  name: "filter-option",

  data() {
    return {
      valueMaximum: 50,
      valueAge: [25, 45],
      valuePhoto: 10,
      listDataInterests: [],
      issShowFormInterest: false,
      listChossed: [
        {
          id: 0,
          name: "Profile with verified photo",
        },

        {
          id: 1,
          name: "Profile has Bio",
        },
      ],

      loading: false,

      listIntersts: [],

      listChecked: [],
      listInterestCode: [],

      listInterest:
        this.$store.state.commonModule.listLifeStyleSingle.interests,
    };
  },

  computed: {
    listInterestValue() {
      let result = [];
      debugger;
      const interestsData = this.$store.state.commonModule.listInterestFilter;

      for (let index = 0; index < interestsData.length; index++) {
        const element = interestsData[index];
        const findData = this.listInterest.find((x) => x.code === element);
        if (findData) {
          result.push(findData.value);
        }
      }
      return result;
    },
    showAgeMin() {
      return this.valueAge[0];
    },

    showAgeMax() {
      return this.valueAge[1];
    },

    isShowMy() {
      return this.$store.state.commonModule.isShowMyProfile;
    },

    isNotShowMy() {
      return this.$store.state.commonModule.isNotShowProfie;
    },

    isShowMyVerified() {
      return this.$store.state.commonModule.isShowMyProfileVerified;
    },
    isNotShowMyVerified() {
      return this.$store.state.commonModule.isNotShowProfileVerified;
    },
  },

  methods: {
    ...mapMutations([
      "setShowProfileCreate",
      "setShowProfileVerified",
      "setListInterestFilter",
      "setListUserLikeFilter",
    ]),
    onActionFilter(val) {
      debugger;
      if (this.issShowFormInterest) {
        this.setListInterestFilter(this.$refs["f-interest"].listInterestCode);

        setTimeout(() => {
          this.issShowFormInterest = false;
        }, 100);
      } else {
        this.loading = true;
        debugger;
        const objectFilter = {
          valueMaximum: this.valueMaximum,
          valueAge: this.valueAge,
          valuePhoto: this.valuePhoto,
          valueInterests: this.$store.state.commonModule.listInterestFilter,
          valueVerified: this.isShowMyVerified,
        };
        this.setListUserLikeFilter(objectFilter);
        setTimeout(() => {
          this.loading = false;
          this.$emit("onHidePopupFilter", val);
        }, 2000);
      }
    },

    onActionCancel(val) {
      if (this.issShowFormInterest) {
        setTimeout(() => {
          this.issShowFormInterest = false;
        }, 100);
      } else {
        this.$emit("onHidePopupFilter", val);
      }
    },

    onActiveInterest(index, val) {
      console.log(val);
      const documentActive = document.getElementsByClassName("option-interest");

      const indexParam = this.listDataInterests.findIndex((x) => x === val);

      if (indexParam !== -1) {
        documentActive[index].classList.add("border-no-active");
        documentActive[index].classList.remove("border-active");

        const index = this.listDataInterests.indexOf(val);
        if (index > -1) {
          this.listDataInterests.splice(index, 1);
        }
      } else {
        documentActive[index].classList.add("border-active");
        documentActive[index].classList.remove("border-no-active");

        this.listDataInterests.push(val);
      }
    },

    onChangeCancel() {
      this.$emit("onHidePopupFilter", false);
    },

    onChangeAgeRange() {
      this.setValueAgeRange(this.valueAge);
    },

    onClickShowInterest() {
      debugger;
      this.issShowFormInterest = true;
    },

    onClickChose(val) {
      debugger;
      if (val === true) {
        this.setShowProfileCreate({
          isShowProfile: true,
          isNotShowProfile: true,
        });
      } else {
        this.setShowProfileCreate({
          isShowProfile: false,
          isNotShowProfile: false,
        });
      }
    },

    onClickChoseVerified(val) {
      if (val === true) {
        this.setShowProfileVerified({
          isShowProfile: true,
          isNotShowProfile: true,
        });
      } else {
        this.setShowProfileVerified({
          isShowProfile: false,
          isNotShowProfile: false,
        });
      }
    },
  },

  mounted() {},

  created() {},
};
</script>

<style lang="css">
.not-show {
  display: none;
}

.showed {
  display: block;
}

.border-active {
  color: #fd5d65;
  border: 1.5px solid #fd5d65;
}
.border-no-active {
  color: white;
  border: 1.5px solid #ffffff;
}

.fa-circle-check {
  color: #fd5d65;
}

.bg-checked {
  background-color: white;
  border-radius: 20px;
}

.fa-circle {
  color: #b8bbca;
}

.border-active {
  border: 1.5px solid #fd5d65;
}

.not-border {
  border: none;
}

.fa-circle::before {
  font-size: 26px;
}

.fa-circle-check::before {
  font-size: 33px;
}

.form-filter-detail {
  background-color: #434a5d;
  border-radius: 12px;
}

.h-form-like-body {
  height: 90%;
}
.h-form-like-footer {
  height: calc(100% - 94%);
}

.w-form-like {
  width: 92%;
}

.option-interests {
  border-radius: 8px;
  cursor: pointer;
}
</style>
