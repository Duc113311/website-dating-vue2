<template>
  <div class="w-full">
    <div class="w-full flex justify-center items-center">
      <div class="w-full">
        <div class="w-full style-switch form-set-input flex justify-between">
          <div class="name bh-item-title title-item">Global</div>

          <div class="mr-3">
            <el-switch
              v-model="valueGlobal"
              active-color="#FB5D65"
              inactive-color="#5F6A86"
              @change="onChangeGlobal()"
            >
            </el-switch>
          </div>
        </div>
        <div class="w-full p-3 bh-describe">
          You can meet people nearby and from around the world
        </div>
      </div>
    </div>

    <div v-show="valueGlobal" class="w-full form-set-list">
      <div class="w-full bh-title title-item form-set-item">
        PREFERRED LANGUAGES
      </div>
      <div class="w-full">
        <div>
          <div
            class="w-full form-set-item bd-input title-input-item bh-item-title"
          >
            English
          </div>
          <div
            class="w-full form-set-item bd-input title-input-item bh-item-title"
          >
            Vietnamese
          </div>
        </div>
        <div>
          <div class="bh-text-location form-set-item w-full">
            Add language...
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "global-page",

  data() {
    return {
      valueGlobal: true,
    };
  },

  methods: {
    onChangeGlobal() {
      debugger;
    },
  },
};
</script>

<style css scoped></style>
