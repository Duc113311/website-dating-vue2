<template>
  <div class="w-full h-full">
    <div class="v-modal-bg w-full h-full" @click="onChangeCancel()"></div>
    <div
      class="w-full h-full flex justify-center items-center absolute top-0 left-0"
    >
      <div
        class="rounded-lg items-center w-form-life relative p-5 cursor-pointer"
      >
        <div
          class="w-full justify-between flex items-center h-title-close h-form-title"
        >
          <div @click="onChangeCancel()">
            <i class="fa-solid fa-xmark size-icon-default"></i>
          </div>
          <div @click="onChangeSaveInterest()">
            <i class="fa-solid fa-check size-icon-default"></i>
          </div>
        </div>

        <div
          class="w-full flex justify-center items-center h-form-data h-form-body"
        >
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
            <div class="w-full h-search mb-2">
              <div class="w-full">
                <el-autocomplete
                  v-model="state"
                  class="w-full"
                  :fetch-suggestions="querySearchAsync"
                  placeholder="Enter search interest"
                  @select="handleSelect"
                ></el-autocomplete>
              </div>
            </div>

            <!-- Danh sách sở thich -->

            <div
              class="w-full h-full list-interest mt-5 height-scroll overflow-scroll"
            >
              <span v-for="(item, index) in listDataInterests" :key="index">
                <button
                  @click="onSelectInterest(item.code)"
                  :id="`not-check_` + item.code"
                  class="option-interests mr-3 mb-3 p-3 text-white"
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
    };
  },

  computed: {
    listDataChecked() {
      return ["Dancing", "Singing", "Ballet", "BBQ"];
    },
    listDataInterests() {
      return this.$store.state.commonModule.listLifeStyleSingle.interests;
    },
  },
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
      const listInterest =
        this.$store.state.commonModule.listLifeStyleSingle.interests;
      if (this.listChecked.length < 5) {
        document.getElementById("not-check_" + val).classList.add("bg-active");

        const findValue = listInterest.find((x) => x.code === val);
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
        }
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
  },

  async created() {},

  mounted() {
    // this.links = this.loadAll();

    const interestsData =
      this.$store.state.userModule.user_profile.profiles.interests;

    const listInterest =
      this.$store.state.commonModule.listLifeStyleSingle.interests;

    for (let index = 0; index < interestsData.length; index++) {
      const element = interestsData[index];
      document
        .getElementById("not-check_" + element)
        .classList.add("bg-active");
      const findValue = listInterest.find((x) => x.code === element);

      if (findValue) {
        const objectChecked = {
          code: element,
          value: findValue.value,
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
.list-interest {
  height: calc(100% - 35%);
}

.option-interests {
  border: 1.5px solid white;
  border-radius: 8px;
  cursor: pointer;
}
</style>
