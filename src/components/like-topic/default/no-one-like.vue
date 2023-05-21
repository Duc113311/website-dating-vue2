<template>
  <div class="w-full h-full relative">
    <div
      class="w-full flex items-center h-14 justify-center p-4 mt-3 description-no-padding"
    >
      <span>{{
        $t("upgrade_to_gold_to_see_people_who_are_interested_in_you")
      }}</span>
    </div>

    <div class="w-full mt-28 mb-28 flex justify-center items-center">
      <div class="w-full items-center text-center p-5">
        <div class="flex justify-center items-center mb-9">
          <img
            src="@/assets/image-dating/art_top_pick.svg"
            width="250"
            alt=""
          />
        </div>
        <div class="w-full items-center text-describe">
          {{
            $t(
              "no_one_likes_you_yet._done't_worry,_make_sure_you_complete_your_profile_to_other_find_you_faster"
            )
          }}
        </div>
      </div>
    </div>
    <div class="w-full z-10">
      <BhSeeLike></BhSeeLike>
    </div>
  </div>
</template>

<script>
import BhSeeLike from "../../bh-element-ui/button/bh-seeLike";
export default {
  components: { BhSeeLike },
  name: "no-one-like",

  data() {
    return {};
  },
};
</script>

<style lang="css"></style>
