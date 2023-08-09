<template>
  <div class="w-full h-full">
    <!-- For you -->
    <LikeForYou
      :actionDecide="actionDecide"
      @onShowDetailYouLike="onShowDetailYouLike"
    ></LikeForYou>
    <div
      v-if="isShowDetailUserLike"
      class="w-full user-like h-full absolute top-0 left-0 z-50"
    >
      <DetailUserLikeTopic
        @onActionDecide="onActionDecide"
      ></DetailUserLikeTopic>
    </div>
  </div>
</template>

<script>
import DetailUserLikeTopic from "@/components/home/view/detail-explore/detail-user-like-topic.vue";
import LikeForYou from "../../../components/like-topic/for-you/like-for-you";
export default {
  components: { LikeForYou, DetailUserLikeTopic },
  name: "for-you-page",
  data() {
    return {
      isShowDetailUserLike: false,
      actionDecide: "",
    };
  },

  methods: {
    onShowDetailYouLike(val) {
      this.actionDecide = "";
      this.isShowDetailUserLike = val;
    },

    onActionDecide(val) {
      this.actionDecide = val;
      this.isShowDetailUserLike = false;
    },
  },

  async mounted() {},
};
</script>

<style lang="css"></style>
