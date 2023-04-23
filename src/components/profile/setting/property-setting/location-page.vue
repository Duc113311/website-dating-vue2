<template>
  <div class="w-full">
    <div class="w-full title-size">Discovery Settings</div>
    <div class="w-full flex items-center">
      <div class="w-full">
        <div class="w-full flex form-set-input bg-default">
          <div class="flex justify-between w-full">
            <div class="bh-item-title title-item">Location</div>
            <div class="flex items-center">
              <div class="mr-3 bh-text-location" @click="onClickLocation()">
                {{ addressLocation }}
              </div>

              <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
            </div>
          </div>
        </div>
        <div class="w-full flex items-center bh-describe size-describe">
          Change your location to see people in other cities
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "location-page",

  data() {
    return {};
  },

  computed: {
    addressLocation() {
      const addressParam =
        this.$store.state.userModule.user_profile?.profiles?.address;
      debugger;
      if (addressParam) {
        return addressParam;
      } else {
        return "My Current Location";
      }
    },
  },

  methods: {
    onClickLocation() {
      debugger;
    },
  },
};
</script>

<style lang="css" scoped></style>
