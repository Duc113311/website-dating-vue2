<template>
  <div class="w-full h-full">
    <div class="v-modal-bg w-full h-full" @click="onChangeCancel()"></div>
    <div class="w-full absolute top-56 flex justify-center p-5">
      <div
        class="rounded-lg items-center w-form-life relative p-5 cursor-pointer"
      >
        <div class="w-full justify-between flex items-center h-title-close">
          <div @click="onChangeCancel()">
            <i class="fa-solid fa-xmark size-icon-default"></i>
          </div>
          <div @click="onChangeSaveInterest()">
            <i class="fa-solid fa-check size-icon-default"></i>
          </div>
        </div>

        <div class="w-full flex justify-center items-center">
          <div class="w-full items-center h-full">
            <div class="flex w-full justify-center items-center mb-2">
              <div class="text-center">
                <div class="padding-title">Bây giờ mình đang tìm...</div>
                <div>Chia sẻ mục đích để tìm được "người ấy"</div>
              </div>
            </div>

            <div class="w-full grid gap-3 bg-dating">
              <button
                v-for="(item, index) in listPurposes"
                :key="index"
                class="item-dating"
                :id="item.code"
                @click="onClickPurposes(item.code)"
              >
                <div class="text-center">
                  <div class="w-full flex justify-center">
                    <img :src="item.url" width="30" />
                  </div>

                  <div class="mt-2">{{ item.name }}</div>
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
export default {
  name: "form-purposes",

  data() {
    return {
      listPurposes: [
        {
          code: "item_1",
          name: "Người yêu",
          url: require("@/assets/icon_dialog/relationship_intent_cupid@1x.png"),
        },
        {
          code: "item_2",
          name: "Bạn hẹn hò lâu dài",
          url: require("@/assets/icon_dialog/relationship_intent_heart_eyes@2x.png"),
        },
        {
          code: "item_3",
          name: "Bất kỳ điều gì có thể",
          url: require("@/assets/icon_dialog/relationship_intent_clinking_glasses@1x.png"),
        },
        {
          code: "item_4",
          name: "Quan hệ không ràng buộc",
          url: require("@/assets/icon_dialog/relationship_intent_tada@2x.png"),
        },
        {
          code: "item_5",
          name: "Những người bạn mới",
          url: require("@/assets/icon_dialog/relationship_intent_wave@3x.png"),
        },
        {
          code: "item_6",
          name: "Mình cũng chưa rõ lắm",
          url: require("@/assets/icon_dialog/relationship_intent_thinking_face@2x.png"),
        },
      ],
    };
  },

  methods: {
    onChangeCancel() {
      this.$emit("onHidePurposes", false);
    },

    onChangeSaveInterest() {
      this.$emit("onSavePurposes", false);
    },

    onClickPurposes(val) {
      console.log(val);
      const listDocument = document.getElementsByClassName("item-dating");
      debugger;
      for (let index = 0; index < listDocument.length; index++) {
        const element = listDocument[index];
        console.log(element);
        if (val === element.id) {
          element.classList.add("border-active");
        } else {
          element.classList.remove("border-active");
        }
      }
    },
  },
};
</script>
<style lang="css">
.item-dating {
  padding: 10px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  border-radius: 10px;
  background-color: #4c5468;
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
