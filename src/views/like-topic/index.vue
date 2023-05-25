<template>
  <div class="w-full h-full title-default">
    <div class="title-none"></div>

    <div class="w-full title-like flex items-center">
      <div
        v-bind:class="[isActiveLike ? 'peopleLike' : 'likeForYou']"
        class="w-2/4 cursor-pointer flex h-full justify-center like99 items-center text-xl font-bold"
        @click="onShowLikes(true)"
      >
        <span v-if="isListLikeForYous.length !== 0"
          >99+ {{ bingString($t("like")) }}</span
        >
        <span v-else>0 {{ bingString($t("like")) }}</span>
      </div>
      <div
        v-bind:class="[isActiveLike ? 'likeForYou' : 'peopleLike']"
        class="w-2/4 cursor-pointer flex h-full justify-center items-center text-xl font-bold"
        @click="onShowLikes(false)"
      >
        {{ $t("for_you") }}
      </div>
    </div>
    <!-- body -->
    <div class="w-full h-topic" v-loading="loading">
      <router-view></router-view>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import functionValidate from "../../middleware/validate.js";
import Footer from "../../components/layout/footer-home/footer";
export default {
  components: {
    Footer,
  },
  name: "like-topic",

  data() {
    return {
      isShowComponent: true,
      isActiveLike: true,
      loading: false,
      isListLikeForYous: this.$store.state.likeTopicModule.listLikeForYous,
    };
  },

  methods: {
    ...mapActions(["getListDataLikedForYou", "getListDataLikeYouAction"]),

    bingString(val) {
      const stringName = functionValidate.titleCase(val);
      return stringName;
    },
    onShowLikes(val) {
      this.isShowComponent = val;
      this.isActiveLike = val;

      if (this.isActiveLike) {
        this.$router.push({ path: "/like-topic" });
      } else {
        this.$router.push({ path: "/for-you" });
      }
    },
  },

  async created() {
    const objectLike = {
      pageSize: 10,
      currentPage: 0,
      action: "like",
    };
    const objectNope = {
      pageSize: 10,
      currentPage: 0,
      action: "nope",
    };
    await this.getListDataLikedForYou(objectLike);
    await this.getListDataLikeYouAction(objectNope);
  },

  mounted() {
    const value = this.$store.state.likeTopicModule.listLikeForYous;
    if (value.length !== 0) {
      this.loading = false;
    } else {
      this.loading = true;
    }
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
};
</script>

<style lang="css">
.title-none {
  height: 4%;
}
.h-topic {
  height: calc(100% - 20.5%);
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
