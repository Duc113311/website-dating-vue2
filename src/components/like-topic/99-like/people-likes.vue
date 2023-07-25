<template>
  <div class="w-full h-full">
    <div class="w-full option-like flex h-20 items-center pl-5 pr-5">
      <div class="flex justify-center items-center">
        <div
          class="oftion-interests h-w-option border-default p-2 mr-3"
          slot="reference"
          @click="onShowFilterLike()"
        >
          <div class="flex justify-center items-center">
            <img
              v-if="colorBt"
              src="@/assets/icon/ic_filter_dark.svg"
              alt=""
              srcset=""
            />
            <img
              v-else
              src="@/assets/icon/ic_filter_light.svg"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>

      <div class="flex items-center scroll-container" v-scroll-x>
        <span v-for="(item, index) in listInterestValue" :key="index">
          <button
            :id="index"
            class="border-default oftion-interests mr-3 p-2"
            size="large"
          >
            {{ item }}
          </button>
        </span>
      </div>
    </div>

    <div class="container pr-5 pl-5 relative">
      <div
        class="w-full flex items-center h-12 justify-center pr-4 pl-4 description-no-padding"
      >
        <span>{{
          $t("upgrade_to_gold_to_see_people_who_are_interested_in_you")
        }}</span>
      </div>

      <CtrlSwipe
        @onInputFile="onInputFile"
        :listUser="listLikeForYouAction"
      ></CtrlSwipe>

      <!-- <div class="absolute w-full bottom-0 left-0 z-10">
        <BhSeeLike></BhSeeLike>
      </div> -->
    </div>

    <div class="w-full h-full absolute top-0 left-0 z-30" v-if="isShowFilter">
      <FilterOption @onHidePopupFilter="onHidePopupFilter"></FilterOption>
    </div>
  </div>
</template>

<script>
import CtrlSwipe from "../../control/swipe/ctrl-swipe";
// import { VueHammer } from "vue2-hammer";

import FilterOption from "../filter/filter-option";
// import BhActivateLike from "../../bh-element-ui/button/bh-activateLike";
// import BhSeeLike from "../../bh-element-ui/button/bh-seeLike";
import functionValidate from "../../../middleware/validate.js";
import { mapMutations } from "vuex";

export default {
  components: {
    CtrlSwipe,
    FilterOption,
  },
  name: "people-likes",
  directives: {
    inserted: function (el) {
      el.addEventListener("mousewheel", function (e) {
        // Chỉ xử lý lăn chuột ngang (horizontal)
        if (e.deltaY === 0) return;
        // Ngăn chặn mặc định cuộn trang
        e.preventDefault();
        // Cuộn phần tử chứa danh sách ngang theo hướng lăn chuột
        el.scrollLeft += e.deltaY;
      });
    },
  },
  data() {
    return {
      visible: false,
      valueMaximum: 50,
      valueAge: [25, 45],
      valuePhoto: 10,
      isShowFilter: false,
      currentCard: 1,
      isShowMy: true,
      isNotShowMy: true,

      listDataInterests: [],

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
      listInterest:
        this.$store.state.commonModule.listLifeStyleSingle.interests,
    };
  },

  computed: {
    listLikeForYouAction() {
      return this.$store.state.likeTopicModule.listLikeForYous;
    },

    colorBt() {
      return this.$store.state.commonModule.statusLayout;
    },

    listInterestValue() {
      let result = [];
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
  },

  methods: {
    ...mapMutations(["setPutListUserAction"]),
    onInputFile(val) {
      const listOld = this.$store.state.likeTopicModule.listLikeForYous;
      const lengthListOld = listOld.length;
      const objectNew = {
        lengthListOld: lengthListOld,
        index: val,
      };
      this.setPutListUserAction(objectNew);
    },

    bindingAge(val) {
      const dataAge = functionValidate.calculatAge(val);
      return dataAge;
    },
    onSwipeLeft() {
      this.currentCard++;
    },
    onShowFilterLike() {
      this.isShowFilter = true;
    },
    onHidePopupFilter(val) {
      if (val) {
        // filter
        this.isShowFilter = false;
      } else {
        this.isShowFilter = false;
      }
    },

    onClickChosseVerified(val) {
      console.log(val);
    },

    onClickChosse(val) {
      console.log(val);
    },

    onActiveInterest(indexs, val) {
      console.log(val);
      const documentActive = document.getElementsByClassName("option-interest");

      const indexParam = this.listDataInterests.findIndex((x) => x === val);

      if (indexParam !== -1) {
        documentActive[indexs].classList.add("border-no-active");
        documentActive[indexs].classList.remove("border-active");

        const index = this.listDataInterests.indexOf(val);
        if (index > -1) {
          this.listDataInterests.splice(index, 1);
        }
      } else {
        documentActive[indexs].classList.add("border-active");
        documentActive[indexs].classList.remove("border-no-active");

        this.listDataInterests.push(val);
      }
    },
  },

  mounted() {},
};
</script>

<style lang="css">
.option-interest {
  border: 1.5px solid white;
  border-radius: 8px;
}

.option-like {
  align-items: revert;
}

.list-likes {
  grid-template-columns: 1fr 1fr;
}

.item-user {
  border-radius: 10px;
  background-image: url("../../../assets/image-dating/uikoria.jpg");
  background-position: center;
  background-size: cover;
}

.bg-shadow {
  background-image: url("../../../assets/image-dating/84x106_5026f25d-07a8-41fa-9ce7-43f80d55a42e.jpg");
  background-position: 50% 100%;
  background-size: auto 100.952%;
}

.bg-background-shadow {
  background: linear-gradient(
    0deg,
    rgb(0 0 0 / 85%) 9%,
    rgb(254 254 254 / 0%) 29%,
    rgb(255 255 255 / 0%) 99%
  );
}

.el-popover {
  width: 52% !important;
  height: 68% !important;
  top: 195px !important;
  left: 215px !important;
  background-color: #434a5d;
  border: none;
  border-radius: 10px;
}

.popper__arrow {
  display: none;
}

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
  font-size: 32px;
}

.fa-circle-check::before {
  font-size: 33px;
}

.form-filter {
  background-color: none;
  height: 63vh;
}

.oftion-interests:hover {
  background-color: #d8d9e5;
}

.oftion-interests {
  border-radius: 8px;
}

.container {
  overflow: auto; /* cho phép trượt khi các thẻ div vượt quá kích thước của div cha */
  height: calc(100% - 68px);
}
.container::-webkit-scrollbar {
  display: none;
}

.item {
  height: 310px;
  border-radius: 20px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-size: cover;
}
.item div {
  font-size: 18px;
  margin-bottom: 20px;
  margin-left: 20px;
}
.status {
  font-size: 12px;
  margin-right: 10px;
}

.ic_filter {
  width: 23px;
  height: 23px;
  background-image: url(@/assets/image-dating/ic_filter.svg);
}

.h-w-option {
  width: 2.65rem;
  height: 2.65rem;
}
.gap {
  gap: 1.55rem;
}

.scroll-container {
  display: flex;
  overflow-x: hidden;
  overflow-y: hidden;
  white-space: nowrap;
  scroll-behavior: smooth;
}

.scroll-container::-webkit-scrollbar {
  height: 6px;
}

.scroll-container::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 10px;
}
</style>
