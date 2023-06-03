<template>
  <div class="w-full h-full">
    <div
      class="w-full h-full height-scroll overflow-scroll"
      v-bind:class="{ 'reverse-layout': isArabic }"
    >
      <div class="grid grid-cols-2 gap animation-grid">
        <!--  :style="{
            transform:
              'rotate(' +
              (selectedIdx === index ? rotation : rotationDefault) +
              'deg)',
          }" -->
        <div
          ref="index"
          :class="[selectedIdx === index ? `zIndex draggable_${index}` : '']"
          @mousedown.prevent="onMouseDow($event, index)"
          @mouseup.prevent="onMouseUp"
          v-for="(user, index) in listUserData"
          @click="onClickShowDetail(user, index)"
          :key="index"
        >
          <Vue2InteractDraggable
            v-if="isVisible"
            :interact-max-rotation="15"
            :interact-x-threshold="20"
            :interact-y-threshold="20"
            :interact-block-drag-down="true"
            @draggedRight="emitAndNext(index)"
            @draggedLeft="emitAndNext(index)"
            @draggedUp="emitAndNext(index)"
            :class="`draggable_${index}`"
          >
            <template>
              <div
                class="item-user relative overflow-hidden border-image"
                :style="`background-image:url(${user?.profiles?.avatars[0]})`"
              >
                <div class="image absolute bottom-0 w-full p-3 z-10 text-white">
                  <div class="flex items-center">
                    <span class="describe-user">{{ user.fullname }}</span>
                    <span class="title-input-item"
                      >, {{ bindingAge(user.dob) }}</span
                    >
                  </div>
                  <div class="flex describe-user items-center">
                    <span class="status">&#x1F7E2;</span>
                    {{ $t("recently_active") }}
                  </div>
                </div>
                <!-- <div class="bg-shadow w-full h-full"></div> -->
                <div
                  class="bg-background-shadow absolute bottom-0 w-full h-full"
                ></div>

                <div
                  :style="{ opacity: opacity }"
                  v-if="selectedIdx == index"
                  class="w-full h-full relative"
                >
                  <div
                    v-if="isHoverLike"
                    class="like-pointer-topic icon-tinder"
                  >
                    {{ $t("like") }}
                  </div>
                  <div
                    v-if="isHoverNope"
                    class="nope-pointer-topic icon-tinder"
                  >
                    {{ $t("nope") }}
                  </div>
                </div>
              </div>
            </template>
          </Vue2InteractDraggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*interact-out-of-sight-x-coordinate: Khi quẹt trái or phải nó sẽ di
 chuyển đến tọa độ mình yêu cầu giá trị âm di chuyển ngược về, dương cùng nhiều*/
/*interact-max-rotation: Góc quay tối đa khi nó được kéo sẽ xoay */
/*interact-x-threshold: giá trị khi kích hoạt */
/*interact-block-drag-down: ngăn chặn sự kiện kéo xuống*/
import { Vue2InteractDraggable } from "vue2-interact";
import functionValidate from "../../../middleware/validate.js";
import { wrapGrid } from "animate-css-grid";
import { mapMutations } from "vuex";
import { nextTick } from "vue";

export default {
  name: "ctrl-swipe-page",
  components: { Vue2InteractDraggable },
  data() {
    return {
      opacity: 0,
      selectedIdx: -1,
      rotation: 0,
      rotationDefault: 0,
      invertImage: false,
      isHoverLike: false,
      isHoverNope: false,
      isMouseDown: false,
      isVisible: true,
      isIndexNew: 0,
      index_info: null,
    };
  },

  props: ["listUser", "actionDecide"],
  computed: {
    listUserData() {
      debugger;
      return this.listUser;
    },

    isArabic() {
      debugger;
      return this.$i18n.locale === "ar"; // Điều chỉnh 'ar' cho ngôn ngữ Ả Rập
    },
  },
  watch: {
    actionDecide(val) {
      this.swipe(val);
    },
  },
  methods: {
    ...mapMutations(["setDetailUserLikeTopic"]),
    bindingAge(val) {
      const dataAge = functionValidate.calculatAge(val);
      return dataAge;
    },
    swipe(val) {
      debugger;
      this.opacity = 1;
      nextTick(() => {
        if (val == "nope") {
          this.isHoverNope = true;
          document
            .getElementsByClassName("draggable_" + this.index_info)[0]
            .classList.add("moving-element-left");
          setTimeout(() => {
            document
              .getElementsByClassName("draggable_" + this.index_info)[0]
              .remove();
            this.$emit("swipe", "");
            this.isHoverLike = false;
            this.isHoverNope = false;
            this.opacity = 0;
          }, 500);
        } else if (val == "like") {
          this.isHoverLike = true;
          document
            .getElementsByClassName("draggable_" + this.index_info)[0]
            .classList.add("moving-element-right");
          setTimeout(() => {
            document
              .getElementsByClassName("draggable_" + this.index_info)[0]
              .remove();
            this.$emit("swipe", "");
            this.isHoverLike = false;
            this.isHoverNope = false;
            this.opacity = 0;
          }, 500);
        }
      });
    },
    emitAndNext(index) {
      debugger;
      // this.$refs["index"][index].style.display = "none";
      // if(this.isIndexNew===)
      // setTimeout(() => (this.isVisible = false), 200);
      document.getElementsByClassName("draggable_" + index)[0].remove();
      this.onMouseUp();
    },
    onMouseDow($event, index) {
      console.log(index);
      this.isMouseDown = true;
      this.selectedIdx = index;
      this.truc_x = $event.clientX;
      this.truc_y = $event.clientY;
      document.addEventListener("mousemove", this.moveElement);
    },
    async onMouseUp() {
      document.removeEventListener("mousemove", this.moveElement);
      this.isHoverLike = false;
      this.isHoverNope = false;
      this.rotation = 0;
    },

    moveElement(event) {
      this.isMouseDown = false;
      console.log();
      if (event.clientX > this.truc_x + 25) {
        this.opacity = Math.min((event.clientX - this.truc_x - 25) / 50, 1);
        // console.log(event.clientX - this.truc_x - 25);
        // if (event.clientX - this.truc_x - 25 < 18) {
        //   this.rotation = -(event.clientX - this.truc_x - 25);
        // }

        this.isHoverLike = true;
        this.isHoverNope = false;
        console.log("right");
      } else if (event.clientX < this.truc_x - 25) {
        this.opacity = Math.min((this.truc_x - event.clientX - 25) / 50, 1);
        // console.log(this.truc_x - event.clientX - 25);
        // if (this.truc_x - event.clientX - 25 < 18) {
        //   this.rotation = this.truc_x - event.clientX - 25;
        // }
        console.log(event);
        this.isHoverLike = false;
        this.isHoverNope = true;
        console.log("left");
      } else {
        this.opacity = 0;
        // this.rotation = 0;
        this.isHoverLike = false;
        this.isHoverNope = false;
      }
    },

    onClickShowDetail(user, index) {
      if (this.isMouseDown) {
        this.index_info = index;
        this.setDetailUserLikeTopic(user);
        this.$emit("onShowDetailUserLikeTopic", true);
      }
    },
  },

  mounted() {
    debugger;
    this.$nextTick(() => {
      const grid = this.$el.querySelector(".animation-grid");
      // Sử dụng wrapGrid
      wrapGrid(grid);
    });
  },
};
</script>

<style lang="css" scoped>
.moving-element-left {
  position: relative;
  animation: moveLeft 0.6s linear infinite;
}

@keyframes moveLeft {
  0% {
    left: 0%;
  }
  100% {
    left: -400%; /* Điều chỉnh giá trị left theo ý muốn */
    transform: rotate(-45deg);
  }
}
.moving-element-right {
  position: relative;
  animation: moveRight 0.6s linear infinite;
}

@keyframes moveRight {
  0% {
    right: 0%;
  }
  100% {
    right: -400%; /* Điều chỉnh giá trị left theo ý muốn */
    transform: rotate(45deg);
  }
}
.item-user {
  border-radius: 10px;
  background-position: center;
  background-size: cover;
}
.zIndex {
  z-index: 20;
}
.gap {
  gap: 0.6rem;
}

.bg-background-shadow {
  background: linear-gradient(
    0deg,
    rgb(0 0 0 / 85%) 9%,
    rgb(254 254 254 / 0%) 29%,
    rgb(255 255 255 / 0%) 99%
  );
}

.item div {
  font-size: 18px;
  margin-bottom: 20px;
}
.status {
  font-size: 12px;
  margin-right: 10px;
}
.like-pointer-topic {
  position: absolute;
  left: 12px;
  color: #f6a800;
  border: 5px solid #f6a800;
  transform: rotate(-45deg);
  bottom: 12rem;
}

.nope-pointer-topic {
  position: absolute;
  right: 12px;
  color: #fd5c64;
  border: 5px solid #fd5c64;
  transform: rotate(45deg);
  bottom: 12rem;
}

.icon-tinder {
  font-size: 30px;
  font-weight: 700;
  padding-left: 10px;
  padding-right: 10px;
}
.info {
  position: absolute;
  bottom: 0;
  margin-left: 10px;
}
</style>
