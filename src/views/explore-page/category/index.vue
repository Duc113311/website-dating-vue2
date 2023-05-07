<template>
  <div class="w-full h-full">
    <div class="w-full h-full overflow-hidden">
      <Header></Header>

      <div class="w-full body-page-default relative height-scroll p-4">
        <category-page></category-page>
      </div>

      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import CategoryPage from "../../../components/explore/category-page";
import Footer from "../../../components/layout/footer-home/footer";
import Header from "../../../components/layout/header-home/header";
export default {
  components: {
    CategoryPage,
    Footer,
    Header,
  },
  name: "category-page-topic",

  data() {
    return {
      loading: false,
    };
  },

  methods: {
    ...mapActions(["getListExplores"]),
  },

  mounted() {
    this.getListExplores();
  },
};
</script>
<style lang="css"></style>
