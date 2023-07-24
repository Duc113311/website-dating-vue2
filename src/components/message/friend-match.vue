<template>
  <div class="w-full h-full pt-2 pb-2 title-default">
    <div class="w-full pl-3 pr-3">
      <div class="flex w-full bg-input">
        <el-input
          placeholder="Search"
          :prefix-icon="prefixIcon"
          v-model="nameSearch"
          @input="onSearchUser"
        ></el-input>
      </div>
    </div>
    <div v-if="!isShowListFriends">
      <ListFriends></ListFriends>
      <PeopleMessages></PeopleMessages>
    </div>
    <div v-if="isShowListFriends" class="h-full w-fulls">
      <SearchUser :listSearched="listChooses"></SearchUser>
    </div>
  </div>
</template>

<script>
import SearchUser from "./filter/search-user";
import PeopleMessages from "./user-message/people-messages";
import ListFriends from "./connection/list-friends";
export default {
  components: {
    SearchUser,
    PeopleMessages,
    ListFriends,
  },
  name: "friend-match",

  data() {
    return {
      nameSearch: "",
      prefixIcon: "el-icon-search",
      isShowListFriends: false,
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
      listChooses: [],
    };
  },

  computed: {},
  methods: {
    onClickShowChat() {
      this.$router.push({ path: "/chat" });
    },

    onSearchUser() {
      debugger;
      // this.isShowListFriends = true;
      if (!this.nameSearch) {
        this.isShowListFriends = false;
        return this.listSearched;
      }
      this.isShowListFriends = true;
      const keyword = this.nameSearch.toLowerCase().trim();
      this.listChooses = this.listSearched.filter((item) =>
        item.fullname.toLowerCase().includes(keyword)
      );
      return this.listChooses;
    },
  },
};
</script>

<style lang="css">
.dash-message {
  height: 55%;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
}

.dash-message::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}

.bg-input {
  height: 42px;
  padding: 6px;
  border-radius: 10px;
}

.search-input {
  background: none;
  font-size: 19px;
}

.txt-number-mes {
  padding: 0px;
  border-radius: 20px;
  background: #e85759;
  font-size: 11px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.txt-number-title {
  padding: 0px;
  border-radius: 20px;
  background: #e85759;
  font-size: 13px;
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-detail-avatar {
  background-image: url("@/assets/image-dating/0659_photo-1-163186806531842640671.jpg");
  background-position: center;
  background-size: cover;
  border-radius: 53px;
}

.image-detail-dash {
  background-image: url("@/assets/icon/ic_99_likes_dialog.svg");
  background-position: center;
  width: 80px;
  height: 80px;
  background-size: cover;
  border-radius: 53px;
}

.activates {
  border: 2px solid #212735;
  padding: 6px;
}

.list-friend {
  border-bottom: 1px solid #5d62799a;
}

.bg-mess {
  border-bottom: 1px solid #5d62799a;
}

.ic_like {
  padding: 5px;
  background: #f5af12;
  border-radius: 4px;
  font-size: 10px;
}
</style>
