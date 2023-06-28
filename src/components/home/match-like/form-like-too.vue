<template>
  <div
    class="w-full relative image-say overflow-hidden"
    :style="`background-image: url('${urlImage}');height:100%;`"
  >
    <div class="bg-background-shadow w-full h-full absolute top-0 left-0"></div>
    <div
      class="overflow-hidden absolute h-full w-full p-5 top-0 left-0"
      :class="[valueShowInputMes ? 'grid-send' : 'grid-confirm']"
    >
      <div class="w-full mt-4">
        <img
          class="cursor-pointer"
          src="@/assets/icon/ic_closed_dark.svg"
          alt=""
          srcset=""
          @click="onHideMatchUser"
        />
      </div>
      <div class="w-full relative">
        <div
          class="flex justify-center absolute left-0 w-full top-0 content-center p-0.5 border-solid mt-3"
        >
          <button
            v-for="(data, index) in btUrlImage"
            :key="index"
            @click="onClickNextImage(data)"
            class="bt-img p-0.5 rounded-lg mr-0.5"
          ></button>
        </div>
      </div>

      <div class="w-full mt-28 text-center flex justify-center content-center">
        <div class="text-infor">
          <div v-if="theyValue" class="they mb-2">
            <img src="@/assets/image-dating/ic_they.svg" alt="" />
          </div>
          <div v-if="likeYouValue" class="like_you">
            <img src="@/assets/image-dating/ic_like_you.svg" alt="" />
          </div>
          <div v-if="tooValue" class="too mt-5">
            <img src="@/assets/image-dating/ic_too.svg" alt="" />
          </div>
        </div>
      </div>

      <div
        v-if="valueShowInputMes"
        class="w-full absolute bottom-0 left-0 mb-4"
      >
        <div class="w-full flex justify-center">
          <div class="flex justify-center dad-input">
            <input
              type="text"
              v-model="txtValueMes"
              placeholder="Say something nice"
              class="input-mes"
              id="11"
              ref="id2"
            />
            <button
              class="bt-send cursor-pointer"
              @click="onClickSendMessage()"
            >
              SEND
            </button>
          </div>
        </div>

        <div class="flex justify-center gap-5 content-center mt-3">
          <div
            class="style-icon cursor-pointer"
            id="ic_01"
            @click="onClickSendIcon('ic_01')"
          >
            😉
          </div>
          <div
            class="style-icon cursor-pointer"
            id="ic_02"
            @click="onClickSendIcon('ic_02')"
          >
            👋
          </div>
          <div
            class="style-icon flex justify-center cursor-pointer"
            @click="onClickSendIcon"
          >
            <img src="@/assets/icon/ic_home_tab.svg" alt="" srcset="" />
          </div>
          <div
            id="ic_04"
            class="style-icon cursor-pointer"
            @click="onClickSendIcon('ic_04')"
          >
            😍
          </div>
        </div>
      </div>

      <div
        v-if="valueHideConfirm"
        class="w-full h-96 absolute bottom-0 left-0 p-3"
      >
        <div class="w-full h-full form-sending p-5">
          <div class="flex justify-end pt-2 pb-2 items-end text-right w-full">
            <img
              src="@/assets/icon/ic_closed_dark.svg"
              class="cursor-pointer"
              alt=""
              srcset=""
            />
          </div>
          <div class="w-full h-24 flex justify-center items-centerD">
            <div class="avatar-send">
              <div
                class="image-user"
                :style="`background-image: url('${urlImage}')`"
              ></div>
            </div>
          </div>

          <div
            class="w-full text-xl text-white mt-5 mb-5 flex justify-center items-center"
          >
            You are sending {{ fullName }}: {{ txtValueMes }}
          </div>

          <div class="w-full flex justify-center p-2">
            <BhConfirm
              @onChangeConfirm="onChangeConfirm"
              :nameTitle="nameTitle"
            ></BhConfirm>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import BhConfirm from "../../bh-element-ui/button/bh-comfirm";
export default {
  components: { BhConfirm },
  name: "form-like-too",

  data() {
    return {
      isShowConfirm: true,
      nameComfirm: "Comfirm",
      isHideConfirm: false,
      txtValueMes: "",
      nameTitle: "Confirm",

      avatarDefault: require("@/assets/image-dating/default.png"),
      theyValue: false,
      likeYouValue: false,
      tooValue: false,
    };
  },

  computed: {
    colorBt() {
      return this.$store.state.commonModule.statusLayout;
    },
    valueShowInputMes() {
      return this.$store.state.commonModule.isShowInputMes;
    },
    valueHideConfirm() {
      return this.$store.state.commonModule.isHideConfirm;
    },
    urlImage() {
      return this.$store.state.homeModule.userMatchData?.profiles?.avatars[0]
        ? this.$store.state.homeModule.userMatchData?.profiles?.avatars[0]
        : this.avatarDefault;
    },

    fullName() {
      return this.$store.state.homeModule.userMatchData?.fullname
        ? this.$store.state.homeModule.userMatchData?.fullname
        : "";
    },

    btUrlImage() {
      return this.$store.state.homeModule.userMatchData?.profiles?.avatars;
    },
  },

  methods: {
    ...mapMutations(["setHideConfirm"]),

    onHideMatchUser() {
      this.$emit("onHideLikeYou", false);
    },
    onClickNextImage() {},
    onClickSendIcon(value) {
      debugger;
      this.txtValueMes = document
        .getElementById(value)
        .innerHTML.split(" ")
        .join("");
      debugger;
      console.log(value);
    },
    onClickSendMessage() {
      this.isHideConfirm = true;
      this.setHideConfirm(true);
      this.isShowConfirm = true;
    },

    onChangeConfirm(val) {
      this.txtValueMes = "";
      this.setHideConfirm(false);
      this.$emit("onHideLikeYou", val);
    },

    onHideMatch() {
      this.setHideConfirm(false);

      this.$emit("onHideLikeYou", false);
    },
  },

  mounted() {
    setTimeout(() => {
      this.theyValue = true;
    }, 500);
    setTimeout(() => {
      this.likeYouValue = true;
    }, 1000);
    setTimeout(() => {
      this.tooValue = true;
    }, 1500);
  },
};
</script>

<style lang="css">
.they {
  -webkit-animation: they 0.3s cubic-bezier(0.95, 0.05, 0.795, 0.035) both;
  animation: they 0.3s cubic-bezier(0.95, 0.05, 0.795, 0.035) both;
}
@-webkit-keyframes they {
  0% {
    -webkit-transform: scale(3);
    transform: scale(3);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes they {
  0% {
    -webkit-transform: scale(3);
    transform: scale(3);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
.like_you {
  -webkit-animation: like_you 0.3s cubic-bezier(0.95, 0.05, 0.795, 0.035) both;
  animation: like_you 0.3s cubic-bezier(0.95, 0.05, 0.795, 0.035) both;
}
@-webkit-keyframes like_you {
  0% {
    -webkit-transform: scale(3);
    transform: scale(3);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes like_you {
  0% {
    -webkit-transform: scale(3);
    transform: scale(3);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
.too {
  -webkit-animation: too 0.3s cubic-bezier(0.95, 0.05, 0.795, 0.035) both;
  animation: too 0.3s cubic-bezier(0.95, 0.05, 0.795, 0.035) both;
}
@-webkit-keyframes too {
  0% {
    -webkit-transform: scale(3);
    transform: scale(3);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes too {
  0% {
    -webkit-transform: scale(3);
    transform: scale(3);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

.image-say {
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 10px;
}
.grid-send {
  grid-template-rows: 1fr 0fr 18fr 3fr;
}
.grid-confirm {
  grid-template-rows: 1fr 0fr 12fr 9fr;
}

.text-infor {
  margin-top: 90px;
  font-style: italic;
  font-weight: bold;
  text-align: justify;
  color: yellow;
}

.dad-input {
  width: 90%;
  border-radius: 24px;
  overflow: hidden;
}
.text-send {
  width: 80%;
  padding: 9px 22px;
}
.bt-send {
  width: 20%;
  background-color: white;
  color: red;
  font-weight: bold;
}
.style-icon {
  background-color: #464a53;
  width: 90px;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  padding: 7px;
  font-size: 23px;
}

.bg-background-shadow {
  background: linear-gradient(
    0deg,
    rgb(14 21 21 / 92%) 9%,
    rgb(210 182 182 / 57%) 29%,
    rgb(248 242 242 / 0%) 99%
  );
}

.image-user {
  background-image: url("@/assets/image-dating/7-15831080159232071706060.webp");
  width: 100%;
  background-position: center;
  background-size: cover;
  height: 100%;
  border-radius: 60px;
}

.form-sending {
  background-color: #434a5d;
  border-radius: 15px;
}

.avatar-send {
  width: 95px;
  padding: 6px;
  border-radius: 50px;
  border: 4px solid #fd5d65;
}

.input-mes {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  /* border-radius: 4px; */
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}
</style>
