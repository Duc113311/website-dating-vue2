<template>
  <div class="w-full h-full relative">
    <div class="w-full text-title-like">Recommendations</div>
    <div class="w-full p-5 h-likes overflow-auto height-scroll z-30">
      <ctrlSwipe
        :listUser="listLikeYouActions"
        :actionDecide="actionDecide"
        @onShowDetailUserLikeTopic="onShowDetailUserLikeTopic"
      ></ctrlSwipe>
    </div>
  </div>
</template>

<script>
import ctrlSwipe from "@/components/control/swipe/ctrl-swipe.vue";
import functionValidate from "../../../middleware/validate.js";
import { mapMutations } from "vuex";

export default {
  components: { ctrlSwipe },
  name: "like-for-you",

  data() {
    return {
      listLikes: this.$store.state.likeTopicModule.listLikeForYous,
    };
  },
  props: ["actionDecide"],
  computed: {
    listLikeYouActions() {
      return this.$store.state.likeTopicModule.listLikeYouAction;
    },
  },

  methods: {
    ...mapMutations(["setPutListUser"]),
    bindingAge(val) {
      const dataAge = functionValidate.calculatAge(val);
      return dataAge;
    },
    onInputFile(val) {
      console.log("vao", val);

      this.setPutListUser(this.listLikes[0]);
    },

    onShowDetailUserLikeTopic(val) {
      this.$emit("onShowDetailYouLike", val);
    },
  },

  mounted() {},
};
</script>

<style lang="css">
.item-user {
  border-radius: 10px;
  background-image: url("../../../assets/image-dating/uikoria.jpg");
  background-position: center;
  background-size: cover;
}

.bg-shadow {
  background-image: url("../../../assets/image-dating/84x106_5026f25d-07a8-41fa-9ce7-43f80d55a42e.jpg");
  background-position: 50% 100%;
  background-size: auto 100.952%;
}

.bg-background-shadow {
  background: linear-gradient(
    0deg,
    rgb(0 0 0 / 85%) 9%,
    rgb(254 254 254 / 0%) 29%,
    rgb(255 255 255 / 0%) 99%
  );
}

.status {
  font-size: 12px;
  margin-right: 10px;
}
.name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.text-title-like {
  padding-top: 2rem;
  padding-left: 2rem;
  padding-right: 1rem;
  font-size: 18px;
}
.gap {
  gap: 1.55rem;
}
</style>
