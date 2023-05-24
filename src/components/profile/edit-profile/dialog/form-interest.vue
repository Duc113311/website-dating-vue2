<template>
  <div class="w-full h-full">
    <div class="v-modal-bg w-full h-full" @click="onChangeCancel()"></div>
    <div class="w-full absolute top-28 flex justify-center p-5">
      <div
        class="rounded-lg bg-dialog-default title-default items-center w-full height-scroll w-form-common overflow-scroll relative p-5 cursor-pointer"
      >
        <div class="w-full justify-between flex items-center h-title-close">
          <div @click="onChangeCancel()">
            <i class="fa-solid fa-xmark size-icon-default"></i>
          </div>
          <div @click="onChangeSaveInterest()">
            <i class="fa-solid fa-check size-icon-default type-language"></i>
          </div>
        </div>

        <div class="w-full flex justify-center items-center h-form-data">
          <div class="w-full items-center h-full">
            <div class="flex w-full justify-between items-center h-12 mb-2">
              <div class="padding-title">
                {{ formatString($t("interest")) }}
              </div>
              <div class="padding-describe-item">
                {{ listChecked.length }} {{ $t("out_of_5") }}
              </div>
            </div>
            <!-- Những thứ đã chọn -->

            <div class="w-full mb-2">
              <div class="w-full" v-if="listChecked.length !== 0">
                <span
                  class="mr-2 mb-2"
                  v-for="(item, index) in listChecked"
                  :key="index"
                >
                  <button
                    @click="onRemoveItem(item.code)"
                    :id="item.code"
                    class="border-interest-checked pr-3 p-2 mb-2"
                    size="large"
                  >
                    {{ item.value }}

                    <i class="fa-solid fa-xmark"></i>
                  </button>
                </span>
              </div>
              <div class="w-full" v-if="listChecked.length === 0">
                {{
                  $t(
                    "choose_up_to_5_languages_you_know_and_add_to_your_profile"
                  )
                }}
              </div>
            </div>

            <!-- Tìm kiếm -->
            <div class="w-full mb-2 mt-2">
              <div class="w-full relative">
                <el-input
                  @input="onChangeFilterText"
                  v-model="valueSearch"
                  :placeholder="placeholderInterest"
                  name=""
                  id=""
                >
                  <template slot="append" v-if="valueSearch.length !== 0">
                    <div class="ic" @click="onClickRemoveInterest">
                      <img
                        src="../../../../assets/icon/icon-cancel.png"
                        width="20"
                      />
                    </div>
                  </template>
                </el-input>
              </div>
            </div>
            <!-- Danh sách sở thich -->

            <div
              class="w-full h-full list-interest-form mt-5 height-scroll overflow-scroll"
            >
              <span v-for="(item, index) in this.listInterest" :key="index">
                <button
                  @click="onSelectInterest(item.code)"
                  :id="`interest` + item.code"
                  class="option-interests border-default mr-3 mb-3 p-3"
                  size="large"
                >
                  {{ item.value }}
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import functionValidate from "../../../../middleware/validate.js";
import { mapActions, mapMutations } from "vuex";
export default {
  name: "form-interests",
  components: {},
  data() {
    return {
      links: [],
      state: "",
      timeout: null,
      listChecked: [],
      listCheckDelete: [],
      listInterestCode: [],
      valueSearch: "",
      placeholderInterest: this.$t("search_interest"),
      listInterest:
        this.$store.state.commonModule.listLifeStyleSingle.interests,
      listInterestOld:
        this.$store.state.commonModule.listLifeStyleSingle.interests,
    };
  },

  computed: {
    listInterestsParam() {
      return this.$store.state.commonModule.listLifeStyleSingle.interests;
    },
  },
  methods: {
    ...mapMutations(["setListInterests"]),
    ...mapActions(["getListDataInterests"]),

    formatString(value) {
      return functionValidate.titleCase(value);
    },
    /**
     * Remove phần tử
     * @param {*} val
     */
    onRemoveItem(val) {
      debugger;
      console.log(val);
      this.listChecked = this.listChecked.filter(function (el) {
        return el.code != val;
      });
      document
        .getElementById("interest" + val)
        .classList.remove("border-active");
      const index = this.listInterestCode.indexOf(val);
      this.listInterestCode.splice(index, 1);
    },

    /**
     * Cancel interest
     */
    onChangeCancel() {
      debugger;
      this.valueSearch = "";
      this.listChecked = this.listCheckDelete;
      for (let index = 0; index < this.listChecked.length; index++) {
        const element = this.listChecked[index];

        document
          .getElementById("interest" + element.code)
          .classList.add("border-active");
      }
      this.$emit("onClickHideInterest", false);
    },

    /**
     * Lưu giá trị
     */
    onChangeSaveInterest() {
      this.setListInterests(this.listChecked);
      this.$emit("onClickSaveInterest", false);
    },

    /**
     * Chọn giá trị
     * @param {*} val
     */
    onSelectInterest(val) {
      const listInterest =
        this.$store.state.commonModule.listLifeStyleSingle.interests;

      debugger;
      if (this.listChecked.length < 5) {
        document
          .getElementById("interest" + val)
          .classList.add("border-active");
        const findValue = listInterest.find((x) => x.code === val);
        debugger;
        if (findValue) {
          const objectChecked = {
            code: val,
            value: findValue.value,
          };

          const findData = this.listChecked.find((x) => x.code === val);
          if (!findData) {
            this.listInterestCode.push(val);

            this.listChecked.push(objectChecked);
          }
          document.getElementsByClassName("type-language")[0].style.color =
            "#f65a62";
        }
      }
    },

    /**
     * Nhập text filter
     */
    onChangeFilterText() {
      let dataList = [];
      debugger;

      if (this.valueSearch !== "") {
        if (this.listInterest.length <= this.listInterestOld.length) {
          dataList = this.listInterestOld;

          const filteredNames = dataList.filter((item) => {
            return item.value
              .toLowerCase()
              .includes(this.valueSearch.toLowerCase());
          });
          this.listInterest = filteredNames;

          this.$nextTick(() => {
            for (let index = 0; index < this.listInterest.length; index++) {
              const element = this.listInterest[index];

              const findIndex = this.listChecked.find(
                (x) => x.code === element.code
              );
              if (findIndex) {
                document
                  .getElementById("interest" + element.code)
                  .classList.add("border-active");
              } else {
                document
                  .getElementById("interest" + element.code)
                  .classList.remove("border-active");
              }
            }
          });
        }
      } else {
        this.listInterest =
          this.$store.state.commonModule.listLifeStyleSingle.interests;
        this.$nextTick(() => {
          for (let index = 0; index < this.listInterest.length; index++) {
            const element = this.listInterest[index];

            const findIndex = this.listChecked.find(
              (x) => x.code === element.code
            );
            if (findIndex) {
              document
                .getElementById("interest" + element.code)
                .classList.add("border-active");
            } else {
              document
                .getElementById("interest" + element.code)
                .classList.remove("border-active");
            }
          }
        });
      }
    },

    /**
     * Nút xóa ô tìm kiếm
     */
    onClickRemoveInterest() {
      debugger;
      this.valueSearch = "";
      this.listInterest =
        this.$store.state.commonModule.listLifeStyleSingle.interests;

      this.$nextTick(() => {
        for (let index = 0; index < this.listInterest.length; index++) {
          const element = this.listInterest[index];

          const findIndex = this.listChecked.find(
            (x) => x.code === element.code
          );
          if (findIndex) {
            document
              .getElementById("interest" + element.code)
              .classList.add("border-active");
          } else {
            document
              .getElementById("interest" + element.code)
              .classList.remove("border-active");
          }
        }
      });
    },
  },

  async created() {
    debugger;
  },

  mounted() {
    // this.links = this.loadAll();
    debugger;
    const interestsData =
      this.$store.state.userModule.user_profile.profiles.interests;
    const listInterest =
      this.$store.state.commonModule.listLifeStyleSingle.interests;
    if (interestsData.length !== 0) {
      document.getElementsByClassName("type-language")[0].style.color =
        "#f65a62";
      for (let index = 0; index < interestsData.length; index++) {
        const element = interestsData[index];
        document
          .getElementById("interest" + element)
          .classList.add("border-active");

        const findValue = listInterest.find((x) => x.code === element);

        if (findValue) {
          const objectChecked = {
            code: element,
            value: findValue.value,
          };
          this.listInterestCode.push(element);
          this.listChecked.push(objectChecked);
          this.listCheckDelete.push(objectChecked);
        }
      }
    }
  },
};
</script>

<style lang="css">
.h-search {
  height: 6%;
}
.list-interest-form {
  height: calc(100% - 35%);
}

.option-interests {
  border-radius: 8px;
  cursor: pointer;
}
</style>
