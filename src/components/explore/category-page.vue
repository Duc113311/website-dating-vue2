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
          class="relative cursor-pointer rounded-xl overflow-hidden"
          @click="onClickBlindDate()"
        >
          <div class="w-full absolute top-dash-explore text-center bottom-0">
            <div class="countdown"></div>
            <div class="title-date title-print">Blind Date</div>
            <div class="text-describe">
              Open hour 6pm - 12 pm <br />
              (Local time)
            </div>
          </div>
          <img
            class="image-explore w-full h-full"
            src="@/assets/image-dating/explore_blind_date.png"
            alt=""
            srcset=""
          />
        </div>
        <div class="relative cursor-pointer rounded-xl overflow-hidden">
          <div class="w-full absolute top-dash-explore text-center bottom-0">
            <div class="countdown"></div>
            <div class="title-date title-print">Let's be Friend</div>
            <div class="text-describe">Find your best friend here</div>
          </div>
          <img
            class="image-explore w-full h-full"
            src="@/assets/image-dating/explore_let_be_friend (1).png"
            alt=""
            srcset=""
          />
        </div>
        <div class="relative cursor-pointer rounded-xl overflow-hidden">
          <div class="w-full absolute top-dash-explore text-center bottom-0">
            <div class="countdown"></div>
            <div class="title-date title-print">Looking for love</div>
            <div class="text-describe">Find your love here</div>
          </div>
          <img
            class="image-explore w-full h-full"
            src="@/assets/image-dating/explore_looking_for_love (1).png"
            alt=""
            srcset=""
          />
        </div>
        <div class="relative cursor-pointer rounded-xl overflow-hidden">
          <div class="w-full absolute top-dash-explore text-center bottom-0">
            <div class="countdown"></div>
            <div class="title-date title-print">Coffee Date</div>
            <div class="text-describe">Find your coffee here</div>
          </div>
          <img
            class="image-explore w-full h-full"
            src="@/assets/image-dating/explore_coffee_date (1).png"
            alt=""
            srcset=""
          />
        </div>
        <div class="relative cursor-pointer rounded-xl overflow-hidden">
          <div class="w-full absolute top-dash-explore text-center bottom-0">
            <div class="countdown"></div>
            <div class="title-date title-print">Love Beautiful Makeup</div>
            <div class="text-describe">Find your beautiful makeup here</div>
          </div>
          <img
            class="image-explore w-full h-full"
            src="@/assets/image-dating/thich_lam_dep.webp"
            alt=""
            srcset=""
          />
        </div>

        <div class="relative cursor-pointer rounded-xl overflow-hidden">
          <div class="w-full absolute top-dash-explore text-center bottom-0">
            <div class="countdown"></div>
            <div class="title-date title-print">Like Traveling</div>
            <div class="text-describe">Find your love traveling here</div>
          </div>
          <img
            class="image-explore w-full h-full"
            src="@/assets/image-dating/thich_du_lich.webp"
            alt=""
            srcset=""
          />
        </div>
        <div class="relative cursor-pointer rounded-xl overflow-hidden">
          <div class="w-full absolute top-dash-explore text-center bottom-0">
            <div class="countdown"></div>
            <div class="title-date title-print">Love Music</div>
            <div class="text-describe">Find your love music here</div>
          </div>
          <img
            class="image-explore w-full h-full"
            src="@/assets/image-dating/thich_nghe_nhac.webp"
            alt=""
            srcset=""
          />
        </div>
        <div class="relative cursor-pointer rounded-xl overflow-hidden">
          <div class="w-full absolute top-dash-explore text-center bottom-0">
            <div class="countdown"></div>
            <div class="title-date title-print">Love Sports</div>
            <div class="text-describe">Find your love sports here</div>
          </div>
          <img
            class="image-explore w-full h-full"
            src="@/assets/image-dating/thich_the_thao.webp"
            alt=""
            srcset=""
          />
        </div>
        <div class="relative cursor-pointer rounded-xl overflow-hidden">
          <div class="w-full absolute top-dash-explore text-center bottom-0">
            <div class="countdown"></div>
            <div class="title-date title-print">Like To Drink</div>
            <div class="text-describe">Find your to drink here</div>
          </div>
          <img
            class="image-explore w-full h-full"
            src="@/assets/image-dating/thich_di_nhau.webp"
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
    return {};
  },

  methods: {
    onClickBlindDate() {
      this.$router.push({
        path: "/blind-date",
      });
    },

    /**
     * Verified image
     */
    onClickVerified() {
      debugger;
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
