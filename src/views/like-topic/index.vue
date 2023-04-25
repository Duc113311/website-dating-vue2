<template>
  <div class="w-full h-full title-default">
    <div class="title-none"></div>

    <div class="w-full title-like flex items-center">
      <div
        v-bind:class="[isActiveLike ? 'peopleLike' : 'likeForYou']"
        class="w-2/4 cursor-pointer flex h-full justify-center like99 items-center text-xl font-bold"
        @click="onShowLikes(true)"
      >
        <span>99+</span>like
      </div>
      <div
        v-bind:class="[isActiveLike ? 'likeForYou' : 'peopleLike']"
        class="w-2/4 cursor-pointer flex h-full justify-center items-center text-xl font-bold"
        @click="onShowLikes(false)"
      >
        For you
      </div>
    </div>
    <!-- body -->
    <div class="w-full relative h-topic">
      <router-view></router-view>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../../components/layout/footer-home/footer";
import { mapActions } from "vuex";
export default {
  components: {
    Footer,
  },
  name: "like-topic",

  data() {
    return {
      isShowComponent: true,
      isActiveLike: true,
    };
  },

  methods: {
    ...mapActions(["getListDataLikedForYou"]),
    onShowLikes(val) {
      this.isShowComponent = val;
      this.isActiveLike = val;

      if (this.isActiveLike) {
        this.$router.push({ path: "/like-topic" });
      } else {
        this.$router.push({ path: "/for-you" });
      }
    },

    paramLikeForYous() {
      return this.$store.state.likeTopicModule.listLikeForYous.length;
    },
  },

  async created() {
    const dataLike = {
      pageSize: 0,
      currentPage: 0,
      action: "like",
    };
    this.getListDataLikedForYou(dataLike);
  },

  mounted() {},
};
</script>

<style lang="css">
.title-none {
  height: 4%;
}
.h-topic {
  height: calc(100% - 22%);
}
.like-topic {
  background-color: #382e41;
}

.peopleLike {
  border-bottom: 2px solid #fb5e63;
  color: #fb5e63;
}

.body-likes {
  height: 80%;
  background-color: #382e41;
}

.title-like {
  height: 6.4%;
  border-bottom: 1px solid #393f4e;
}
</style>
