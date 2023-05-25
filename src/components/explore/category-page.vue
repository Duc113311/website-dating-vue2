<template>
  <div class="w-full border-collapse body-explore overflow-y-auto">
    <!-- Verified -->
    <div class="w-full h-verified relative cursor-pointer">
      <div class="title-verified absolute top-12 left-2">
        {{ this.$t("verified_photo") }}
      </div>
      <img
        @click="onClickVerified()"
        src="@/assets/image-dating/explore_verified_photo (1).png"
        alt=""
      />
    </div>
    <div class="w-full text-description-no-padding pt-2 pb-4 title-default">
      {{ $t("let's_find_people_same_with_your_vibe...") }}
    </div>

    <div class="w-full option-find">
      <div class="w-full grid gap-4 grid-explore mb-2">
        <div
          v-for="(item, index) in listCategoryExplore"
          :key="index"
          class="relative cursor-pointer rounded-xl overflow-hidden"
          @click="onClickChoseCategory(item)"
        >
          <div class="w-full absolute top-dash-explore text-center bottom-0">
            <div class="countdown"></div>
            <div v-if="index == 3" class="countdown" id="countdown">
              {{ countdown }}
            </div>
            <div class="title-date title-print">{{ item.name }}</div>
            <div class="text-describe">
              {{ item.description }}
            </div>
          </div>
          <img
            class="image-explore w-full h-full"
            :src="item.image"
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
      countdown: "",
      countdownInterval: null,
      // listCategoryExplore: [
      //   {
      //     code: "blindDate",
      //     title: "Blind Date",
      //     describe: "Open hour 6pm - 12pm (Local time)",
      //     urlImage: require("@/assets/image-dating/explore_blind_date.png"),
      //   },
      //   {
      //     code: "letBeFriend",
      //     title: "Let's be Friend",
      //     describe: "Find your best friend here",
      //     urlImage: require("@/assets/image-dating/explore_let_be_friend (1).png"),
      //   },
      //   {
      //     code: "lookingLove",
      //     title: "Looking for love",
      //     describe: "Find your love here",
      //     urlImage: require("@/assets/image-dating/explore_looking_for_love (1).png"),
      //   },
      //   {
      //     code: "loveMakeUp",
      //     title: "Love beautiful makeup",
      //     describe: "Find your love makeup here",
      //     urlImage: require("@/assets/image-dating/thich_lam_dep.webp"),
      //   },
      //   {
      //     code: "coffeeDate",
      //     title: "Coffee Date",
      //     describe: "Find your coffee here",
      //     urlImage: require("@/assets/image-dating/explore_coffee_date (1).png"),
      //   },
      //   {
      //     code: "traveling",
      //     title: "Like traveling",
      //     describe: "Find your love traveling here",
      //     urlImage: require("@/assets/image-dating/thich_du_lich.webp"),
      //   },
      //   {
      //     code: "music",
      //     title: "Love music",
      //     describe: "Find your love music here",
      //     urlImage: require("@/assets/image-dating/thich_nghe_nhac.webp"),
      //   },
      //   {
      //     code: "sport",
      //     title: "Love sports",
      //     describe: "Find your love sports here",
      //     urlImage: require("@/assets/image-dating/thich_the_thao.webp"),
      //   },
      //   {
      //     code: "drink",
      //     title: "Like to drink",
      //     describe: "Find your like drink here",
      //     urlImage: require("@/assets/image-dating/thich_di_nhau.webp"),
      //   },
      // ],
    };
  },

  computed: {
    listCategoryExplore() {
      const explores = this.$store.state.homeModule.listExplores;
      let resultData = [];
      for (let index = 0; index < explores.length; index++) {
        const element = explores[index];
        if (element.name === "Looking for love") {
          element.code = "lookingLove";
        }
        if (element.name === "Let's be Friend") {
          element.code = "letBeFriend";
        }
        if (element.name === "Coffee Date") {
          element.code = "coffeeDate";
        }
        if (element.name === "Blind Date") {
          element.code = "blindDate";
        }

        resultData.push(element);
      }
      return resultData;
    },
  },
  mounted() {
    this.startCountdown();
  },
  beforeDestroy() {
    clearInterval(this.countdownInterval);
  },
  methods: {
    startCountdown() {
      const startHour = new Date();
      startHour.setHours(17, 0, 0);

      const end = new Date();
      end.setHours(18, 0, 0); // Kết thúc lúc 12 giờ
      this.countdownInterval = setInterval(() => {
        const now = new Date();
        if (now - startHour > 0) {
          const timeLeft = end - now;
          console.log("end", end);
          console.log("now", now);
          console.log("timeLeft", timeLeft);
          if (timeLeft < 0) {
            clearInterval(this.countdownInterval);
            if (now - end < 1000 * 60 * 60) {
              this.countdown = "Sự kiện đã kết thúc!";
            } else {
              this.countdown = "";
            }
          } else {
            const hours = Math.floor(timeLeft / 3600000);
            const minutes = Math.floor((timeLeft % 3600000) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            this.countdown = `Sự kiện còn lại ${hours} giờ ${minutes} phút ${seconds} giây`;
          }
        }
      }, 1000);
    },
    onClickChoseCategory(val) {
      console.log(val);
      switch (val.code) {
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
            path: `/common-explore/${val.code}/${val._id}`,
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
