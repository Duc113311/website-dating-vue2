<template>
  <div class="w-full flex items-center">
    <div class="w-full">
      <div class="w-full flex justify-between bh-title p-3">
        <div>{{ $t("gender") }}</div>
      </div>
      <div class="w-full flex items-center">
        <div class="w-full style-bg-common bg-default">
          <div
            class="flex justify-between w-full pb-3 pt-3"
            :class="border - bottom"
            v-for="(item, index) in listGenderUser"
            :key="index"
            @click="onChangeGender(item.code)"
          >
            <div class="bh-item-title">{{ item.value }}</div>
            <div v-if="showGenderUser === item.code">
              <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "gender-page",

  data() {
    return {};
  },

  computed: {
    showGenderUser() {
      const gender = this.$store.state.userModule.user_profile?.profiles.gender;

      return gender;
    },

    listGenderUser() {
      return this.$store.state.commonModule.listLifeStyleSingle.genders;
    },
  },

  methods: {
    ...mapMutations(["setGender"]),
    /**
     *
     * @param {*} val
     */
    onChangeGender(val) {
      this.setGender(val);
    },
  },
};
</script>

<style lang="css"></style>
