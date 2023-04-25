<template>
  <div class="w-full flex items-center">
    <div class="w-full">
      <div class="w-full flex bh-title p-3 items-center">
        <div>SHOW ME ON CARD STACK</div>
      </div>
      <div class="w-full flex items-center">
        <div class="w-full style-bg-common form-set-list bg-default">
          <div class="flex justify-between w-full">
            <div class="w-full">
              <div class="flex justify-between items-center">
                <div class="form-set-item bh-item-title title-item">
                  Show me on Card Stack
                </div>
                <div>
                  <el-switch
                    v-model="valueCardStack"
                    active-color="#FB5D65"
                    inactive-color="#5F6A86"
                    @change="onChangeCardStack()"
                  >
                  </el-switch>
                </div>
              </div>
              <div class="form-set-item bh-describe">
                If you turn off, you will not be shown in the card stack. People
                you have already liked may still your profile and match with
                you. You can still see and chat with your matches
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "card-stack-page",

  data() {
    return {};
  },

  computed: {
    ...mapGetters({ nameCardStack: "showCardStack" }),
    // Show me on Card Stack
    valueCardStack: {
      get() {
        const cardStack = this.nameCardStack;

        return cardStack;
      },
      set(newName) {
        return newName;
      },
    },
  },

  methods: {
    ...mapMutations(["setCardStack"]),
    onChangeCardStack() {
      const cardStack =
        this.$store.state.userModule.user_profile.settings.toppicksDiscoverable;
      if (cardStack) {
        this.setCardStack(false);
      } else {
        this.setCardStack(true);
      }
    },
  },
};
</script>

<style css scoped></style>
