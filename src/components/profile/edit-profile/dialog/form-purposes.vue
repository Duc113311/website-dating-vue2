<template>
  <div class="w-full h-full">
    <div class="v-modal-bg w-full h-full" @click="onChangeCancel()"></div>
    <div class="w-full absolute top-56 flex justify-center p-5">
      <div
        class="rounded-lg items-center bg-default w-form-life relative p-5 cursor-pointer"
      >
        <div
          class="w-full justify-between flex items-center h-title-close h-form-title"
        >
          <div @click="onChangeCancel()">
            <i class="fa-solid fa-xmark size-icon-default"></i>
          </div>
          <div @click="onChangeSaveInterest()">
            <i class="fa-solid fa-check size-icon-default type-Purposes"></i>
          </div>
        </div>

        <div class="w-full flex justify-center items-center h-form-body">
          <div class="w-full items-center h-full">
            <div class="flex w-full justify-center items-center mb-2">
              <div class="text-center">
                <div class="padding-title">
                  {{ $t("now_i'm_looking_for...") }}
                </div>
                <div>{{ $t("share_the_purpose_to_find_'that_person'") }}</div>
              </div>
            </div>

            <div class="w-full grid gap-3 bg-dating">
              <button
                v-for="(item, index) in listDatingPurposes"
                :key="index"
                class="item-dating"
                :id="item.code"
                @click="onClickPurposes(item)"
              >
                <div class="text-center">
                  <div class="w-full flex justify-center">
                    <img :src="item.url" width="30" />
                  </div>

                  <div class="mt-2">{{ item.value }}</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "form-purposes",

  data() {
    return {
      listPurposes: [
        {
          code: "item_1",
          value: "Beloved",
          url: require("@/assets/icon_dialog/relationship_intent_cupid@1x.png"),
        },
        {
          code: "item_2",
          value: "You are dating for a long time",
          url: require("@/assets/icon_dialog/relationship_intent_heart_eyes@2x.png"),
        },
        {
          code: "item_3",
          value: "Anything possible",
          url: require("@/assets/icon_dialog/relationship_intent_clinking_glasses@1x.png"),
        },
        {
          code: "item_4",
          value: "Unbound relation",
          url: require("@/assets/icon_dialog/relationship_intent_tada@2x.png"),
        },
        {
          code: "item_5",
          value: "New friends",
          url: require("@/assets/icon_dialog/relationship_intent_wave@3x.png"),
        },
        {
          code: "item_6",
          value: "I'm not sure either",
          url: require("@/assets/icon_dialog/relationship_intent_thinking_face@2x.png"),
        },
      ],
      valuePurposes: {},
      purposesValue: {},
    };
  },

  computed: {
    listDatingPurposes() {
      const newData =
        this.$store.state.commonModule.listLifeStyleSingle.datingPurposes;
      debugger;
      for (let index = 0; index < newData.length; index++) {
        const element = newData[index];

        const findData = this.listPurposes.find((x) => x.code === element.code);
        if (findData !== -1) {
          element.url = findData.url;
        }
      }
      return newData;
    },
  },

  methods: {
    ...mapMutations(["setDatingPurposes"]),
    onChangeCancel() {
      this.$emit("onHidePurposes", false);
    },

    onChangeSaveInterest() {
      debugger;
      if (Object.keys(this.valuePurposes).length !== 0) {
        this.setDatingPurposes(this.valuePurposes);
      }

      this.$emit("onHidePurposes", false);
    },

    onClickPurposes(val) {
      console.log(val);
      const listDocument = document.getElementsByClassName("item-dating");

      debugger;

      for (let index = 0; index < listDocument.length; index++) {
        const element = listDocument[index];
        console.log(element);
        if (val.code === element.id) {
          if (val.code !== this.purposesValue) {
            this.valuePurposes = val;
            this.purposesValue = val.code;
            element.classList.add("border-active");
            document.getElementsByClassName("type-Purposes")[0].style.color =
              "#f65a62";
          } else {
            element.classList.remove("border-active");
          }
        } else {
          element.classList.remove("border-active");
        }
      }
    },
  },

  mounted() {
    const newData =
      this.$store.state.userModule.user_profile.profiles.datingPurpose;
    debugger;
    if (newData !== "") {
      this.purposesValue = newData;
      document.getElementById(newData).classList.add("border-active");

      document.getElementsByClassName("type-Purposes")[0].style.color =
        "#f65a62";
    }
  },
};
</script>
<style lang="css">
.item-dating {
  padding: 10px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  border-radius: 10px;
  height: 130px;
}

.list-interest {
  height: calc(100% - 28%);
}
.border-active {
  border: 1.5px solid #fd5d65;
  color: #fd5d65;
}
.remove-active {
  border: none;
  color: #ffffff;
}
.bg-dating {
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
