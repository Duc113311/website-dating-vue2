<template>
  <div class="w-full">
    <div class="w-full pl-6 pr-6 h-10 mt-6 flex items-center">
      <div class="text-lg mr-3 description-no-padding title-color">
        {{ $t("messages") }}
      </div>
      <div class="p-2 txt-number-mes">1</div>
    </div>

    <div class="w-full mt-3 dash-message">
      <div class="w-full flex items-center h-20 mt-4">
        <div class="w-1/5 p-6">
          <div class="image-detail-avatar relative">
            <div class="absolute bottom-0 right-0.5">
              <BhActivateLike></BhActivateLike>
            </div>
          </div>
        </div>
        <div class="w-4/5 ml-8 h-full bg-mess">
          <div class="w-full">
            Trang <span class="ic_like ml-3">{{ $t("likes_you") }}</span>
          </div>
          <div class="mt-1 description-no-padding">
            {{ $t("recently_active") }}
          </div>
        </div>
      </div>
      <div class="w-full flex items-center h-20 mt-4">
        <div class="w-1/5 p-6">
          <div class="image-detail-avatar relative">
            <div class="absolute bottom-0 right-0.5">
              <BhActivateLike></BhActivateLike>
            </div>
          </div>
        </div>
        <div class="w-4/5 ml-8 h-full bg-mess relative">
          <div class="w-full">
            Trang <span class="ic_like ml-3">{{ $t("likes_you") }}</span>
          </div>
          <div class="mt-1 description-no-padding">
            {{ $t("recently_active") }}
          </div>
          <div class="absolute right-4 top-4 p-2 txt-number-title">20</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BhActivateLike from "../../bh-element-ui/button/bh-activateLike";
export default {
  components: { BhActivateLike },
  name: "people-messages",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
