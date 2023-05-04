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
              <div class="padding-title">Interest</div>
              <div class="padding-describe-item">
                {{ listChecked.length }} out of 5
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
                Choose to let people know your passion by adding 5 interests to
                your profile.
              </div>
            </div>

            <!-- Tìm kiếm -->
            <div class="w-full mb-2 mt-2">
              <div class="w-full relative">
                <el-input
                  @input="onChangeFilterText"
                  v-model="valueSearch"
                  placeholder="Search interest"
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
              class="w-full h-full list-interest-form mt-5 height-scroll overflow-scroll"
            >
              <span v-for="(item, index) in listInterest" :key="index">
                <button
                  @click="onSelectInterest(item.code)"
                  :id="`not-check_` + item.code"
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
      listInterestCode: [],
      valueSearch: "",

      listInterest:
        this.$store.state.commonModule.listLifeStyleSingle.interests,
      listInterestOld:
        this.$store.state.commonModule.listLifeStyleSingle.interests,
    };
  },

  computed: {},
  methods: {
    ...mapMutations(["setListInterests"]),
    ...mapActions(["getListDataInterests"]),

    onRemoveItem(val) {
      console.log(val);
      this.listChecked = this.listChecked.filter(function (el) {
        return el.code != val;
      });
      document.getElementById("not-check_" + val).classList.remove("bg-active");
      const index = this.listInterestCode.indexOf(val);
      this.listInterestCode.splice(index, 1);
    },
    onChangeCancel() {
      this.$emit("onClickHideInterest", false);
    },

    onChangeSaveInterest() {
      this.setListInterests(this.listChecked);
      this.$emit("onClickSaveInterest", false);
    },

    onSelectInterest(val) {
      if (this.listChecked.length < 5) {
        document.getElementById("not-check_" + val).classList.add("bg-active");
        const nameInterest = document
          .getElementById("not-check_" + val)
          .innerHTML.toString();
        const objectChecked = {
          code: val,
          value: nameInterest,
        };

        const findData = this.listChecked.find((x) => x.code === val);
        if (!findData) {
          this.listInterestCode.push(val);

          this.listChecked.push(objectChecked);
        }
        document.getElementsByClassName("type-language")[0].style.color =
          "#f65a62";
      }
    },
    querySearchAsync(queryString, cb) {
      var links = this.links;
      var results = queryString
        ? links.filter(this.createFilter(queryString))
        : links;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createFilter(queryString) {
      return (link) => {
        return (
          link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
    },

    onChangeFilterText() {
      let dataList = [];
      if (this.listInterest.length <= this.listInterestOld.length) {
        dataList = this.listInterestOld;
        let result = dataList.filter(
          (item) =>
            item.value.toLowerCase().indexOf(this.valueSearch.toLowerCase()) !==
            -1
        );
        this.listInterest = result;
        console.log(result);
      }
    },

    onClickRemoveLanguage() {},
  },

  async created() {},

  mounted() {
    // this.links = this.loadAll();

    const interestsData =
      this.$store.state.userModule.user_profile.profiles.interests;

    if (interestsData.length !== 0) {
      document.getElementsByClassName("type-language")[0].style.color =
        "#f65a62";
      for (let index = 0; index < interestsData.length; index++) {
        const element = interestsData[index];
        document
          .getElementById("not-check_" + element)
          .classList.add("bg-active");
        const nameInterest = document
          .getElementById("not-check_" + element)
          .innerHTML.toString();
        const objectChecked = {
          code: element,
          value: nameInterest,
        };
        this.listInterestCode.push(element);
        this.listChecked.push(objectChecked);
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
