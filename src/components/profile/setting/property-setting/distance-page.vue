<template>
  <div class="w-full mt-6">
    <div class="form-set-list bg-default">
      <div class="w-full flex justify-between items-center">
        <div class="bh-title title-item form-set-item">MAXIMUM DISTANCE</div>
        <div class="bh-describe">{{ valueDistance }}km</div>
      </div>

      <div>
        <el-slider
          v-model="valueDistance"
          @change="onChangeDistance()"
        ></el-slider>
      </div>
      <div class="flex justify-between w-full mt-2">
        <div class="bh-item-title title-item">
          Only show people in this range
        </div>
        <div>
          <el-switch
            v-model="valuePeopleDistance"
            active-color="#FB5D65"
            inactive-color="#5F6A86"
            @change="onChangePeopleDistance()"
          >
          </el-switch>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "distance-page",

  data() {
    return {
      valueDistance:
        this.$store.state.userModule.user_profile.settings.distancePreference
          .range,
      valuePeopleDistance: "",
    };
  },

  methods: {
    ...mapMutations(["setValueDistance", "setPeopleDistance"]),

    onChangeDistance() {
      debugger;
      this.setValueDistance(this.valueDistance);
    },

    onChangePeopleDistance() {
      debugger;
      const distance =
        this.$store.state.userModule.user_profile.settings.distancePreference
          .onlyShowInThis;
      if (distance) {
        this.setPeopleDistance(false);
      } else {
        this.setPeopleDistance(true);
      }
    },
  },
};
</script>

<style css scoped></style>
