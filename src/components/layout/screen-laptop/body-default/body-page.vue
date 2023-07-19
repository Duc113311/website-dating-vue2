<template>
  <div class="bg-slate-300 w-full h-full">
    <div class="flex w-full h-full justify-center items-center">
      <div class="w-swipe">
        <vue-swing class="swipe-container">
          <div
            v-for="card in cards"
            :key="card.id"
            class="card"
            @throwoutleft="onThrowOutLeft(card)"
            @throwoutright="onThrowOutRight(card)"
            s
            @throwouttop="onThrowOutTop(card)"
            @throwout="onThrowOut(card)"
          >
            <img :src="card.image" alt="Card Image" class="card-image" />
            <div class="card-content">
              <h3>{{ card.name }}</h3>
              <p>{{ card.description }}</p>
            </div>
          </div>
        </vue-swing>
        <!-- <ViewSwipe ref="myViewSwipe" :listUserFilter="listDataUser"></ViewSwipe> -->
      </div>
    </div>

    <div class="rim-0">
      <div class="rim-1">
        <button>View</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import VueSwing from "vue-swing";
// import ViewSwipe from "../../../home/swipe-tinder/view-swipe";
export default {
  components: { VueSwing },
  name: "body-page",

  data() {
    return {
      cards: [
        {
          id: 1,
          name: "Card 1",
          description: "This is card 1 description.",
          image: require("@/assets/image-dating/7-15831080159232071706060.webp"),
        },
        // {
        //   id: 2,
        //   name: "Card 2",
        //   description: "This is card 2 description.",
        //   image: require("@/assets/image-dating/0659_photo-1-163186806531842640671.jpg"),
        // },
        // ...Thêm các phần tử khác
      ],
    };
  },

  computed: {
    listDataUser: {
      get() {
        return this.$store.state.mongoModule.listDataCard
          ? this.$store.state.mongoModule.listDataCard
          : this.users;
      },
      set(newData) {
        this.users = newData;
      },
    },
  },

  async mounted() {
    await this.getListCardForUser(30);
  },

  methods: {
    ...mapActions(["getListCardForUser"]),

    onThrowOutLeft(card) {
      debugger;

      console.log("Card thrown out to the left:", card);
      // Xử lý khi thẻ bị quẹt sang trái
    },
    onThrowOutRight(card) {
      debugger;
      console.log("Card thrown out to the right:", card);
      // Xử lý khi thẻ bị quẹt sang phải
    },
    onThrowOutTop(card) {
      debugger;
      console.log("Card thrown out to the right:", card);
      // Xử lý khi thẻ bị quẹt sang phải
    },
    onThrowOut(card) {
      console.log("Card thrown out:", card);
      // Xử lý khi thẻ bị quẹt (bất kỳ hướng nào)
    },
  },
};
</script>

<style lang="scss" scoped>
.w-swipe {
  width: 500px;
  height: 800px;
}
</style>
