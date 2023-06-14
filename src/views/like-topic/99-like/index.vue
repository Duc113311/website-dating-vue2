<template>
  <div class="w-full h-full">
    <!-- For you -->
    <NoOneLike v-if="listLikeTopicParam.length === 0"></NoOneLike>
    <PeopleLikes v-if="listLikeTopicParam.length !== 0"></PeopleLikes>
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
  name: "you-like-action",
  data() {
    return {};
  },
  computed: {
    listLikeTopicParam() {
      return this.$store.state.likeTopicModule.listLikeForYous;
    },
  },
  methods: {},

  mounted() {},
};
</script>

<style lang="css"></style>
