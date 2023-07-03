<template>
  <div class="w-full h-full relative title-default">
    <div class="w-full h-full">
      <!-- Header -->
      <div
        class="w-full header-detail flex justify-center items-center border-bottom"
      >
        <div class="w-full flex justify-center items-center pl-2 pr-2">
          <div class="">
            <BhBack @onBackComponent="onBackSettingPhone()"></BhBack>
          </div>
          <div class="ml-20 w-3/4 text-xl text-red-400">
            <span class="text-age font-semibold">{{
              bingString($t("update_information_school"))
            }}</span>
          </div>
        </div>
      </div>

      <!-- Body -->
      <div class="body-detail height-scroll overflow-scroll w-full pl-5 pr-5">
        <div class="w-full mt-6">
          <div class="bh-item-title title-item">{{ $t("school_name") }}</div>
          <div class="w-full h-search mt-2">
            <div class="w-full">
              <el-autocomplete
                v-model="selectedItem"
                :fetch-suggestions="querySearchAsync"
                :placeholder="$t(`add_school`)"
                :value="selectedItemName"
                class="w-full"
                :suggestions="suggestions"
              >
                <template slot="append" v-if="isExistText">
                  <div class="ic" @click="onClickRemoveSchool">
                    <img
                      src="../../../../assets/icon/icon-cancel.png"
                      width="20"
                    />
                  </div>
                </template>
              </el-autocomplete>
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
import functionValidate from "../../../../middleware/validate.js";
import BhBack from "../../../../components/bh-element-ui/button/bh-back";
import Footer from "../../../../components/layout/footer-home/footer";
import unorm from "unorm";
import { mapMutations } from "vuex";
export default {
  components: {
    BhBack,
    Footer,
  },
  name: "add-school-page",
  data() {
    return {
      selectedItem: this.$store.state.userModule.user_profile.profiles.school,
      selectedItemName: "",
      suggestions: this.$store.state.commonModule.nameSchools,
      nameTitle: "Register join Dating ",
    };
  },

  computed: {
    isExistText() {
      if (this.selectedItem !== "") {
        return true;
      }
      return false;
    },
  },

  watch: {
    selectedItem(value) {
      if (value) {
        // Fetch item name based on selectedItem value
        this.selectedItemName = this.suggestions.find(
          (item) => item.value === value
        );
        if (this.selectedItemName !== undefined) {
          this.selectedItemName = this.selectedItemName.value;
        }
        console.log("Test", this.selectedItemName);
      } else {
        this.selectedItemName = "";
      }
    },
  },

  methods: {
    ...mapMutations(["setSchool"]),

    bingString(val) {
      const stringName = functionValidate.titleCase(val);
      return stringName;
    },
    onBackSettingPhone() {
      this.setSchool(this.selectedItemName);
      this.$router.go(-1);
    },

    // querySearchAsync(queryString, cb) {
    //
    //   console.log(queryString);
    //   var searchPattern = queryString
    //     .toLowerCase()
    //     .normalize("NFD")
    //     .replace(/[\u0300-\u036f]/g, "");
    //   var regexPattern = new RegExp(searchPattern, "i");
    //   const items = this.suggestions.filter((item) => {
    //     var normalizedSchoolId = item.id
    //       .toLowerCase()
    //       .normalize("NFD")
    //       .replace(/[\u0300-\u036f]/g, "");
    //     var normalizedSchoolValue = item.value
    //       .toLowerCase()
    //       .normalize("NFD")
    //       .replace(/[\u0300-\u036f]/g, "");

    //     return (
    //       regexPattern.test(normalizedSchoolId) ||
    //       regexPattern.test(normalizedSchoolValue)
    //     );
    //   });
    //   console.log("item", items);
    //   cb(items);
    // },
    normalizeString(str) {
      return str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
    },

    querySearchAsync(queryString, cb) {
      console.log(queryString);

      const items = this.suggestions.filter((item) => {
        const searchPattern = unorm
          .nfkd(queryString)
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();

        const normalizedSchoolId = unorm
          .nfkd(item.id)
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();

        const normalizedSchoolValue = unorm
          .nfkd(item.value)
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();

        return (
          normalizedSchoolId.includes(searchPattern) ||
          normalizedSchoolValue.includes(searchPattern)
        );
      });
      cb(items);
    },

    onClickRemoveSchool() {
      this.selectedItem = "";
    },
  },
};
</script>

<style lang="css">
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
</style>
