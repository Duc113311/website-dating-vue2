<template>
  <div class="w-full h-full">
    <!-- For you -->
    <NoOneLike v-if="listLikesYou.length !== 0"></NoOneLike>
    <PeopleLikes v-if="listLikesYou.length === 0"></PeopleLikes>
  </div>
</template>

<script>
import PeopleLikes from "../../../components/like-topic/99-like/people-likes";
import NoOneLike from "../../../components/like-topic/default/no-one-like";
export default {
  components: {
    PeopleLikes,
    NoOneLike,
  },
  name: "99-like-page",
  data() {
    return { listLikes: [], listLikesYou: [] };
  },
  computed: {
    listLikeTopicParam: {
      get() {
        return this.$store.state.likeTopicModule.listLikeForYous
          ? this.$store.state.likeTopicModule.listLikeForYous
          : this.listLikes;
      },
      set(val) {
        this.listLikes = val;
      },
    },
  },
  methods: {},

  mounted() {},
};
</script>

<style lang="css"></style>
