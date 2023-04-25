<template>
  <div class="w-full border-collapse body-explore overflow-y-auto">
    <!-- Verified -->
    <div class="w-full h-verified relative cursor-pointer">
      <div class="title-verified absolute top-12 left-2">Verified photo</div>
      <img
        @click="onClickVerified()"
        src="@/assets/image-dating/explore_verified_photo (1).png"
        alt=""
      />
    </div>
    <div class="w-full text-description-no-padding pt-2 pb-4">
      Let's find people same with your vibe...
    </div>

    <div class="w-full option-find">
      <div class="w-full grid gap-4 grid-explore mb-2">
        <div
          v-for="(item, index) in listCategoryExplore"
          :key="index"
          class="relative cursor-pointer rounded-xl overflow-hidden"
          @click="onClickChoseCategory(item.code)"
        >
          <div class="w-full absolute top-dash-explore text-center bottom-0">
            <div class="countdown"></div>
            <div class="title-date title-print">{{ item.title }}</div>
            <div class="text-describe">
              {{ item.describe }}
            </div>
          </div>
          <img
            class="image-explore w-full h-full"
            :src="item.urlImage"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "category-page",

  data() {
    return {
      listCategoryExplore: [
        {
          code: "blindDate",
          title: "Blind Date",
          describe: "Open hour 6pm - 12pm (Local time)",
          urlImage: require("@/assets/image-dating/explore_blind_date.png"),
        },
        {
          code: "letBeFriend",
          title: "Let's be Friend",
          describe: "Find your best friend here",
          urlImage: require("@/assets/image-dating/explore_let_be_friend (1).png"),
        },
        {
          code: "lookingLove",
          title: "Looking for love",
          describe: "Find your love here",
          urlImage: require("@/assets/image-dating/explore_looking_for_love (1).png"),
        },
        {
          code: "loveMakeUp",
          title: "Love beautiful makeup",
          describe: "Find your love makeup here",
          urlImage: require("@/assets/image-dating/thich_lam_dep.webp"),
        },
        {
          code: "coffeeDate",
          title: "Coffee Date",
          describe: "Find your coffee here",
          urlImage: require("@/assets/image-dating/explore_coffee_date (1).png"),
        },
        {
          code: "traveling",
          title: "Like traveling",
          describe: "Find your love traveling here",
          urlImage: require("@/assets/image-dating/thich_du_lich.webp"),
        },
        {
          code: "music",
          title: "Love music",
          describe: "Find your love music here",
          urlImage: require("@/assets/image-dating/thich_nghe_nhac.webp"),
        },
        {
          code: "sport",
          title: "Love sports",
          describe: "Find your love sports here",
          urlImage: require("@/assets/image-dating/thich_the_thao.webp"),
        },
        {
          code: "drink",
          title: "Like to drink",
          describe: "Find your like drink here",
          urlImage: require("@/assets/image-dating/thich_di_nhau.webp"),
        },
      ],
    };
  },

  methods: {
    onClickChoseCategory(val) {
      console.log(val);
      switch (val) {
        case "blindDate":
          this.$router.push({
            path: "/blind-date",
            query: {
              name: val,
            },
          });
          break;

        default:
          this.$router.push({
            path: `/common-explore/${val}`,
          });
          break;
      }
    },
    onClickBlindDate() {},

    /**
     * Verified image
     */
    onClickVerified() {
      const verified = this.$store.state.commonModule.isVerified;

      if (verified) {
        this.$router.push({ path: "photo-verified" });
      } else {
        this.$router.push({ path: "verified" });
      }
    },
  },
};
</script>

<style lang="css">
.body-page {
  background-repeat: no-repeat;
  background-size: cover;
}
.title-boy {
  grid-template-columns: 5fr 1fr;
}

.bt-option {
  grid-template-columns: auto auto auto auto auto;
  gap: 35px;
}

.title-page {
  background-color: #181c274f;
  background-image: linear-gradient(to top, #1e23334a, #230f1f7d);
  background-attachment: scroll;
  height: 24%;
}

.body-explore {
  height: 100%;
}

.bg-verified {
  background-repeat: no-repeat;
  height: 23%;
  width: 100%;
  background-position: center;
  background-size: contain;
}

.grid-explore {
  grid-template-columns: 1fr 1fr;
}

.body-explore::-webkit-scrollbar {
  display: none;
}
</style>
