<template>
  <div class="w-full h-full">
    <div class="items-center h-full">
      <div
        v-show="isShowUp"
        class="flex justify-center items-center w-full h-full"
      >
        <div class="text-center w-full el-location">
          <div class="flex justify-center items-center">
            <img
              src="@/assets/icon/art_location.svg"
              width="250"
              height="250"
              alt=""
              srcset=""
            />
          </div>
          <div class="">
            <div class="padding-title-location">
              {{ $t("enable_location") }}
            </div>
          </div>
          <div class="flex justify-center items-center w-full">
            <div class="padding-describe w-4/5 describe-text">
              {{
                $t(
                  "you_will_need_to_enable_your_location_order_to_use_heartLinks"
                )
              }}
            </div>
          </div>
        </div>
      </div>
      <div class="absolute w-full dow-location show-action-location">
        <div
          v-show="isShowDow"
          class="w-full justify-center flex items-center mb-10"
          @click="onTellMoreUp()"
        >
          <i class="fa-solid fa-angle-up text-2xl"></i>
        </div>
        <BhLocation @onShowAvoid="onShowAvoid"></BhLocation>
        <div
          v-show="isShowUp"
          class="w-full text-base mt-5 angle-down pl-10 pr-10 flex justify-center items-center"
          @click="onTellMore()"
        >
          <span class="padding-describe-or">{{ $t("tell_me_more") }}</span>
          <i
            class="text-2xl ml-3 fas fa-angle-down cursor-pointer"
            @click="onAngleDown()"
          ></i>
        </div>
      </div>

      <div v-show="isShowDow" class="meet-people h-full mt-20">
        <div class="flex items-center h-full">
          <div class="text-center">
            <div class="flex justify-center items-center">
              <img
                src="@/assets/icon/art_meet_people.svg"
                width="250"
                height="250"
                alt=""
                srcset=""
              />
            </div>
            <div class="mt-10">
              <div class="padding-title-location">
                {{ $t("meet_people_nearby") }}
              </div>
            </div>
            <div class="w-full flex justify-center items-center">
              <div class="padding-describe w-4/5 describe-text">
                {{
                  $t(
                    "you_location_will_be_used_to_show_potential_matches_near_you."
                  )
                }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <AvoidSomeone
      v-if="isShowAvoid"
      @onHideWellcome="onHideWellcome"
    ></AvoidSomeone> -->
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import BhLocation from "../../bh-element-ui/button/bh-location";
// import AvoidSomeone from "../../welcome/avoid-someone";
export default {
  components: {
    BhLocation,
    // AvoidSomeone,
  },
  name: "my-location",

  setup() {
    return {};
  },

  data() {
    return {
      txtFirstName: "",
      isShowMeet: false,
      isShowAvoid: false,

      isShowUp: true,
      isShowDow: false,
    };
  },

  computed: {},

  methods: {
    ...mapMutations(["setAddressLocation"]),
    ...mapActions(["registerUserByAuthId"]),
    async onShowAvoid(value) {
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

      await this.$router.push({ path: "/home" }).catch(() => {});
    },
    async onHideWellcome(val) {
      this.$router.push({ path: "/home" });
      this.isShowAvoid = val;
    },

    onTellMore() {
      const actionLocation = document.getElementsByClassName(
        "show-action-location"
      );

      actionLocation[0].classList.add("up-location");
      actionLocation[0].classList.remove("dow-location");

      (this.isShowUp = false), (this.isShowDow = true);
    },

    onTellMoreUp() {
      const actionLocation = document.getElementsByClassName(
        "show-action-location"
      );

      actionLocation[0].classList.add("dow-location");
      actionLocation[0].classList.remove("up-location");

      (this.isShowUp = true), (this.isShowDow = false);
    },

    onAngleUp() {
      this.isShowMeet = false;
      if (document.getElementsByClassName("meet-people")[0]) {
        document.getElementsByClassName("meet-people")[0].style.display =
          "block";
      }
    },

    /**
     * Get address location
     * @param {*} latitude
     * @param {*} longitude
     */
    getAddressFromLatLng(latitude, longitude) {
      const apiKey = "AIzaSyDFbBi1PfGyE6mHCcjuLzuZk93LkPCX6Mg";
      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.results.length > 0) {
            this.address = data.results[0].formatted_address;
            debugger;
            this.setAddressLocation(this.address ? this.address : "");
          } else {
            this.address = "No address found";
          }
        })
        .catch((error) => console.log(error));
    },
  },

  async mounted() {
    const latitude = localStorage.latitude;
    const longitude = localStorage.longitude;

    if (document.getElementsByClassName("angle-up")[0]) {
      document.getElementsByClassName("angle-up")[0].style.display = "none";
    }
    await this.getAddressFromLatLng(latitude, longitude);
  },
};
</script>

<style lang="css">
.gd-location {
  display: grid;
  grid-template-rows: 8fr 1fr;
  overflow: hidden;
}

.dow-location {
  bottom: 0;
  left: 0;
  padding-bottom: 16px;
}

.up-location {
  top: 0;
  right: 0;
  padding-top: 16px;
}
</style>
