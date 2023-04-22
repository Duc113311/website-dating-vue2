<template>
  <div class="w-full mt-6">
    <div class="form-set-list">
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
export default {
  name: "age-page",

  data() {
    return {
      showAgeMin: 10,
      showAgeMax: 40,
      valueAge: "",
      valueAgePreference: "",
    };
  },

  methods: {
    onChangeAgeRange() {
      debugger;
    },

    onChangeAgePreference() {
      debugger;
    },
  },
};
</script>

<style css scoped></style>
