<template>
  <div>
    <!--  -->
    <div class="w-full flex items-center">
      <div class="w-full">
        <div class="w-full flex bh-title items-center p-3">
          <div class="">{{ $t("control_who_you_see") }}</div>
          <div class="ml-3 mr-3">
            <div class="style-package-big-size">{{ $t("sliver_package") }}</div>
          </div>
        </div>
        <div class="w-full flex items-center form-set-list bg-default">
          <div class="w-full">
            <div class="flex justify-between w-full items-center border-bottom">
              <div class="w-full">
                <div class="bh-item-title">
                  {{ $t("balance_recommendations") }}
                </div>
                <div class="bh-describe">
                  {{
                    $t("see_the_most_relevant_people_to_you_(default_settings)")
                  }}
                </div>
              </div>
              <div v-if="valueIncognitoMode">
                <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
              </div>
            </div>

            <div class="flex justify-between w-full items-center">
              <div class="w-full">
                <div class="bh-item-title">{{ $t("recently_active") }}</div>
                <div class="bh-describe">
                  {{ $t("see_the_most_recently_active_people_first") }}
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
          <div class="">{{ $t("control_who_you_see") }}</div>
          <div class="ml-3 mr-3">
            <div class="style-package-big-size">{{ $t("sliver_package") }}</div>
          </div>
        </div>
        <div class="w-full flex items-center form-set-list bg-default">
          <div class="w-full">
            <div class="flex justify-between w-full border-bottom items-center">
              <div class="w-full">
                <div class="bh-item-title title-item">{{ $t("standard") }}</div>
                <div class="bh-describe">
                  {{
                    $t(
                      "only_be_shown_to_certain_types_of_people_for_individual_recommendations"
                    )
                  }}
                </div>
              </div>
              <div v-if="!valueIncognitoMode">
                <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
              </div>
            </div>

            <div class="flex justify-between w-full items-center">
              <div class="w-full">
                <div class="bh-item-title title-item">
                  {{ $t("only_people_i've_liked") }}
                </div>
                <div class="bh-describe">
                  {{ $t("only_people_you_have_liked_will_see_me") }}
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
  name: "ctrl-radio-text",
  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      nameIncognitoMode: "showIncognitoMode",
    }),
    // nameIncognitoModeD
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
