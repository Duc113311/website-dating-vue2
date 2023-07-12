<template>
  <div class="bg-slate-300 w-full h-full">
    <div class="flex w-full h-full justify-center items-center">
      <div class="w-swipe">
        <ViewSwipe ref="myViewSwipe" :listUserFilter="listDataUser"></ViewSwipe>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ViewSwipe from "../../../home/swipe-tinder/view-swipe";
export default {
  components: { ViewSwipe },
  name: "body-page",

  data() {
    return {};
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
  },
};
</script>

<style lang="scss" scoped>
.w-swipe {
  width: 500px;
  height: 800px;
}
</style>
