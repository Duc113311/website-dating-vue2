<template>
  <div class="bg-image w-full h-full">
    <div class="w-full h-full p-5">
      <div class="header-bg w-full flex items-center">
        <BhBack @onBackComponent="onBackBlindDate()"></BhBack>
      </div>
      <div class="content-bg justify-center flex items-center">
        <div class="w-full text-center">
          <!-- Nội dung ở đây -->
          <div class="flex justify-center items-center w-full mb-8">
            <div class="content w-96">
              <i class="fa-solid fa-circle-question icon-date"></i>
              <div class="text-description">{{ $t("share_idea") }}</div>
              <p class="text-note">
                {{
                  $t(
                    "answer_tough_questions_instead_of_opening_sentences!_your_responses_will_appear_on_the_blind_date_interface_and_can_be_used_to_start_a_conversation"
                  )
                }}
              </p>
            </div>
          </div>
          <div class="flex justify-center items-center w-full mb-8">
            <div class="content w-96">
              <i class="fa-solid fa-circle-question icon-date"></i>
              <div class="text-description">{{ $t("get_ready") }}</div>
              <p class="text-note">
                {{
                  $t(
                    "questions_and_chat_time_are_limited,_so_think_and_answer_quickly"
                  )
                }}
              </p>
            </div>
          </div>
          <div class="flex justify-center items-center w-full">
            <div class="content w-96">
              <i class="fa-solid fa-circle-question icon-date"></i>
              <div class="text-description">
                {{ $t("compatible_to_view_profiles") }}
              </div>
              <p class="text-note">
                {{
                  $t(
                    "after_the_chat_is_over,_you'll_see_the_person's_profile_if_you_both_match"
                  )
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bg w-full">
        <div><BhJoin @onNextBlindOption="onNextBlindOption"></BhJoin></div>
        <div><BhNothank @onHideMayBeLater="onHideMayBeLater"></BhNothank></div>
      </div>
    </div>
  </div>
</template>

<script>
import BhNothank from "../../../components/bh-element-ui/button/bh-nothank";
import BhJoin from "../../../components/bh-element-ui/button/bh-join";
import BhBack from "../../../components/bh-element-ui/button/bh-back";
export default {
  name: "blind-page",
  components: {
    BhNothank,
    BhJoin,
    BhBack,
  },
  data() {
    return {};
  },

  methods: {
    onBackBlindDate() {
      this.$router.go(-1);
    },

    onHideMayBeLater() {
      this.$router.go(-1);
    },

    onNextBlindOption() {
      this.$router.push({ path: "/filter-date" });
    },
  },
};
</script>

<style lang="css">
.bg-image {
  background-image: url("@/assets/image-dating/bg_blind_date\ \(2\).png");
  z-index: 99;
  padding-right: 0px !important;
  padding-left: 0px !important;
  background-size: cover;
  position: relative;
}

.header-bg {
  height: 10%;
}

.content-bg {
  height: 75%;
}

.footer-bg {
  height: calc(100% - 85%);
}

.icon-date {
  font-size: 34px;
}
</style>
