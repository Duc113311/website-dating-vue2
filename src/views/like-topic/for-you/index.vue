<template>
  <div class="w-full h-full">
    <!-- For you -->
    <LikeForYou></LikeForYou>
  </div>
</template>

<script>
import LikeForYou from "../../../components/like-topic/for-you/like-for-you";
export default {
  components: { LikeForYou },
  name: "for-you-page",
  data() {
    return {};
  },

  methods: {},

  async mounted() {},
};
</script>

<style lang="css"></style>
