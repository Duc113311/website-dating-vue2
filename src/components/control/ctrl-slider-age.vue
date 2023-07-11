<template>
  <div class="w-full">
    <div class="w-full flex justify-between items-center">
      <div class="bh-title">
        {{ $t("age_range") }}
      </div>
      <div class="bh-describe">{{ showAgeMin }} - {{ showAgeMax }}</div>
    </div>

    <div class="w-full">
      <vue-slider
        v-model="valueAge"
        :enable-cross="false"
        :max="50"
        :min="18"
        @change="onChangeAgeRange()"
        :process-style="{ backgroundColor: '#fd5d65 ' }"
        :tooltip-style="{
          backgroundColor: 'black',
          borderColor: 'black',
        }"
        dotSize="21"
      >
        <template v-slot:dot> <div class="custom-dot"></div> </template
      ></vue-slider>
    </div>
    <div class="flex justify-between w-full mt-5">
      <div class="bh-item-title">
        {{ $t("only_show_people_in_this_range") }}
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
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "ctrl-slider-age",
  components: {
    VueSlider,
  },
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
        return newName;
      },
    },
  },

  methods: {
    ...mapMutations(["setValueAgeRange", "setAgePreference"]),
    onChangeAgeRange() {
      this.setValueAgeRange(this.valueAge);
    },

    onChangeAgePreference() {
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

<style lang="css" scoped>
.custom-dot {
  cursor: pointer;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: #fb5d65;
  box-sizing: border-box;
  transition: transform 0.4s ease;
}
.custom-dot:hover {
  transform: scale(1.2);
}

.vue-slider-ltr {
  height: 3px !important;
}
</style>
