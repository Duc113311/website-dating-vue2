<template>
  <div class="w-full">
    <div class="form-set-list bg-default">
      <div class="w-full flex justify-between items-center">
        <div class="bh-title title-item form-set-item">
          {{ $t("maximum_distance") }}
        </div>
        <div class="bh-describe">{{ valueDistance }} {{ kiloValue }}</div>
      </div>

      <div>
        <el-slider
          v-model="valueDistance"
          @change="onChangeDistance()"
        ></el-slider>
      </div>
      <div class="flex justify-between w-full mt-2">
        <div class="bh-item-title title-item">
          {{ $t("only_show_people_in_this_range") }}
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

  computed: {
    kiloValue() {
      debugger;
      return this.$store.state.userModule.user_profile.settings
        .distancePreference.unit;
    },
  },

  methods: {
    ...mapMutations(["setValueDistance", "setPeopleDistance"]),

    onChangeDistance() {
      this.setValueDistance(this.valueDistance);
    },

    onChangePeopleDistance() {
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
