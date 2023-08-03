<template>
  <div class="w-full h-full relative">
    <div class="w-full h-full z-10">
      <Header
        :isShowSafety="isShowSafety"
        @onChangeSafety="onChangeSafety"
      ></Header>

      <div class="w-full body-page-home relative">
        <FriendMatch></FriendMatch>
      </div>

      <Footer></Footer>
    </div>

    <BhPopover
      v-show="isShowFormSafety"
      @onChangeHidePopover="onChangeHidePopover"
    ></BhPopover>
  </div>
</template>

<script>
import BhPopover from "../../../components/bh-element-ui/others/bh-popover";
import FriendMatch from "../../../components/message/friend-match";
import Footer from "../../../components/layout/footer-home/footer";
import Header from "../../../components/layout/header-home/header";
export default {
  components: {
    BhPopover,
    FriendMatch,
    Footer,
    Header,
  },
  name: "dashboard-chat",

  data() {
    return {
      isShowSafety: true,
      isShowFormSafety: false,
    };
  },

  methods: {
    onChangeSafety(value) {
      debugger;
      this.isShowFormSafety = value;
    },

    onChangeHidePopover(value) {
      this.isShowFormSafety = value;
    },
  },
};
</script>

<style lang="css">
.body-page-home {
  height: 78%;
}
</style>
