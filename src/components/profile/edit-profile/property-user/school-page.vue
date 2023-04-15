<template>
  <div class="w-full flex items-center">
    <div class="w-full">
      <div class="w-full flex justify-between bh-title p-3">
        <div>SCHOOL</div>
        <div v-if="nameSchool?.length === 0">+3%</div>
      </div>
      <div class="w-full flex style-form">
        <div class="flex justify-between w-full">
          <div class="bh-item-title">{{ nameSchoolParam }}</div>
          <div class="mr-5" @click="onChoseSchool()">
            <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "school-page",
  data() {
    return {
      nameSchool: this.$store.state.userModule.user_profile?.profiles?.school
        ? this.$store.state.userModule.user_profile?.profiles?.school
        : "Thêm tên trường",
    };
  },

  computed: {
    nameSchoolParam: {
      get() {
        const schoolData =
          this.$store.state.userModule.user_profile?.profiles?.school;
        debugger;
        return schoolData ? schoolData : this.nameSchool;
      },
      // setter
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        this.nameSchool = newValue;
      },
    },
  },

  methods: {
    /**
     *
     */
    onChoseSchool() {
      //
    },
  },
};
</script>

<style lang="css"></style>
