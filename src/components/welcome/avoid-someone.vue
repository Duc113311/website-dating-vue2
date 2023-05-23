<template>
  <div
    class="w-full h-full user-profile absolute top-0 bg-color-default p-8 left-0"
  >
    <div class="p-2">
      <div class="text-2xl w-full h-10 flex items-center">
        <i class="fas fa-times" @click="onCloseDialog()"></i>
      </div>
      <div class="pt-5 pb-5">
        <div class="flex justify-center">
          <img src="@/assets/icon/art_avoid.svg" width="250" height="250" />
        </div>
      </div>

      <div
        class="flex w-full justify-center items-center text-center padding-describe-or"
      >
        {{ $t("want_to_avoid_someone_you_know_on_heartlink?") }}
      </div>

      <div class="padding-describe w-full text-center describe-text">
        <div class="mt-2">
          {{
            $t(
              "it_is_easy_-_share_your_device's_contact_with_heartlink_when_using_this_feature_to_pick_who_you_want_to_avoid"
            )
          }}
        </div>
        <br />

        <div class="mt-2">
          {{
            $t(
              "we'll_store_your_blocked_contact_to_stop_you_from_seeing_each_other_if_your_contact_has_an_account_with_the_same_infor_you_provide._you_can_stop_sharing_with_us_in_your_settings."
            )
          }}
        </div>
        <br />
        <div class="mt-4 underline">
          <a class="" href="#">
            {{
              $t(
                "learn_more_here,_including_how_heartlink_process_your_contacts"
              )
            }}
          </a>
        </div>
      </div>

      <div class="w-full absolute bottom-0 left-0 pb-16">
        <BhComfirm
          :nameTitle="nameTitle"
          @onChangeComfirm="onChangeComfirm"
        ></BhComfirm>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import BhComfirm from "../bh-element-ui/button/bh-comfirm";
export default {
  components: {
    BhComfirm,
  },
  name: "avoid-someone",

  data() {
    return {
      nameTitle: "Continue",
    };
  },

  computed: {},

  async created() {
    const userProfile = this.$store.state.userModule.user_profile;

    const userParam = {
      oAuth2Id: userProfile.oAuth2Id,
      fullname: userProfile.fullname,
      dob: userProfile.dob,
      gender: userProfile.profiles.gender,
      address: userProfile.profiles.address,
      location: userProfile.location,
      genderFilter: userProfile.settings.genderFilter,
      university: userProfile.profiles.university,
      avatars: userProfile.profiles.avatars,
      orientationSexuals: userProfile.profiles.orientationSexuals,
      interests: userProfile.profiles.interests,
      showGender: userProfile.profiles.showGender,
      showSexual: userProfile.profiles.showSexual,
      school: "",
    };
    console.log(userParam);

    await this.registerUserByAuthId(userParam);
  },

  mounted() {},

  methods: {
    ...mapActions([
      "getAllListUserProfile",
      "registerUserByAuthId",
      "loginAppByAuthId",
      "getListCardForUser",
    ]),
    onCloseDialog() {
      this.$router.push({ path: "/home" });

      this.$emit("onHideWellcome", false);
    },

    onShowDialogQuit(value) {
      this.isShowQuitSing = value;
    },

    onCancelQuit() {
      this.isShowQuitSing = false;
    },

    async onChangeComfirm(val) {
      console.log(val);
      // await this.getListCardForUser();
      this.$router.push({ path: "/home" });
    },
  },
};
</script>

<style lang="css">
.text-color {
  color: #737b91;
}
</style>
