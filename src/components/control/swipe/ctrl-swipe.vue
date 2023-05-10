<template>
  <div class="w-full h-full">
    <div class="p-5 w-full h-full height-scroll overflow-scroll">
      <div class="grid grid-cols-2 gap swipe-container">
        <div
          ref="index"
          :class="[selectedIdx === index ? 'zIndex' : '']"
          :style="{
            transform:
              'rotate(' +
              (selectedIdx === index ? rotation : rotationDefault) +
              'deg)',
          }"
          @mousedown="onMouseDow($event, index)"
          @mouseup="onMouseUp"
          v-for="(user, index) in listUserData"
          :key="index"
          :id="`image` + index"
          class="card"
        >
          <Vue2InteractDraggable
            :interact-out-of-sight-x-coordinate="700"
            :interact-x-threshold="20"
            :interact-y-threshold="50"
            :invert="invertImage"
            :interact-block-drag-down="true"
            @draggedRight="emitAndNext(index)"
            @draggedLeft="emitAndNext(index)"
            @draggedUp="emitAndNext(index)"
          >
            <template>
              <div
                class="item-user relative overflow-hidden"
                :style="`background-image:url(${user.profiles.avatars[0]})`"
              >
                <div class="image absolute bottom-0 w-full p-3 z-10 text-white">
                  <div class="flex">
                    <div class="name">{{ user.fullname }}&nbsp;</div>
                    <span>{{ bindingAge(user.dob) }}</span>
                  </div>
                  <div class="flex padding-describe-like items-center">
                    <span class="status">&#x1F7E2;</span>
                    Recently active
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
                  <div v-if="isHoverLike" class="like-pointer icon-tinder">
                    LIKE
                  </div>
                  <div v-if="isHoverNope" class="nope-pointer icon-tinder">
                    NOPE
                  </div>
                  <div v-if="isHoverSuper" class="super-pointers icon-tinder">
                    SUPER
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
      isHoverSuper: false,
    };
  },

  props: ["listUser"],
  computed: {
    listUserData() {
      return this.listUser;
    },
  },

  methods: {
    bindingAge(val) {
      const dataAge = functionValidate.calculatAge(val);
      return dataAge;
    },
    emitAndNext(index) {
      setTimeout(() => {
        this.$refs["index"][index].style.display = "none";
      }, 500);

      this.onMouseUp();
    },
    onMouseDow($event, index) {
      console.log(index);
      debugger;

      this.selectedIdx = index;
      this.truc_x = $event.clientX;
      this.truc_y = $event.clientY;
      document.addEventListener("mousemove", this.moveElement);
    },
    onMouseUp() {
      this.selectedIdx = -1;
      document.removeEventListener("mousemove", this.moveElement);
      this.isHoverLike = false;
      this.isHoverNope = false;
      this.isHoverSuper = false;
      this.rotation = 0;
    },

    moveElement(event) {
      if (event.clientX > this.truc_x + 25) {
        this.opacity = Math.min((event.clientX - this.truc_x - 25) / 50, 1);
        console.log(event.clientX - this.truc_x - 25);
        if (event.clientX - this.truc_x - 25 < 18) {
          this.rotation = -(event.clientX - this.truc_x - 25);
        }

        this.isHoverLike = true;
        this.isHoverNope = false;
        this.isHoverSuper = false;
        console.log("right");
      } else if (event.clientX < this.truc_x - 25) {
        this.opacity = Math.min((this.truc_x - event.clientX - 25) / 50, 1);
        console.log(this.truc_x - event.clientX - 25);
        if (this.truc_x - event.clientX - 25 < 18) {
          this.rotation = this.truc_x - event.clientX - 25;
        }
        this.isHoverLike = false;
        this.isHoverNope = true;
        this.isHoverSuper = false;
        console.log("left");
      } else if (event.clientY < this.truc_y - 25) {
        this.opacity = Math.min((this.truc_y - event.clientY - 25) / 50, 1);
        this.isHoverLike = false;
        this.isHoverNope = false;
        this.isHoverSuper = true;
        console.log("up");
      } else {
        this.opacity = 0;
        this.rotation = 0;
        this.isHoverLike = false;
        this.isHoverNope = false;
        this.isHoverSuper = false;
      }
    },
  },
};
</script>

<style lang="css" scoped>
.item-user {
  border-radius: 10px;
  background-position: center;
  background-size: cover;
}
.zIndex {
  z-index: 1000;
}
.gap {
  gap: 1.55rem;
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
.like-pointer {
  position: absolute;
  left: 10px;
  color: linear-gradient(321deg, #447267 23%, #b1eee1 50%, #447267 76%);
  border: 5px solid #b1eee1;
  transform: rotate(-45deg);
  bottom: 12rem;
}

.nope-pointer {
  position: absolute;
  right: 0;
  color: #fd5c64;
  border: 5px solid #fd5c64;
  transform: rotate(45deg);
  bottom: 10rem;
}

.super-pointers {
  bottom: 5px;
  position: absolute;
  color: #00ba83;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 5px solid #00ba83;
}
.icon-tinder {
  font-size: 30px;
  font-weight: 700;
  border-radius: 10px;
  text-align: center;
  padding-left: 16px;
  padding-right: 16px;
}
.info {
  position: absolute;
  bottom: 0;
  margin-left: 10px;
}

.right-class {
  transform: rotate(20deg);
}

.left-class {
  transform: rotate(-20deg);
}
.card {
  transition: transform 0.3s ease;
}
</style>
