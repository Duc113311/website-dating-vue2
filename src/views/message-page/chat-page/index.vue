<template>
  <div class="w-full h-full relative bg-theme">
    <div class="chat w-full h-full">
      <div class="header-chat bd-input flex justify-center pl-3 pr-3">
        <div class="w-full justify-between flex items-center">
          <div class="h-left w-full flex items-center">
            <div><BhBack @onBackComponent="onBackComponent"></BhBack></div>

            <div class="avatar-user ml-6 mr-6"></div>

            <div class="flex items-center">
              <div class="name-user font-describe">Trinh</div>
              <div class="ic-verify">
                <img src="@/assets/icon/ic_verified_enable.svg" />
              </div>
            </div>
          </div>
          <div class="h-right flex items-center w-full justify-end">
            <img
              src="@/assets/icon/ic_video_call.svg"
              width="30"
              alt="icon-camera"
            />
            <img
              class="ml-6"
              width="30"
              src="@/assets/icon/ic_safety (1).svg"
              alt="icon-report"
            />
          </div>
        </div>
      </div>

      <!-- Body -->
      <HaveMessage></HaveMessage>
      <!-- <NoMessage></NoMessage> -->

      <!-- Footer -->
      <div class="footer-chat pt-2">
        <div class="w-full flex justify-center items-center">
          <div class="camera-page w-1/6 flex justify-center items-center">
            <div class="p-2 bg-slate-500 rounded-full cursor-pointer">
              <label for="file-image">
                <i class="fa-solid fa-image size-icon"></i
              ></label>
              <input
                type="file"
                id="file-image"
                multiple
                ref="fileInput"
                class="hidden pr-5"
                @change="previewImagezs($event)"
              />
            </div>
          </div>
          <div class="w-5/6 flex justify-center items-center relative">
            <div class="w-full">
              <el-input
                class="your-name digit-box padding-input bg-default"
                ref="input_focus"
                maxlength="50"
                v-model="valueMessage"
                :placeholder="$t('your_name')"
              />
            </div>
            <div v-if="previewVisible" class="preview-modal">
              <picker
                class="picker"
                :native="true"
                :title="My_Emoji_Picker"
                :emoji="point_up"
                :emojiSize="21"
                :perLine="8"
                @select="handleEmojiSelect"
              />
            </div>
            <div class="absolute right-4 cursor-pointer">
              <i class="fa-regular fa-face-smile size-icon"></i>
            </div>
          </div>
          <div
            @click="onSendMessage"
            class="icon-hello w-1/6 flex justify-center items-center cursor-pointer"
          >
            <span class="size-icon-hello"> 👋 </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import NoMessage from "../../../components/message/form/no-message";
import HaveMessage from "../../../components/message/form/have-message";
import BhBack from "../../../components/bh-element-ui/button/bh-back";
// import BhBack from "../../components/bh-element-ui/button/bh-back";
import { Picker } from "emoji-mart-vue";

import { refData, setData, database } from "../../../configs/firebase.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default {
  name: "chat-page",
  components: {
    // NoMessage,
    HaveMessage,
    BhBack,
    // BhBack,
    Picker,
  },
  data() {
    return {
      valueMessage: "",
      userInfo: {
        name: "girl friend",
        avatar: require("@/assets/image-dating/0659_photo-1-163186806531842640671.jpg"),
        confirm: require("@/assets/icon/ic_verified_enable.svg"),
      },
      previewVisible: false,

      messages: [
        {
          sender: "user1",
          content:
            "Hello how are you today, What are about , how many people are the",
          timestamp: "Wed 27 Jul 09:45",
          url: "https://firebasestorage.googleapis.com/v0/b/heartlink-dating-project.appspot.com/o/dating%2F0001-658x1024-1.jpg?alt=media&token=8dd66dbe-cdd4-4908-8943-f0f21a30eea2",
        },
        {
          sender: "user3",
          content:
            "Hello dasda sda asadas dasd asdasd asdeqwrw4 4ryfg 5tyu56 6erhergv43t fgsdgwert34vt",
          timestamp: "Thurs 28 Jul 19:45",
          url: "https://firebasestorage.googleapis.com/v0/b/heartlink-dating-project.appspot.com/o/dating%2F0001-658x1024-1.jpg?alt=media&token=8dd66dbe-cdd4-4908-8943-f0f21a30eea2",
        },
        {
          sender: "user1",
          content: "Helloasd asd asdas dasdasd asdas",
          timestamp: "Thurs 28 Jul 19:45",
          url: "",
        },
        {
          sender: "user1",
          content: "Helloasd asdas dasd asd asdasda",
          timestamp: "Thurs 28 Jul 19:45",
          url: "",
        },
        {
          sender: "user3",
          content: "Hello grtbyhrtb u46 hfghfg g",
          timestamp: "Thurs 28 Jul 19:45",
          url: "",
        },
      ],

      urlImageChose: [],
      urlImageUpdated: [],
    };
  },

  computed: {},

  methods: {
    async previewImages() {
      const imageFiles = event.target.files;
      for (let index = 0; index < imageFiles.length; index++) {
        const element = imageFiles[index];
        const imageConvert = URL.createObjectURL(element);
        this.urlImageChose.push(imageConvert);
        await this.onUpdateLoadImage(element);
      }
    },

    onBackComponent() {
      this.$router.go(-1);
    },

    async onUpdateLoadImage(val) {
      const storage = getStorage();
      const storageRef = ref(storage, "dating/" + val.name);
      await uploadBytes(storageRef, val).then((snapshot) => {
        console.log("Uploaded a blob or file!");
        console.log(snapshot);
      });

      await getDownloadURL(storageRef, val).then((url) => {
        const dataImage = {
          url: url,
        };

        this.urlImageUpdated.push(url);
        console.log(dataImage);
      });
    },

    onSendMessage() {
      const userId1 = "use03";
      const userId2 = "use04";
      debugger;
      // const images = this.urlImageUpdated;
      // setData(refData(database, "messages/" + `${userId1}_${userId2}`), {
      //   username: "sadsas",
      //   content: this.valueMessage,
      //   profile_picture: images,
      // });
    },
  },
  mounted() {},
  created() {},
};
</script>

<style lang="css">
.bg-theme {
  background-color: #242a38;
}

.header-chat {
  height: 10%;
}

.content-chat {
  height: 80.5%;
}

.footer-chat {
  height: calc(100% - 92.5%);
}

.avatar-user {
  background-image: url("@/assets/image-dating/0659_photo-1-163186806531842640671.jpg");
  background-position: center;
  background-size: cover;
  border-radius: 53px;
  width: 50px;
  height: 50px;
}

.image-avatar {
  background-image: url("@/assets/image-dating/0659_photo-1-163186806531842640671.jpg");
  background-position: center;
  background-size: cover;
  border-radius: 53px;
  width: 50px;
  height: 50px;
}
.img_message_me img {
  width: 150px;
  border-radius: 12px 12px 4px 12px;
}

.img_message_you img {
  width: 150px;
  border-radius: 12px 12px 12px 4px;
}
.header {
  display: flex;
  /* Thêm thuộc tính hiển thị flex để các phần tử con trong header có thể dễ dàng được căn chỉnh */
  align-items: center;
  /* Căn giữa các phần tử theo chiều dọc */
  padding: 10px;
  /* Thêm phần đệm giữa nội dung và khung của header */
  border-bottom: 1px solid #3c3f50;
  /* Thêm đường viền dưới cùng cho header */
  height: 8%;
}

.info .confirm {
  width: 30px;
  height: 30px;
}

.utilities img {
  width: 30px;
  /* Thêm kích thước cho các biểu tượng tiện ích */
  height: 30px;
  margin-left: 10px;
  /* Thêm phần đệm giữa các biểu tượng tiện ích */
  cursor: pointer;
  /* Thêm hiệu ứng con trỏ tay khi di chuột qua các biểu tượng tiện ích */
  padding-left: 15px;
}

.content-chat::-webkit-scrollbar {
  width: 0px;
  /* Ẩn thanh cuộn mặc định trên Chrome/Safari */
  height: 0px;
}

.content-me {
  margin-top: 20px;
  padding: 10px;
  margin-left: auto;
  width: 50%;
}

.time {
  margin-top: 20px;
  font-size: 15px;
  color: #757a8d;
  text-align: center;
}

.message-me {
  background-color: #fd5d65;
  border-radius: 20px 0px 20px 20px;
  word-wrap: break-word;
  margin-top: 20px;
  padding: 10px;
}

.message-wave {
  margin-top: 20px;
  text-align: right;
  font-size: 60px;
}

/*Bạn*/
.content-your {
  margin-top: 20px;
  padding: 10px;
  margin-right: auto;
  width: 60%;
}

.avatar_your {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.message_your {
  background-color: white;
  border-radius: 0px 20px 20px 20px;
  padding: 10px;
  margin-right: auto;
  word-wrap: break-word;
  color: black;
  display: inline-block;
}
.message-wave {
  margin-top: 20px;
  text-align: right;
  font-size: 60px;
}

.el-textarea__inner {
  background-color: #495063 !important;
  border: 1px solid #495063 !important;
  border-radius: 10px !important;
  padding: 13px !important;
  font-size: 15px !important;
  height: 50px !important;
  color: #ffffff !important;
}

.textarea-input {
  background-color: #495063;
  border: 1px solid #495063;
  padding: 12px;
  border-radius: 30px;
}

.preview-modal {
  position: absolute;
  bottom: 3.5rem;
  left: 5rem;
  cursor: pointer;
}
.emoji-mart-preview {
  display: none;
}

.emoji-mart-scroll::-webkit-scrollbar {
  display: none;
}
.emoji-mart-scroll {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.image-chose {
  width: 82px;
  height: 92px;
  background-repeat: repeat;
  background-position: 0;
  background-size: cover;
  border-radius: 10px;
  margin-right: 10px;
}

.bg-image-chose {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.7588822578235659) 0%,
    rgba(255, 255, 255, 0.6682306997499114) 100%,
    rgba(255, 255, 255, 0.7050578952173336) 100%
  );
}

.ic-remove-img {
  background-color: red;
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 17px;

  top: -5px;
  right: -5px;
}
</style>
