<template>
  <div class="w-full flex items-center mt-6">
    <div class="w-full form-set-list">
      <div class="w-full flex justify-between bh-title">
        <div>{{ titleLink }}}</div>
      </div>
      <div class="w-full flex items-center">
        <div class="w-full style-bg-common">
          <div class="flex justify-between w-full form-set-item bd-input">
            <div class="bh-item-title">Manage payment account</div>
            <div>
              <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
            </div>
          </div>
          <div class="flex justify-between w-full form-set-item">
            <div class="bh-item-title">Restore purchase</div>
            <div>
              <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "form-link-web-page",

  data() {
    return {};
  },

  props: ["titleName", "listLinks"],
  computed: {
    titleLink() {
      return this.titleName;
    },

    listLinkWebs() {
      return this.listLinks;
    },
  },

  methods: {},
};
</script>

<style></style>
