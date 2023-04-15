<template>
  <div class="w-full h-full relative setting-pages">
    <div class="height-setting p-3">
      <!-- package -->

      <slider-gold></slider-gold>

      <!-- avatar -->
      <div class="flex h-64 justify-center items-center">
        <div class="w-full h-full">
          <div class="w-full h-full image-profiles">
            <div>
              <el-progress
                type="dashboard"
                :percentage="percentage"
                :color="colors"
                :text-inside="true"
                :stroke-width="4"
              >
              </el-progress>
              <div class="flex justify-center relative bor-image">
                <div class="image-avatar" @click="onClickShowDetail()"></div>

                <div class="absolute bottom-0 complete">
                  {{ percentage + "%" }} complete
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center text-2xl text-white mt-3">
            {{ nameUser }}, {{ ageUser }}
            <img src="@/assets/icon/ic_verified_enable.svg" width="30" alt="" />
          </div>
        </div>
      </div>
      <!-- Option chose -->
      <div class="w-full option-setting flex items-center text-white">
        <div class="item-setting">
          <div class="flex justify-center" @click="onClickSettingDetail()">
            <img src="@/assets/icon/bt_settings.svg" width="100" alt="" />
          </div>
          <div class="mt-2 text-base">SETTINGS</div>
        </div>
        <div class="item-setting mt-24">
          <div class="flex justify-center" @click="onEditProfile()">
            <img src="@/assets/icon/bt_edit_profile.svg" width="100" alt="" />
          </div>
          <div class="mt-2 text-base">EDIT PROFILE</div>
        </div>
        <div class="item-setting">
          <div class="flex justify-center">
            <img src="@/assets/icon/bt_safety.svg" width="100" />
          </div>
          <div class="mt-2 text-base">SAFETY</div>
        </div>
      </div>
    </div>

    <!-- <div class="absolute top-0 left-0 form-pack">
      <FormPackages></FormPackages>
    </div> -->

    <div class="w-full">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from "../../../components/layout/footer-home/footer";
import functionValidate from "../../../middleware/validate.js";

// import FormPackages from "../../assets/packages/form-packages";
import SliderGold from "@/components/packages/common/slider-gold.vue";

export default {
  components: {
    Footer,
    SliderGold,
  },
  name: "default-page",

  data() {
    return {
      percentage: 80,
      colors: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 },
      ],
    };
  },

  computed: {
    nameUser() {
      return this.$store.state.userModule.user_profile.fullname;
    },

    ageUser() {
      const dob = this.$store.state.userModule.user_profile.dob;
      return this.bindingAge(dob);
    },
  },

  methods: {
    handleSlideClick(dataset) {
      console.log(dataset.index, dataset.name);
    },

    bindingAge(val) {
      const dataAge = functionValidate.calculatAge(val);
      return dataAge;
    },

    // Show Setting
    onClickSettingDetail() {
      this.$router.push({ path: "/setting" });
    },

    // Show Edit
    onEditProfile() {
      this.$router.push({ path: "/test-edit" });
    },

    onClickShowDetail() {
      this.$router.push({ path: "/admin" });
    },
  },

  created() {},
};
</script>

<style lang="css">
.setting-pages {
  background-color: #382e41;
}

.height-setting {
  height: 90%;
}

.gold-package {
  border-radius: 10px;
  height: 27%;
}
.image-profiles {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.border-avatar {
  width: 260px;
  height: 260px;
  overflow: hidden;
  padding: 10px;
  border: 5px solid #fa5c60;
  display: flex;
  justify-content: center;
  border-radius: 144px;
}

.option-setting {
  height: calc(100% - 80%);
  justify-content: center;
  align-items: center;
  text-align: center;
}

.image-avatar {
  background-image: url("@/assets/image-dating/0659_photo-1-163186806531842640671.jpg");
  background-position: center;
  background-size: cover;
  width: 184px;
  height: 184px;
  border-radius: 140px;
}

.complete {
  width: 70%;
  text-align: center;
  padding: 10px;
  background-color: #fa5c60;
  border-radius: 10px;
  color: #ffffff;
}

.gold-package {
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
}

.gold-package::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}

.dash-packages {
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.VueCarousel-pagination {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

.border-package {
  width: 100%;
  height: 200px;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
}

.VueCarousel-dot {
  padding: 5px !important;
  width: 8px !important;
  height: 8px !important;
}

/**/
.el-progress-circle {
  height: 250px !important;
  width: 225px !important;
}
.el-progress {
  position: absolute !important;
}
.bor-image {
  padding: 20px;
}
</style>
