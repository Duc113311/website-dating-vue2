<template>
  <div class="w-full h-full">
    <div class="v-modal-bg w-full h-full" @click="onChangeCancel()"></div>
    <div class="w-full absolute top-28 flex justify-center p-5">
      <div
        class="rounded-lg bg-dialog-default title-default items-center w-full height-scroll w-form-common overflow-scroll relative p-5 cursor-pointer"
      >
        <div class="w-full justify-between flex items-center">
          <div @click="onChangeCancel()">
            <i class="fa-solid fa-xmark size-icon-default"></i>
          </div>
          <div @click="onChangeSaveInterest()">
            <i
              class="fa-solid fa-check size-icon-default color-ic-language"
            ></i>
          </div>
        </div>

        <div
          class="w-full flex justify-center items-center h-form-data overflow-hidden"
        >
          <div class="w-full items-center h-full">
            <div class="flex w-full justify-between items-center mb-2">
              <div class="padding-title">The language I know</div>
              <div class="padding-describe-item">
                {{ listChecked.length }} out of 5
              </div>
            </div>
            <!-- Những thứ đã chọn -->
            <div class="w-full">
              Choose up to 5 languages you know and add to your profile
            </div>

            <!-- Tìm kiếm -->
            <div class="w-full mb-2 mt-2">
              <div class="w-full relative">
                <el-input
                  @input="onChangeFilterText"
                  v-model="valueSearch"
                  placeholder="Search language"
                  name=""
                  id=""
                >
                  <template slot="append" v-if="valueSearch.length !== 0">
                    <div class="ic" @click="onClickRemoveLanguage">
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
              class="w-full h-form-option mt-5 height-scroll overflow-scroll"
            >
              <span v-for="(item, index) in listLanguages" :key="index">
                <button
                  @click="onSelectLanguages(item.code)"
                  :id="`language_` + item.code"
                  class="option-interests mr-3 mb-3 p-1 border-default"
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
import { mapMutations } from "vuex";
export default {
  name: "form-languages",

  data() {
    return {
      listChecked: [],
      valueSearch: "",
      listData: [],
      listLanguages:
        this.$store.state.commonModule.listLifeStyleSingle.languages,
      listLanguagesOld:
        this.$store.state.commonModule.listLifeStyleSingle.languages,
    };
  },

  computed: {},

  methods: {
    ...mapMutations(["setSelectLanguages"]),
    onClickRemoveLanguage() {
      this.valueSearch = "";
      this.listLanguages =
        this.$store.state.commonModule.listLifeStyleSingle.languages;
      this.$nextTick(() => {
        for (let index = 0; index < this.listLanguages.length; index++) {
          const element = this.listLanguages[index];
          const findIndex = this.listChecked.find(
            (x) => x.code === element.code
          );

          if (findIndex) {
            document
              .getElementById("language_" + element.code)
              .classList.add("border-active");
          } else {
            document
              .getElementById("language_" + element.code)
              .classList.remove("border-active");
          }
        }
      });
    },
    onChangeCancel() {
      this.$emit("onHideLanguages", false);
    },
    onChangeSaveInterest() {
      this.setSelectLanguages(this.listChecked);
      this.$emit("onHideLanguages", false);
    },

    onSelectLanguages(val) {
      const findData = this.listChecked.find((x) => x.code === val);

      if (findData) {
        document
          .getElementById("language_" + findData.code)
          .classList.remove("border-active");
        this.listChecked = this.listChecked.filter(
          (x) => x.code !== findData.code
        );

        if (this.listChecked.length === 0) {
          document.getElementsByClassName("color-ic-language")[0].style.color =
            "white";
        }
      } else {
        if (this.listChecked.length < 5) {
          document
            .getElementById("language_" + val)
            .classList.add("border-active");
          const nameInterest = document
            .getElementById("language_" + val)
            .innerHTML.toString();
          const objectChecked = {
            code: val,
            value: nameInterest.trim(),
          };
          this.listChecked.push(objectChecked);
          document.getElementsByClassName("color-ic-language")[0].style.color =
            "#f65a62";
        }
      }
    },

    onChangeFilterText() {
      let dataList = [];
      if (this.valueSearch !== "") {
        if (
          this.listLanguages.length <=
          this.$store.state.commonModule.listLifeStyleSingle.languages.length
        ) {
          dataList = this.listLanguagesOld;
          let result = dataList.filter(
            (city) =>
              city.value
                .toLowerCase()
                .indexOf(this.valueSearch.toLowerCase()) !== -1
          );
          this.listLanguages = result;

          this.$nextTick(() => {
            for (let index = 0; index < this.listLanguages.length; index++) {
              const element = this.listLanguages[index];
              const findIndex = this.listChecked.find(
                (x) => x.code === element.code
              );

              if (findIndex) {
                document
                  .getElementById("language_" + element.code)
                  .classList.add("border-active");
              } else {
                document
                  .getElementById("language_" + element.code)
                  .classList.remove("border-active");
              }
            }
          });
          console.log(result);
        }
      } else {
        (this.listLanguages =
          this.$store.state.commonModule.listLifeStyleSingle.languages),
          this.$nextTick(() => {
            for (let index = 0; index < this.listLanguages.length; index++) {
              const element = this.listLanguages[index];
              const findIndex = this.listChecked.find(
                (x) => x.code === element.code
              );

              if (findIndex) {
                document
                  .getElementById("language_" + element.code)
                  .classList.add("border-active");
              } else {
                document
                  .getElementById("language_" + element.code)
                  .classList.remove("border-active");
              }
            }
          });
      }
    },
  },

  mounted() {
    const listCode =
      this.$store.state.userModule.user_profile?.profiles?.languages;

    if (listCode.length !== 0) {
      document.getElementsByClassName("color-ic-language")[0].style.color =
        "#f65a62";
      for (let index = 0; index < listCode.length; index++) {
        const element = listCode[index];

        document
          .getElementById("language_" + element)
          .classList.add("border-active");
        const nameInterest = document
          .getElementById("language_" + element)
          .innerHTML.toString();
        const objectChecked = {
          code: element,
          value: nameInterest.trim(),
        };
        this.listChecked.push(objectChecked);
      }
    }
  },
};
</script>

<style lang="css">
.list-interest {
  height: calc(100% - 28%);
}

.w-form-common {
  height: 40rem;
}
.bg-active {
  border: 1.5px solid #f65a62 !important;
  color: #f65a62;
}
.el-input-group__append {
  background: none !important;
  width: 30px;
  border: none !important;
  padding: 0 !important;
  border-radius: 0 !important;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-right: 10px;
}

.h-form-option {
  height: calc(100% - 30%);
}
</style>
