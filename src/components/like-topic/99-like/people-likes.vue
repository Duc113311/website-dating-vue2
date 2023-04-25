<template>
  <div class="w-full h-full relative">
    <div class="w-full option-like flex h-20 items-center p-5">
      <div
        class="oftion-interests border-default p-2 mr-3 w-10 h-10"
        slot="reference"
        @click="onShowFilterLike()"
      >
        <div class="ic_filter flex justify-center items-center"></div>
      </div>

      <div class="flex items-center w-80">
        <span v-for="(item, index) in listIntersts" :key="index">
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

    <div
      class="w-full flex items-center h-12 justify-center pr-4 pl-4 description-no-padding"
    >
      <span>Upgrade to Gold to see people who are interested in you</span>
    </div>

    <div class="container pr-4 pl-4">
      <div class="grid grid-cols-2 gap-3 swipe-container">
        <div
          v-hammer:swipeleft="onSwipeLeft"
          v-for="(user, index) in list_users"
          :key="index"
          class="item swipe-card"
          :style="{ 'background-image': 'url(' + user.img[0] + ')' }"
        >
          <div>
            <p style="margin-bottom: 10px">{{ user.name }}, {{ user.age }}</p>
            <p><span class="status">&#x1F7E2;</span>Recently Active</p>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute w-full bottom-0 z-10 mb-14">
      <BhSeeLike></BhSeeLike>
    </div>

    <div
      class="form-filter absolute top-0 left-0 w-full p-5 z-40"
      v-show="isShowFilter"
    >
      <FilterOption @onHidePopupFilter="onHidePopupFilter"></FilterOption>
    </div>
  </div>
</template>

<script>
import { VueHammer } from "vue2-hammer";

import FilterOption from "../filter/filter-option";
// import BhActivateLike from "../../bh-element-ui/button/bh-activateLike";
import BhSeeLike from "../../bh-element-ui/button/bh-seeLike";
export default {
  components: {
    FilterOption,
    // BhActivateLike,
    BhSeeLike,
  },
  name: "people-likes",
  directives: {
    Hammer: VueHammer.directive,
  },
  data() {
    return {
      listIntersts: ["Reading", "Car", "Dog", "Reading"],
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

      list_users: [
        {
          name: "lan",
          age: 23,
          img: [
            "https://images-ssl.gotinder.com/6200b29e6b308601002bac1f/original_5e0a81a4-3530-4e5f-8d39-d8bbe5462014.jpeg",
            "https://images-ssl.gotinder.com/6200b29e6b308601002bac1f/original_a02a799f-47df-4e88-a6f5-de237ecf2c43.jpeg",
            "https://images-ssl.gotinder.com/6200b29e6b308601002bac1f/original_d271d0c5-2978-4856-ae86-d3f02a106e7a.jpeg",
          ],
          distance: 20,
          Interests: ["Reading"],
        },
        {
          name: "ngọc",
          age: 27,
          img: [
            "https://images-ssl.gotinder.com/627aafb74b13430100f6c8a0/original_3dc60206-8bcd-43fc-85c0-ec938baf61c4.jpeg",
            "https://images-ssl.gotinder.com/627aafb74b13430100f6c8a0/original_c1f2aad4-71d9-47e2-9329-b8585ce70dc1.jpeg",
            "https://images-ssl.gotinder.com/627aafb74b13430100f6c8a0/original_d7f35e17-e34f-4ee0-88dd-79a59e829c0f.jpeg",
          ],
          distance: 30,
          Interests: ["Reading", "Car", "Dog"],
        },
        {
          name: "vân anh",
          age: 25,
          img: [
            "https://images-ssl.gotinder.com/63821b9eb9f85c0100a68921/original_6dc1f94b-564e-49cc-a65c-1c165eddd457.jpeg",
            "https://images-ssl.gotinder.com/63821b9eb9f85c0100a68921/original_8f740e67-2a52-43ff-86e1-e320a0535c3f.jpeg",
            "https://images-ssl.gotinder.com/63821b9eb9f85c0100a68921/original_2198e746-d646-444f-96a3-768ec46fb1c9.jpeg",
            "https://images-ssl.gotinder.com/63821b9eb9f85c0100a68921/original_ad2aca03-1983-4ea1-ba4c-d11267aa78e5.jpeg",
            "https://images-ssl.gotinder.com/63821b9eb9f85c0100a68921/original_6dc1f94b-564e-49cc-a65c-1c165eddd457.jpeg",
            "https://images-ssl.gotinder.com/63821b9eb9f85c0100a68921/original_98b6a683-ffca-4071-9518-6e238d8d6966.jpeg",
          ],
          distance: 10,
          Interests: ["Reading", "Dog"],
        },
        {
          name: "thu huyền",
          age: 22,
          img: [
            "https://images-ssl.gotinder.com/62e628d91fb44801001bf878/original_a1e4aeed-2a3f-491d-8e62-37e868c17dea.jpeg",
            "https://images-ssl.gotinder.com/62e628d91fb44801001bf878/original_e44393cd-1365-40ba-98fb-d81ab8737a54.jpeg",
            "https://images-ssl.gotinder.com/62e628d91fb44801001bf878/original_44e08ca1-7ade-4be7-9de7-fd2106b71bf1.jpeg",
            "https://images-ssl.gotinder.com/62e628d91fb44801001bf878/original_3b3504d3-967d-440e-9b04-3c2660bc7ac9.jpeg",
            "https://images-ssl.gotinder.com/62e628d91fb44801001bf878/original_82559a52-9a2f-4c3b-a21b-180f9d8efa69.jpeg",
            "https://images-ssl.gotinder.com/62e628d91fb44801001bf878/original_6fb8cc45-d6a1-4c09-87fd-c5f9a97076f7.jpeg",
            "https://images-ssl.gotinder.com/62e628d91fb44801001bf878/original_016c52e6-e9c8-4e86-a053-e945f3a7b929.jpeg",
            "https://images-ssl.gotinder.com/62e628d91fb44801001bf878/original_34ead704-eb94-4d21-b228-600fd63e267c.jpeg",
            "https://images-ssl.gotinder.com/62e628d91fb44801001bf878/original_b81679d5-e021-43b7-af3b-27f934d75f68.jpeg",
          ],
          distance: 60,
          Interests: ["Dog", "Reading"],
        },
        {
          name: "điệp",
          age: 19,
          img: [
            "https://images-ssl.gotinder.com/64110da9d1ac12010080e73e/original_3ea5b5e0-89c3-4b4b-a6e5-04538350f48d.jpeg",
            "https://images-ssl.gotinder.com/64110da9d1ac12010080e73e/original_51c8a930-be03-43f6-a035-697940c84a6f.jpeg",
            "https://images-ssl.gotinder.com/64110da9d1ac12010080e73e/original_6bb9de05-5d36-448c-9fc4-d57ad738dddb.jpeg",
            "https://images-ssl.gotinder.com/64110da9d1ac12010080e73e/original_cb0000e3-2716-4112-a8c8-5c62416ddb2e.jpeg",
            "https://images-ssl.gotinder.com/64110da9d1ac12010080e73e/1080x1350_0a2e02f6-d491-4959-9d90-e9d26f2ae689.webp",
          ],
          distance: 90,
          Interests: ["Reading", "Car"],
        },
      ],
    };
  },

  computed: {},

  methods: {
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
  background-color: #5b566b;
  color: white;
}

.oftion-interests {
  border-radius: 8px;
}

.container {
  overflow: auto; /* cho phép trượt khi các thẻ div vượt quá kích thước của div cha */
  height: calc(100% - 128px);
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
  width: 20px;
  height: 20px;
  background-color: #ffffff;
  -webkit-mask: url(@/assets/image-dating/ic_filter.svg) no-repeat center;
  mask: url(@/assets/image-dating/ic_filter.svg) no-repeat center;
}
</style>
