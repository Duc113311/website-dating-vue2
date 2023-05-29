<template>
  <div class="w-full flex items-center">
    <div class="w-full">
      <div class="w-full flex justify-between bh-title p-3">
        <div>{{ $t("school") }}</div>
        <div v-if="completeSchool">+4%</div>
      </div>
      <div
        class="w-full flex style-form-single bg-default"
        @click="onChoseSchool()"
      >
        <div class="flex justify-between w-full">
          <div class="bh-item-title">{{ nameSchoolParam }}</div>
          <div class="">
            <bh-chevron></bh-chevron>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bhChevron from "@/components/bh-element-ui/button/bh-chevron.vue";
export default {
  components: { bhChevron },
  name: "school-page",
  data() {
    return {
      nameSchool: this.$store.state.userModule.user_profile?.profiles?.school
        ? this.$store.state.userModule.user_profile?.profiles?.school
        : this.$t("add_school"),
    };
  },

  computed: {
    nameSchoolParam: {
      get() {
        const schoolData =
          this.$store.state.userModule.user_profile?.profiles?.school;
        return schoolData ? schoolData : this.nameSchool;
      },
      // setter
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        this.nameSchool = newValue;
      },
    },

    completeSchool() {
      const value = this.$store.state.userModule.user_profile?.profiles?.school;
      if (value !== "") {
        return false;
      }
      return true;
    },
  },

  methods: {
    /**
     *
     */
    onChoseSchool() {
      //
      this.$router.push({ path: "/add-school" });
    },
  },
};
</script>

<style lang="css"></style>
