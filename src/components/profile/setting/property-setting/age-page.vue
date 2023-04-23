<template>
  <div class="w-full mt-6">
    <div class="form-set-list bg-default">
      <div class="w-full flex justify-between">
        <div class="bh-title title-item form-set-item">AGE RANGE</div>
        <div class="bh-describe">{{ showAgeMin }} - {{ showAgeMax }}</div>
      </div>

      <div class="w-full">
        <el-slider
          v-model="valueAge"
          range
          :show-input-controls="true"
          :max="50"
          @change="onChangeAgeRange()"
        >
        </el-slider>
      </div>
      <div class="flex justify-between w-full">
        <div class="bh-item-title title-item">
          Only show people in this range
        </div>
        <div>
          <el-switch
            v-model="valueAgePreference"
            active-color="#FB5D65"
            inactive-color="#5F6A86"
            @change="onChangeAgePreference()"
          >
          </el-switch>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "age-page",

  data() {
    return {
      valueAge: [
        this.$store.state.userModule.user_profile.settings.agePreference.min,
        this.$store.state.userModule.user_profile.settings.agePreference.max,
      ],
    };
  },

  computed: {
    ...mapGetters({ nameAgePreference: "showAgePreference" }),
    showAgeMin() {
      return this.valueAge[0];
    },

    showAgeMax() {
      return this.valueAge[1];
    },

    valueAgePreference: {
      get() {
        const peopleDistance = this.nameAgePreference;

        return peopleDistance;
      },
      set(newName) {
        debugger;
        return newName;
      },
    },
  },

  methods: {
    ...mapMutations(["setValueAgeRange", "setAgePreference"]),
    onChangeAgeRange() {
      debugger;
      this.setValueAgeRange(this.valueAge);
    },

    onChangeAgePreference() {
      debugger;
      const preference =
        this.$store.state.userModule.user_profile.settings.agePreference
          .onlyShowInThis;
      if (preference) {
        this.setAgePreference(false);
      } else {
        this.setAgePreference(true);
      }
    },
  },
};
</script>

<style css scoped></style>
