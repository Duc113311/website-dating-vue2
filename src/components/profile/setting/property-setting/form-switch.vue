<template>
  <div class="w-full flex items-center mt-6">
    <div class="w-full">
      <div class="w-full flex items-center form-set-list">
        <div class="w-full style-bg-common">
          <div class="flex justify-between w-full">
            <div class="w-full">
              <div
                class="form-set-item bh-item-title title-item flex justify-between items-center"
              >
                <div class="">{{ titleComponent }}</div>
                <div>
                  <el-switch
                    v-model="valueSwitchComponent"
                    active-color="#FB5D65"
                    inactive-color="#5F6A86"
                    @change="onChangeShowTopPicks()"
                  >
                  </el-switch>
                </div>
              </div>
              <div class="form-set-item bh-describe">
                {{ describeComponent }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "form-switch",

  props: ["objectQAEvent"],
  data() {
    return {};
  },

  computed: {
    valueSwitchComponent() {
      return this.objectQAEvent.valueSwitch;
    },
    titleComponent() {
      return this.objectQAEvent.titleName;
    },
    describeComponent() {
      return this.objectQAEvent.describeName;
    },
  },

  methods: {
    onChangeShowTopPicks() {
      debugger;
      this.$emit("onChangeComponent", true);
    },
  },
};
</script>

<style css scoped></style>
