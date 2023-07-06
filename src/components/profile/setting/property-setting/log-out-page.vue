<template>
  <div class="w-full h-full mb-6">
    <div class="w-full mt-6">
      <div
        @click="onLogout"
        class="w-full flex cursor-pointer form-set-input justify-center items-center bh-item-title bg-default"
      >
        {{ $t("log_out") }}
      </div>
    </div>

    <div class="w-full flex justify-center items-center form-set-item mt-10">
      <div>
        <img src="@/assets/icon/ic_icon_app.svg" style="width: 100%" />
        <div class="bh-describe">
          {{
            $t(`version_{environment}_{number}`, {
              environment: this.environment,
              number: this.numberVersion,
            })
          }}
        </div>
      </div>
    </div>

    <div class="w-full mt-6">
      <div
        @click="onDeleteAccount"
        class="w-full flex cursor-pointer form-set-input justify-center items-center bh-item-title bg-default"
      >
        {{ $t("delete_account") }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "log-out-page",

  data() {
    return {
      environment: "test",
      numberVersion: "01",
    };
  },

  methods: {
    ...mapActions(["deleteAccountUser"]),
    async onLogout() {
      debugger;
      this.$emit("onQuestionLogout", true);
    },

    async onDeleteAccount() {
      this.$emit("onQuestionDelete", true);
      await this.deleteAccountUser();
      localStorage.removeItem("oAuth2Id");
      localStorage.removeItem("tokenId");
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style></style>
