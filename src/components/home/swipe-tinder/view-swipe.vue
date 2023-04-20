<template>
  <div
    class="w-full h-full relative"
    @mousedown="onMouseDow"
    @mouseup="onMouseUp"
  >
    <Tinder
      v-if="!isLoadData"
      class="uis"
      ref="tinder"
      key-name="_id"
      :queue.sync="listDataUser"
      :offset-y="10"
      @submit="onSubmit"
    >
      <template slot-scope="scope">
        <div
          v-show="isActiveImag"
          class="pic z-8"
          :style="{
            'background-image': `url(${scope.data.profiles.avatars[0]})`,
          }"
        />
        <div
          v-show="!isActiveImag"
          class="pic z-8 ss"
          :style="{
            'background-image': `url(${idImage}
            )`,
          }"
        />
        <div
          class="flex w-full justify-center absolute top-0 content-center p-0.5 border-solid mt-3"
        >
          <button
            v-for="(data, index) in scope.data.profiles.avatars"
            :key="data"
            :id="`avatar_${index}`"
            :class="index === 0 ? 'active-image' : 'no-active'"
            class="bt-img imageAvatar p-0.5 rounded-lg mr-0.5 no-active"
            @click="onClickNextImage(data)"
          ></button>
        </div>
        <div class="bg-background-shadow w-full h-full absolute top-0"></div>
        <div class="w-full flex items-center absolute bottom-0 h-80 p-4">
          <div class="grid w-full title-boy mb-4">
            <div class="w-70">
              <div class="flex items-center font-title">
                <div
                  :title="scope.data.fullname"
                  class="text-ellipsis whitespace-nowrap overflow-hidden"
                >
                  {{ scope.data.fullname }},
                </div>
                <div class="mr-3">{{ bindingAge(scope.data?.dob) }}</div>
                <div
                  class="flex justify-center items-center cursor-pointer"
                  @click="onClickShowDetailUser(scope.data)"
                >
                  <i class="fa-solid fa-circle-info text-xl"></i>
                </div>
              </div>
              <span class="font-describe">{{
                scope.data?.about ? scope.data?.about : "Tell me about"
              }}</span
              ><br />
              <div class="flex">
                <div class="mr-2">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <span class="font-describe"
                  >{{ bindingDistance(scope.data.distanceKm) }} km away</span
                >
              </div>
            </div>
            <div class="w-20 absolute bottom-24 right-0">
              <img
                class="cursor-pointer"
                src="@/assets/icon/bt_like_count.svg"
                width="70"
              />
              <span class="h-complete">{{ scope.data.coins }}</span>
            </div>
          </div>
        </div>
        <div class="w-full flex absolute top-0 opacity-0 h-4/6 nextBg">
          <div
            class="w-2/4 bg-slate-500"
            @click="nextImageLeft(scope.data.profiles.avatars)"
          ></div>
          <div
            class="w-2/4 bg-orange-200"
            @click="nextImageRight(scope.data.profiles.avatars)"
          ></div>
        </div>
      </template>

      <div class="like-pointer icon-tinder" slot="like">LIKE</div>
      <div class="nope-pointer icon-tinder" slot="nope">NOPE</div>
      <div class="super-pointers icon-tinder" slot="super">SUPER</div>
    </Tinder>
    <div
      v-if="isLoadData"
      class="w-full h-full flex justify-center items-center"
    >
      <LoadApp :urlImage="icUrlApp" :codeColor="colorApp"></LoadApp>
    </div>
    <div
      class="absolute w-full bottom-0 left-0"
      v-bind:class="{ 'pointer-event': isPointer }"
    >
      <div class="btns">
        <div v-if="isAnimating">
          <MoveSupperLike></MoveSupperLike>
        </div>
        <div class="bh-odd justify-center flex items-center">
          <img src="@/assets/icon/bt_back.svg" @click="decide('rewind')" />
        </div>
        <div class="bh-even justify-center flex items-center">
          <img
            src="@/assets/icon/bt_nope.svg"
            @click="decide('nope')"
            v-bind:class="{ 'transform-hover': isHoverNope }"
          />
        </div>
        <div class="bh-odd justify-center flex items-center">
          <img
            src="@/assets/icon/bt_super_like.svg"
            @click="decide('super')"
            v-bind:class="{ 'transform-hover': isHoverSuper }"
          />
        </div>
        <div class="bh-even justify-center flex items-center">
          <img
            src="@/assets/icon/bt_like.svg"
            @click="decide('like')"
            v-bind:class="{ 'transform-hover': isHoverLike }"
          />
        </div>
        <div class="bh-odd justify-center flex items-center">
          <img src="@/assets/icon/bt_boost.svg" @click="decide('help')" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MoveSupperLike from "../../bh-element-ui/animation/move-supper-like";
import LoadApp from "../../layout/loading/load-app";
import Tinder from "vue-tinder";
import functionValidate from "../../../middleware/validate.js";
import { mapActions, mapMutations } from "vuex";

export default {
  name: "view-swipe",
  components: {
    MoveSupperLike,
    LoadApp,
    Tinder,
  },
  data() {
    return {
      queue: [],
      offset: 0,
      history: [],
      isShowDetail: false,
      isActiveImag: true,
      nameTinder: "",
      idImage: "",
      isPointer: true,
      imageActive: 0,
      isAnimating: false,
      isProgressBoost: true,
      truc_x: 0,
      truc_y: 0,
      isHoverLike: false,
      isHoverNope: false,
      isHoverSuper: false,
      icUrlApp: require("@/assets/icon/ic_icon_app.svg"),
      colorApp: "#FF828A",
      bgColorApp: "linear-gradient(#FE4E58,#FD757F)",
    };
  },

  props: ["isLoadData"],

  computed: {
    listDataUser() {
      debugger;
      return this.$store.state.mongoModule.listDataCard
        ? this.$store.state.mongoModule.listDataCard
        : [];
    },

    isShowUrl(val) {
      return val;
    },
  },

  methods: {
    ...mapMutations([
      "setUrlNameAvatarUser",
      "setLeftRightAvatar",
      "setDetailUserProfile",
    ]),

    ...mapActions(["patchNopeUserId", "patchComeBackUserId", "postLikeUserId"]),

    onMouseDow(event) {
      debugger;
      this.truc_x = event.clientX;
      this.truc_y = event.clientY;
      document.addEventListener("mousemove", this.moveElement);
      if (event.target.tagName === "IMG") {
        debugger;
        return;
      }
      this.isPointer = true;
    },
    onMouseUp() {
      debugger;

      document.removeEventListener("mousemove", this.moveElement);
      this.isHoverLike = false;
      this.isHoverNope = false;
      this.isHoverSuper = false;
      this.isPointer = false;
    },

    moveElement(event) {
      if (this.isPointer) {
        if (event.clientX > this.truc_x + 50) {
          this.isHoverLike = true;
          this.isHoverNope = false;
          this.isHoverSuper = false;
          console.log("right");
        } else if (event.clientX < this.truc_x - 50) {
          this.isHoverLike = false;
          this.isHoverNope = true;
          this.isHoverSuper = false;
          console.log("left");
        } else if (event.clientY < this.truc_y - 50) {
          this.isHoverLike = false;
          this.isHoverNope = false;
          this.isHoverSuper = true;
          console.log("up");
        } else {
          this.isHoverLike = false;
          this.isHoverNope = false;
          this.isHoverSuper = false;
        }
      }
    },
    bindingAge(val) {
      const dataAge = functionValidate.calculatAge(val);
      return dataAge;
    },

    bindingDistance(val) {
      if (parseInt(val.toFixed(0)) === 0) {
        return 1;
      } else {
        return parseInt(val.toFixed(0));
      }
    },

    onClickNopeDetail(value) {
      this.isShowDetail = value;
    },
    nextImageLeft(value) {
      console.log(value);

      debugger;
      if (this.imageActive !== 0) {
        this.imageActive = this.imageActive - 1;

        if (this.imageActive < value.length) {
          document
            .getElementById(`avatar_` + parseInt(this.imageActive + 1))
            .classList.remove("active-image");
          this.idImage = value[this.imageActive];
          document
            .getElementById(`avatar_` + parseInt(this.imageActive))
            .classList.add("active-image");
        }

        this.isActiveImag = false;
      }
    },

    nextImageRight(value) {
      debugger;

      this.imageActive = this.imageActive + 1;

      if (this.imageActive < value.length) {
        document
          .getElementById(`avatar_` + parseInt(this.imageActive - 1))
          .classList.remove("active-image");
        this.idImage = value[this.imageActive];
        document
          .getElementById(`avatar_` + parseInt(this.imageActive))
          .classList.add("active-image");
      } else {
        this.imageActive = this.imageActive - 1;
      }

      this.isActiveImag = false;
    },

    onNopeUser(val) {
      debugger;
      console.log(val);
    },

    onClickShowDetailUser(value) {
      console.log(value);
      this.setDetailUserProfile(value);
      debugger;
      this.$emit("onShowDetailUser", true);
    },
    async onSubmit(value) {
      debugger;
      this.setUrlNameAvatarUser("");
      this.isActiveImag = true;
      debugger;
      if (value.type.toString() === "nope") {
        console.log("Nope");
        const data = {
          userId: localStorage.userId,
          objectCustomer: {
            userIdCustomer: value.item.userId,
          },
        };
        await this.patchNopeUserId(data);
      }
      if (value.type.toString() === "super") {
        this.isAnimating = true;
        setTimeout(() => {
          this.isAnimating = false;
        }, 1200);
        console.log("Supper");
      }
      if (value.type.toString() === "like") {
        console.log("like");
        const data = {
          userId: localStorage.userId,
          objectCustomer: {
            userIdCustomer: value.item.userId,
          },
        };
        await this.postLikeUserId(data);
      }
      this.history.push(value.item);
      this.imageActive = 0;
    },
    async decide(choice) {
      debugger;
      console.log(choice);
      if (choice === "rewind") {
        if (this.history.length) {
          this.$refs.tinder.rewind([this.history.pop()]);
        }
      } else if (choice === "help") {
        this.$emit("onShowPackage", true);
      } else {
        this.$refs.tinder.decide(choice);
      }
    },
  },

  created() {
    // setTimeout(() => {
    //   this.isLoadData = false;
    // }, 2000);
  },
  mounted() {},
};
</script>

<style lang="css">
.vue-tinder {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  margin: auto;
  width: calc(100% - 20px);
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
}
.icon-tinder {
  font-size: 50px;
  font-weight: 600;
  border-radius: 10px;
  text-align: center;
  position: absolute;
  padding-left: 16px;
  padding-right: 16px;
}

.like-pointer {
  top: 6rem;
  right: 19rem;
  color: #f6a800;
  border: 7px solid #f6a800;
  transform: rotate(-45deg);
}

.nope-pointer {
  top: 76px;
  left: 15rem;
  transform: rotate(45deg);
  color: #39685a;
  border: 7px solid #39685a;
}

.super-pointers {
  bottom: 80px;
  left: 7rem;
  right: 7rem;
  color: #00ba83;
  border: 7px solid #00ba83;
}

.rewind-pointer {
  position: absolute;
  z-index: 1;
  top: 20px;
  right: 10px;
}

.pic {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.home-page {
  background-color: #382e41;
}
.home-page::-webkit-scrollbar {
  display: none;
}

.body-page {
  background-repeat: no-repeat;
  background-size: cover;
}
.title-boy {
  grid-template-columns: 5fr 1fr;
}

.bt-img {
  width: 70px;
}

.bt-option {
  grid-template-columns: auto auto auto auto auto;
  gap: 35px;
}

.title-page {
  background-color: #181c274f;
  background-image: linear-gradient(to top, #1e23334a, #230f1f7d);
  background-attachment: scroll;
  height: 24%;
}

.close-infor {
  position: absolute;
  top: -25px;
  right: 13px;
}
.like-count {
  position: absolute;
  top: 80px;
  right: 9px;
}

.title-body {
  border-bottom: 1px solid #373e50;
}

.bt-about {
  border: 1px solid white;
}

.grid-temlp {
  grid-template-columns: 1fr 1fr 1fr;
}

.grid-anthem {
  grid-template-columns: 3fr 1fr;
}

.tinder-card {
  width: 100% !important;
  background-color: #382e41 !important ;
}

.bg-background-shadow {
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 9%,
    rgba(255, 255, 255, 0) 41%
  );
}

.btns {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  min-height: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 100%;
  padding-left: 20px;
  z-index: 9;
  padding-right: 20px;
}

.btns img {
  margin-right: 0px;
  box-shadow: 0 4px 9px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.active-image {
  background-color: white !important;
}

.no-active {
  background-color: #ffffff8f;
}

.h-complete {
  position: absolute;
  bottom: 0px;
  padding: 21px;
  font-size: 26px;
}

.pointer-event {
  pointer-events: none;
}
.transform-hover {
  transform: scale(1.1);
}
</style>
