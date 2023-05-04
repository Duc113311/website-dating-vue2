<template>
  <!--  -->
  <div class="w-full h-full title-default">
    <div class="header-report w-full flex justify-between items-center p-5">
      <BhBack @onBackComponent="onBackComponent"></BhBack>
      <div>Hủy</div>
    </div>
    <div class="w-full flex justify-center items-center">
      <img src="@/assets/icon/ic_safety (1).svg" width="50" alt="" />
    </div>

    <div class="w-full p-5">
      <div
        class="w-full text-center flex items-center justify-center title-click-ic"
      >
        Lý do báo cáo của bạn là gì?
      </div>
      <div
        class="w-full flex style-form bg-default mt-10"
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
            >
            </el-input>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full absolute bottom-0 left-0 p-10 text-center">
      <div class="describe-report mb-2">
        Chúng tôi sẽ không cho Puddink biết rằng bạn đã báo cáo họ
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
      v-if="isShowModal"
    ></FormReportOption>
    <!--  -->
  </div>
</template>

<script>
import BhBack from "../../../components/bh-element-ui/button/bh-back";
import FormReportOption from "../../../components/home/modal-report/form-report-option";
import bhContinue from "@/components/bh-element-ui/button/bh-continue.vue";
import { mapMutations } from "vuex";
export default {
  components: {
    BhBack,
    FormReportOption,
    bhContinue,
  },
  name: "report-page",

  data() {
    return {
      nameTitle: "TIẾP THEO",
      isShowModal: false,
      isActives: true,
      listDataChoses1: [
        {
          code: 1,
          value: "Có liên quan tới người 18 tuổi",
        },
        {
          code: 2,
          value: "Có ảnh khỏa thân hoặc nội dung nhạy cảm",
        },
        {
          code: 3,
          value: "Có liên quan tới người 18 tuổi",
        },
        {
          code: 4,
          value: "Có liên quan tới người 18 tuổi",
        },
        {
          code: 4,
          value: "Có liên quan tới người 18 tuổi",
        },
      ],

      listDataChoses2: [
        {
          code: 1,
          value: "Ở trong tin nhắn người này gửi tôi",
        },
        {
          code: 2,
          value: "Có thứ gì đó trong hình ảnh or video",
        },
        {
          code: 3,
          value: "Có liên quan tới người 18 tuổi",
        },
        {
          code: 4,
          value: "Có liên quan tới người 18 tuổi",
        },
        {
          code: 4,
          value: "Có liên quan tới người 18 tuổi",
        },
      ],

      listDataChoses: [],

      titleReason: "Lý do báo cáo của bạn là gì?",
      titleDetail: "Bạn có thể cho chúng tôi biết chuyện gì đã xảy ra",
      titleComment:
        "Bạn có phiền khi chia sẻ thêm chi tiết với chúng tôi không",

      screamReason: 1,
      nameComment: "",
    };
  },

  computed: {
    nameReport() {
      const nameValue = this.$store.state.commonModule;
      debugger;
      if (this.screamReason === 1) {
        return nameValue.valueReason.value.length !== 0
          ? nameValue.valueReason.value
          : "Vui lòng chọn 1 lý do";
      }
      if (this.screamReason === 2) {
        return nameValue.valueDetail.value.length !== 0
          ? nameValue.valueDetail.value
          : "Vui lòng chọn 1 ";
      }
      if (this.screamReason === 3) {
        return nameValue.valueComment.length !== 0
          ? nameValue.valueComment
          : "vui lòng cung cấp thêm chi tiết về những gì bạn đang báo cáo";
      }
      return "Vui lòng chọn 1 lý do";
    },
  },

  methods: {
    ...mapMutations(["setOptionReport"]),
    onHideModal() {
      this.isShowModal = false;
    },

    onShowModal() {
      this.isShowModal = true;
    },

    onHideReport() {
      debugger;
      setTimeout(() => {
        this.isShowModal = false;
      }, 50);
    },

    onChangeContinue() {
      debugger;
      this.screamReason = this.screamReason + 1;
      if (this.screamReason === 2) {
        this.listDataChoses = this.listDataChoses2;
      }
      if (this.screamReason === 3) {
        this.listDataChoses = this.listDataChoses2;
      }
    },

    onBackComponent() {
      this.screamReason = this.screamReason - 1;
      if (this.screamReason === 1) {
        this.listDataChoses = this.listDataChoses1;
      }
      if (this.screamReason === 2) {
        this.listDataChoses = this.listDataChoses2;
      }
      if (this.screamReason === 3) {
        this.listDataChoses = this.listDataChoses2;
      }
    },
  },

  mounted() {
    this.listDataChoses = this.listDataChoses1;
  },
};
</script>

<style lang="scss">
.style-form {
  height: 50px;

  align-items: center;
  padding: 10px;
  border-radius: 10px;
}

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
