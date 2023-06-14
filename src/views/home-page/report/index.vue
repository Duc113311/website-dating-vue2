<template>
  <!--  -->
  <div class="w-full h-full title-default">
    <div class="header-report w-full flex justify-between items-center p-5">
      <BhBack @onBackComponent="onBackComponent"></BhBack>
      <div @click="onCancel">Hủy</div>
    </div>
    <div class="w-full flex justify-center items-center">
      <img src="@/assets/icon/ic_safety (1).svg" width="50" alt="" />
    </div>

    <div class="w-full p-5">
      <div
        class="w-full text-center flex items-center justify-center title-click-ic"
      >
        {{ titleReport }}
      </div>
      <div
        class="w-full flex style-form-single bg-default mt-10"
        v-if="this.screamReason !== 3"
      >
        <div
          class="flex justify-between w-full cursor-pointer"
          @click="onShowModal()"
        >
          <div class="bh-item-title">{{ nameReport }}</div>
          <div class="">
            <i class="fa-solid fa-chevron-down"></i>
          </div>
        </div>
      </div>

      <div class="w-full flex mt-10" v-if="this.screamReason === 3">
        <div class="w-full">
          <div class="w-full">Add a comment</div>
          <div class="w-full mt-2">
            <el-input
              type="textarea"
              :rows="2"
              class="h-10"
              placeholder="Vui lòng cung cấp thêm chi tiết về những gì bạn đang báo cáo"
              v-model="nameComment"
              @input="onChangeComment"
            >
            </el-input>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full absolute bottom-0 left-0 p-10 text-center">
      <div class="describe-report mb-2">
        We won't let Puddink know that you reported them
      </div>
      <div>
        <bh-continue
          @onChangeContinue="onChangeContinue"
          :isActives="isActives"
        ></bh-continue>
      </div>
    </div>

    <FormReportOption
      @onHideReport="onHideReport"
      :screamForm="screamReason"
      :listNameReport="listDataChoses"
      @onStatusActive="onStatusActive"
      v-if="isShowModal"
    ></FormReportOption>

    <BhQuestion
      @onHidePopupPackage="onHidePopupPackage"
      @onActionApplyQuestion="onActionApplyQuestion"
      v-show="isShowFormQuestion"
      :titleQuestion="titleQuestion"
      :describeQuestion="describeQuestion"
    ></BhQuestion>
    <!--  -->
  </div>
</template>

<script>
import BhQuestion from "../../../components/bh-element-ui/notification/bh-question";
import BhBack from "../../../components/bh-element-ui/button/bh-back";
import FormReportOption from "../../../components/home/modal-report/form-report-option";
import bhContinue from "@/components/bh-element-ui/button/bh-continue.vue";
import { mapActions, mapMutations } from "vuex";
export default {
  components: {
    BhQuestion,
    BhBack,
    FormReportOption,
    bhContinue,
  },
  name: "report-page",

  data() {
    return {
      nameTitle: "TIẾP THEO",
      isShowModal: false,
      nameTitleSend: "Send",
      isActives: false,
      isShowFormQuestion: false,
      titleQuestion: this.$t("are_you_sure?"),
      describeQuestion: this.$t(
        "are_you_sure_about_the_content_of_this_report?"
      ),
      listDataChoses: [],

      titleReason: this.$t("what_is_the_reason_for_your_report?"),
      titleDetail: this.$t("can_you_tell_us_what_happened?"),
      titleComment: this.$t("would_you_mind_sharing_more_details_with_us?"),

      screamReason: 1,
      nameComment: "",
    };
  },

  computed: {
    listDataChoses1() {
      return this.$store.state.homeModule.listReasons;
    },
    nameReport() {
      const nameValue = this.$store.state.homeModule;

      if (this.screamReason === 1) {
        return Object.keys(nameValue.valueReason).length !== 0
          ? nameValue.valueReason.value
          : this.$t("please_choose_1_reason");
      }
      if (this.screamReason === 2) {
        return Object.keys(nameValue.valueDetail).length !== 0
          ? nameValue.valueDetail.value
          : this.$t("please_choose_1_reason");
      }
      if (this.screamReason === 3) {
        return nameValue.valueComment.length !== 0
          ? nameValue.valueComment
          : this.$t("please_provide_more_details_about_what_you_are_reporting");
      }
      return this.$t("please_choose_1_reason");
    },

    titleReport() {
      const nameValue = this.$store.state.homeModule;

      if (this.screamReason === 1) {
        return this.titleReason;
      }
      if (this.screamReason === 2) {
        return this.titleDetail;
      }
      if (this.screamReason === 3) {
        return this.titleComment;
      }
      return this.titleReason;
    },
  },

  methods: {
    ...mapMutations([
      "setOptionReport",
      "setNameDetailsReport",
      "setReasonReport",
      "setListReasonReportUser",
      "setIsValueReport",
    ]),

    ...mapActions(["postReasonReportUser"]),
    onStatusActive(val) {
      this.isActives = val;
    },
    onHideModal() {
      this.isShowModal = false;
    },

    onShowModal() {
      setTimeout(() => {
        this.isShowModal = true;
      }, 100);
    },

    onHideReport() {
      setTimeout(() => {
        this.isShowModal = false;
      }, 100);
    },

    onChangeContinue() {
      const nameValue = this.$store.state.homeModule;
      if (this.screamReason < 3) {
        this.screamReason = this.screamReason + 1;
        if (this.screamReason === 2) {
          if (Object.keys(nameValue.valueDetail).length !== 0) {
            this.isActives = true;
          } else {
            this.isActives = false;
          }

          const codeId = nameValue.valueReason.code;
          const listDetails = nameValue.listReasonReports;
          const findData = listDetails.find((x) => x._id === codeId);

          let resultData = [];
          if (findData) {
            for (let index = 0; index < findData.details.length; index++) {
              const element = findData.details[index];

              resultData.push({ code: index, value: element });
            }
          }
          this.listDataChoses = resultData;
        }

        if (this.screamReason === 3) {
          if (this.nameComment.length !== 0) {
            this.isActives = true;
          } else {
            this.isActives = false;
          }
        }
      } else {
        this.isShowFormQuestion = true;
      }
    },

    onActionApplyQuestion(val) {
      this.isShowFormQuestion = val;

      this.onClickSendReport();
    },

    onHidePopupPackage(val) {
      this.isShowFormQuestion = val;
    },

    onBackComponent() {
      const nameValue = this.$store.state.homeModule;
      this.screamReason = this.screamReason - 1;
      if (this.screamReason !== 0) {
        if (this.screamReason === 1) {
          this.listDataChoses = this.listDataChoses1;
        }
        if (this.screamReason === 2) {
          const codeId = nameValue.valueReason.code;
          const listDetails = nameValue.listReasonReports;
          const findData = listDetails.find((x) => x._id === codeId);

          let resultData = [];
          if (findData) {
            for (let index = 0; index < findData.details.length; index++) {
              const element = findData.details[index];

              resultData.push({ code: index, value: element });
            }
          }
          this.listDataChoses = resultData;
        }
        if (this.screamReason === 3) {
          this.listDataChoses = this.listDataChoses2;
        }
      } else {
        this.setListReasonReportUser([]);
        this.setReasonReport({});
        this.setNameDetailsReport({});
        this.$router.go(-1);
      }
    },

    async onClickSendReport() {
      const nameValue = this.$store.state.homeModule;

      const objectSave = {
        userId: this.$route.params.userId,
        reasonId: nameValue.valueReason.code,
        reasonDetail: nameValue.valueDetail.value,
        comments: this.nameComment,
      };
      await this.postReasonReportUser(objectSave);
      this.$notify({
        title: "Success",
        message: "Report success ",
        type: "success",
      });
      this.setListReasonReportUser([]);
      this.setReasonReport({});
      this.setNameDetailsReport({});
      this.$router.go(-1);
      this.setIsValueReport(true);
    },

    onCancel() {
      this.$router.go(-1);
      this.setNameDetailsReport({});
      this.setReasonReport({});
    },

    onChangeComment() {
      if (this.nameComment.length !== 0) {
        this.isActives = true;
      } else {
        this.isActives = false;
      }
    },
  },

  mounted() {
    this.listDataChoses = this.$store.state.homeModule.listReasons;
  },
};
</script>

<style lang="scss">
.w-header-checked {
  border-bottom: 1px solid #000000;
  height: 50px;
}

.form-report {
  animation-name: slide-up;
  animation-duration: 0.5s;
}

@keyframes slide-up {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}

.el-textarea__inner {
  min-height: 140px !important;
  height: 134px !important;
  border-radius: 10px !important;
  font-size: 17px !important;
  padding: 10px !important;
  color: #ffffff !important;
}
</style>
