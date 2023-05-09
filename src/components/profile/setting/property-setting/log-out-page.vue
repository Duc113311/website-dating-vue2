<template>
  <div class="w-full h-full mb-6">
    <div class="w-full mt-6">
      <div
        @click="onLogout"
        class="w-full flex cursor-pointer form-set-input justify-center items-center bh-item-title bg-default"
      >
        LOG OUT
      </div>
    </div>

    <div class="w-full flex justify-center items-center form-set-item mt-10">
      <div>
        <img src="@/assets/icon/ic_icon_app.svg" style="width: 100%" />
        <div class="bh-describe">Version x.y.z</div>
      </div>
    </div>

    <div class="w-full mt-6">
      <div
        @click="onDeleteAccount"
        class="w-full flex cursor-pointer form-set-input justify-center items-center bh-item-title bg-default"
      >
        DELETE ACCOUNT
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { auth, signOut } from "../../../../configs/firebase";
export default {
  name: "log-out-page",

  data() {
    return {};
  },

  methods: {
    ...mapActions(["deleteAccountUser"]),
    async onLogout() {
      await signOut(auth)
        .then(() => {
          debugger;
          // Sign-out successful.
          localStorage.removeItem("oAuth2Id");
          localStorage.removeItem("tokenId");
          this.$router.push({ path: "/" });
        })
        .catch((error) => {
          // An error happened.
        });
    },

    async onDeleteAccount() {
      await this.deleteAccountUser();
      localStorage.removeItem("oAuth2Id");
      localStorage.removeItem("tokenId");
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style></style>
