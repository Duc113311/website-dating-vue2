<template>
  <div class="w-full h-full">
    <div class="w-full h-full overflow-hidden">
      <Header></Header>

      <div
        class="w-full body-page-default relative height-scroll p-4"
        v-loading="loading"
      >
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
      loading: true,
    };
  },

  methods: {
    ...mapActions(["getListExplores"]),
  },

  async created() {
    await this.getListExplores();
  },

  mounted() {
    const value = this.$store.state.homeModule.listExplores;
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
<style lang="css"></style>
