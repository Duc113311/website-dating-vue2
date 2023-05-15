<template>
  <div class="w-full h-full">
    <!-- For you -->
    <LikeForYou @onShowDetailYouLike="onShowDetailYouLike"></LikeForYou>
    <div
      v-if="isShowDetailUserLike"
      class="w-full user-like h-full absolute top-0 left-0 z-50"
    >
      <DetailUserLikeTopic></DetailUserLikeTopic>
    </div>
  </div>
</template>

<script>
import DetailUserLikeTopic from "@/components/home/view/detail-infor.vue/detail-user-like-topic.vue";
import LikeForYou from "../../../components/like-topic/for-you/like-for-you";
export default {
  components: { LikeForYou, DetailUserLikeTopic },
  name: "for-you-page",
  data() {
    return {
      isShowDetailUserLike: false,
    };
  },

  methods: {
    onShowDetailYouLike(val) {
      this.isShowDetailUserLike = val;
    },
  },

  async mounted() {},
};
</script>

<style lang="css"></style>
