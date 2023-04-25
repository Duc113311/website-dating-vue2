<template>
  <div class="w-full flex items-center">
    <div class="w-full">
      <div class="w-full flex justify-between bh-title p-3">
        <div>GENDER</div>
      </div>
      <div class="w-full flex items-center">
        <div class="w-full style-bg-common bg-default">
          <div
            class="flex justify-between w-full bd-input pb-3 pt-3"
            @click="onChangeGender(`men`)"
          >
            <div class="bh-item-title">Men</div>
            <div v-if="showGenderUser === `men`">
              <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
            </div>
          </div>

          <div
            class="flex justify-between w-full pb-3 pt-3"
            @click="onChangeGender(`women`)"
          >
            <div class="bh-item-title">Women</div>
            <div v-if="showGenderUser === 'women'">
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
