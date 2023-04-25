<template>
  <div>
    <!--  -->
    <div class="w-full flex items-center">
      <div class="w-full">
        <div class="w-full flex bh-title items-center p-3">
          <div class="form-set-item">CONTROL WHO YOU SEE</div>
          <div class="ml-3">
            <div class="style-package">Sliver package</div>
          </div>
        </div>
        <div class="w-full flex items-center form-set-list bg-default">
          <div class="w-full">
            <div
              class="flex justify-between w-full form-set-item items-center bd-input"
            >
              <div class="w-full">
                <div class="bh-item-title">Balance recommendations</div>
                <div class="bh-describe">
                  See the most relevant people to you (default settings)
                </div>
              </div>
              <div v-if="valueIncognitoMode">
                <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
              </div>
            </div>

            <div class="flex justify-between w-full form-set-item items-center">
              <div class="w-full">
                <div class="bh-item-title">Recently Active</div>
                <div class="bh-describe">
                  See the most recently active people first
                </div>
              </div>
              <div v-if="!valueIncognitoMode">
                <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full flex items-center">
      <div class="w-full">
        <div class="w-full flex bh-title p-3 items-center">
          <div class="form-set-item">CONTROL WHO YOU SEE</div>
          <div class="ml-3">
            <div class="style-package">Sliver package</div>
          </div>
        </div>
        <div class="w-full flex items-center form-set-list bg-default">
          <div class="w-full">
            <div
              class="flex justify-between w-full bd-input form-set-item items-center"
            >
              <div class="w-full">
                <div class="bh-item-title title-item">Standard</div>
                <div class="bh-describe">
                  Only be shown to certain types of people for individual
                  recommendations
                </div>
              </div>
              <div v-if="!valueIncognitoMode">
                <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
              </div>
            </div>

            <div class="flex justify-between w-full form-set-item items-center">
              <div class="w-full">
                <div class="bh-item-title title-item">
                  Only people I've liked
                </div>
                <div class="bh-describe">
                  Only people you have liked will see me
                </div>
              </div>
              <div v-if="valueIncognitoMode">
                <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "control-see-page",
  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      nameIncognitoMode: "showIncognitoMode",
    }),
    // nameIncognitoMode
    valueIncognitoMode: {
      get() {
        const incognitoMode = this.nameIncognitoMode;

        return incognitoMode;
      },
      set(newName) {
        return newName;
      },
    },
  },

  methods: {},
};
</script>

<style css scoped></style>
