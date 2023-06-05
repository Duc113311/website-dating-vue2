<template>
  <div>
    <div class="mt-3">
      <div class="padding-title">{{ $t("my_interests_are") }}</div>
      <span class="padding-describe describe-text">{{
        $t(
          "let_everyone_know_what_you're_passionate_about,_by_adding_it_to_your_profile"
        )
      }}</span>
    </div>
    <div class="w-full mt-4 overflow-y-auto list-interest">
      <div class="w-full h-full">
        <span v-for="(item, index) in listDataInterests" :key="index">
          <button
            @click="onSelectInterest(item.code)"
            :id="item.code"
            class="oftion-interests mr-3 mb-3 p-3 option-default"
            size="large"
          >
            {{ item.value }}
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  name: "my-interests",
  setup() {
    return;
  },
  data() {
    return {
      isActive: false,
    };
  },

  computed: {
    listDataInterests() {
      return this.$store.state.commonModule.listLifeStyleRegister.interests;
    },
  },

  methods: {
    ...mapActions(["getListDataInterests"]),
    ...mapMutations(["setInterest", "setShowProfileCreate"]),
    onSelectInterest(val) {
      // document.querySelector("oftion-interests")
      this.setInterest(val);
      const interestsData =
        this.$store.state.userModule.user_profile.profiles.interests;

      if (this.$store.state.userModule.isActiveId) {
        document.getElementById(val).classList.add("option-active");
        if (interestsData.length < 1) {
          this.$emit("onStatusActive", false);
        } else {
          this.$emit("onStatusActive", true);
        }
      } else {
        document.getElementById(val).classList.remove("option-active");
        if (interestsData.length < 1) {
          this.$emit("onStatusActive", false);
        }
      }
    },
  },

  mounted() {
    const interestsData =
      this.$store.state.userModule.user_profile.profiles.interests;
    this.setShowProfileCreate({
      isShowProfile: true,
      isNotShowProfile: true,
    });
    this.$emit("onShowSkips", true);
    this.$emit("onShowName", { showCheckbox: false });
    for (let index = 0; index < interestsData.length; index++) {
      const element = interestsData[index];
      document.getElementById(element).classList.add("option-active");
    }
    if (interestsData.length < 1) {
      this.$emit("onStatusActive", false);
    } else {
      this.$emit("onStatusActive", true);
    }
  },
};
</script>

<style lang="css">
.oftion-interests {
  border: 1.5px solid white;
  border-radius: 8px;
  cursor: pointer;
}
.bg-active {
  border: 1.5px solid #f65a62;
  color: #f65a62;
}

.list-interest {
  height: calc(100vh - 386px);
}
.list-interest::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.list-interest {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
