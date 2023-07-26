<template>
  <div class="content-chat overflow-hidden relative">
    <div class="h-full overflow-scroll height-scroll" ref="chatContainer">
      <div v-for="(message, index) in messages" :key="index">
        <div
          class="w-full"
          v-if="
            message.sender === 'user1' &&
            (message.content !== '' || message.url)
          "
        >
          <div class="time">{{ message.timestamp }}</div>
          <div class="w-full" v-if="message.url">
            <div class="img_message_me flex justify-end pr-6">
              <img :src="message.url" alt="" />
            </div>
          </div>
          <div class="flex justify-end pr-6" v-if="message.content !== ''">
            <span v-if="message.content !== '👋'" class="message-me w-72 flex">
              {{ message.content }}
            </span>
            <span v-else class="message-wave">
              {{ message.content }}
            </span>
          </div>
        </div>
        <div
          v-if="
            message.sender === 'user3' &&
            (message.content !== '' || message.url)
          "
          class=""
        >
          <div class="time">{{ message.timestamp }}</div>
          <div class="flex w-full items-center">
            <div class="w-1/6 flex justify-center items-center">
              <div class="image-avatar ml-4 mr-4"></div>
            </div>
            <div class="w-5/6">
              <div v-if="message.url">
                <div class="img_message_you mb-4">
                  <img :src="message.url" alt="" />
                </div>
              </div>
              <div class="w-10/12" v-if="message.content !== ''">
                <span v-if="message.content !== '👋'" class="message_your">
                  {{ message.content }}
                </span>
                <span v-else class="message-wave">
                  {{ message.content }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-show="urlImageChose.length !== 0"
      class="w-full bg-image-chose absolute bottom-0 h-28 left-0"
    >
      <div class="w-full flex items-center h-full pl-2">
        <div
          class="image-chose relative"
          v-for="(item, index) in urlImageChose"
          :key="index"
          :style="{
            'background-image': `url(${item})`,
          }"
        >
          <div class="absolute ic-remove-img">
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "have-message",

  data() {
    return {
      urlImageChose: [],
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
    };
  },

  mounted() {
    this.scrollToBottom();
  },

  methods: {
    scrollToBottom() {
      this.$refs.chatContainer.scrollTop =
        this.$refs.chatContainer.scrollHeight;
    },
  },
};
</script>

<style lang="scss" scoped></style>
