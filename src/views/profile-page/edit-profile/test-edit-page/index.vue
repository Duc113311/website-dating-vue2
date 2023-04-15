<template>
  <div class="w-full h-full relative bg-theme p-5" v-loading="loading">
    <div class="w-full h-full">
      <!-- Back -->
      <div class="w-full header-edit flex justify-center items-center">
        <div class="w-full flex justify-center items-center">
          <div class="w-1/4">
            <bh-back></bh-back>
            <!-- <BhBack @onBackComponent="onBackEditProfile"></BhBack> -->
          </div>
          <div class="ml-20 w-3/4 text-xl text-white">Edit Profile</div>
        </div>
      </div>
      <div class="form-edit overflow-scroll w-full">
        <from-update></from-update>
      </div>

      <div class="w-full">
        <Footer></Footer>
        <!-- <Footer></Footer> -->
      </div>
    </div>
  </div>
</template>

<script>
import fromUpdate from "@/components/profile/edit-profile/from-update.vue";
import BhBack from "@/components/bh-element-ui/button/bh-back.vue";
import Footer from "@/components/layout/footer-home/footer.vue";
export default {
  components: { fromUpdate, BhBack, Footer },
  name: "test-edit-page",
  data() {
    return {
      loading: false,
    };
  },

  methods: {
    onBackEditProfile() {},
  },
};
</script>

<style lang="css">
.bg-theme {
  background-color: #242a38;
}

.header-edit {
  height: 8%;
}

.form-edit {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  overflow-y: scroll; /* Add the ability to scroll */
  height: 84%;
}

.form-edit::-webkit-scrollbar {
  display: none;
}

.style-switch {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #495063;
  border-radius: 10px;
  color: white;
  background-color: #495063;
}

.el-textarea__inner {
  min-height: 140px !important;
  height: 134px !important;
  background-color: rgb(73, 80, 99) !important;
  border: 1px solid rgb(73, 80, 99) !important;
  border-radius: 10px !important;
  font-size: 17px !important;
  padding: 12px !important;
  color: #ffffff !important;
}

.bg-life {
  background-color: #495063;
  border-radius: 10px;
  padding: 24px;
}

.item-life {
  display: flex;
  /* padding: 12px; */
  border-bottom: 1px solid #616781;
  padding-bottom: 15px;
  padding-top: 15px;
}
.item-life-end {
  display: flex;
  /* padding: 12px; */
  padding-bottom: 15px;
  padding-top: 15px;
}

.el-input__inner {
  background-color: #495063 !important;
  border: 1px solid #495063 !important;
  border-radius: 10px !important;
  padding: 13px !important;
  font-size: 15px !important;
  height: 50px !important;
  color: #ffffff !important;
}

.style-form {
  height: 50px;
  background-color: #495063;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
}

.style-bg-common {
  background-color: #495063;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
}

.style-package {
  padding: 5px;
  width: 138px;
  display: flex;
  justify-content: center;
  border: 1px solid #8fada5;
  border-radius: 4px;
  background-color: #8fada5;
  color: #ffffff;
}

.h-data-life::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.h-data-life {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.el-loading-spinner {
  display: flex;
  justify-content: center;
}

.style-inter-setting {
  width: 28rem;
  overflow: hidden;
  height: 50px;
  display: flex;
  align-items: center;
}

.bg-interest {
  background: rgb(73, 80, 99);
  background: linear-gradient(
    270deg,
    rgba(73, 80, 99, 1) 7%,
    rgba(240, 233, 233, 0) 22%
  );
}
</style>
