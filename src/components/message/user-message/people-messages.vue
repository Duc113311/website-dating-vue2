<template>
  <div class="w-full">
    <div class="w-full pl-6 pr-6 h-10 mt-6 flex items-center">
      <div class="text-lg mr-3 description-no-padding title-color">
        {{ $t("messages") }}
      </div>
      <div class="p-2 txt-number-mes">1</div>
    </div>

    <div class="w-full mt-3 dash-message">
      <div class="w-full flex items-center h-20 mt-4">
        <div class="w-1/5 p-6">
          <div class="image-detail-avatar relative avatar-like">
            <div class="absolute bottom-0 right-0.5">
              <BhActivateLike></BhActivateLike>
            </div>
          </div>
        </div>
        <div class="w-4/5 ml-8 h-full bg-mess">
          <div class="w-full">
            Trang <span class="ic_like ml-3">{{ $t("likes_you") }}</span>
          </div>
          <div class="mt-1 description-no-padding title-color">
            {{ $t("recently_active") }}
          </div>
        </div>
      </div>
      <div
        class="w-full flex items-center h-20 mt-4 cursor-pointer"
        v-for="(item, index) in listSearched"
        :key="index"
      >
        <div class="w-1/5 p-6" @click="onClickFilterMessage(item)">
          <div
            class="image-detail-avatar relative"
            :style="{
              'background-image': `url(${item.profiles.avatars[0]})`,
            }"
          >
            <div class="absolute bottom-0 right-0.5">
              <BhActivateLike></BhActivateLike>
            </div>
          </div>
        </div>
        <div class="w-4/5 ml-8 h-full bg-mess relative">
          <div class="flex items-center">
            <div>{{ item.fullname }}</div>
            <img
              v-if="item.verifyStatus"
              src="../../../assets/icon//ic_verified_enable.svg"
            />
          </div>
          <div class="mt-1 description-no-padding title-color text-message">
            {{ item.message }}
          </div>
          <div
            class="absolute right-4 top-4 p-2 txt-number-title"
            v-if="item.unreadMessages !== 0"
          >
            {{ item.unreadMessages }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BhActivateLike from "../../bh-element-ui/button/bh-activateLike";
export default {
  components: { BhActivateLike },
  name: "people-messages",

  data() {
    return {
      listSearched: [
        {
          _id: "64366d5a2994952098a18fa0",
          onlineNow: true,
          fullname: "Theresa",
          verifyStatus: true,
          message: "Xin chào",
          unreadMessages: 10,
          profiles: {
            avatars: [
              "https://images-ssl.gotinder.com/5d540daa21695e1400d418fa/original_2483c2f5-41ee-47f0-b102-aae96d70d4c1.jpeg",
              "https://images-ssl.gotinder.com/5d540daa21695e1400d418fa/original_9c9abdf5-1916-4e43-9623-f9c83796f8fe.jpeg",
              "https://images-ssl.gotinder.com/5d540daa21695e1400d418fa/original_224870bb-0185-4f3d-aa57-6bfab388bba0.jpeg",
            ],
          },
        },
        {
          _id: "643674292994952098a19c7e",
          onlineNow: false,
          fullname: "A Ying",
          verifyStatus: true,
          unreadMessages: 1,
          message: "Ghê vậy sao",
          profiles: {
            avatars: [
              "https://images-ssl.gotinder.com/6380b48083aa9b01007c222d/original_4a5ce0de-d182-47b5-8a10-97ea1342fe35.jpeg",
              "https://images-ssl.gotinder.com/6380b48083aa9b01007c222d/original_50f3bfc8-a10b-4480-9166-79144ad2a611.jpeg",
              "https://images-ssl.gotinder.com/6380b48083aa9b01007c222d/original_10d36de9-a27a-48cc-873f-2a3d36468f65.jpeg",
              "https://images-ssl.gotinder.com/6380b48083aa9b01007c222d/original_e6ee5663-4fa8-4bb5-9c38-130a126a91ae.jpeg",
              "https://images-ssl.gotinder.com/6380b48083aa9b01007c222d/original_3c196ba6-87cf-47a3-8e8c-de87f20b6313.jpeg",
            ],
          },
        },
        {
          _id: "643675412994952098a19cfe",
          onlineNow: false,
          fullname: "phuong linh",
          verifyStatus: false,
          message:
            "Ôi hoàng tử hãy tha thứ cho người em gái bị dính lời nguyền đọc này với ạ em không muốn chết đâu ạ",
          unreadMessages: 0,
          profiles: {
            avatars: [
              "https://images-ssl.gotinder.com/640355c67a2fd00100688d66/original_94b9b428-eac8-423d-8be0-436589357e5d.jpeg",
              "https://images-ssl.gotinder.com/640355c67a2fd00100688d66/original_258a5b1c-479f-442c-9fe5-46a899d0767e.jpeg",
              "https://images-ssl.gotinder.com/640355c67a2fd00100688d66/original_bbb278a9-47d3-49e4-8551-1634afb2b8f5.jpeg",
            ],
          },
        },
      ],
    };
  },

  mounted() {},

  methods: {
    onClickFilterMessage(val) {
      debugger;
      this.$router.push({ path: `/chat/${val._id}` }).catch(() => {});
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar-like {
  background-image: url("../../../assets/image-dating//84x106_5026f25d-07a8-41fa-9ce7-43f80d55a42e.jpg");
}

.text-message {
  -webkit-line-clamp: 2;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  width: 20rem;
}
</style>
