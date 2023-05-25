<template>
  <div class="w-full h-full user-profile z-30">
    <div class="padding-title mt-6">{{ $t("what's_your_email?") }}</div>

    <div class="padding-describe describe-text">
      {{ $t("don't_lose_access_to_your_account,_verify_your_email") }}
    </div>

    <div class="mt-3">
      <el-input
        class="your-name digit-box padding-input bg-default"
        v-model="txtEmail"
        :placeholder="$t(`enter_email`)"
        ref="input_focus"
        @input="onChangeInput"
      />
    </div>
    <div class="mt-5">
      <BhContinue
        :isActives="isActives"
        @onChangeContinue="onChangeContinue"
      ></BhContinue>
    </div>
    <div class="flex justify-center padding-describe-or">OR</div>
    <div class="flex mt-5 justify-center">
      <button
        class="btn-Sign cursor-pointer border-login w-button padding-button"
        @click="onLoginGoogle()"
      >
        <span class="flex justify-center">
          <img src="@/assets/icon/google_icon.svg" class="mr-2" alt="" />
          <span class="font-sans">{{ $t("log_in_with_google") }}</span>
        </span>
      </button>
    </div>

    <div class="flex justify-center padding-describe mt-5 describe-text">
      {{ $t("verify_instantly_by_connecting_your_google_account") }}
    </div>

    <div class="text-base flex items-center w-full mt-4">
      <div class="flex justify-center items-center">
        <div class="check-active not-check" @click="onClickChosse(true)">
          <div class="bg-white flex justify-center bg-checked">
            <i class="fa-solid fa-circle-check w-8 h-8"></i>
          </div>
        </div>
        <div class="not-check-active checked" @click="onClickChosse(false)">
          <div class="flex justify-center">
            <i class="fa-regular fa-circle w-8 h-8"></i>
          </div>
        </div>
      </div>
      <span class="ml-4">{{
        $t("i_want_to_receive_news,_updates_and_offers_from_heartLink")
      }}</span>
    </div>
  </div>
</template>

<script>
import BhContinue from "../../bh-element-ui/button/bh-continue";
import validate from "@/middleware/validate";
import { mapMutations } from "vuex";

export default {
  components: {
    BhContinue,
  },
  name: "dialog-your-email",

  data() {
    return {
      centerDialogVisible: false,
      txtEmail: "",
      isResultValidate: false,
      btEmail: "btContinueId",
      isActives: false,
    };
  },

  computed: {},

  methods: {
    ...mapMutations(["setEmailForUser"]),

    onChangeInput() {
      this.isResultValidate = validate.validateEmail(this.txtEmail);
      if (this.isResultValidate) {
        // Xét giá trị email

        this.isActives = true;
      }
    },

    onClickChosse(val) {
      const checkActive = document.getElementsByClassName("check-active");
      const notCheckActive =
        document.getElementsByClassName("not-check-active");

      if (val) {
        checkActive[0].classList.remove("checked");
        notCheckActive[0].classList.remove("not-check");
        checkActive[0].classList.add("not-check");
        notCheckActive[0].classList.add("checked");
      } else {
        checkActive[0].classList.add("checked");
        notCheckActive[0].classList.add("not-check");
        checkActive[0].classList.remove("not-check");
        notCheckActive[0].classList.remove("checked");
      }
    },

    onChangeContinue(value) {
      console.log(value);
      this.setEmailForUser(this.txtEmail);
      this.$emit("onShowWelcome", value);
    },
  },
  mounted() {
    this.$refs.input_focus.$refs.input.focus();
  },
};
</script>

<style lang="css">
.text-color {
  color: #737b91;
}

.el-input__wrapper {
  background-color: #495063;
  padding: 10px;
  border: 1px solid #495063;
}

.your-email {
  color: white !important;
  background-color: #495063;
}
</style>
