<template>
  <div class="w-full">
    <div class="w-full pl-6 pr-6 h-10 mt-6 flex items-center">
      <div class="text-lg mr-3 description-no-padding title-color">
        {{ $t("new_connections") }}
      </div>
      <div class="p-2 txt-number-mes">20</div>
    </div>

    <div class="w-full pl-6 pr-6 list-friend pb-6">
      <div class="flex w-full h-15">
        <div class="item-avatar items-center text-center mr-5">
          <div class="image-detail-dash"></div>
          <div class="mt-3">Likes</div>
        </div>

        <div class="w-full flex">
          <div class="item-avatar w- items-center text-center mr-6">
            <div class="image-detail-avatar relative">
              <div class="absolute bottom-0 right-0.5">
                <BhActivateLike></BhActivateLike>
              </div>
            </div>
            <div class="mt-3">Ngoc Trinh</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BhActivateLike from "../../bh-element-ui/button/bh-activateLike";
export default {
  components: { BhActivateLike },
  name: "list-friends",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
