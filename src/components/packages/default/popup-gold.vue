<template>
  <div class="w-full h-full show-popups z-10 flex justify-center items-center">
    <div class="backdrop" @click="onHidePopupPackage"></div>
    <div class="dialog-container" v-bind:class="{ 'reverse-layout': isArabic }">
      <div class="dialog">
        <div
          class="popup_report"
          :style="`background:${bindingData.colorButtonAction.colorBackground}`"
        >
          <div class="platinum h-full w-full text-center">
            <div class="w-full title-packages">
              {{ bindingData.titlePackage }}
            </div>
            <div class="w-full text-center mb-2 h-72">
              <carousel
                :per-page="1"
                :mouse-drag="true"
                :autoplay="true"
                :paginationActiveColor="isColorActive"
                :paginationColor="isColor"
              >
                <slide
                  data-index="0"
                  data-name="MySlideName"
                  @slideclick="handleSlideClick"
                  v-for="(item, index) in bindingData.lisNameSliderGolds"
                  :key="index"
                >
                  <div class="item-package">
                    <div class="flex justify-center">
                      <div
                        class="img-url"
                        :style="`background-image: url('${item.urlImage}');`"
                      ></div>
                    </div>
                    <div class="w-full mt-6 mb-3">
                      <div
                        class="title-packages font-bold"
                        :style="`color:${bindingData.colorTextGold.colorFormGold}`"
                      >
                        {{ item.nameGold }}
                      </div>
                      <div class="describe-packages">
                        {{ item.describeGold }}
                      </div>
                    </div>
                  </div>
                </slide>
              </carousel>
            </div>
            <div class="flex justify-center text-center gap-4">
              <div
                class="square"
                v-for="(item, index) in bindingData.listGoldMonth"
                :key="index"
              >
                <input
                  type="radio"
                  :id="`gold_` + index"
                  name="squares"
                  class="hidden"
                  :checked="item.isChecked ? 'checked' : ''"
                />
                <label
                  :for="`gold_` + index"
                  :style="{
                    '--borderPlatinum':
                      bindingData.colorBorderActive.borderColor,
                    '--bgPlatinum': bindingData.colorBorderActive.bgColor,
                    '--textPlatinum': bindingData.colorBorderActive.textColor,
                  }"
                >
                  <div
                    class="bg-form-package"
                    :style="`background-color:${bindingData.colorTextGold.bgFormGold};color:${bindingData.colorTextGold.colorFormGold}`"
                  >
                    <h1 class="text-5xl pt-5">{{ item.numberGold }}</h1>
                    <p>{{ item.typeGold }}</p>
                    <p class="pt-3">{{ item.price }}</p>
                    <p>{{ item.currency }}</p>
                    <p class="text-red-500 pt-3 text-xs">
                      {{ item.percentSale }}
                    </p>
                  </div></label
                >
              </div>
            </div>
            <div>
              <button
                class="w-11/12 py-4 px-4 rounded-xl shadow text-2xl mt-8"
                :style="`background-color:${bindingData.colorButtonAction.bgColor};color:${bindingData.colorButtonAction.textColor}`"
              >
                {{ bindingData.colorButtonAction.name }}
              </button>
              <div
                class="text-lg mt-3"
                :style="`color:#7D808B`"
                v-if="Object.keys(bindingData.colorButtonMore).length === 0"
              >
                {{ $t("recuring_billing,_cancel_anytime") }}
              </div>
              <div v-if="Object.keys(bindingData.colorButtonMore).length !== 0">
                <p class="mt-5 text-black font-semibold text-xl">OR</p>
                <button
                  :style="`background-color:${bindingData.colorButtonMore.bgColor}`"
                  class="w-11/12 text-white py-4 px-4 rounded-xl shadow text-xl mt-5"
                >
                  {{ bindingData.colorButtonMore.name }}
                  <p class="text-sm font-thin opacity-80">
                    {{ bindingData.colorButtonMore.describe }}
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "popup-gold",
  data() {
    return {
      isColor: "#7E7E7E",
      isColorActive: "#ffffff",
      listPackages: {
        platinum: {
          titlePackage: this.$t("get_platinum_package"),
          colorTextGold: {
            bgFormGold: "rgb(84 74 74)",
            colorFormGold: "#ffffff",
          },
          colorBorderActive: {
            borderColor: "#ffffff",
            bgColor: "#ffffff",
            textColor: "#000000",
          },
          colorButtonAction: {
            bgColor: "#ffffff",
            textColor: "#000000",
            name: this.$t("continue"),
            colorBackground:
              "linear-gradient(    321deg,    rgb(32 29 29) 10%,    rgb(46 41 41) 50%,    rgb(18 16 16) 90%  )",
          },
          lisNameSliderGolds: [
            {
              nameGold: this.$t("prioritized_likes"),
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: this.$t("everyone_you_like_will_see_you_soon"),
            },
            {
              nameGold: this.$t("see_who_likes_you"),
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: this.$t(
                "match_instantly_with_people_who_already_like_you"
              ),
            },
            {
              nameGold: "",
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: this.$t(
                "including_top_picks,_unlimited_likes,_1free_boost_every_month,_5_free_supper_like_every_week,_rewind_and_passport"
              ),
            },
            {
              nameGold: this.$t("message_before_matching"),
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: this.$t(
                "including_top_picks,_unlimited_likes,_1free_boost_every_month,_5_free_supper_like_every_week,_rewind_and_passport"
              ),
            },
          ],

          listGoldMonth: [
            {
              numberGold: 3,
              typeGold: this.$t(this.$t("months")),
              price: 2.49,
              currency: this.$t("usd/each"),
            },
            {
              numberGold: 9,
              typeGold: this.$t(this.$t("months")),
              price: 2.49,
              currency: this.$t("usd/each"),
              percentSale: this.$t("sale") + "50%",
              isChecked: true,
            },
            {
              numberGold: 30,
              typeGold: this.$t(this.$t("months")),
              price: 2.49,
              currency: this.$t("usd/each"),
            },
          ],
          colorButtonMore: {},
        },
        // Gold
        gold: {
          titlePackage: this.$t("get_gold_package"),
          colorTextGold: {
            bgFormGold: "#FEF6E7",
            colorFormGold: "#000000",
          },
          colorBorderActive: {
            borderColor: "#EBAB3B",
            bgColor: "#EBAB3B",
            textColor: "#000000",
          },
          colorButtonAction: {
            bgColor: "#EBAB3B",
            textColor: "#ffffff",
            name: this.$t("continue"),
            colorBackground:
              "linear-gradient(#f4b939 0%,rgb(253, 253, 251)50%, rgb(253, 253, 251))",
          },
          lisNameSliderGolds: [
            {
              nameGold: this.$t("99+_people_already_like_you"),
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: this.$t("see_who_likes_you_and_match_instantly"),
            },
            {
              nameGold: this.$t("buy_more_top_picks"),
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: this.$t(
                "get_full_access_to_top_picks,_like_you,_send_unlimited_likes_&_more"
              ),
            },
            {
              nameGold: this.$t("unlimited_likes"),
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: this.$t("see_as_many_likes_as_you_want"),
            },
            {
              nameGold: this.$t("1_free_boost_every_month"),
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: this.$t("skip_the_queue"),
            },
            {
              nameGold: "Control your profile",
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: this.$t("limit_what_others_see_with_dating_plus"),
            },
            {
              nameGold: this.$t("choose_who_see_you"),
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: this.$t("only_be_shown_to_people_you've_liked"),
            },
            {
              nameGold: this.$t("like_profile_around_the_world"),
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: this.$t("passport_to_anywhere"),
            },
            {
              nameGold: this.$t("5_free_supper_likes_very_week"),
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: this.$t("you're_3x_more_likely_to_get_a_match"),
            },
            {
              nameGold: this.$t("unlimited_rewinds"),
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: this.$t("go_back_and_try_again"),
            },
            {
              nameGold: this.$t("turn_off_ads"),
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: this.$t("have_fun_without_interruptions"),
            },
          ],

          listGoldMonth: [
            {
              numberGold: 1,
              typeGold: this.$t(this.$t("months")),
              price: 7.99,
              currency: this.$t("usd/months"),
            },
            {
              numberGold: 6,
              typeGold: this.$t(this.$t("months")),
              price: 3.99,
              currency: this.$t("usd/months"),
              percentSale: this.$t("sale") + "50%",
              isChecked: true,
            },
            {
              numberGold: 12,
              typeGold: this.$t(this.$t("months")),
              price: 2.99,
              currency: this.$t("usd/months"),
            },
          ],
          colorButtonMore: {},
        },
        // Silver
        silver: {
          titlePackage: this.$t("get_silver_package"),
          colorTextGold: {
            bgFormGold: "#ECEFEE",
            colorFormGold: "#000000",
          },
          colorBorderActive: {
            borderColor: "#44665A",
            bgColor: "#44665A",
            textColor: "#000000",
          },
          colorButtonAction: {
            bgColor: "#44665A",
            textColor: "#ffffff",
            name: this.$t("continue"),
            colorBackground:
              " linear-gradient(rgb(82 145 127) 0%,rgb(255 255 255)50%, rgb(253, 253, 251))",
          },
          lisNameSliderGolds: [
            {
              nameGold: this.$t("unlimited_likes"),
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: this.$t("send_as_many_likes_as_you_want"),
            },
            {
              nameGold: this.$t("control_your_profile"),
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: this.$t("limit_what_others_see_with_dating_plus"),
            },
            {
              nameGold: this.$t("choose_who_sees_you"),
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: this.$t("only_be_shown_to_people_you've_liked"),
            },
            {
              nameGold: this.$t("like_profile_around_the_world"),
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: this.$t("passport_to_anywhere"),
            },
            {
              nameGold: this.$t("unlimited_rewinds"),
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: this.$t("go_back_and_try_again"),
            },
            {
              nameGold: this.$t("turn_off_ads"),
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: this.$t("have_fun_without_interruptions"),
            },
          ],

          listGoldMonth: [
            {
              numberGold: 1,
              typeGold: this.$t("months"),
              price: 7.99,
              currency: this.$t("usd/months"),
            },
            {
              numberGold: 6,
              typeGold: this.$t("months"),
              price: 3.99,
              currency: this.$t("usd/months"),
              percentSale: this.$t("sale") + "50%",
              isChecked: true,
            },
            {
              numberGold: 12,
              typeGold: this.$t("months"),
              price: 2.99,
              currency: this.$t("usd/months"),
            },
          ],
          colorButtonMore: {},
        },
        // Supper Likes
        supperLike: {
          titlePackage: this.$t("get_supper_likes_package"),
          colorTextGold: {
            bgFormGold: "#ECEFEE",
            colorFormGold: "#000000",
          },
          colorBorderActive: {
            borderColor: "#50B181",
            bgColor: "#50B181",
            textColor: "#ffffff",
          },
          colorButtonAction: {
            bgColor: "#50B181",
            textColor: "#ffffff",
            name: this.$t("get_supper_likes"),
            colorBackground:
              "linear-gradient(#26b78b 10%,#ffffff 44%, rgb(253, 253, 251)56%)",
          },
          lisNameSliderGolds: [
            {
              nameGold: this.$t("stand_out_with_super_like"),
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: this.$t("3x_chance_to_get_a_match"),
            },
          ],

          listGoldMonth: [
            {
              numberGold: 3,
              typeGold: this.$t("supper_likes"),
              price: 2.99,
              currency: this.$t("usd/each"),
            },
            {
              numberGold: 15,
              typeGold: this.$t("supper_likes"),
              price: 2.49,
              currency: this.$t("usd/each"),
              percentSale: this.$t("sale") + "50%",
              isChecked: true,
            },
            {
              numberGold: 30,
              typeGold: this.$t("supper_likes"),
              price: 1.99,
              currency: this.$t("usd/each"),
            },
          ],
          colorButtonMore: {
            bgColor: "#EBAB3B",
            name: "Get a Gold package",
            describe: "5 free Supper Like weekly",
          },
        },
        // Boost
        boost: {
          titlePackage: "Get Boost Package",
          colorTextGold: {
            bgFormGold: "rgb(246 233 255)",
            colorFormGold: "#000000",
          },
          colorBorderActive: {
            borderColor: "#8620D1",
            bgColor: "#8620D1",
            textColor: "#ffffff",
          },
          colorButtonAction: {
            bgColor: "#8820D0",
            textColor: "#ffffff",
            name: this.$t("boost_my_profile"),
            colorBackground:
              " linear-gradient(rgb(66 77 204), rgb(250 250 250),rgb(253, 253, 251))",
          },
          lisNameSliderGolds: [
            {
              nameGold: this.$t("skip_the_queue"),
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: this.$t(
                "always_on_top_profile_in_your_area_for_30_mins_to_get_more_matches"
              ),
            },
          ],

          listGoldMonth: [
            {
              numberGold: 3,
              typeGold: this.$t("supper_likes"),
              price: 2.99,
              currency: this.$t("usd/each"),
            },
            {
              numberGold: 15,
              typeGold: this.$t("supper_likes"),
              price: 2.49,
              currency: this.$t("usd/each"),
              percentSale: this.$t("sale") + "50%",
              isChecked: true,
            },
            {
              numberGold: 30,
              typeGold: this.$t("supper_likes"),
              price: 1.99,
              currency: this.$t("usd/each"),
            },
          ],
          colorButtonMore: {
            bgColor: "#EBAB3B",
            name: this.$t("get_a_gold_package"),
            describe: this.$t("5_free_supper_like_weekly"),
          },
        },
        // read receipt
        readReceipt: {
          titlePackage: this.$t("get_read_receipt_package"),
          colorTextGold: {
            bgFormGold: "#F7F2FB",
            colorFormGold: "#000000",
          },
          colorBorderActive: {
            borderColor: "#3983F6",
            bgColor: "#3983F6",
            textColor: "#ffffff",
          },
          colorButtonAction: {
            bgColor: "#3983F6",
            textColor: "#ffffff",
            name: this.$t("get_read_receipt"),
            colorBackground: " linear-gradient(to bottom, #1690ff, #fdfdfb)",
          },
          lisNameSliderGolds: [
            {
              nameGold: this.$t("stay_up_to_date"),
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: this.$t(
                "know_when_your_messages_have_been_read_with_read_receipt"
              ),
            },
          ],

          listGoldMonth: [
            {
              numberGold: 1,
              typeGold: this.$t("read_receipt"),
              price: 2.99,
              currency: this.$t("usd/each"),
            },
            {
              numberGold: 5,
              typeGold: this.$t("read_receipt"),
              price: 2.49,
              currency: this.$t("usd/each"),
              percentSale: this.$t("sale") + "50%",
              isChecked: true,
            },
            {
              numberGold: 20,
              typeGold: this.$t("read_receipt"),
              price: 1.99,
              currency: this.$t("usd/each"),
            },
          ],
          colorButtonMore: {},
        },
      },
    };
  },

  props: ["nameGoldPackage"],

  computed: {
    isArabic() {
      debugger;
      return this.$i18n.locale === "ar"; // Điều chỉnh 'ar' cho ngôn ngữ Ả Rập
    },
    bindingData() {
      if (this.nameGoldPackage === "platinum") {
        return this.listPackages.platinum;
      } else if (this.nameGoldPackage === "gold") {
        return this.listPackages.gold;
      } else if (this.nameGoldPackage === "silver") {
        return this.listPackages.silver;
      } else if (this.nameGoldPackage === "supperLike") {
        return this.listPackages.supperLike;
      } else if (this.nameGoldPackage === "boost") {
        return this.listPackages.boost;
      } else {
        return this.listPackages.readReceipt;
      }
    },
  },

  methods: {
    handleSlideClick(dataset) {
      console.log(dataset.index, dataset.name);
    },
    onHidePopupPackage() {
      this.$emit("onClickHidePackage", false);
    },
  },

  mounted() {},
};
</script>
<style lang="css">
.backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

.dialog-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  width: 100%;
  z-index: 10;
}

.dialog {
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  display: inline-block;
  max-width: 90%;
  overflow-y: auto;
  text-align: center;
  vertical-align: middle;
  width: 500px;
  z-index: 20;
}

.dialog h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

@keyframes zoomIn {
  from {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
}

.show-popups {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-name: zoomIn;
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}
.b1 {
  background-color: #940fd8;
}
.b2 {
  background-color: #f6a800;
}
.popup {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.item-package {
  padding: 10px;
  width: 100%;
  color: black;
  height: 100%;
}
.popup_report {
  margin: auto;
  padding: 20px;
  width: 100%;
  border-radius: 10px 10px 10px 10px;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
}
.img1 {
  margin: auto;
  width: 92px;
  height: 90px;
  background-image: url("@/assets/icon/bt_super_like.svg");
  background-size: 100%;
}
.square label {
  display: block;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid transparent;
  opacity: 0.5;
}
.square label div {
  border-radius: 10px;
  width: 130px;
  height: 200px;
}
.square input[type="radio"]:checked + label {
  border-color: var(--borderPlatinum);
  border-radius: 12px;
  border-width: 3px;
  opacity: 1;
  transform: scale(1.1);
}

.square input[type="radio"]:checked + label::after {
  content: "MOST POPULAR";
  display: block;
  position: absolute;
  top: -7%;
  left: 15%;
  color: var(--textPlatinum);
  background-color: var(--bgPlatinum);
  padding: 4px;
  font-size: 10px;
  border-radius: 5px;
  font-weight: 700;
}

.img-url {
  background-position: center;
  background-size: cover;
  width: 120px;
  height: 100px;
}
</style>
