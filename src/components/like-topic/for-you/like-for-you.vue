<template>
  <div class="w-full h-full relative">
    <div class="w-full text-title-like">Recommendations</div>
    <div class="w-full p-5 h-likes overflow-auto height-scroll">
      <div class="items-center gap grid grid-cols-2">
        <div
          class="item-user relative overflow-hidden"
          v-for="(user, index) in listLikeYouActions"
          :key="index"
        >
          <div class="image absolute bottom-0 w-full p-4 z-10 text-white">
            <div class="flex">
              <div class="name">{{ user.fullname }},&nbsp;</div>
              <span>{{ bindingAge(user.dob) }}</span>
            </div>
            <div class="flex padding-describe">
              <span class="status">&#x1F7E2;</span>
              Recently active
            </div>
          </div>
          <div class="bg-shadow w-full h-full"></div>
          <div
            class="bg-background-shadow absolute bottom-0 w-full h-full"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import functionValidate from "../../../middleware/validate.js";

export default {
  name: "like-for-you",

  data() {
    return {};
  },

  computed: {
    listLikeYouActions() {
      debugger;
      return this.$store.state.likeTopicModule.listLikeYouAction;
    },
  },

  methods: {
    bindingAge(val) {
      const dataAge = functionValidate.calculatAge(val);
      return dataAge;
    },
  },
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
