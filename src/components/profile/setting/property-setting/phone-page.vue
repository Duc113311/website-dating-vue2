<template>
  <div class="w-full">
    <div class="w-full title-size">Account Settings</div>
    <div class="w-full flex items-center">
      <div class="w-full">
        <div class="w-full flex form-set-input bg-default">
          <div class="flex justify-between w-full">
            <div class="bh-item-title title-item">Phone number</div>
            <div class="flex items-center">
              <div class="mr-3 title-item bh-text-number">+84962282864</div>
              <div @click="onClickUpdatePhone()">
                <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full flex items-center bh-describe size-describe">
          Secure your account by verifying your phone number
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "phone-page",

  data() {
    return {};
  },

  computed: {},

  methods: {
    onClickUpdatePhone() {},
  },
};
</script>

<style></style>
