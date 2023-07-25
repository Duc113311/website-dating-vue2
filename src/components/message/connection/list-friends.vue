<template>
  <div class="w-full">
    <div class="w-full pl-6 pr-6 h-10 mt-6 flex items-center">
      <div class="text-lg mr-3 description-no-padding title-color">
        {{ $t("new_connections") }}
      </div>
      <div class="p-2 txt-number-mes">20</div>
    </div>

    <div class="w-full pl-6 pr-6 list-friend pb-6">
      <div class="flex w-full h-15">
        <div class="item-avatar items-center text-center mr-5">
          <div class="image-detail-dash"></div>
          <div class="mt-3">Likes</div>
        </div>

        <div class="w-full flex">
          <div
            class="item-avatar items-center text-center mr-6"
            v-for="(item, index) in listSearched"
            :key="index"
          >
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
            <div class="mt-3">{{ item.fullname }}</div>
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
  name: "list-friends",

  data() {
    return {
      listSearched: [
        {
          _id: "64366d5a2994952098a18fa0",
          onlineNow: true,
          fullname: "Theresa",
          verifyStatus: true,
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

  methods: {},
};
</script>

<style lang="scss" scoped></style>
