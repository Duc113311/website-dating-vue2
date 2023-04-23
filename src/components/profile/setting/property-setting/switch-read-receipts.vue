<template>
  <div class="w-full flex items-center mt-6">
    <div class="w-full">
      <div class="w-full flex items-center form-set-list">
        <div class="w-full style-bg-common">
          <div class="flex justify-between w-full">
            <div class="w-full">
              <div
                class="form-set-item bh-item-title title-item flex justify-between items-center"
              >
                <div class="">Send Read Receipts</div>
                <div>
                  <el-switch
                    v-model="valueReadReceipts"
                    active-color="#FB5D65"
                    inactive-color="#5F6A86"
                    @change="onChangeReadReceipts()"
                  >
                  </el-switch>
                </div>
              </div>
              <div class="form-set-item bh-describe w-full">
                Turning this off will prevent any matches from activating
                Reading Receipts in your conversation from this moment on
                forward
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
  name: "switch-read-receipts",
  data() {
    return {};
  },

  computed: {
    ...mapGetters({ nameReadReceipts: "showReadReceipt" }),
    // Send Read Receipts
    valueReadReceipts: {
      get() {
        const readReceipts = this.nameReadReceipts;

        return readReceipts;
      },
      set(newName) {
        debugger;
        return newName;
      },
    },
  },

  methods: {
    ...mapMutations(["setReadReceipts"]),
    onChangeReadReceipts() {
      const readReceipts =
        this.$store.state.userModule.user_profile.settings.notiSeenMsg;
      if (readReceipts) {
        this.setReadReceipts(false);
      } else {
        this.setReadReceipts(true);
      }
    },
  },
};
</script>

<style></style>
